import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  originalContent = '<div #foo copy [copyValue]="newContent">Text to replace</div>'
  newContent = '<a class="crypto"><span>I\'m a link</span></a>';

  constructor() {}

  ngOnInit() {}

}
