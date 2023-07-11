import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiAppbarComponent } from './ui-appbar.component';

describe('UiAppbarComponent', () => {
  let component: UiAppbarComponent;
  let fixture: ComponentFixture<UiAppbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UiAppbarComponent]
    });
    fixture = TestBed.createComponent(UiAppbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
