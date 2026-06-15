import { Component } from '@angular/core';

import { profile, socialLinks } from '../../../core/data/portfolio.data';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  readonly profile = profile;
  readonly socialLinks = socialLinks;
  readonly year = new Date().getFullYear();
}
