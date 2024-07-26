import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ManageCustomerComponent } from './pages/manage-customer/manage-customer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ManageCustomerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo-Exam';
}
