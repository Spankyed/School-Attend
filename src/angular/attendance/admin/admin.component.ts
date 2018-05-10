import { Component, OnInit,  ViewChild } from '@angular/core';
import { Observable} from 'rxjs/Observable';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LocalStoreService } from '../../services/local-store.service';
import { Ng2TreeSettings, NodeEvent, RenamableNode, TreeModel  } from 'ng2-tree';

import { Item } from '../../models/Item';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {

  //constructor exposes this.localStore to class methods
  constructor(private modalService: NgbModal, private localStore: LocalStoreService) { }

  Areas;
  Grades;
  grade;
  area;
  Tree: TreeModel;

  modalFor: string;
  //settings & tree passed to <tree/> component
  settings: Ng2TreeSettings = {
    rootIsVisible: false,
    showCheckboxes: true
  };

  //using #hash binding in template <tree #treeSC /> = treeSC
  @ViewChild('treeSC') 
  treeSC;

  @ViewChild('classForm') 
  classForm

  ngOnInit() {
        this.getTree();
        this.getAreas();
        this.getGrades();

  }
  public addArea(area): void {
    var a = this.Areas
    a.push(new Item(area))
    //console.log(a)
    this.localStore.addItem('areas', a)
  }  //todo: change two functions to one, addItem
  public addGrade(grade): void {
    var g = this.Grades
    g.push(new Item(grade))
    this.localStore.addItem('grades', g)
  }
  //todo: change three functions to getItem
  public addTreeNode(): void {
    this.localStore.getSubjects().subscribe((tree) => this.Tree = tree);
  }
  public getAreas(): void {
    this.localStore.getAreas().subscribe((areas) => this.Areas = areas);
  }
  public getGrades(): void {
    this.localStore.getGrades().subscribe((grades) => this.Grades = grades);
  }
  public getTree(): void {
    //console.log(this.Areas)
    this.localStore.getSubjects().subscribe((tree) => this.Tree = tree);
  }

  public save() {
    let tree = this.getTreeModel(); 
    //console.log('saving trees', tree);
    this.localStore.addItem('tree', tree);
    this.localStore.addItem('Grades', this.Grades);
    this.localStore.addItem('Areas', this.Areas);
  }

  public getTreeModel(): TreeModel {
    //1 should always be root node
    const model = this.treeSC.getControllerByNodeId(1).toTreeModel();
    //console.log(model)
    return model;
  }

  open(modal, name) {
    this.modalFor = name;
    this.modalService.open(modal, { size: 'lg', centered: true }).result.then((result) => {
      console.log(`Closed with: ${result}`);
    }, (reason) => {
      console.log(`Dismissed for: ${reason}`);
    });
  }

  public addItemModal(){
    if (this.modalFor == "Area"){
      this.addArea(this.area);
      this.area = ''
    } else {
      this.addGrade(this.grade);
      this.grade = ''
    }
  }

}

//class must come after export classs

