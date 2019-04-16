import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-plot-storage-info',
  templateUrl: './plot-storage-info.component.html',
  styleUrls: ['./plot-storage-info.component.scss']
})
export class PlotStorageInfoComponent implements OnInit {

  constructor(private http: HttpClient) { }

  title = "Storage stats";
  type = 'BarChart';
  columnNames = ["Server Name","Used space (in Gb)","Available space (in Gb)"];
  options = {   
    hAxis: {
       title: "Server Name",
    },
    vAxis:{
       minValue:0
    },
    isStacked: 'percent',
    animation: {startup: true, 
                duration: 800,
                easing: 'out'},
    colors: ['#FF7F50',  // Coral - orange
             '#1b9e77'],
    legend: {textStyle: {color: '#708090',
                         fontSize: 10}
            },
    orientation:'vertical'
  };
  width = 550;
  height = 400;
  data: any;

  ngOnInit() {
    this.http.get("http://eliot.med.ic.ac.uk/report/project/internal/json_data/storage_data.json")
    .subscribe((response) => {
      this.data = response;
    })
  }

}
