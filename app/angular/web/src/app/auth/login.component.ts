import { Component }                          from '@angular/core';
import { ChangeDetectionStrategy }            from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router }                             from '@angular/router';
import { MeService }                          from '../core/service/me';

@Component({
  selector: 'auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class LoginComponent
{
  loginForm: FormGroup;

  /**
   * @constructor
   */
  constructor(
    private formBuilder: FormBuilder,
    private router:      Router,
    private me:          MeService
  )
  {
    this.createForm();
  }

  //
  createForm()
  {
    this.loginForm = this.formBuilder.group({
      email: ['', [
          Validators.required,
          Validators.email
        ]
      ],
      password: ['', Validators.required]
    });
  }

  // Mock an actual login submission. Commented code an example of possible solution.
  onSubmit()
  {
    // Attempt to log the user in and redirect to home upon success.
    this.me.login(this.loginForm.value);

    // Assume success for this login.
    this.router.navigate(['']);

    // // Attempt to log the user in and redirect to home upon success.
    // this.me.login(this.loginForm.value).subscribe(
    //   payload => {
    //     if(payload.status == 'logged_in')
    //     {
    //       this.router.navigate(['']);
    //     }
    //   },
    //   err => console.log('Error: LoginComponent.onSubmit')
    // );
  }
}
