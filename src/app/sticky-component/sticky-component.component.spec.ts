import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StickyComponentComponent } from './sticky-component.component';

describe('StickyComponentComponent', () => {
  let component: StickyComponentComponent;
  let fixture: ComponentFixture<StickyComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StickyComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StickyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
