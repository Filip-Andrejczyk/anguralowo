import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiczenieComponent } from './liczenie.component';

describe('LiczenieComponent', () => {
  let component: LiczenieComponent;
  let fixture: ComponentFixture<LiczenieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiczenieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiczenieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
