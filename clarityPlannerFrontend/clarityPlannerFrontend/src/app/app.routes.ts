import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/tabs/quotations',
    pathMatch: 'full', // Default route redirects to tabs/quotations
  },
  {
    path: 'tabs',
    loadComponent: () =>
      import('./tabs/tabs.page').then((m) => m.TabsPage),
    children: [
      {
        path: 'quotations',
        loadComponent: () =>
          import('./components/quotation-list/quotation-list.component').then(
            (m) => m.QuotationListComponent
          ),
      },
      {
        path: 'add',
        loadComponent: () =>
          import('./components/quotation-form/quotation-form.component').then(
            (m) => m.QuotationFormComponent
          ),
      },
      {
        path: 'edit/:id',
        loadComponent: () =>
          import('./components/quotation-form/quotation-form.component').then(
            (m) => m.QuotationFormComponent
          ),
      },
      {
        path: 'summary',
        loadComponent: () =>
          import('./components/quotation-summary/quotation-summary.component').then(
            (m) => m.QuotationSummaryComponent
          ),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '/tabs/quotations', // Wildcard route to handle undefined paths
  },
];
