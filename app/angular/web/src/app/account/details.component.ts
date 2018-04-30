import { Component }                          from '@angular/core';
import { ChangeDetectionStrategy }            from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router }                             from '@angular/router';
import { MeService }                          from '../core/service/me';

@Component({
  selector: 'account-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DetailsComponent
{
  detailsForm: FormGroup;

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
    this.detailsForm = this.formBuilder.group({
      username:              [this.me.data.username, [Validators.required]],
      password:              [''],
      password_confirmation: [''],
      first_name:            [this.me.data.first_name, Validators.required],
      last_name:             [this.me.data.last_name, Validators.required]
    });
  }

  // Mock updating of a user.
  onSubmit()
  {
    this.me.update(this.detailsForm.value);

    // // Attempt to log the user in and redirect to home upon success.
    // this.me.update(this.detailsForm.value).subscribe(
    //   payload => {

    //     console.log(payload);

    //   },
    //   err => console.log('Error: DetailsComponent.onSubmit')
    // );
  }
}
