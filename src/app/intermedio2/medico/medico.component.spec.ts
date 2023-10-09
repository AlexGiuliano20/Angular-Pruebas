import { HttpClientModule } from '@angular/common/http';
import { TestBed, ComponentFixture } from '@angular/core/testing';

import { MedicoComponent } from './medico.component';
import { MedicoService } from './medico.service';

describe('Medico Component', () => {
  let component: MedicoComponent;
  let fixture: ComponentFixture<MedicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicoComponent],
      providers: [MedicoService],
      imports: [HttpClientModule],
    });

    fixture = TestBed.createComponent(MedicoComponent); //Me permite tener acceso al HTMl y ejecutar otras cosa, como ciclo de detección de cambio, etc

    component = fixture.componentInstance; //Tengo la instancia del componente, puedo usar todos sus métodos que estén definidos en el componente
  });

  it('Debe crearse el componente', () => {
    expect(component).toBeTruthy();
  });

  it('Debe retornar el nombre del médico', () => {
    const nombre = 'Juan';
    const res = component.saludarMedico(nombre);

    expect(res).toContain(nombre);
  });
});
