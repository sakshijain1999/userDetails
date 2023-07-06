import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditUserDetailsComponent } from 'src/components/edit-user-details/edit-user-details.component';
import { UserDetailsComponent } from 'src/components/user-details/user-details.component';

const routes: Routes = [
  {path: '', component: UserDetailsComponent},
  {path: 'edit', component: EditUserDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
