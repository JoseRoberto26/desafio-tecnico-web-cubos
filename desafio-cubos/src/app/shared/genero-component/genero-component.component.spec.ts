import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneroComponentComponent } from './genero-component.component';

describe('GeneroComponentComponent', () => {
  let component: GeneroComponentComponent;
  let fixture: ComponentFixture<GeneroComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneroComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneroComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
