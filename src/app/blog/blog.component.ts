import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

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
