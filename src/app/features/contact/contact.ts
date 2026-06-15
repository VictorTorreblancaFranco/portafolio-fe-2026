import { Component } from '@angular/core';

import { profile, socialLinks } from '../../core/data/portfolio.data';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  readonly profile = profile;
  readonly socialLinks = socialLinks;
}
