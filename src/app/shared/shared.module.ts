import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeadComponent } from './head/head.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumsComponent } from './breadcrums/breadcrums.component';


@NgModule({
  declarations: [
    SidebarComponent,
    HeadComponent,
    FooterComponent,
    BreadcrumsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SidebarComponent,
    HeadComponent,
    FooterComponent,
    BreadcrumsComponent
  ],
})
export class SharedModule { }
