import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { certifications, profile, projects, socialLinks, techCategories, timeline } from '../../core/data/portfolio.data';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  readonly profile = profile;
  readonly socialLinks = socialLinks;
  readonly techCategories = techCategories;
  readonly projects = projects;
  readonly timeline = timeline;
  readonly certifications = certifications;
}
