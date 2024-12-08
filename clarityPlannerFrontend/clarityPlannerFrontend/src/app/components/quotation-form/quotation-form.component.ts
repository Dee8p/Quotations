import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { QuotationService } from '../../services/quotation.service';
import { IonHeader } from "@ionic/angular/standalone";
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-quotation-form',
  standalone: true,
  imports:[IonicModule, ReactiveFormsModule],
  templateUrl: './quotation-form.component.html',
  styleUrls: ['./quotation-form.component.scss'],
})
export class QuotationFormComponent implements OnInit {
  quotationForm: FormGroup;
  isEditMode = false;

  constructor(
    private fb: FormBuilder,
    private quotationService: QuotationService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.quotationForm = this.fb.group({
      customerName: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', [Validators.email]],
      quotationID: ['', Validators.required],
      roomType: ['', Validators.required],
      width: ['', Validators.required],
      length: ['', Validators.required],
      color: ['', Validators.required],
      paintType: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.quotationService.getQuotations().subscribe((data) => {
        const quotation = data.find((q: any) => q._id === id);
        if (quotation) {
          this.quotationForm.patchValue(quotation);
        }
      });
    }
  }

  saveQuotation() {
    if (this.quotationForm.invalid) {
      return;
    }
  
    const formData = this.quotationForm.value;
  
    if (this.isEditMode) {
      const id = this.route.snapshot.paramMap.get('id');
      this.quotationService.editQuotation(id!, formData).subscribe(() => {
        this.router.navigate(['/quotations']).then(() => {
          window.location.reload(); // Reload the page after navigation
        });
      });
    } else {
      this.quotationService.addQuotation(formData).subscribe(() => {
        this.router.navigate(['/quotations']).then(() => {
          window.location.reload(); // Reload the page after navigation
        });
      });
    }
  }
  
}
