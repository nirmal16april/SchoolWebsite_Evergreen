export interface StudentBirthday {
  id: string;
  name: string;
  className: string;
  dateOfBirth: string;
  photo: string | null;
  wish: string;
}

export interface BoardTopper {
  id: string;
  name: string;
  score: string;
  rank: number | null;
  photo: string | null;
  classLevel: 10 | 12;
  academicYear: string;
}

export type BoardTopperClassLevel = 10 | 12;
