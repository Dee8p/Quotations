import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { QuotationService } from '../../services/quotation.service';
import { Chart, registerables } from 'chart.js';
import { IonicModule } from '@ionic/angular';

Chart.register(...registerables); // Register Chart.js components

@Component({
  selector: 'app-quotation-summary',
  standalone: true,
  imports: [IonicModule],
  templateUrl: './quotation-summary.component.html',
  styleUrls: ['./quotation-summary.component.scss'],
})
export class QuotationSummaryComponent implements OnInit {
  @ViewChild('roomTypeChart', { static: true }) roomTypeCanvas!: ElementRef;
  @ViewChild('colorChart', { static: true }) colorCanvas!: ElementRef;
  @ViewChild('paintTypeChart', { static: true }) paintTypeCanvas!: ElementRef;

  roomTypeChart: any;
  colorChart: any;
  paintTypeChart: any;

  constructor(private quotationService: QuotationService) {}

  ngOnInit(): void {
    this.quotationService.getQuotations().subscribe((data) => {
      this.createRoomTypeChart(data);
      this.createColorChart(data);
      this.createPaintTypeChart(data);
    });
  }

  createRoomTypeChart(quotations: any[]) {
    const roomTypeCounts = quotations.reduce((acc: any, quotation: any) => {
      const roomType = quotation.roomType || 'Unknown';
      acc[roomType] = (acc[roomType] || 0) + 1;
      return acc;
    }, {});

    const labels = Object.keys(roomTypeCounts);
    const data = Object.values(roomTypeCounts);

    this.roomTypeChart = new Chart(this.roomTypeCanvas.nativeElement, {
      type: 'pie',
      data: {
        labels,
        datasets: [
          {
            data,
            backgroundColor: ['#6C63FF', '#FF6584', '#FFC107', '#4CAF50', '#2196F3'],
            hoverBackgroundColor: ['#5B54D8', '#E2546C', '#E5A50E', '#3E8C40', '#1E88E5'],
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
        },
      },
    });
  }

  createColorChart(quotations: any[]) {
    const colorCounts = quotations.reduce((acc: any, quotation: any) => {
      const color = quotation.color || 'Unknown';
      acc[color] = (acc[color] || 0) + 1;
      return acc;
    }, {});

    const labels = Object.keys(colorCounts);
    const data = Object.values(colorCounts);

    this.colorChart = new Chart(this.colorCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        labels,
        datasets: [
          {
            data,
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
            hoverBackgroundColor: ['#FF5076', '#3298DB', '#FFB844', '#43A7A7', '#7E52DD'],
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
        },
      },
    });
  }

  createPaintTypeChart(quotations: any[]) {
    const paintTypeCounts = quotations.reduce((acc: any, quotation: any) => {
      const paintType = quotation.paintType || 'Unknown';
      acc[paintType] = (acc[paintType] || 0) + 1;
      return acc;
    }, {});

    const labels = Object.keys(paintTypeCounts);
    const data = Object.values(paintTypeCounts);

    this.paintTypeChart = new Chart(this.paintTypeCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels,
        datasets: [
          {
            label: 'Paint Type Distribution',
            data,
            backgroundColor: ['#FFC107', '#4CAF50', '#2196F3', '#FF6584', '#6C63FF'],
            hoverBackgroundColor: ['#E5A50E', '#3E8C40', '#1E88E5', '#E2546C', '#5B54D8'],
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false, // No legend for the bar chart
          },
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Paint Types',
            },
          },
          y: {
            title: {
              display: true,
              text: 'Count',
            },
          },
        },
      },
    });
  }
}
