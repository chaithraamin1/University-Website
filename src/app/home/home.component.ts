import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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
