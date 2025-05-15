import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { isPlatformBrowser, NgIf } from '@angular/common';
import { ChartOptions } from 'chart.js';
import { Color } from 'chart.js';

@Component({
  selector: 'app-top-listeners',
  standalone: true,
  imports: [BaseChartDirective, NgIf],
  templateUrl: './top-listeners.component.html',
  styleUrl: './top-listeners.component.css',
})
export class TopListenersComponent implements OnInit {
  public isBrowser: boolean = false;
  public doughnutChartType: 'doughnut' = 'doughnut';

  public doughnutChartLabels: string[] = ['Feyi', 'John', 'Mary'];
  public listenerData = [80, 95, 95];
  public chartColors: Color[] = ['#1976D2', '#DC004E', '#388E3C'];

  public doughnutChartData = {
    labels: this.doughnutChartLabels,

    datasets: [
      {
        data: [this.listenerData[0]],
        backgroundColor: [this.chartColors[0]],
        hoverBackgroundColor: [`${this.chartColors[0]}CC`],
        borderColor: '#fff',
        borderWidth: 0,
        circumference: (this.listenerData[0] / 100) * 360,
        rotation: -90,
        borderRadius: 5,
        weight: 1,
      },
      {
        data: [100],
        backgroundColor: ['transparent'],
        borderWidth: 0,
        weight: 0.3,
      },
      {
        data: [this.listenerData[1]],
        backgroundColor: [this.chartColors[1]],
        hoverBackgroundColor: [`${this.chartColors[1]}CC`],
        borderColor: '#fff',
        borderWidth: 0,
        circumference: (this.listenerData[1] / 100) * 360,
        rotation: -90,
        borderRadius: 5,
        weight: 1,
      },
      {
        data: [100],
        backgroundColor: ['transparent'],
        borderWidth: 0,
        weight: 0.3,
      },
      {
        data: [this.listenerData[2]],
        backgroundColor: [this.chartColors[2]],
        hoverBackgroundColor: [`${this.chartColors[2]}CC`],
        borderColor: '#fff',
        borderWidth: 0,
        circumference: (this.listenerData[2] / 100) * 360,
        rotation: -90,
        borderRadius: 5,
        weight: 1,
      },
    ],
  };

  public doughnutChartOptions: ChartOptions<'doughnut'> = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '40%',
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          usePointStyle: true,
          pointStyle: 'circle',
          padding: 20,
          font: {
            size: 14,
          },
          generateLabels: (chart) => {
            const labels = this.doughnutChartLabels;
            return labels.map((label, i) => ({
              text: label,
              fillStyle: this.chartColors[i] as string,
              strokeStyle: this.chartColors[i] as string,
              lineWidth: 1,
              hidden: false,
              index: i * 2,
            }));
          },
        },
      },
      tooltip: {
        enabled: false,
      },
    },
  };

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    this.isBrowser = isPlatformBrowser(this.platformId);
    this.doughnutChartData.datasets.forEach((dataset, index) => {
      if (index % 2 === 0 && index < this.listenerData.length * 2) {
        dataset.circumference =
          (this.listenerData[Math.floor(index / 2)] / 100) * 360;
      }
    });
  }
}
