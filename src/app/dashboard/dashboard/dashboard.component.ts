import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MonthlyListenersComponent } from '../charts/monthly-listeners/monthly-listeners.component';
import { TopListenersComponent } from '../charts/top-listeners/top-listeners.component';
import { RecentUpdatesComponent } from '../recent-updates/recent-updates.component';
import { UpcomingEventsComponent } from '../upcoming-events/upcoming-events.component';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    RouterOutlet,
    MatButtonModule,
    MatCardModule,
    MonthlyListenersComponent,
    TopListenersComponent,
    RecentUpdatesComponent,
    UpcomingEventsComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {}
