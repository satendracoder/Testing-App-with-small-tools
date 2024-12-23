import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgImageCardComponent } from './bg-image-card.component';

describe('BgImageCardComponent', () => {
  let component: BgImageCardComponent;
  let fixture: ComponentFixture<BgImageCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BgImageCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BgImageCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
