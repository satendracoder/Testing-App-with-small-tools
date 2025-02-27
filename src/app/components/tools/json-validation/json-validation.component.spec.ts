import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonValidationComponent } from './json-validation.component';

describe('JsonValidationComponent', () => {
  let component: JsonValidationComponent;
  let fixture: ComponentFixture<JsonValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JsonValidationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
