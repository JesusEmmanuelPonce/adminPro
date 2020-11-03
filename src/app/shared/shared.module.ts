import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BradcrumbsComponent } from './bradcrumbs/bradcrumbs.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    BradcrumbsComponent,
    SidebarComponent,
    HeaderComponent
  ],
  exports: [
    BradcrumbsComponent,
    SidebarComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
