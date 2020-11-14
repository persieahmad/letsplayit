export type TQueAnsArray = {
  id: number;
  que: string;
  options: string[];
  ans: string;
};

export const QueAnsArray: TQueAnsArray[] = [
  {
    id: 0,
    que: 'What comes after letter T?',
    options: ['R', 'S', 'U', 'W'],
    ans: 'U',
  },
  {
    id: 1,
    que: 'What comes after letter Q?',
    options: ['R', 'S', 'U', 'W'],
    ans: 'R',
  },
  {
    id: 2,
    que: 'What comes before letter W?',
    options: ['R', 'S', 'V', 'P'],
    ans: 'V',
  },
  {
    id: 3,
    que: 'Who is the king of the jungle?',
    options: ['Lion', 'Elephant', 'Tiger', 'Cheetah'],
    ans: 'Lion',
  },
  {
    id: 4,
    que: 'Who is taller?',
    options: ['Cat', 'Dog', 'Rat', 'Zebra'],
    ans: 'Zebra',
  },
];
