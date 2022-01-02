import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListepfeComponent } from './listepfe.component';

describe('ListepfeComponent', () => {
  let component: ListepfeComponent;
  let fixture: ComponentFixture<ListepfeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListepfeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListepfeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
