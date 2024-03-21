import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenuItem } from 'primeng/api';
import { ChartModule } from 'primeng/chart';
@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [CommonModule, TabMenuModule, ChartModule],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css'
})
export class ChartComponent {
  items: MenuItem[] = [];
  activeItem: MenuItem;
  @Input() data: any;
  @Input() options: any;

  ngOnInit() {
    this.items = [
      {
        label: 'Inicio',
        icon: 'pi pi-fw pi-home',
        routerLinkActiveOptions: 'chart'
      },
      {
        label: 'Hero',
        badge: '2',
        badgeSeverity: 'info',
        icon: 'pi pi-fw pi-calendar',
        routerLinkActiveOptions: 'hero'
      }

    ];
    this.activeItem = this.items[0]
this.data = {
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
    this.options = {
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
    
  }
  


}




