import { MediaMatcher } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent implements OnInit {
  // opciones que va a tener el SidNav
  menuNav = [
    { name: 'Home', route: 'home', icon: 'home' },
    { name: 'Carreras', route: 'carreras', icon: 'category' },
    { name: 'Examenes Admisión', route: 'examenes', icon: 'psychology_alt' },
  ];

  mobileQuery: MediaQueryList;

  // para darle el ancho al sideNav
  constructor(media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
  }

  ngOnInit(): void {}
}
