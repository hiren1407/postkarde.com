import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddetailsComponent } from './addetails.component';

describe('AddetailsComponent', () => {
  let component: AddetailsComponent;
  let fixture: ComponentFixture<AddetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
