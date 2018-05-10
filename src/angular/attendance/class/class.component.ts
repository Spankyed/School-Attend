import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { LocalStoreService } from '../../services/local-store.service';
import { Utility } from '../../utils/utils';


@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})

export class ClassComponent implements OnInit {
  constructor(  
    private route: ActivatedRoute,
    private util : Utility,
    private localStore: LocalStoreService,
    private location: Location
  ) {}

  @Input() subject;

  ngOnInit() {
    this.getSubject();
  }

  getSubject(): void {
    // + operator turns current /route:param string into number 
    const id = +this.route.snapshot.paramMap.get('id');
    this.localStore.getSubjects()
      .subscribe(subjects => {this.subject = this.util.find(id, [subjects]); console.log(this.subject)});
  }

  goBack(): void {
    this.location.back();
  }


}
