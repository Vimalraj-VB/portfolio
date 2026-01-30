import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    let isLight = false;

    // Check local storage only in browser environment
    if (isPlatformBrowser(this.platformId)) {
      const savedTheme = localStorage.getItem('theme');
      isLight = savedTheme === 'light';
    }

    this.theme.next(isLight);
    this.updateBodyClass(isLight);

    this.theme.subscribe((isLightMode) => {
      this.updateBodyClass(isLightMode);
      if (isPlatformBrowser(this.platformId)) {
        localStorage.setItem('theme', isLightMode ? 'light' : 'dark');
      }
    });
  }

  theme = new BehaviorSubject<boolean>(false);

  private updateBodyClass(isLight: boolean) {
    if (isLight) {
      this.document.body.classList.add('light-theme');
    } else {
      this.document.body.classList.remove('light-theme');
    }
  }
}
