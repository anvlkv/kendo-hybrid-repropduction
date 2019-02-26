import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboWrapperComponent } from './combo-wrapper.component';

describe('ComboWrapperComponent', () => {
  let component: ComboWrapperComponent;
  let fixture: ComponentFixture<ComboWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComboWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComboWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
