import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForwardBackwardScatterComponent } from './forward-backward-scatter.component';

describe('ForwardBackwardScatterComponent', () => {
  let component: ForwardBackwardScatterComponent;
  let fixture: ComponentFixture<ForwardBackwardScatterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForwardBackwardScatterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForwardBackwardScatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
