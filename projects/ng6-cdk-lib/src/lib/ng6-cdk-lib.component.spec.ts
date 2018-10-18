import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng6CdkLibComponent } from './ng6-cdk-lib.component';

describe('Ng6CdkLibComponent', () => {
  let component: Ng6CdkLibComponent;
  let fixture: ComponentFixture<Ng6CdkLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng6CdkLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng6CdkLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
