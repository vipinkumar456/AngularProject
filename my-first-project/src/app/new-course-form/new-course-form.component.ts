import { FormGroup, FormControl, FormArray, Form, FormBuilder, ValidationErrors, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // form =new FormGroup({
  //  name: new FormControl('',Validators.required),
  //  contact : new FormGroup({
  //   email : new FormControl(),
  //   phone : new FormControl()
  //  }),
  // });
     form:any;
  // contructor(fb:FormBuilder)
  // {
  //  this.form= fb.group({
  //     name : ['',Validators.required],
  //     contact : fb.group({
  //       email:[],
  //       phone:[]
  //     }),
  //   });
  // }
 

}
