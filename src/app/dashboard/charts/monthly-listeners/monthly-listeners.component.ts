import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { isPlatformBrowser, NgIf } from '@angular/common';

@Component({
  selector: 'app-monthly-listeners',
  standalone: true,
  imports: [BaseChartDirective, NgIf],
  templateUrl: './monthly-listeners.component.html',
  styleUrls: ['./monthly-listeners.component.css'],
})
export class MonthlyListenersComponent implements OnInit {
  public isBrowser: boolean = false;

  barChartData = {
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    datasets: [
      {
        data: [20, 34, 58, 45, 45, 56, 45, 30, 50, 30, 35, 28],
        label: 'Listeners',
        backgroundColor: '#F48FB1',
        borderColor: '#F48FB1',
        borderWidth: 1,
      },
    ],
  };

  barChartOptions = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)', // Dark background with some transparency
        titleColor: '#fff', // White color for the title (if any)
        bodyColor: '#fff', // White color for the body text (label and value)
        boxPadding: 8, // Adjust padding inside the tooltip
        cornerRadius: 4, // Add rounded corners (adjust value as needed)
        callbacks: {
          label: (context: any) => {
            let label = context.dataset.label || '';

            if (label) {
              label += ': ';
            }
            if (context.parsed.y !== null) {
              label += new Intl.NumberFormat().format(context.parsed.y); // Format the number
            }
            return label;
          },
        },
      },
    },
  };

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }
}
