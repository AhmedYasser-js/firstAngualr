import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  paddingBlock: string = '25px';

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any) {
    const scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;
    const maxPadding = 25;
    const minPadding = 5;
    const scrollMax = 200;


    let newPadding = maxPadding - (scrollPosition / scrollMax) * (maxPadding - minPadding);


    newPadding = Math.max(newPadding, minPadding);


    this.paddingBlock = newPadding + 'px';
  }
}
