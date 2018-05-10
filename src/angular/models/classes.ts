import { RenamableNode, TreeModel  } from 'ng2-tree';

export interface Class {
    id?: string | number;
    value: string | RenamableNode;
   // children?: TreeModel[];
}