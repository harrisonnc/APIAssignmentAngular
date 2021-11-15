import { Component, Input, OnInit } from '@angular/core';
import { Application } from '../application';

@Component({
  selector: 'app-job-application',
  templateUrl: './job-application.component.html',
  styleUrls: ['./job-application.component.scss']
})
export class JobApplicationComponent implements OnInit {

  @Input() application: Application;

  constructor() { }

  ngOnInit(): void {
  }

}
