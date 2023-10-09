import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MedicosComponent } from './intermedio/espias/medicos.component';
import { MedicoComponent } from './intermedio2/medico/medico.component';
import { MedicoService } from './intermedio2/medico/medico.service';
import { HospitalComponent } from './intermedio2/hospital/hospital.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IncrementadorComponent } from './intermedio2/incrementador/incrementador.component';
import { rutas } from './avanzado/rutas/app.routes';
import { NavbarComponent } from './avanzado/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    MedicosComponent,
    MedicoComponent,
    HospitalComponent,
    IncrementadorComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(rutas),
  ],
  providers: [MedicoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
