import { afterNextRender, computed, Injectable, Signal, signal } from '@angular/core';
import { TTheme } from '../interfaces/theme-config';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly LOCALSTORAGE_KEY_THEME = 'actualTheme';

  private _theme = signal<TTheme>('darkMode');

  private getActualThemeLocalStorage() {
    return localStorage.getItem(this.LOCALSTORAGE_KEY_THEME);
  }

  private setThemeLocalStorage(nextTheme: TTheme) {
    return localStorage.setItem(this.LOCALSTORAGE_KEY_THEME, nextTheme);
  }

  get isDark(): Signal<boolean> {
    return computed(() => {
      return this._theme() == 'darkMode' ? true : false
    });
  }

  constructor() {
    afterNextRender(() => {
      this.getConfigLocalStorage();
      this.changeStyle()
    })
  }

  setConfig(nextTheme: TTheme) {
    this._theme.set(nextTheme);
    this.setThemeLocalStorage(nextTheme);
  }

  getConfigLocalStorage() {
    if (this.getActualThemeLocalStorage()) {
      const previousTheme = this.getActualThemeLocalStorage() as TTheme;
      this._theme.set(previousTheme);
    }
  }

  changeStyle() {
    if(this.isDark()) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }
}
