import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { BlogComponent } from './blog/blog.component';
import { ContactUsComponent } from './contact-us/contact-us.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    HomeComponent,
    CoursesComponent,
    BlogComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
