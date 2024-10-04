import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { StudentService } from 'src/app/services/student/student.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  createStudentForm: UntypedFormGroup;

  constructor(
    public fb: UntypedFormBuilder,
    private studentService: StudentService) {

    this.createStudentForm = this.fb.group({
      registrationType: [''],
      fullName: [''],
      socialName: [''],
      birthDate: [''],

      docRg: [''],
      docCpf: [''],

      cellphoneNumber: [''],
      phoneNumber: [''],
      email: [''],
      emailCpm: [''],

      cepNumber: [''],
      neighborhood: [''],
      city: [''],

      responsibleFullName: [''],
      responsibleCellphoneNumber: [''],
      responsibleEmail: [''],

      fundamentalSchool: [''],
      fundamentalSchoolType: [''],
      highSchool: [''],
      highSchoolType: [''],
      currentSchool: [''],
      currentSchoolType: [''],
      status: {
        type: Boolean,
        default: true
      }
    })
  }

  ngOnInit(): void {
    console.log(this.createStudentForm.value);
  }

  changeType(value) {
    console.log(value);
    // console.log(this.createStudentForm.value);
  }

  createUser() {

    const basicInfo = {
      registrationType: this.createStudentForm.get('registrationType').value,
      fullName: this.createStudentForm.get('fullName').value,
      socialName: this.createStudentForm.get('socialName').value,
      birthDate: this.createStudentForm.get('birthDate').value
    };

    const docsInfo = {
      docRg: this.createStudentForm.get('docRg').value,
      docCpf: this.createStudentForm.get('docCpf').value,
    };

    const contactInfo = {
      cellphoneNumber: this.createStudentForm.get('cellphoneNumber').value,
      phoneNumber: this.createStudentForm.get('phoneNumber').value,
      email: this.createStudentForm.get('email').value,
      emailCpm: this.createStudentForm.get('emailCpm').value,
    }

    const addressInfo = {
      cepNumber: this.createStudentForm.get('cepNumber').value,
      neighborhood: this.createStudentForm.get('neighborhood').value,
      city: this.createStudentForm.get('city').value,
    };

    const responsibleInfo = {
      responsibleFullName: this.createStudentForm.get('responsibleFullName').value,
      responsibleCellphoneNumber: this.createStudentForm.get('responsibleCellphoneNumber').value,
      responsibleEmail: this.createStudentForm.get('responsibleEmail').value,
    };

    const schoolInfo = {
      fundamentalSchool: this.createStudentForm.get('fundamentalSchool').value,
      fundamentalSchoolType: this.createStudentForm.get('fundamentalSchoolType').value,
      highSchool: this.createStudentForm.get('highSchool').value,
      highSchoolType: this.createStudentForm.get('highSchoolType').value,
      currentSchool: this.createStudentForm.get('currentSchool').value,
      currentSchoolType: this.createStudentForm.get('currentSchoolType').value,
      status: {
        type: Boolean,
        default: true
      }
    }

    const sendUserObj = { basicInfo, docsInfo, contactInfo, addressInfo, responsibleInfo, schoolInfo }

    this.studentService.createStudent(sendUserObj).subscribe(res => {
      console.log(res);
    })
  }

}
