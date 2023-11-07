import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularTutorialComponent } from './popular-tutorial.component';

describe('PopularTutorialComponent', () => {
  let component: PopularTutorialComponent;
  let fixture: ComponentFixture<PopularTutorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopularTutorialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
