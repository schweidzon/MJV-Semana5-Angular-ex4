import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingupComponent } from './pages/singup/singup.component';
import { FormComponent } from './components/form/form.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    SingupComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class SingupModule { }
