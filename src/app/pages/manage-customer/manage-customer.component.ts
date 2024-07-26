import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { ViewAllCustomerComponent } from '../view-all-customer/view-all-customer.component';

@Component({
  selector: 'app-manage-customer',
  standalone: true,
  imports: [HeaderComponent ,HttpClientModule ,FormsModule, CommonModule , ViewAllCustomerComponent],
  templateUrl: './manage-customer.component.html',
  styleUrl: './manage-customer.component.css'
})
export class ManageCustomerComponent {

  public CustomerOb ={
    name : "" ,
    city :  "",
    contact : ""
    }

  constructor(private http :HttpClient){}

  AddCustomer(){
    this.http.post("http://localhost:8080/customer/add-customer",this.CustomerOb).subscribe(
      (data)=>{
        console.log(data);
        Swal.fire({
          title: "Customer Added!",
          text: "You clicked the button!",
          icon: "success"
        });
      }
    )
  }
}
