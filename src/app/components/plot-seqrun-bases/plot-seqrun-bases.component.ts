import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-plot-seqrun-bases',
  templateUrl: './plot-seqrun-bases.component.html',
  styleUrls: ['./plot-seqrun-bases.component.scss']
})
export class PlotSeqrunBasesComponent implements OnInit {

  constructor(private http: HttpClient) { }

  title = "Sequencing output";
  type = 'BarChart';
  columnNames = ["sequencing_month","HISEQ4000","NEXTSEQ","MISEQ"];
  options = {
    hAxis: {
       title: "Bases in Millions"
    },
    vAxis:{
       minValue:0
    },
    isStacked:true,
    orientation:'horizontal',
    colors:['#DB7093',  // Pale Violet Red
            '#6787E7',  // Cornflower Blue
            '#B75555',  // Fuzzy Wuzzy Brown
            '#FF7F50',  // Coral - orange
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
    this.http.get("http://eliot.med.ic.ac.uk/report/project/internal/json_data/seqrun_chart.json")
    .subscribe((response) => {
      this.data = response;
    })
  }

}
