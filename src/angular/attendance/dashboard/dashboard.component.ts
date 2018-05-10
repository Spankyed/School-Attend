import { Component, OnInit } from '@angular/core';
import { LocalStoreService } from '../../services/local-store.service';
import { Utility } from '../../utils/utils';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  Subjects = [];
 
  constructor( private localStore: LocalStoreService, private util : Utility) { }
 
  ngOnInit() {
    this.getSubjects();
  }

  public getSubjects() {
    this.localStore.realSubjects()
      .subscribe(subjects => {
        console.log(subjects)

        this.Subjects = this.util.subjectOpts([subjects], false).slice(1, 5);//make sure to pass subjects as array[]
      });
  }
}