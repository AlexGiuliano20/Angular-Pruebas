import { Jugador } from './clase';

describe('Pruebas de clase', () => {
  let jugador = new Jugador();

  beforeAll(() => {
    // console.log('beforeAll');
  });
  beforeEach(() => {
    // console.log('beforeEach');
    jugador = new Jugador();
  });
  afterAll(() => {
    // console.log('afterAll');
  });
  afterEach(() => {
    // console.log('afterEach');
  });

  it('Debe de retornar 80 de hp, si recibe 20 de dmg', () => {
    const res = jugador.recibeDmg(20);

    expect(res).toBe(80);
  });

  it('Debe de retornar 50 de hp, si recibe 50 de dmg', () => {
    const res = jugador.recibeDmg(50);

    expect(res).toBe(50);
  });

  it('Debe de retornar 0 de hp, si recibe 100 de dmg o más', () => {
    const res = jugador.recibeDmg(100);

    expect(res).toBe(0);
  });
});
