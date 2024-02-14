import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  groups = [
    { name: 'Group 1', links: ['Link 1', 'Link 2', 'Link 3'], expanded: false },
    { name: 'Group 2', links: ['Link 4', 'Link 5', 'Link 6'], expanded: false }
  ];

  toggleGroup(group): void {
    group.expanded = !group.expanded;
  }
}
