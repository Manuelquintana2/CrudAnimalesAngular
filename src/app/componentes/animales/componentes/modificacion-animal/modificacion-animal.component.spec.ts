import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificacionAnimalComponent } from './modificacion-animal.component';

describe('ModificacionAnimalComponent', () => {
  let component: ModificacionAnimalComponent;
  let fixture: ComponentFixture<ModificacionAnimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModificacionAnimalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificacionAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
