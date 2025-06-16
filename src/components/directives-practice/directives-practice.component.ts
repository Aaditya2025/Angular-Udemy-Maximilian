import { Component } from '@angular/core';

@Component({
  selector: 'app-directives-practice',
  templateUrl: './directives-practice.component.html',
  styleUrl: './directives-practice.component.css'
})
export class DirectivesPracticeComponent {
showDetails = false;
logClicks: string[] = [];

toggleDetails() {
  this.showDetails = !this.showDetails;
  this.logClicks.push(new Date().toLocaleTimeString());
}

}

