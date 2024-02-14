import { Component } from '@angular/core';
import { AuthService } from 'your-auth-service-path';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  currentLanguage: string = 'en'; // Default language is English
  languages: string[] = ['en', 'ar']; // Available languages, add more as needed

  constructor(private authService: AuthService) { }

  logout() {
    this.authService.logout(); // Implement logout functionality
  }

  toggleLanguage() {
    this.currentLanguage = this.currentLanguage === 'en' ? 'ar' : 'en';
    // Implement language change logic here
  }
}
