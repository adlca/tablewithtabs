import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableWithTabsComponent } from './table-with-tabs.component';

describe('TableWithTabsComponent', () => {
  let component: TableWithTabsComponent;
  let fixture: ComponentFixture<TableWithTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableWithTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableWithTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
