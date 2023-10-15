import { Component } from '@angular/core';
import {AutoCompleteCompleteEvent} from 'primeng/autocomplete';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  items: any[] | undefined = ["this", "is", "test", "data"];

  constructor(private router:Router) {

  }

  selectedItem: any;

  suggestions: any[] = [];

  search(event: AutoCompleteCompleteEvent) {
    this.suggestions = [...Array(10).keys()].map(item => event.query + '-' + item);
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
