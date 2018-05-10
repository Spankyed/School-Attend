import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LocalStoreService } from '../../services/local-store.service';
import { Utility } from '../../utils/utils';
import { Class } from '../../models/Class';


@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {

  constructor(private modalService: NgbModal, private localStore: LocalStoreService, private util : Utility) { }

  Class: Class;
  Classes = [];
  Subjects = [];
  Grades =  [];
  Areas = [];

  ngOnInit() {
    this.Class = new Class();
    this.getClasses();
    this.getAreas();
    this.getGrades();
    this.getSubjects();
  }

  public getClasses() {
    this.localStore.getItem('Classes')
      .subscribe(classes => {
        this.Classes = classes
      });
  }

  public getGrades() {
    this.localStore.getItem('Grades').subscribe(grades => {
      this.Grades = this.util.itemOpts(grades)
    })
  }

  public getAreas() {
    this.localStore.getItem('Areas').subscribe(areas => {
      this.Areas = this.util.itemOpts(areas)
    })
  }

  public getSubjects() {
    this.localStore.realSubjects()
      .subscribe(subjects => {
        this.Subjects = this.util.subjectOpts([subjects], false)
      });
  }

  //Add() new class to local storage
  public addClass() {
    this.Classes.push(this.Class);
    console.log(this.Class)
    this.localStore.addItem('Classes', this.Classes);
    this.Class = new Class();
  }

  //Open() modal with <ng-template>
  open(modal) {
    this.modalService.open(modal, { size: 'lg', centered: true }).result.then((result) => {
      console.log(`Closed with: ${result}`);
    }, (reason) => {
      console.log(`Dismissed for: ${reason}`);
    });
  }

}
