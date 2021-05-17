import { AfterContentInit, AfterViewInit, Component } from '@angular/core';
import { TabTitle } from './table-with-tabs/tabTitle'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentInit{

  title = 'CustomTableWithTabs';
  tabTitles: TabTitle[] = [];
  itemList=[];


  ngOnInit(){
   
  }

  ngAfterContentInit(): void {
    this.tabTitles=[{name:'Pendiente', class:"claseBase", counter:5},{name:'Revisados'},{name:'Liquidados'},{name:'Observados'}]
    this.itemList = [
    {
      tabName: 'Pendiente',
      data: [
        {
          numTransporte: '00001',
          status: "r",
          placa: 'SSS-121',
          proveedor: 'transporte Santa Clarita S.A',
          fecha: '30/08/21',
          monto_total: "S/ 200,000",
          detalle: true
        },
        {
          numTransporte: '00002',
          status: "r",
          placa: 'SSS-121',
          proveedor: 'transporte Santa Clarita S.A',
          fecha: '30/08/21',
          monto_total: "S/ 200,000",
          detalle: true
        }
      ]
    },
    {
      tabName: 'Revisados',
      data: [
        {
          numTransporte: '00003',
          status: "r",
          placa: 'SSS-121',
          proveedor: 'transporte Santa Clarita S.A',
          fecha: '30/08/21',
          monto_total: "S/ 200,000",
          detalle: true
        }
      ]
    },
    {
      tabName: 'Liquidados',
      data: [
        {
          numTransporte: '00004',
          status: "r",
          placa: 'SSS-121',
          proveedor: 'transporte Santa Clarita S.A',
          fecha: '30/08/21',
          monto_total: "S/ 200,000",
          detalle: true
        }
      ]
    },
    {
      tabName: 'Observados',
      data: [
        {
          numTransporte: '00005',
          status: "r",
          placa: 'SSS-121',
          proveedor: 'transporte Santa Clarita S.A',
          fecha: '30/08/21',
          monto_total: "S/ 200,000",
          detalle: true
        }
      ]
    }
  ];
  }

  ngAfterViewInit(){
  }

  cambiarTitulos(){
    this.tabTitles = [{name:'Revisados' , class:"claseBase"},{name:'Pendiente'},{name:'Liquidados'}];
  }

  cambiarData(){
    this.itemList = [
      {
        tabName: 'Pendiente',
        data: [
          {
            numTransporte: '00001',
            status: "r",
            placa: 'SSS-121',
            proveedor: 'transporte Santa Clarita S.A',
            fecha: '30/08/21',
            monto_total: "S/ 200,000",
            detalle: true
          },
          {
            numTransporte: '00002',
            status: "r",
            placa: 'SSS-121',
            proveedor: 'transporte Santa Clarita S.A',
            fecha: '30/08/21',
            monto_total: "S/ 200,000",
            detalle: true
          },
          {
            numTransporte: '00003',
            status: "r",
            placa: 'SSS-121',
            proveedor: 'transporte Santa Clarita S.A',
            fecha: '30/08/21',
            monto_total: "S/ 200,000",
            detalle: true
          }
        ]
      }
    ]
  }

  cambiarData2(){
    this.itemList = [
      {
        tabName: 'Pendiente',
        data: [
          {
            numTransporte: '00001',
            status: "r",
            placa: 'SSS-121',
            proveedor: 'transporte Santa Clarita S.A',
            fecha: '30/08/21',
            monto_total: "S/ 200,000",
            detalle: true
          },
          {
            numTransporte: '00002',
            status: "r",
            placa: 'SSS-121',
            proveedor: 'transporte Santa Clarita S.A',
            fecha: '30/08/21',
            monto_total: "S/ 200,000",
            detalle: true
          }
        ]
      },
      {
        tabName: 'Revisados',
        data: [
          {
            numTransporte: '00003',
            status: "r",
            placa: 'SSS-121',
            proveedor: 'transporte Santa Clarita S.A',
            fecha: '30/08/21',
            monto_total: "S/ 200,000",
            detalle: true
          }
        ]
      },
      {
        tabName: 'Liquidados',
        data: [
          {
            numTransporte: '00004',
            status: "r",
            placa: 'SSS-121',
            proveedor: 'transporte Santa Clarita S.A',
            fecha: '30/08/21',
            monto_total: "S/ 200,000",
            detalle: true
          }
        ]
      },
      {
        tabName: 'Observados',
        data: [
          {
            numTransporte: '00005',
            status: "r",
            placa: 'SSS-121',
            proveedor: 'transporte Santa Clarita S.A',
            fecha: '30/08/21',
            monto_total: "S/ 200,000",
            detalle: true
          }
        ]
      }
    ];
  }
  

}
