import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfDesignComponent } from './pdf-design.component';

describe('PdfDesignComponent', () => {
  let component: PdfDesignComponent;
  let fixture: ComponentFixture<PdfDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PdfDesignComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PdfDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
