import { Component } from '@angular/core';

import { MenubarConfigService } from './menubar-config.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private menu: MenubarConfigService) {}

  getMenuItems() {
    return this.menu.getMenuItems();
  }
}
