import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { UserComponent } from './auth/user/user.component';
import { HeadComponent } from './shared/head/head.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BreadcrumsComponent } from './shared/breadcrums/breadcrums.component';
import { ProductComponent } from './web/product/product.component';
import { CategoryComponent } from './web/category/category.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { DashboardComponent } from './web/dashboard/dashboard.component';
import { RegisterComponent } from './auth/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    HeadComponent,
    FooterComponent,
    BreadcrumsComponent,
    ProductComponent,
    CategoryComponent,
    SidebarComponent,
    DashboardComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
