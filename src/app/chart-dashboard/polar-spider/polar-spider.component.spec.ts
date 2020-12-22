import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolarSpiderComponent } from './polar-spider.component';

describe('PolarSpiderComponent', () => {
  let component: PolarSpiderComponent;
  let fixture: ComponentFixture<PolarSpiderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolarSpiderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PolarSpiderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
