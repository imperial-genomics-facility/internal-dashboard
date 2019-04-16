import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { HttpClient } from '@angular/common/http';

export interface SamplePoolingElement {
  project: string;
  position: number;
  total: number;
  pass: number;
  fail: number;
  zero: number;
}

@Component({
  selector: 'app-sample-pooling',
  templateUrl: './sample-pooling.component.html',
  styleUrls: ['./sample-pooling.component.scss']
})
export class SamplePoolingComponent implements OnInit {

  displayedColumns: string[] = ['project', 'total', 'pass', 'fail','zero'];
  dataSource : MatTableDataSource<SamplePoolingElement>;

  constructor(private http: HttpClient) { }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit() {
    this.http.get("http://eliot.med.ic.ac.uk/report/project/internal/json_data/sample_data_demo.json")
    .subscribe((response:SamplePoolingElement[]) => {
      this.dataSource = new MatTableDataSource<SamplePoolingElement>(response);
    })
  }

}
