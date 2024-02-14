// app.component.ts
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit  {
    //dtOptions: DataTables.Settings = {};
    users: any[] = [];
    http: any;
  
  constructor(private translateService: TranslateService) {
    // Set the default language
    this.translateService.setDefaultLang('en');
    
  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };

   // this.http.get<any[]>('YOUR_API_ENDPOINT')
      //.subscribe(users => {
       // this.users = users;
      //});
  }

  switchLanguage(language: string) {
    // Change the language
    this.translateService.use(language);
    // Adjust layout for right-to-left languages
    if (language === 'ar') {
        document.body.setAttribute('dir', 'rtl');
      } else {
        document.body.setAttribute('dir', 'ltr');
  }
}



  
  }
  
  



