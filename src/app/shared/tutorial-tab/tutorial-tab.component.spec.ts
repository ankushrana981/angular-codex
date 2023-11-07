import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialTabComponent } from './tutorial-tab.component';

describe('TutorialTabComponent', () => {
  let component: TutorialTabComponent;
  let fixture: ComponentFixture<TutorialTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorialTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutorialTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
