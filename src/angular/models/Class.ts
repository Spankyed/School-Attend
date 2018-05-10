import { v4 as uuid } from 'uuid';


export class Class {
  constructor(){
    return {
      id: uuid(),
      name: '',
      area: new Item(''),
      grade: new Item(''),
      subject: new Item(''),
    }
  }

  id: number | string;
  name: string;
  area: Item;
  grade: Item;
  subject: Item;
}

//cant be imported on new Class()
class Item {
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