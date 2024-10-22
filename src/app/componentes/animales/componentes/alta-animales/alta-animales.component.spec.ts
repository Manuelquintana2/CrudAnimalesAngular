import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaAnimalesComponent } from './alta-animales.component';

describe('AltaAnimalesComponent', () => {
  let component: AltaAnimalesComponent;
  let fixture: ComponentFixture<AltaAnimalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AltaAnimalesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AltaAnimalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
