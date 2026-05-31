import { Component, inject } from '@angular/core';
import { ThemeService } from './service/theme-service';
import { TTheme } from './interfaces/theme-config';

@Component({
  selector: 'app-theme-button',
  imports: [],
  templateUrl: './theme-button.html',
  styleUrl: './theme-button.scss',
})
export class ThemeButton {
  themeService = inject(ThemeService);

  changeTheme() {
    const nextTheme : TTheme = this.themeService.isDark() ? 'lightMode' : 'darkMode';
    this.themeService.setConfig(nextTheme);
    this.themeService.changeStyle();
  }

}
