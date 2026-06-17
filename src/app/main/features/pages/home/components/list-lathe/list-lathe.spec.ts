import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLathe } from './list-lathe';

describe('ListLathe', () => {
  let component: ListLathe;
  let fixture: ComponentFixture<ListLathe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListLathe],
    }).compileComponents();

    fixture = TestBed.createComponent(ListLathe);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
