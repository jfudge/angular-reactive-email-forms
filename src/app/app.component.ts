import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

get primEmail(){
	return this.userprofileForm.get('primaryEmail')
  }

userprofileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    //email: new FormControl(''),
    email: new FormControl('',[
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      primaryEmail: new FormControl('',[
        Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")])
});

onSubmit() {
  console.log(this.userprofileForm.controls['firstName'].value);
}

}