export type ClassEvent = {
  id: number;
  name: string;
  time: string;
  type: string;
  instructor: string;
  duration: number;
  capacity: number;
  enrolled: number;
  day: string;
  level: string;
  room: string;
};

export const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export const classTypes = [
  "All",
  "HIIT",
  "Powerlifting",
  "Boxing",
  "Yoga",
  "Cycling",
  "Functional",
  "Bootcamp",
];

export const instructors = [
  "All",
  "Marcus Rivera",
  "Sarah Chen",
  "Damon Brooks",
  "Nadia Petrov",
  "Jake Torres",
  "Alicia Wells",
];

export const schedule: ClassEvent[] = [
  // Monday
  { id: 1, time: "6:00 AM", name: "Morning HIIT Blast", type: "HIIT", instructor: "Marcus Rivera", duration: 45, capacity: 20, enrolled: 18, day: "Monday", level: "Intermediate", room: "Studio A" },
  { id: 2, time: "8:00 AM", name: "Power Yoga Flow", type: "Yoga", instructor: "Nadia Petrov", duration: 60, capacity: 15, enrolled: 12, day: "Monday", level: "All Levels", room: "Yoga Studio" },
  { id: 3, time: "12:00 PM", name: "Strength & Conditioning", type: "Powerlifting", instructor: "Damon Brooks", duration: 50, capacity: 16, enrolled: 16, day: "Monday", level: "Advanced", room: "Weight Room" },
  { id: 4, time: "5:30 PM", name: "Evening HIIT", type: "HIIT", instructor: "Marcus Rivera", duration: 45, capacity: 20, enrolled: 20, day: "Monday", level: "Intermediate", room: "Studio A" },
  { id: 5, time: "7:00 PM", name: "Boxing Fundamentals", type: "Boxing", instructor: "Jake Torres", duration: 60, capacity: 14, enrolled: 10, day: "Monday", level: "Beginner", room: "Boxing Ring" },
  // Tuesday
  { id: 6, time: "6:00 AM", name: "Spin Cycle", type: "Cycling", instructor: "Alicia Wells", duration: 45, capacity: 18, enrolled: 15, day: "Tuesday", level: "All Levels", room: "Spin Studio" },
  { id: 7, time: "9:00 AM", name: "Functional Fitness", type: "Functional", instructor: "Sarah Chen", duration: 55, capacity: 16, enrolled: 11, day: "Tuesday", level: "Intermediate", room: "Functional Zone" },
  { id: 8, time: "12:30 PM", name: "Power Lifting", type: "Powerlifting", instructor: "Damon Brooks", duration: 60, capacity: 10, enrolled: 10, day: "Tuesday", level: "Advanced", room: "Weight Room" },
  { id: 9, time: "5:00 PM", name: "Combat Boxing", type: "Boxing", instructor: "Jake Torres", duration: 60, capacity: 14, enrolled: 8, day: "Tuesday", level: "Intermediate", room: "Boxing Ring" },
  { id: 10, time: "7:00 PM", name: "Restorative Yoga", type: "Yoga", instructor: "Nadia Petrov", duration: 60, capacity: 15, enrolled: 13, day: "Tuesday", level: "All Levels", room: "Yoga Studio" },
  // Wednesday
  { id: 11, time: "6:00 AM", name: "HIIT Tabata", type: "HIIT", instructor: "Marcus Rivera", duration: 45, capacity: 20, enrolled: 17, day: "Wednesday", level: "Advanced", room: "Studio A" },
  { id: 12, time: "8:30 AM", name: "Core & Mobility", type: "Functional", instructor: "Sarah Chen", duration: 45, capacity: 16, enrolled: 9, day: "Wednesday", level: "All Levels", room: "Functional Zone" },
  { id: 13, time: "12:00 PM", name: "Olympic Lifting", type: "Powerlifting", instructor: "Damon Brooks", duration: 60, capacity: 10, enrolled: 7, day: "Wednesday", level: "Advanced", room: "Olympic Platform" },
  { id: 14, time: "5:30 PM", name: "Spin Circuit", type: "Cycling", instructor: "Alicia Wells", duration: 50, capacity: 18, enrolled: 18, day: "Wednesday", level: "Intermediate", room: "Spin Studio" },
  { id: 15, time: "7:00 PM", name: "Vinyasa Yoga", type: "Yoga", instructor: "Nadia Petrov", duration: 60, capacity: 15, enrolled: 14, day: "Wednesday", level: "All Levels", room: "Yoga Studio" },
  // Thursday
  { id: 16, time: "6:00 AM", name: "Endurance Bootcamp", type: "Bootcamp", instructor: "Alicia Wells", duration: 45, capacity: 20, enrolled: 12, day: "Thursday", level: "All Levels", room: "Studio A" },
  { id: 17, time: "9:00 AM", name: "Functional Strength", type: "Functional", instructor: "Sarah Chen", duration: 55, capacity: 16, enrolled: 14, day: "Thursday", level: "Intermediate", room: "Functional Zone" },
  { id: 18, time: "12:00 PM", name: "Boxing & Conditioning", type: "Boxing", instructor: "Jake Torres", duration: 60, capacity: 14, enrolled: 14, day: "Thursday", level: "Intermediate", room: "Boxing Ring" },
  { id: 19, time: "5:30 PM", name: "Strength Circuit", type: "Powerlifting", instructor: "Damon Brooks", duration: 55, capacity: 16, enrolled: 16, day: "Thursday", level: "Advanced", room: "Weight Room" },
  { id: 20, time: "7:00 PM", name: "HIIT Burn", type: "HIIT", instructor: "Marcus Rivera", duration: 45, capacity: 20, enrolled: 19, day: "Thursday", level: "Intermediate", room: "Studio A" },
  // Friday
  { id: 21, time: "6:00 AM", name: "Morning Power HIIT", type: "HIIT", instructor: "Marcus Rivera", duration: 45, capacity: 20, enrolled: 20, day: "Friday", level: "Advanced", room: "Studio A" },
  { id: 22, time: "8:00 AM", name: "Friday Yoga", type: "Yoga", instructor: "Nadia Petrov", duration: 60, capacity: 15, enrolled: 15, day: "Friday", level: "All Levels", room: "Yoga Studio" },
  { id: 23, time: "12:00 PM", name: "Heavy Lifting", type: "Powerlifting", instructor: "Damon Brooks", duration: 60, capacity: 10, enrolled: 8, day: "Friday", level: "Advanced", room: "Weight Room" },
  { id: 24, time: "5:00 PM", name: "Friday Cardio Blast", type: "Bootcamp", instructor: "Alicia Wells", duration: 50, capacity: 18, enrolled: 13, day: "Friday", level: "All Levels", room: "Studio A" },
  { id: 25, time: "7:00 PM", name: "Weekend Warriors HIIT", type: "HIIT", instructor: "Marcus Rivera", duration: 45, capacity: 20, enrolled: 20, day: "Friday", level: "Intermediate", room: "Studio A" },
  // Saturday
  { id: 26, time: "8:00 AM", name: "Saturday Strength", type: "Powerlifting", instructor: "Damon Brooks", duration: 60, capacity: 16, enrolled: 14, day: "Saturday", level: "All Levels", room: "Weight Room" },
  { id: 27, time: "9:30 AM", name: "HIIT & Hustle", type: "HIIT", instructor: "Marcus Rivera", duration: 45, capacity: 20, enrolled: 18, day: "Saturday", level: "Intermediate", room: "Studio A" },
  { id: 28, time: "11:00 AM", name: "Kickboxing", type: "Boxing", instructor: "Jake Torres", duration: 60, capacity: 14, enrolled: 12, day: "Saturday", level: "All Levels", room: "Boxing Ring" },
  { id: 29, time: "1:00 PM", name: "Deep Stretch Yoga", type: "Yoga", instructor: "Nadia Petrov", duration: 75, capacity: 15, enrolled: 10, day: "Saturday", level: "All Levels", room: "Yoga Studio" },
  { id: 30, time: "3:00 PM", name: "Athletic Performance", type: "Functional", instructor: "Sarah Chen", duration: 60, capacity: 16, enrolled: 11, day: "Saturday", level: "Advanced", room: "Functional Zone" },
  // Sunday
  { id: 31, time: "9:00 AM", name: "Sunday Recovery Yoga", type: "Yoga", instructor: "Nadia Petrov", duration: 75, capacity: 15, enrolled: 9, day: "Sunday", level: "All Levels", room: "Yoga Studio" },
  { id: 32, time: "10:30 AM", name: "Light HIIT", type: "HIIT", instructor: "Alicia Wells", duration: 40, capacity: 20, enrolled: 8, day: "Sunday", level: "Beginner", room: "Studio A" },
  { id: 33, time: "12:00 PM", name: "Functional Flow", type: "Functional", instructor: "Sarah Chen", duration: 55, capacity: 16, enrolled: 10, day: "Sunday", level: "All Levels", room: "Functional Zone" },
  { id: 34, time: "2:00 PM", name: "Olympic Prep", type: "Powerlifting", instructor: "Damon Brooks", duration: 60, capacity: 10, enrolled: 6, day: "Sunday", level: "Advanced", room: "Olympic Platform" },
];
