import { Component } from '@angular/core';
import { ThemeButton } from '../../../../../shared/components/theme-button';

@Component({
  selector: 'app-header',
  imports: [ThemeButton],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {}
