import {
  Component,
  ViewEncapsulation,
  output,
  input
} from '@angular/core';
import { TablerIconsModule } from 'angular-tabler-icons';
import { MaterialModule } from 'src/app/material.module';
import { RouterModule } from '@angular/router';

import { NgScrollbarModule } from 'ngx-scrollbar';

@Component({
    selector: 'app-header',
    imports: [RouterModule, NgScrollbarModule, TablerIconsModule, MaterialModule],
    templateUrl: './header.component.html',
    encapsulation: ViewEncapsulation.None
})
export class HeaderComponent {
  readonly showToggle = input(true);
  readonly toggleChecked = input(false);
  readonly toggleMobileNav = output<void>();
  readonly toggleMobileFilterNav = output<void>();
  readonly toggleCollapsed = output<void>();
}