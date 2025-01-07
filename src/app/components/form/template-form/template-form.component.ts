import { Component } from '@angular/core';
import { MateriallistModule } from '../../../shared/materiallist/materiallist.module';

@Component({
  selector: 'app-template-form',
  imports: [MateriallistModule],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.scss'
})
export class TemplateFormComponent {



  UserData={
    name:'',
    email:'',
    password:'',
    address:'',
    city:''
  }

  constructor() {
  }

  ngOnInit(): void {
  }

  submitForm():void{
   console.log(this.UserData.name, this.UserData.email, this.UserData.password, this.UserData.address, this.UserData.city);
   this.UserData.name='';
    this.UserData.email='';
    this.UserData.password='';
    this.UserData.address='';
    this.UserData.city='';
    
  }
}
