import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaVeterinarioComponent } from './alta-veterinario.component';

describe('AltaVeterinarioComponent', () => {
  let component: AltaVeterinarioComponent;
  let fixture: ComponentFixture<AltaVeterinarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AltaVeterinarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AltaVeterinarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
