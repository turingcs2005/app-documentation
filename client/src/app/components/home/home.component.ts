import { Component, OnInit } from '@angular/core';
import { AppDocument } from 'src/app/app-data/app-models';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  appDocuments: AppDocument[] = [new AppDocument()];
  
  constructor(
    private api: ApiService
  ) { }

  ngOnInit(): void {
    this.api.getAppDocuments().subscribe(
      data => {
        this.appDocuments = data;
      }, err => {
        console.log(err);
      }
    );
  }

}
