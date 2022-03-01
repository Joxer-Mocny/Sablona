import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheFNavigationComponent } from './the-f-navigation.component';

describe('TheFNavigationComponent', () => {
  let component: TheFNavigationComponent;
  let fixture: ComponentFixture<TheFNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheFNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheFNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
