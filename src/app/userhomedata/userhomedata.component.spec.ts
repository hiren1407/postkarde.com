import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserhomedataComponent } from './userhomedata.component';

describe('UserhomedataComponent', () => {
  let component: UserhomedataComponent;
  let fixture: ComponentFixture<UserhomedataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserhomedataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserhomedataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
