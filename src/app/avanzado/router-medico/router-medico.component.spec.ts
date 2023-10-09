import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterMedicoComponent } from './router-medico.component';
import { Observable, of } from 'rxjs';
import { Subject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

class FakeRouter {
  navigate(params: any) {}
}

class FakeActivatedRoute {
  // params: Observable<any> = of({});
  private _subject = new Subject();

  push(valor: any) {
    this._subject.next(valor);
  }

  get params() {
    return this._subject.asObservable();
  }
}

describe('RouterMedicoComponent', () => {
  let component: RouterMedicoComponent;
  let fixture: ComponentFixture<RouterMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RouterMedicoComponent],
      providers: [
        { provide: Router, useClass: FakeRouter },
        { provide: ActivatedRoute, useClass: FakeActivatedRoute },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RouterMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe de redireccionar a Médico cuandos se guarde', () => {
    const router = TestBed.inject(Router);
    const spy = spyOn(router, 'navigate');

    component.guardarMedico();

    expect(spy).toHaveBeenCalledWith(['medico', '123']);
  });

  it('Debe de colocar el id = nuevo', () => {
    component = fixture.componentInstance;

    const activatedRoute = TestBed.inject(ActivatedRoute);
    (<FakeActivatedRoute>(<any>activatedRoute)).push({ id: 'nuevo' });

    expect(component.id).toBe('nuevo');
  });
});
