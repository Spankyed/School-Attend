import {  TreeModel  } from 'ng2-tree';

export const Classes: TreeModel = {
    value: 'base',
    id: 1,
    settings: {
      cssClasses: {
        expanded: 'fa fa-caret-down',
        collapsed: 'fa fa-caret-right',
        empty: 'fa fa-caret-right disabled',
        leaf: 'fa'
      },
      templates: {
        node: '<i class="fa fa-book"></i>',
        leaf: '<i class="fa fa-address-book-o fa-1"></i>'
      }
    },
    children: [
      {
        value: 'Math',
        id: 2,
        children: [
          {
            value: 'Algebra',
            id: 3,
            children: [{ value: 'ALG 1', id: 4}, { value: 'ALG 2', id: 5}]
          },
          {
            value: 'Calculus',
            id: 6,
            children: [{ value: 'PRE-CALC', id: 7}, { value: 'CALC 1', id: 8}, { value: 'CALC 2', id: 9}]
          }
        ]
      },
      {
        value: 'Science',
        id: 10,
        settings: {
          isCollapsedOnInit: true
        },
        children: [
          {
            value: 'Biology',
            id: 11,
            children: [{ value: 'BIO 1', id: 12}, { value: 'BIO 2', id: 13}]
          },
          {
            value: 'Chemistry',
            id: 14,
            children: [{ value: 'CHEM 1', id: 15}, { value: 'CHEM 2', id: 16}]
          },
          {
            value: 'Physical Science',
            id: 17
          }
        ]
      },
  
  ]};