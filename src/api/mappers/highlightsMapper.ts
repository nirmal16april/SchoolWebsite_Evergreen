import {
  BoardTopper,
  BoardTopperClassLevel,
  StudentBirthday,
} from '../../types/highlights';
import {
  normalizeDate,
  readId,
  readNumber,
  readString,
  resolveMediaUrl,
  unwrapListPayload,
} from '../utils/responseUtils';

function resolvePhotoUrl(source: Record<string, unknown>): string | null {
  const photo = readString(source, [
    'photo',
    'photoUrl',
    'imageUrl',
    'studentPhotoUrl',
    'profileImage',
    'profileImageUrl',
    'portraitUrl',
  ]);

  return photo ? resolveMediaUrl(photo) : null;
}

function formatScore(value: unknown): string {
  if (typeof value === 'string' && value.trim()) {
    const trimmed = value.trim();
    return trimmed.includes('%') ? trimmed : `${trimmed}%`;
  }

  if (typeof value === 'number' && !Number.isNaN(value)) {
    return `${value}%`;
  }

  return '';
}

function normalizeClassLevel(value: unknown): BoardTopperClassLevel | null {
  if (value === 10 || value === 12) {
    return value;
  }

  if (typeof value === 'string') {
    const normalized = value.trim().toLowerCase();

    if (normalized === '10' || normalized === 'x' || normalized.includes('class x')) {
      return 10;
    }

    if (
      normalized === '12' ||
      normalized === 'xii' ||
      normalized.includes('class xii') ||
      normalized.includes('class 12')
    ) {
      return 12;
    }
  }

  return null;
}

export function mapStudentBirthdayItem(item: unknown): StudentBirthday | null {
  if (!item || typeof item !== 'object') {
    return null;
  }

  const source = item as Record<string, unknown>;
  const id = readId(source, ['id', 'studentId', 'birthdayId']);

  if (!id) {
    return null;
  }

  const name = readString(source, [
    'name',
    'studentName',
    'fullName',
    'displayName',
  ]);

  if (!name) {
    return null;
  }

  const dateOfBirth = normalizeDate(
    readString(source, [
      'dateOfBirth',
      'dob',
      'birthDate',
      'birthday',
      'birthdayDate',
    ])
  );

  return {
    id,
    name,
    className: readString(
      source,
      ['className', 'class', 'grade', 'section', 'classSection'],
      'Student'
    ),
    dateOfBirth,
    photo: resolvePhotoUrl(source),
    wish: readString(source, ['wish', 'birthdayWish', 'message', 'greeting']),
  };
}

export function mapStudentBirthdaysResponse(data: unknown): StudentBirthday[] {
  return unwrapListPayload(data)
    .map(mapStudentBirthdayItem)
    .filter((item): item is StudentBirthday => item !== null);
}

export function mapBoardTopperItem(
  item: unknown,
  fallbackClassLevel?: BoardTopperClassLevel
): BoardTopper | null {
  if (!item || typeof item !== 'object') {
    return null;
  }

  const source = item as Record<string, unknown>;
  const id = readId(source, ['id', 'topperId', 'studentId', 'resultId']);

  if (!id) {
    return null;
  }

  const name = readString(source, ['name', 'studentName', 'fullName']);

  if (!name) {
    return null;
  }

  const classLevel =
    normalizeClassLevel(
      source.classLevel ?? source.class ?? source.grade ?? source.boardClass
    ) ?? fallbackClassLevel;

  if (!classLevel) {
    return null;
  }

  const score = formatScore(
    source.score ?? source.percentage ?? source.marks ?? source.result
  );

  if (!score) {
    return null;
  }

  const rankValue = readNumber(source, ['rank', 'position', 'ranking']);

  return {
    id,
    name,
    score,
    rank: rankValue > 0 ? rankValue : null,
    photo: resolvePhotoUrl(source),
    classLevel,
    academicYear: readString(
      source,
      ['academicYear', 'session', 'academicSession', 'year'],
      ''
    ),
  };
}

export function mapBoardToppersResponse(
  data: unknown,
  fallbackClassLevel?: BoardTopperClassLevel
): BoardTopper[] {
  return unwrapListPayload(data)
    .map((item) => mapBoardTopperItem(item, fallbackClassLevel))
    .filter((item): item is BoardTopper => item !== null);
}
