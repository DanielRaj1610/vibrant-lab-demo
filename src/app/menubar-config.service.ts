import { Injectable } from '@angular/core';

interface MenuItem {
  label: string;
  icon: string;
  link: string;
  showOnMobile: boolean;
  showOnTablet: boolean;
  showOnDesktop: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class MenubarConfigService {
  constructor() {}

  menuItems: MenuItem[] = [
    {
      label: 'Home',
      icon: 'home',
      link: '',
      showOnMobile: true,
      showOnTablet: true,
      showOnDesktop: true,
    },
    {
      label: 'About',
      icon: 'help',
      link: '/about',
      showOnMobile: false,
      showOnTablet: true,
      showOnDesktop: true,
    },
    {
      label: 'Demo',
      icon: 'preview',
      link: '/demo',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: true,
    },
    {
      label: 'Docs',
      icon: 'notes',
      link: '',
      showOnMobile: false,
      showOnTablet: true,
      showOnDesktop: true,
    },
    {
      label: 'Showcase',
      icon: 'slideshow',
      link: '',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: true,
    },
    {
      label: 'Blog',
      icon: 'rss_feed',
      link: '',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: false,
    },
  ];

  public getMenuItems() {
    return this.menuItems;
  }
}
