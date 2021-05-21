import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators,ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userForm!:FormGroup;

  constructor(
    public formBuilder:FormBuilder

  ) { }

  ngOnInit(): void {

    this.userForm = this.formBuilder.group({
      fullname:new FormControl('',[Validators.required,Validators.minLength(8), Validators.maxLength(20)]),
      mail:new FormControl('',[Validators.required,Validators.minLength(8)]),
      school:new FormControl('',[Validators.required]),
      telephone:new FormControl('')
    })

  }

  get getControl(){
    return this.userForm.controls;
  }

}
