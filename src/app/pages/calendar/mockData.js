/**
 * Mock academic calendar data — consumed ONLY by calendarApi.js.
 * Page components must never import this file directly.
 *
 * When the real backend is ready, remove or archive this file and update
 * calendarApi.js to call the live endpoints instead.
 */

const mockEvents = [
  {
    id: 1,
    title: 'New Academic Session Begins',
    description:
      'Classes commence for the new academic session. Students must report in full uniform with all required books and materials.',
    startDate: '2026-04-01',
    endDate: '2026-04-01',
    eventType: 'important',
    location: 'School Campus',
    academicYear: '2026-27',
  },
  {
    id: 2,
    title: 'Admission Open — Nursery to Class IX',
    description:
      'Online and offline admission forms available. Parents may visit the school office between 9:00 AM and 2:00 PM on working days.',
    startDate: '2026-03-15',
    endDate: '2026-04-30',
    eventType: 'admission',
    location: 'Admission Office',
    academicYear: '2026-27',
  },
  {
    id: 3,
    title: 'Summer Vacation',
    description:
      'School remains closed for summer vacation. Administrative office open on selected days — contact reception for timings.',
    startDate: '2026-06-01',
    endDate: '2026-06-30',
    eventType: 'holiday',
    location: null,
    academicYear: '2026-27',
  },
  {
    id: 4,
    title: 'School Reopens After Summer Break',
    description:
      'Regular classes resume. Students of all classes must attend from the first day.',
    startDate: '2026-07-01',
    endDate: '2026-07-01',
    eventType: 'important',
    location: 'School Campus',
    academicYear: '2026-27',
  },
  {
    id: 5,
    title: 'Annual Sports Day',
    description:
      'Inter-house athletics, track events, and team games. Parents are welcome to attend and cheer for participants.',
    startDate: '2026-07-10',
    endDate: '2026-07-10',
    eventType: 'event',
    location: 'School Playground',
    academicYear: '2026-27',
  },
  {
    id: 6,
    title: 'First Term Unit Test — Classes VI to XII',
    description:
      'Unit test examinations for all subjects as per the published date sheet. Students must carry their admit cards.',
    startDate: '2026-07-20',
    endDate: '2026-07-25',
    eventType: 'exam',
    location: 'Examination Halls',
    academicYear: '2026-27',
  },
  {
    id: 7,
    title: 'Independence Day Celebration',
    description:
      'Flag hoisting, cultural programme, and patriotic performances by students. Attendance is compulsory for all students.',
    startDate: '2026-08-15',
    endDate: '2026-08-15',
    eventType: 'event',
    location: 'School Assembly Ground',
    academicYear: '2026-27',
  },
  {
    id: 8,
    title: 'Parent-Teacher Meeting — Term I',
    description:
      'Parents are invited to discuss student progress with class teachers. Appointment slots will be shared via class groups.',
    startDate: '2026-08-22',
    endDate: '2026-08-22',
    eventType: 'important',
    location: 'Respective Classrooms',
    academicYear: '2026-27',
  },
  {
    id: 9,
    title: 'Half-Yearly Examination',
    description:
      'Half-yearly examinations for Classes I to XII as per CBSE guidelines. Detailed timetable available on the notice board.',
    startDate: '2026-09-10',
    endDate: '2026-09-20',
    eventType: 'exam',
    location: 'Examination Halls',
    academicYear: '2026-27',
  },
  {
    id: 10,
    title: 'Gandhi Jayanti — School Holiday',
    description: 'School closed on account of Gandhi Jayanti.',
    startDate: '2026-10-02',
    endDate: '2026-10-02',
    eventType: 'holiday',
    location: null,
    academicYear: '2026-27',
  },
  {
    id: 11,
    title: 'Dussehra Vacation',
    description: 'Short autumn break for Dussehra festivities.',
    startDate: '2026-10-20',
    endDate: '2026-10-24',
    eventType: 'holiday',
    location: null,
    academicYear: '2026-27',
  },
  {
    id: 12,
    title: 'Science & Innovation Exhibition',
    description:
      'Students showcase science projects, models, and experiments. Open to parents and guests from 10:00 AM to 4:00 PM.',
    startDate: '2026-11-05',
    endDate: '2026-11-06',
    eventType: 'event',
    location: 'Science Block & Auditorium',
    academicYear: '2026-27',
  },
  {
    id: 13,
    title: 'Annual Day & Prize Distribution',
    description:
      'Cultural performances, awards ceremony, and chief guest address. Formal invitation will be sent to parents of participating students.',
    startDate: '2026-11-28',
    endDate: '2026-11-28',
    eventType: 'event',
    location: 'School Auditorium',
    academicYear: '2026-27',
  },
  {
    id: 14,
    title: 'Pre-Board Examination — Class X & XII',
    description:
      'Mock board examinations conducted under CBSE pattern to prepare students for final board exams.',
    startDate: '2026-12-01',
    endDate: '2026-12-12',
    eventType: 'exam',
    location: 'Examination Halls',
    academicYear: '2026-27',
  },
  {
    id: 15,
    title: 'Winter Vacation',
    description:
      'School closed for winter break. Classes resume as per the circular issued before vacation.',
    startDate: '2026-12-25',
    endDate: '2027-01-05',
    eventType: 'holiday',
    location: null,
    academicYear: '2026-27',
  },
  {
    id: 16,
    title: 'Republic Day Celebration',
    description:
      'Republic Day parade, speeches, and cultural items by students. NCC cadets will participate in the flag ceremony.',
    startDate: '2027-01-26',
    endDate: '2027-01-26',
    eventType: 'event',
    location: 'School Assembly Ground',
    academicYear: '2026-27',
  },
  {
    id: 17,
    title: 'CBSE Board Practical Examinations',
    description:
      'Practical examinations for Class X and XII board candidates. Students must report as per individual schedules.',
    startDate: '2027-02-01',
    endDate: '2027-02-15',
    eventType: 'exam',
    location: 'Labs & Examination Halls',
    academicYear: '2026-27',
  },
  {
    id: 18,
    title: 'Last Date — Session Fee Payment',
    description:
      'Final deadline for payment of school fees for the current session without late fine. Contact accounts office for details.',
    startDate: '2027-02-28',
    endDate: '2027-02-28',
    eventType: 'important',
    location: 'Accounts Office',
    academicYear: '2026-27',
  },
  {
    id: 19,
    title: 'Admission Counselling — Class XI',
    description:
      'Stream selection counselling for students seeking admission to Class XI (Science, Commerce, Humanities).',
    startDate: '2027-03-10',
    endDate: '2027-03-20',
    eventType: 'admission',
    location: 'Counselling Hall',
    academicYear: '2026-27',
  },
  {
    id: 20,
    title: 'Farewell & Founders Day',
    description:
      'Farewell ceremony for outgoing Class XII students and tribute to the school founder on Founders Day.',
    startDate: '2027-03-15',
    endDate: '2027-03-15',
    eventType: 'event',
    location: 'School Auditorium',
    academicYear: '2026-27',
  },
];

export const getMockCalendarEvents = () =>
  [...mockEvents].sort(
    (a, b) => new Date(a.startDate) - new Date(b.startDate)
  );

export const getMockCalendarEventById = (eventId) => {
  const event = mockEvents.find((item) => item.id === eventId);
  return event || null;
};
