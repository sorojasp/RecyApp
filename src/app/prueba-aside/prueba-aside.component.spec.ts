import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaAsideComponent } from './prueba-aside.component';

describe('PruebaAsideComponent', () => {
  let component: PruebaAsideComponent;
  let fixture: ComponentFixture<PruebaAsideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PruebaAsideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
