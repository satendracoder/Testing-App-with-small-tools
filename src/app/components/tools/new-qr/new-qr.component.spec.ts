import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewQrComponent } from './new-qr.component';

describe('NewQrComponent', () => {
  let component: NewQrComponent;
  let fixture: ComponentFixture<NewQrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewQrComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewQrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
