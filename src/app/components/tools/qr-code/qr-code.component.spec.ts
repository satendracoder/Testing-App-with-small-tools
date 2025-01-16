import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QRCodeComponent } from './qr-code.component';

describe('QRCodeComponent', () => {
  let component: QRCodeComponent;
  let fixture: ComponentFixture<QRCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QRCodeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QRCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
