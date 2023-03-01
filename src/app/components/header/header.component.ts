import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  sections: string[] = ['Personal Information', 'Adress', 'Payment'];
  currentSection: number = 0;

  // isActive(sectionIndex: number){
  //   return this.sections.[sectionIndex] === this.currentSection
  // }
}
