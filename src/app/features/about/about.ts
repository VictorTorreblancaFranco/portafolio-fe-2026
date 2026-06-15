import { Component } from '@angular/core';

import { certifications, profile, timeline } from '../../core/data/portfolio.data';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {
  readonly profile = profile;
  readonly timeline = timeline;
  readonly certifications = certifications;
  readonly featuredCertification = certifications[certifications.length - 1];
}
