import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  step: any = 1;
  // flages for show forms

  isAddEmpFormVisible :boolean = true;
  isEduFormVisible: boolean = false;
  isEmpHisFormVisible: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  submit() {
    this.step = this.step + 1;
  }

  previous() {
    this.step = this.step - 1;
  }
  addEmpFormClick(){
    this.isAddEmpFormVisible = false
    this.isEduFormVisible = true
    
  }
  empEduFormClick(){
    this.isAddEmpFormVisible = false
    this.isEduFormVisible = false
    this.isEmpHisFormVisible = true
    
  }
  gotoPrevious2(){
    this.isAddEmpFormVisible = false
    this.isEduFormVisible = true
    this.isEmpHisFormVisible = false
    console.log("674647878")
  }
  gotoPrevious1(){
      this.isAddEmpFormVisible = true
      this.isEduFormVisible = false
      this.isEmpHisFormVisible = false
      console.log("hejdikej")
  }

}
