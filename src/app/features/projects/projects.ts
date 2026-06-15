import { Component } from '@angular/core';

import { projects, techCategories } from '../../core/data/portfolio.data';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {
  readonly projects = projects;
  readonly techCategories = techCategories;
}
