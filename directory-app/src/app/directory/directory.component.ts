import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilterPipe } from '../filter.pipe';
import { LoggingService } from '../logging.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {
  myPencil = [];

  constructor(private logger: LoggingService, private dataService:DataService) {
  }

  logIt() {
    this.logger.log();
  }


  ngOnInit() {
    this.dataService.fetchData().subscribe(
      (data) => this.myPencil = data
    );
  }
  /*name : string;
  classes= {'blue': true, 'red': false, 'underline': false};
  ngIfIndicator = false;*/
  /*constructor(private route: ActivatedRoute) {
    this.name = route.snapshot.params['name'];
  }*/
}
