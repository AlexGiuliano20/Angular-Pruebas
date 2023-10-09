import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export class FormularioRegister {
  form: FormGroup;

  constructor(_fb: FormBuilder) {
    this.form = _fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }
}
