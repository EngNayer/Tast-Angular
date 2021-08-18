import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/service/api/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  items       : any     = []
  entries     : any     = []
  loader                = true

  constructor(private apiService : RestApiService) { }

  ngOnInit(): void {

    // this.apiService.getData('articles')
    //   .subscribe(
    //     data => {
    //       this.loader   = false
    //       this.items    = data.articles
    //       console.log('data', data.data.articles)
    //     },
    //     err => {
    //       this.loader = false
    //       console.log('err', err)
    //     }
    //   )


      this.apiService.getData('https://api.publicapis.org/entries')
      .subscribe(
        data => {
          this.entries = data.entries
        },
        err => {
          console.log('err', err)
        }
      )

    }  
     
  }