import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiRoutingModule } from './ui-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RightmenuComponent } from './components/rightmenu/rightmenu.component';
import { RightMenuComponent } from './components/right-menu/right-menu.component';
import { LeftMenuComponent } from './components/left-menu/left-menu.component';
import { StoryComponent } from './components/story/story.component';
import { LayoutComponent } from './layout/layout.component';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, RightmenuComponent, RightMenuComponent, LeftMenuComponent, StoryComponent, LayoutComponent],
  imports: [
    CommonModule,
    UiRoutingModule
  ]
})
export class UiModule { }
