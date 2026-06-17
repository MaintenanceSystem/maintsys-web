import { Component } from '@angular/core';
import { Header, ListLathe } from './index';
import { SearchBar } from './components/search-bar/search-bar';

@Component({
  selector: 'app-home',
  imports: [Header, ListLathe,SearchBar],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
