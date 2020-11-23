import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowadsComponent } from './showads.component';

describe('ShowadsComponent', () => {
  let component: ShowadsComponent;
  let fixture: ComponentFixture<ShowadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
