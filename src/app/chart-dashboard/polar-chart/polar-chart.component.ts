import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-polar-chart',
  templateUrl: './polar-chart.component.html',
  styleUrls: ['./polar-chart.component.scss']
})
export class PolarChartComponent implements OnInit {
  distanceToNature = {
    chart: {
      polar: true,
      type: 'column',
      margin: [0, 0, 0, 10]
    },
    title: {
      text: 'Polar Bar Chart',
      x: -80
    },

    pane: {
      size: '80%'
    },
    xAxis: {
      categories: ['Fruits', 'Vegetable', 'Grains', 'Nuts and Seeds', 'Meat', 'Diary', 'Eggs'],
      tickmarkPlacement: 'on',
    },

    yAxis: {
      gridLineInterpolation: 'circle',
      lineWidth: 0,
      min: 0,
      visible: true,
    },
    tooltip: {
      pointFormat: 'Value: {point.y:.2f}'
    },
    legend: {
      align: 'right',
      verticalAlign: 'middle',
      layout: 'vertical',
      enabled: false
    },
    plotOptions: {
      series: {
        stacking: 'normal',
        shadow: false,
        groupPadding: 0,
        pointPlacement: 'on'
      }
    },
    exporting: {
      enabled: false
    },
    series: [{
      name: 'DTN Score',
      data: [{
        name: 'fruits',
        color: '#FB5018',
        y: 2
      }, {
        name: 'vegetables',
        color: '#0EBB7C',
        y: 6
      }, {
        name: 'nuts and seeds',
        color: '#212842',
        y: 3
      }, {
        name: 'grains',
        color: '#57D0DB',
        y: 5
      }, {
        name: 'egg',
        color: '#F14343',
        y: 1
      }, {
        name: 'diary',
        color: '#F77656',
        y: 7
      }, {
        name: 'meat',
        color: '#18a7eb',
        y: 3


      }],
      pointPlacement: 'on'
    }]
  };
  constructor() { }

  ngOnInit(): void {
  }

}
