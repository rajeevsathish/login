import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components';
import { HttpClientModule } from '@angular/common/http';

import { PublicRoutingModule } from './public-routing.module';
import {SuiDropdownModule, SuiDimmerModule} from 'ng2-semantic-ui';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    PublicRoutingModule,
    HttpClientModule,
    SuiDropdownModule,
    SuiDimmerModule,
    FormsModule
  ],
  declarations: [LoginComponent]
})
export class PublicModule { }
