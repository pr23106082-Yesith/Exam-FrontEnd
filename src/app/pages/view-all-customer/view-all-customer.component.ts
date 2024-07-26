import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-all-customer',
  standalone: true,
  imports: [HttpClientModule, CommonModule, FormsModule],
  templateUrl: './view-all-customer.component.html',
  styleUrl: './view-all-customer.component.css'
})
export class ViewAllCustomerComponent {

  public CustomerList: any;

  public CustomerObj ={
    id : "",
    name : "" ,
    city :  "",
    contact : ""
    }

  constructor(private http: HttpClient) {
    this.ViewAll();
  }

  ViewAll() {
    this.http.get("http://localhost:8080/customer/get-All").subscribe(
      (res) => {
        this.CustomerList = res;
      }
    )
  }

  DeleteCustomer(Customer: any) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.http.delete(`http://localhost:8080/customer/delete-Customer/${Customer.id}`, { responseType: 'text' }).subscribe(
          res => {
            console.log(res);
            this.ViewAll();
          }
        )
        console.log(Customer);

        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  }

  UpdateCustomer(customer:any){
    console.log(customer);
    if (customer != null) {
      this. CustomerObj= customer;
    }
  }

  SaveUpadtes(){
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {

        Swal.fire("Saved!", "", "success");
        this.http.put("http://localhost:8080/customer/update-Customer", this.CustomerObj).subscribe(
          res => {
            console.log("Updated");
            this.ViewAll();
          }
        )
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  }



SearchCustomer(){
  
}
}
