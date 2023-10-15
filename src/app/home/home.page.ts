import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Title, Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, RouterLink],
})
export class HomePage {
  constructor( private titleService: Title, private metaService: Meta) {}

  ngOnInit(){

    this.titleService.setTitle('Home');
   // Twitter
  /* this.metaService.updateTag({ property: 'twitter:card', content: 'summary_large_image' });
   this.metaService.updateTag({ property: 'twitter:title', content: 'NEW ARTICLE OUT NOW' });
   this.metaService.updateTag({ property: 'twitter:description', content: 'Check out this cool article' });
   this.metaService.updateTag({ property: 'twitter:image', content: '' });
   // Facebook
   this.metaService.updateTag({ property: 'og:url', content: '/second' });
   this.metaService.updateTag({ property: 'og:type', content: 'website' });
   this.metaService.updateTag({ property: 'og:description', content: 'My Ionic SSR Page' });
   this.metaService.updateTag({ property: 'og:title', content: 'My SSR Title!' });
   this.metaService.updateTag({ property: 'og:image', content: 'https://i0.wp.com/devdactic.com/wp-content/uploads/2020/05/ionic-in-app-purchase-capacitor.webp?w=1620&ssl=1' });*/
   //keywords
   this.metaService.addTags([
     { name: 'keywords', content: 'Isle of Bute holiday, accommodation, hotel, things to do' },
     { name: 'robots', content: 'index, follow' },
     { name: 'description', content: 'Art retreat in a beautiful location on the Isle of Bute' },
     { name: 'author', content: 'buteartretreat.co.uk' },
     { name: 'viewport', content: 'width=device-width, initial-scale=1' },
     { name: 'date', content: '2023-04-02', scheme: 'YYYY-MM-DD' },
     { charset: 'UTF-8' }
   ]);


  }
}
