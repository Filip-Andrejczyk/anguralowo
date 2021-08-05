import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WojtasowyComponent } from './wojtasowy.component';

describe('WojtasowyComponent', () => {
  let component: WojtasowyComponent;
  let fixture: ComponentFixture<WojtasowyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WojtasowyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WojtasowyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
