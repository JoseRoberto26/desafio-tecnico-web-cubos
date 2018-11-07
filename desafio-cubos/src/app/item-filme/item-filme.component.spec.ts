import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemFilmeComponent } from './item-filme.component';

describe('ItemFilmeComponent', () => {
  let component: ItemFilmeComponent;
  let fixture: ComponentFixture<ItemFilmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemFilmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemFilmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
