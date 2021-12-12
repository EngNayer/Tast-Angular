import { Component, OnInit } from '@angular/core';
//For Translation
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  setLang = localStorage.getItem('lang')

  constructor(private translate : TranslateService){}

  ngOnInit(): void {
    
    window.addEventListener('scroll', () => {

      let headerTop:any             = document.getElementById('header-top');
      if(window.scrollY > 50){
        headerTop.classList.add("active-top");
      }else {
        headerTop.classList.remove("active-top");
      }
    });
  }

  switchLanguage(lang: string) {
    location.reload();
    localStorage.setItem('lang',lang)
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
    if(lang == 'en'){
      document.body.setAttribute("dir", "ltr");
    }else{
      document.body.setAttribute("dir", "rtl");
    }
  }

}
