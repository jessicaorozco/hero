import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { ChartModule } from 'primeng/chart';
@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [CommonModule, ChartModule],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css'
})
export class ChartComponent {
  @Input() data = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'],
    datasets: [
      {
        label: 'Ingresos',
        backgroundColor: '#42A5F5',
        data: [65, 59, 80, 81, 56, 55, 40]
      },
      {
        label: 'Gastos',
        backgroundColor: '#FFA726',
        data: [28, 48, 40, 19, 86, 27, 90]
      }
    ]
  };
  @Input() options = {
    title: {
      display: true,
      text: 'Ingresos y Gastos por Mes',
      fontSize: 16
    },
    legend: {
      position: 'bottom'
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };

   
  
  ngOnInit() {

    
  }



}




