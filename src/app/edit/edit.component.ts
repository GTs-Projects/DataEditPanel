import { Component, Input, Output, OnInit } from '@angular/core';
import { IData } from '../../interfaces/data.model';
import { ActiveStatus } from '../../interfaces/status.enum';
import { EventEmitter } from '@angular/core';
import { TableComponent } from '../table/table.component';
import { AppComponent } from '../app.component';

import {
  FormGroup,
  NgModel,
  FormsModule,
  ReactiveFormsModule,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { NgForm } from '@angular/forms';

import { Form } from '@angular/forms';
import { NzModalComponent, NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss',
})
export class EditComponent implements OnInit {
  constructor(private modalRef: NzModalRef) {}

  closeModal() {
    this.modalRef.close();
  }

  @Input() userData: IData | any;
  @Input() id: number = 0;
  @Input() name: string = '';
  @Input() lastName: string = '';
  @Input() email: string = '';
  @Input() companyName: string = '';
  @Input() roleInCompany: string = '';
  @Input() companySize: string = '';
  @Input() active: ActiveStatus = ActiveStatus.NotActive;
  @Input() provider: string = '';
  @Input() regDate: Date | number = new Date();

  // @Input() userData: IData | any;

  editedUserData: IData | any = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    companyName: new FormControl(''),
    roleInCompany: new FormControl(''),
    companySize: new FormControl(''),
    active: new FormControl(''),
    provider: new FormControl(''),
    regDate: new FormControl(''),
  });

  @Output() clickToCancel = new EventEmitter<IData>();
  @Output() saveEdit = new EventEmitter<IData>();

  onSave() {
    this.saveEdit.emit(this.editedUserData.value);
    this.closeModal(); // You need to define this method to close the modal
  }

  buttonClicked() {
    this.clickToCancel.emit();
  }

  ngOnInit() {
    this.editedUserData = new FormGroup({
      id: new FormControl(this.userData.id),
      name: new FormControl(this.userData.name),
      lastName: new FormControl(this.userData.lastName),
      email: new FormControl(this.userData.email),
      companyName: new FormControl(this.userData.companyName),
      roleInCompany: new FormControl(this.userData.roleInCompany),
      companySize: new FormControl(this.userData.companySize),
      active: new FormControl(this.userData.active),
      provider: new FormControl(this.userData.provider),
      regDate: new FormControl(this.userData.regDate),
    });
  }
}
