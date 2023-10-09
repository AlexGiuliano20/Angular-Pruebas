import { MedicoComponent } from 'src/app/intermedio2/medico/medico.component';
import { rutas } from './app.routes';

describe('Rutas principales', () => {
  it('Debe de existir la ruta /medico/:id', () => {
    expect(rutas).toContain({
      path: 'medico/:id',
      component: MedicoComponent,
    });
  });
});
