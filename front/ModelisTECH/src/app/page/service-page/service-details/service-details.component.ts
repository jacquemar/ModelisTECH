import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ServiceController} from '../../../services/controller/service.controller';

@Component({
  selector: 'app-service-details',
  imports: [],
  templateUrl: './service-details.component.html',
  styleUrl: './service-details.component.css'
})
export class ServiceDetailsComponent implements OnInit{
  constructor( private http: HttpClient, private  serviceController: ServiceController) {}
  serviceDetail:any;


  ngOnInit() {
    this.serviceController.detail(localStorage.getItem('serviceId')).subscribe(response => {
      this.serviceDetail = response;
      console.log(this.serviceDetail)
    });
  }

  }
