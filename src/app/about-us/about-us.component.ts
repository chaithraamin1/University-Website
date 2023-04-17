import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

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
