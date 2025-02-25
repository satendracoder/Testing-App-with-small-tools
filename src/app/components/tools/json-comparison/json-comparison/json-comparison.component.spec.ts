import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonComparisonComponent } from './json-comparison.component';

describe('JsonComparisonComponent', () => {
  let component: JsonComparisonComponent;
  let fixture: ComponentFixture<JsonComparisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JsonComparisonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
