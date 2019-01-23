import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreTableComponent } from './explore-table.component';

describe('ExploreTableComponent', () => {
  let component: ExploreTableComponent;
  let fixture: ComponentFixture<ExploreTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploreTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
