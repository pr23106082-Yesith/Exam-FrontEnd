import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ManageCustomerComponent } from './pages/manage-customer/manage-customer.component';
import { ItemComponent } from './pages/item/item.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ManageCustomerComponent , ItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo-Exam';
}
