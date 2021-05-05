import { Component } from '@angular/core';
import { InfoPageService } from './services/info-page.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'html-to-angular';

  constructor(public _infoPageSevice: InfoPageService) {

  }
}
