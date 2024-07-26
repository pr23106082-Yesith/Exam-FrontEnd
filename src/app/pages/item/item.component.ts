import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [HeaderComponent, HttpClientModule, FormsModule, CommonModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {

  public itemOb = {
    name: "",
    rentalPerDay: "",
    fineperDay: "",
    availability: ""
  }

  constructor(private http : HttpClient){}

  saveitem() {
    this.http.post("http://localhost:8080/Items/add-items",this.itemOb).subscribe(
      (data)=>{
        console.log(data);
        Swal.fire({
          title: "Item Added!",
          text: "You clicked the button!",
          icon: "success"
        });
      }
    )
   }

}
