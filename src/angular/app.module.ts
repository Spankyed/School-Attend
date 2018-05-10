import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatCheckboxModule, MatTooltipModule, MatCardModule, MatGridListModule } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TreeModule } from 'ng2-tree';
import { WebStorageModule } from 'ngx-store';

//Attendance components & services
import { AppComponent } from './app/app.component';
import { DashboardComponent } from './attendance/dashboard/dashboard.component';
import { AdminComponent } from './attendance/admin/admin.component';
import { ClassesComponent } from './attendance/classes/classes.component';
import { ClassComponent } from './attendance/class/class.component';

import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './services/message.service';
import { RoutingModule } from './routing/routing.module';
import { LocalStoreService } from './services/local-store.service';
import { Utility } from './utils/utils';

@NgModule({
  declarations: [ //component declarations
    AppComponent,
    AdminComponent,
    ClassComponent,
    MessagesComponent,
    DashboardComponent,
    ClassesComponent
  ],
  imports: [ //external libraries
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatTooltipModule,
    MatCardModule,
    MatGridListModule,
    TreeModule,
    RoutingModule,
    WebStorageModule,
    NgbModule.forRoot()
  ],
  providers: [ //services and data providers
    MessageService,
    LocalStoreService,
    Utility
  ],
  bootstrap: [AppComponent] 
})
export class AppModule { }
