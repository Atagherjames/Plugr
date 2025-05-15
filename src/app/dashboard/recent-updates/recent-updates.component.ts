import { Component } from '@angular/core';

interface Update {
  iconClass: string;
  message: string;
  time: string;
}

@Component({
  selector: 'app-recent-updates',
  standalone: true,
  imports: [],
  templateUrl: './recent-updates.component.html',
  styleUrl: './recent-updates.component.css',
})
export class RecentUpdatesComponent {}
