import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'quotations',
    pathMatch: 'full',
  },
  {
    path: 'quotations',
    loadComponent: () =>
      import('../components/quotation-list/quotation-list.component').then(
        (m) => m.QuotationListComponent
      ),
  },
  {
    path: 'add',
    loadComponent: () =>
      import('../components/quotation-form/quotation-form.component').then(
        (m) => m.QuotationFormComponent
      ),
  },
  {
    path: 'edit/:id',
    loadComponent: () =>
      import('../components/quotation-form/quotation-form.component').then(
        (m) => m.QuotationFormComponent
      ),
  },
  {
    path: 'summary',
    loadComponent: () =>
      import('../components/quotation-summary/quotation-summary.component').then(
        (m) => m.QuotationSummaryComponent
      ),
  },
];
