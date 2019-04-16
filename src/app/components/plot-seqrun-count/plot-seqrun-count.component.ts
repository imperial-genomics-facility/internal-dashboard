import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-plot-seqrun-count',
  templateUrl: './plot-seqrun-count.component.html',
  styleUrls: ['./plot-seqrun-count.component.scss']
})
export class PlotSeqrunCountComponent implements OnInit {

  constructor(private http: HttpClient) { }

  title = "No. of sequence runs per month)";
  type = 'BarChart';
  columnNames = ['sequencing_month','HISEQ4000','NEXTSEQ','MISEQ'];
  options = {   
    hAxis: {
       title: 'No. of sequence runs per month'
    },
    vAxis:{
       minValue:0
    },
    isStacked:true,
    colors:['#4682B4',  // Steel Blue
            '#DC143C',  // Crimson
            '#FF7F50',  // Coral - orange
            '#6787E7',  // Cornflower Blue
                   ],
    animation: {startup: true, 
                duration: 800,
                easing: 'out'},
    legend: {position: 'right',
             textStyle: {color: '#708090',
                                 fontSize: 8}
            },
  };
  width = 550;
  height = 400;
  data: any;

  ngOnInit() {
    this.http.get("http://eliot.med.ic.ac.uk/report/project/internal/json_data/seqrun_count_data.json")
    .subscribe((response) => {
      this.data = response;
    })
  }

}
