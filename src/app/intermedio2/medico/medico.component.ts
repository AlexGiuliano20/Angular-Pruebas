import { Component } from '@angular/core';
import { MedicoService } from './medico.service';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styles: [],
})
export class MedicoComponent {
  medicos: any[] = [];

  constructor(private _medicoService: MedicoService) {}

  saludarMedico(nombre: string) {
    return `Hola ${nombre}`;
  }

  obtenerMedicos() {
    this._medicoService.getMedicos().subscribe({
      next: (medicos: any) => (this.medicos = medicos),
    });
  }
}
