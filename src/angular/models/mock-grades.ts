export const GRADES: Grade[] = [
  { id: 1, value: '1', checked: true},
  { id: 2, value: '2', checked: true },
  { id: 3, value: '3', checked: false },
  { id: 4, value: '4', checked: false }
];

interface Grade {
  id: number;
  value: string | number;
  checked: boolean;
}