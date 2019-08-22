import { Component } from '@angular/core';
import { HttpClient } from '@Angular/common/http';
import { AppState } from './state';
import { Store } from '@ngrx/store';
import { configure } from './state/config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  configURL = 'assets/config.json';

  constructor( private httpClient: HttpClient, private store: Store<AppState>) {

      this.httpClient.get(this.configURL).subscribe((config: any) => {
      this.store.dispatch(configure({apiUrl: config.apiUrl}));

      });
  }

}
