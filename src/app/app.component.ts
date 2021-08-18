import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

//For Translation
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  loading = true;
  constructor(private translate : TranslateService){
    if(localStorage.getItem('lang') === 'en')
    {
      document.body.setAttribute("dir", "ltr");
      translate.setDefaultLang('en');
      this.translate.setDefaultLang('en');
      this.translate.use('en');
    }else{
      document.body.setAttribute("dir", "rtl");
      translate.setDefaultLang('ar');
      this.translate.setDefaultLang('ar');
      this.translate.use('ar');
    }

  }
  ngOnInit(){
    this.loading = false;
    AOS.init();
  }
}
