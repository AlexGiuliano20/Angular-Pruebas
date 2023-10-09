import { mensaje } from './string';

describe('Pruebas de string', () => {
  it('Debe de regresar un string', () => {
    const res = mensaje('Alex');
    expect(typeof res).toBe('string');
  });

  it('Debe de retornar un saludo con el nombre enviado', () => {
    const nombre = 'Alex';
    const res = mensaje(nombre);
    expect(res).toContain(nombre);
  });
});
