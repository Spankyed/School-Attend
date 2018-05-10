import { v4 as uuid } from 'uuid';

export class Item {
  constructor(val = ''){
    return {
      id: uuid(),
      value: val,
      checked: false,
    }
  }

  id: number | string;
  value: string | number;
  checked: boolean;
}