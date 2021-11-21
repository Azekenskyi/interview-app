import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ChangeTextComponent} from "./change-text/change-text.component";
import {DataSendComponent} from "./data-send/data-send.component";

const routes: Routes = [
  { path: '', redirectTo: '/change-text', pathMatch: 'full' },
  { path: 'change-text', component: ChangeTextComponent },
  { path: 'data', component: DataSendComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
