import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  // step: any = 1;

  // flags for show forms
  isAddEmpFormVisible: boolean = true;
  isEduFormVisible: boolean = false;
  isEmpHisFormVisible: boolean = false;

  multistep = new FormGroup({
    personalDetails: new FormGroup({
      empID: new FormControl('', Validators.required),
      fname: new FormControl(''),
      lname: new FormControl(''),
      dob: new FormControl('')
    }),
    
    educationDetails: new FormGroup({
      yop: new FormControl(''),
      instituteName: new FormControl(''),
      percentage: new FormControl('')
    }),

    empHistoryDetails: new FormGroup({
      preCompanyName: new FormControl(''),
      role: new FormControl(''),
      startDate: new FormControl(''),
      endDate: new FormControl('')
    })
    
  })


  constructor() { }

  ngOnInit(): void {
  }

  // get personalDetails() {
  //   return this.multistep.controls['personalDetails']['controls'];
  // }

  submit() {
    if(this.multistep.controls['personalDetails'].invalid && this.isAddEmpFormVisible == true) {
      return;
    }
  }

  // previous() {
    
  // }

  addEmpFormClick(){
    this.isAddEmpFormVisible = false;
    this.isEduFormVisible = true;
  }

  empEduFormClick(){
    this.isAddEmpFormVisible = false;
    this.isEduFormVisible = false;
    this.isEmpHisFormVisible = true;
  }

  gotoPrevious2(){
    this.isAddEmpFormVisible = false;
    this.isEduFormVisible = true;
    this.isEmpHisFormVisible = false;
    console.log("674647878");
  }

  gotoPrevious1(){
      this.isAddEmpFormVisible = true;
      this.isEduFormVisible = false;
      this.isEmpHisFormVisible = false;
      console.log("Hello");
  }

}
