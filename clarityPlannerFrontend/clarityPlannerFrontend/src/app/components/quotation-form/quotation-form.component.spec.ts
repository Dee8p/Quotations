import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { QuotationFormComponent } from './quotation-form.component';

describe('QuotationFormComponent', () => {
  let component: QuotationFormComponent;
  let fixture: ComponentFixture<QuotationFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [QuotationFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(QuotationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
