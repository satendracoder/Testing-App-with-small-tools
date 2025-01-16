import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordCountResultComponent } from './word-count-result.component';

describe('WordCountResultComponent', () => {
  let component: WordCountResultComponent;
  let fixture: ComponentFixture<WordCountResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordCountResultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordCountResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
