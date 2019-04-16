import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-plot-singlecell-hist',
  templateUrl: './plot-singlecell-hist.component.html',
  styleUrls: ['./plot-singlecell-hist.component.scss']
})
export class PlotSinglecellHistComponent implements OnInit {

  constructor(private http: HttpClient) { }

  title = "Cellranger cell counts";
  type = 'Histogram';
  columnNames = ["Experiment","Cell count"];
  options = {   
    legend:'none',
    hAxis: {slantedText:true},
    animation: {startup: true, 
                duration: 800,
                easing: 'out'},
    colors:['#4682B4',  // Steel Blue
            '#A233A2',  // Vivid Violet
            '#FF7F50',  // Coral - orange
    ],
  };
  width = 550;
  height = 400;
  data: any;

  ngOnInit() {
    this.http.get("http://eliot.med.ic.ac.uk/report/project/internal/json_data/cellranger_cell_count.json")
    .subscribe((response) => {
      this.data = response;
    })
  }

}
