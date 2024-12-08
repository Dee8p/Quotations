import { Component, OnInit } from '@angular/core';
import { QuotationService } from '../../services/quotation.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonCol, IonHeader, IonToolbar, IonTitle } from "@ionic/angular/standalone";
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-quotation-list',
  standalone: true,
  imports: [IonicModule,CommonModule, RouterModule],
  templateUrl: './quotation-list.component.html',
  styleUrls: ['./quotation-list.component.scss'],
})
export class QuotationListComponent implements OnInit {
  quotations: any[] = [];

  constructor(private quotationService: QuotationService) {}

  ngOnInit(): void {
    this.fetchQuotations();
  }

  fetchQuotations() {
    this.quotationService.getQuotations().subscribe((data) => {
      console.log(data);
      
      this.quotations = data;
    });
  }

  deleteQuotation(id: string) {
    this.quotationService.deleteQuotation(id).subscribe(() => {
      this.fetchQuotations();
    });
  }
}
