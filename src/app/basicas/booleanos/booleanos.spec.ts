import { usuarioLogueado } from './booleanos';

describe('Pruebas de booleanos', () => {
  it('Debe retornar true', () => {
    const res = usuarioLogueado();
    expect(res).toBeTruthy();
  });
});
