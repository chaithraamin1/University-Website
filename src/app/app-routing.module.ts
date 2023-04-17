import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogComponent } from './blog/blog.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path:'about', component:AboutUsComponent},
   {path:'home', component:HomeComponent},
   {path:'courses',component:CoursesComponent},
   {path:'blog',component:BlogComponent},
   {path:'contact',component:ContactUsComponent},
   {path:'', component:HomeComponent,pathMatch:"full"}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
