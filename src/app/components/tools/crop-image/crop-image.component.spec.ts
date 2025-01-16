import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CropImageComponent } from './crop-image.component';

describe('CropImageComponent', () => {
  let component: CropImageComponent;
  let fixture: ComponentFixture<CropImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CropImageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CropImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
