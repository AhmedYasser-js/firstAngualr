import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})


export class PortfolioComponent {
  imgs: Array<string> = ['assets/poert1.png', 'assets/port2.png', 'assets/port3.png', 'assets/poert1.png', 'assets/port2.png', 'assets/port3.png'];

  dneno: boolean = true;
  lightboxImage: string = ''; // Initialize empty

  appearLightbox(image: string) {
    this.lightboxImage = image; // Set the image source for the lightbox
    this.dneno = false; // Show the lightbox
  }

  toggleLightbox() {
    this.dneno = !this.dneno;
  }
}
