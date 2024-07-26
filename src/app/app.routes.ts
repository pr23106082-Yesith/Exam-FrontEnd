import { Routes } from '@angular/router';
import { ManageCustomerComponent } from './pages/manage-customer/manage-customer.component';
import { ItemComponent } from './pages/item/item.component';

export const routes: Routes = [

    {
        path:"",
        component:ManageCustomerComponent
    },
    {
        path : "manage-customer",
        component : ManageCustomerComponent
    },
    {
        path:"item",
        component:ItemComponent
    }
];
