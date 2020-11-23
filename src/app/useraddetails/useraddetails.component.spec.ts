import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseraddetailsComponent } from './useraddetails.component';

describe('UseraddetailsComponent', () => {
  let component: UseraddetailsComponent;
  let fixture: ComponentFixture<UseraddetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseraddetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseraddetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
