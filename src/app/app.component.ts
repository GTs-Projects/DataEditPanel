import {
  Component,
  ComponentRef,
  importProvidersFrom,
  viewChild,
} from '@angular/core';
import { IData } from '../interfaces/data.model';
import { ActiveStatus } from '../interfaces/status.enum';
import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import {
  ModalOptions,
  NzModalFooterComponent,
  NzModalRef,
  NzModalService,
} from 'ng-zorro-antd/modal';
import { TableComponent } from './table/table.component';
import { NgClass, formatDate } from '@angular/common';
import { EditComponent } from './edit/edit.component';
import { ModalButtonOptions } from 'ng-zorro-antd/modal';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { OnInit } from '@angular/core';
import { ModelOptions } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

// <EditComponent (clickToChangeData)="addItem($event)"></EditComponent>
export class AppComponent implements OnInit {
  title = 'ProjectIO';

  users: IData[] | any = [
    // {
    //   id: 1,
    //   name: 'John',
    //   lastName: 'Smith',
    //   email: 'john@gmail.com',
    //   companyName: 'google',
    //   roleInCompany: 'Quality Engineer',
    //   companySize: '11 - 50',
    //   active: ActiveStatus.Active,
    //   provider: 'JWT',
    //   regDate: new Date().getDate(),
    // },
    // {
    //   id: 2,
    //   name: 'Jane',
    //   lastName: 'doe',
    //   email: 'doe@gmail.com',
    //   companyName: 'microsoft',
    //   roleInCompany: 'Tester',
    //   companySize: '25 - 80',
    //   active: ActiveStatus.Active,
    //   provider: 'IDK',
    //   regDate: new Date().getDate(),
    // },
    // {
    //   id: 3,
    //   name: 'Jim',
    //   lastName: 'Carter',
    //   email: 'carter@gmail.com',
    //   companyName: 'apple',
    //   roleInCompany: 'Developer',
    //   companySize: '50 - 90',
    //   active: ActiveStatus.NotActive,
    //   provider: 'ACT',
    //   regDate: new Date().getDate(),
    // },
  ];

  constructor(private _modal: NzModalService) {}

  detailUser(user: IData) {
    this._modal.create({
      nzTitle: `Name: ${user.name} ${user.lastName}`,
      nzContent: `<p>Email:  ${user.email}</p>
      <p>Company:  ${user.companyName}</p>
      <p>Job:  ${user.roleInCompany}</p>
      <p>Company Size:  ${user.companySize}</p>
      <p>Status:  ${user.active ? 'Not Active' : 'Active'}</p>
      <p>Provider:  ${user.provider}</p>
      <p>Registration Date:  ${user.regDate}</p>

      `,
    });
  }

  ngOnInit() {
    // Retrieve data from localStorage
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      this.users = JSON.parse(storedUsers);
    } else {
      // If no data found in localStorage, initialize with default data
      this.initializeUsers();
    }
  }

  initializeUsers() {
    this.users = [
      {
        id: 1,
        name: 'John',
        lastName: 'Smith',
        email: 'john@gmail.com',
        companyName: 'google',
        roleInCompany: 'Quality Engineer',
        companySize: '11 - 50',
        active: ActiveStatus.Active,
        provider: 'JWT',
        regDate: new Date().getDate(),
      },
      {
        id: 2,
        name: 'Jane',
        lastName: 'doe',
        email: 'doe@gmail.com',
        companyName: 'microsoft',
        roleInCompany: 'Tester',
        companySize: '25 - 80',
        active: ActiveStatus.Active,
        provider: 'IDK',
        regDate: new Date().getDate(),
      },
      {
        id: 3,
        name: 'Jim',
        lastName: 'Carter',
        email: 'carter@gmail.com',
        companyName: 'apple',
        roleInCompany: 'Developer',
        companySize: '50 - 90',
        active: ActiveStatus.NotActive,
        provider: 'ACT',
        regDate: new Date().getDate(),
      },
      // Add other initial user data here
    ];
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  editUser(user: IData) {
    const instance: NzModalRef = this._modal.create({
      nzTitle: `Editing ${user.name} ${user.lastName}`,
      nzContent: EditComponent,
      nzFooter: null,
    });

    if (instance) {
      instance.componentRef!.instance.clickToCancel.subscribe(() => {
        instance.close();
      });
      instance.componentInstance.userData = { ...user }; // Ensure to pass a copy of user data
      instance.componentInstance.saveEdit.subscribe(
        (updatedUserData: IData) => {
          this.updateUser(updatedUserData); // Update original user data
          instance.close(); // Close the modal after saving the changes
        }
      );
    }
  }

  updateUser(updatedUserData: IData) {
    const index = this.users.findIndex(
      (u: IData) => u.id === updatedUserData.id
    );
    if (index !== -1) {
      this.users[index] = { ...updatedUserData };
      localStorage.setItem(`users`, JSON.stringify(this.users));
    }
  }

  resetPassword(user: IData) {
    alert(`Resetting password for: ${user.name} ${user.lastName}`);
  }

  bonusSeconds(user: IData) {
    alert(`Congratulations ${user.name} have more 2 seconds to bonus`);
  }

  saspendUser(user: IData) {
    alert(`You saspended ${user.name} ${user.lastName} account`);
  }

  deleteUser(user: IData) {}
}
