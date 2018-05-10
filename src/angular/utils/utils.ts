import * as _ from 'lodash';
import { Injectable } from '@angular/core';
import { MatListItemBase } from '@angular/material';

@Injectable()
export class Utility {


    constructor() { }

    public find (id, items) {
        var i = 0, found;
        for (; i < items.length; i++) {
          if (items[i].id === id) {
            //console.log(items[i]);
            return items[i];
          } else if (_.isArray(items[i].children)) {
            found = this.find(id, items[i].children);
            if (found) {
              return found;
            }
          }
        }
      }

    public itemOpts(items){
        var Items = []
        for(var i in items){
            //console.log(areas[i].value)
            Items.push(items[i]);
            }
        return Items;
    }

    Subjects = [];  //because recurssion..
    // @param items : array , Add subjects where settings.checked = true to modal options
    public subjectOpts(items, tmp) {
        var temp;
        tmp ? (
            temp = _.cloneDeep(tmp)//clone to not risk overwriting properties in localstorage
        ) : (
            temp = {
            id: 0,
            value: '',
            checked: false
            }
        )
        var i = 0;
        for (; i < items.length; i++) {
            temp.id = items[i].id;
            temp.value = items[i].value;
            
            if (items[i].settings){
            if (items[i].settings.checked != undefined){
                //console.log(temp);
                temp.checked = items[i].settings.checked;
                if(items[i].settings.checked){
                //console.log(temp);
                //console.log('we made it')
                //if (!_.isArray(items[i].children)) {} - to remove parent subjects
                this.Subjects.push(Object.assign({}, temp))
                }
            }
            }
            if (_.isArray(items[i].children)) {
            this.subjectOpts(items[i].children, temp);// oh shit recurssion
            } 
        }
        return this.Subjects;
    }

}