import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { QuotationListComponent } from './components/quotation-list/quotation-list.component';
import { QuotationFormComponent } from './components/quotation-form/quotation-form.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, QuotationListComponent, QuotationFormComponent],
})
export class AppComponent {
  constructor() {}
}

// done only by Dhanajay Yadav.
