import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualiteList } from './actualite-list';

describe('ActualiteList', () => {
  let component: ActualiteList;
  let fixture: ComponentFixture<ActualiteList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActualiteList],
    }).compileComponents();

    fixture = TestBed.createComponent(ActualiteList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
