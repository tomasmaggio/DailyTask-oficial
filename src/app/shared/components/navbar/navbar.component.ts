import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']

})


export class NavbarComponent {
  isSidebarClosed = false;
  isDarkMode = false;

  toggleSidebar() {
    this.isSidebarClosed = !this.isSidebarClosed;
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    const body = document.querySelector('body');
    if (body) {
      body.classList.toggle('dark', this.isDarkMode);
    }
  }
}