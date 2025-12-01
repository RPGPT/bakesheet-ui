import {
  Component,
  Input,
  OnInit,
  ViewChild,
  output
} from '@angular/core';
import { BrandingComponent } from './branding.component';

import { TablerIconsModule } from 'angular-tabler-icons';
import { MaterialModule } from 'src/app/material.module';

@Component({
    selector: 'app-sidebar',
    imports: [BrandingComponent, TablerIconsModule, MaterialModule],
    templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  constructor() {}
  @Input() showToggle = true;
  readonly toggleMobileNav = output<void>();
  readonly toggleCollapsed = output<void>();

  ngOnInit(): void {}
}