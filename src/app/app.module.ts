import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NzModalService } from 'ng-zorro-antd/modal';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TableComponent } from './table/table.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { EditComponent } from './edit/edit.component';
import {
  FormGroup,
  NgModel,
  ReactiveFormsModule,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
registerLocaleData(en);

@NgModule({
  declarations: [AppComponent, TableComponent, EditComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NzModalModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    provideAnimationsAsync(),
    provideHttpClient(),
    NzModalService,
    EditComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
