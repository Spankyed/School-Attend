import { Injectable } from '@angular/core';
import { Observable} from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { v4 as uuid } from 'uuid';
import { LocalStorageService } from 'ngx-store';
import { MessageService } from './message.service';

import {  TreeModel  } from 'ng2-tree';
import { Class } from '../models/classes';
import { Classes } from '../models/mock-classes';
import { AREAS } from '../models/mock-areas';
import { GRADES } from '../models/mock-grades';

@Injectable()
export class LocalStoreService {

  constructor(private localStorageService: LocalStorageService, private messageService: MessageService) {
    //this.getClasses();
  }

  classes: any;


  addItem(name, item) {
    this.messageService.add(`Added ${name} to local storage`);
    this.localStorageService.set(name, item);
  }
  
  getItem(name): Observable<any> {
    return of(this.localStorageService.get(name));
  }

  getAreas(): Observable<any> {
    var areas = this.localStorageService.get('Areas');
    var ret = areas 
    return of(ret);
  }
  getGrades(): Observable<any> {
    var grades = this.localStorageService.get('Grades');
    var ret = grades 
    return of(ret);
  }


  getSubjects(): Observable<TreeModel> {
    return of(Classes);
  }

  realSubjects(): Observable<TreeModel> {
     this.classes = this.localStorageService.get('tree')
     var ret = this.classes;
     return of(ret);
   }

   subjects = [];
   Grades =  [];
   Areas = [];















}

