import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  hideMenu(){
    var navLinks:any=document.getElementById("navLinks");
    navLinks.style.right="-200px";
 }
 showMenu(){
   var navLinks:any=document.getElementById("navLinks");
   navLinks.style.right="0px";
 }


}
