import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { profile } from '../../../core/data/portfolio.data';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  readonly profile = profile;
}
