import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';


import { SuccessAlertComponent } from '../components/success-alert/success-alert.component';
import { WarningAlertComponent } from '../components/warning-alert/warning-alert.component';
import { ServerComponent } from '../components/server/server.component';
import { DatabindingTaskComponent } from '../components/databinding-task/databinding-task.component';
import { DirectivesPracticeComponent } from '../components/directives-practice/directives-practice.component';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent ,
    WarningAlertComponent,
    SuccessAlertComponent,
    DatabindingTaskComponent,
    DirectivesPracticeComponent

  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
