import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { filter } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private titleService: Title, private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.setTitleBasedOnRoute(this.router.url);
      });
  }

  setTitleBasedOnRoute(url: string) {
    if (url.includes('track-expense')) {
      this.titleService.setTitle('Track Expense | Tracky');
    } else if (url.includes('track-networth')) {
      this.titleService.setTitle('Track Networth | Tracky');
    } else if (url.includes('about')) {
      this.titleService.setTitle('About Us | Tracky');
    } else {
      this.titleService.setTitle('Home | Tracky');
    }
  }
}