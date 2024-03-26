import { Component, Input, OnInit } from '@angular/core';
import { ActiveStatus } from '../../interfaces/status.enum';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { IData } from '../../interfaces/data.model';
import { EditComponent } from '../edit/edit.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  @Input() user!: IData;
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

  @Output() userDetails = new EventEmitter<IData>();
  detailUser() {
    this.userDetails.emit(this.user);
  }

  @Output() userEdit = new EventEmitter<IData>();
  editUser() {
    this.userEdit.emit(this.user);
  }

  @Output() userPassword = new EventEmitter<IData>();
  resetPassword() {
    this.userPassword.emit(this.user);
  }

  @Output() userBonus = new EventEmitter<IData>();
  bonusSeconds() {
    this.userBonus.emit(this.user);
  }

  @Output() userSaspend = new EventEmitter<IData>();
  saspendUser() {
    this.userSaspend.emit(this.user);
  }

  @Output() userDelete = new EventEmitter<IData>();
  deleteUser() {
    this.userDelete.emit(this.user);
  }

 

 
}
