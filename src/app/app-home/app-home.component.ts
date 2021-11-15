import { Component, OnInit } from '@angular/core';
import { Store} from "@ngrx/store";
import { Application } from '../application';
import { ApplicationService } from '../application.service';

@Component({
  selector: 'app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.scss']
})
export class AppHomeComponent implements OnInit {

  applications: Application[];

  constructor(
    private ApplicationService: ApplicationService,
  ) { }

  ngOnInit(): void {
    this.ApplicationService.getApplications()
      .subscribe( (data: any) => {
        this.applications = JSON.parse(data.body);
      })
  }

}
