import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminhomedataComponent } from './adminhomedata.component';

describe('AdminhomedataComponent', () => {
  let component: AdminhomedataComponent;
  let fixture: ComponentFixture<AdminhomedataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminhomedataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminhomedataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
