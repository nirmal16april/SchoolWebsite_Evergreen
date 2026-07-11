import {
  MOCK_CLASS_XII_TOPPERS,
  MOCK_CLASS_X_TOPPERS,
  MOCK_STUDENT_BIRTHDAYS,
} from '../app/pages/home/highlights/mockData';
import { WEBSITE_KEY } from '../constants/website';
import { ApiRequestError } from '../types/api';
import {
  BoardTopper,
  BoardTopperClassLevel,
  StudentBirthday,
} from '../types/highlights';
import { apiClient } from './axios';
import {
  mapBoardToppersResponse,
  mapStudentBirthdaysResponse,
} from './mappers/highlightsMapper';

const MOCK_DELAY_MS = 500;

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

function shouldUseMockFallback(error: unknown): boolean {
  if (!(error instanceof ApiRequestError)) {
    return false;
  }

  return error.status === 404 || error.status === 501 || error.status === 405;
}

async function withMockFallback<T>(
  fetcher: () => Promise<T>,
  mockData: T
): Promise<T> {
  try {
    return await fetcher();
  } catch (error) {
    if (!shouldUseMockFallback(error)) {
      throw error;
    }

    await delay(MOCK_DELAY_MS);
    return mockData;
  }
}

export async function fetchStudentBirthdays(): Promise<StudentBirthday[]> {
  return withMockFallback(async () => {
    const response = await apiClient.get(
      `/api/academics/public/${WEBSITE_KEY}/student-birthdays`
    );

    return mapStudentBirthdaysResponse(response.data);
  }, MOCK_STUDENT_BIRTHDAYS as StudentBirthday[]);
}

export async function fetchBoardToppers(
  classLevel: BoardTopperClassLevel
): Promise<BoardTopper[]> {
  const mockData: BoardTopper[] =
    classLevel === 10
      ? (MOCK_CLASS_X_TOPPERS as BoardTopper[])
      : (MOCK_CLASS_XII_TOPPERS as BoardTopper[]);

  return withMockFallback(async () => {
    const response = await apiClient.get(
      `/api/academics/public/${WEBSITE_KEY}/board-toppers`,
      {
        params: { classLevel },
      }
    );

    return mapBoardToppersResponse(response.data, classLevel);
  }, mockData);
}

export async function fetchClassXToppers(): Promise<BoardTopper[]> {
  return fetchBoardToppers(10);
}

export async function fetchClassXiiToppers(): Promise<BoardTopper[]> {
  return fetchBoardToppers(12);
}
