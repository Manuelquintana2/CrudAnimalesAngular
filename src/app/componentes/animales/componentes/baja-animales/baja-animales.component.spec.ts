import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BajaAnimalesComponent } from './baja-animales.component';

describe('BajaAnimalesComponent', () => {
  let component: BajaAnimalesComponent;
  let fixture: ComponentFixture<BajaAnimalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BajaAnimalesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BajaAnimalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
