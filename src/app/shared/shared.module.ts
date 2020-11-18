import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { DividerComponent } from './divider/divider.component';
import { MaterialModule } from '../material/material.module';
import { MenubarComponent } from './menubar/menubar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FooterComponent } from './footer/footer.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [DividerComponent, MenubarComponent, FooterComponent, ButtonComponent],
  imports: [

    CommonModule,
    MaterialModule,
    FlexLayoutModule,
  ],
  exports: [DividerComponent, MenubarComponent, FooterComponent],
})
export class SharedModule {}
