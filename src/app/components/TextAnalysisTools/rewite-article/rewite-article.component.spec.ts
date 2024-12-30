import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RewiteArticleComponent } from './rewite-article.component';

describe('RewiteArticleComponent', () => {
  let component: RewiteArticleComponent;
  let fixture: ComponentFixture<RewiteArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RewiteArticleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RewiteArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
