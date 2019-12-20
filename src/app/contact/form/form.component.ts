import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormVO } from './form-vo';

@Component ( {
  selector   : 'tax-form',
  templateUrl: './form.component.html',
  styleUrls  : [ './form.component.scss' ]
} )
export class FormComponent implements OnInit {
  json: FormVO = {    inputs: [
      {
        key  : 'name',
        label: 'user name',
        type : 'text',
        validators: ['required']
      },
      {
        key  : 'email',
        label: 'your mail address',
        type : 'email',
        validators: ['required', 'email'],
        value: 'us@netTrek.de'
      },
      {
        key  : 'msg',
        label: 'type your message here',
        type : 'textarea',
        validators: ['required']
      }
    ]  };
  myForm: FormGroup;
  // myForm = this.fb.group ( {
  //   name       : [ '',
  //                  Validators.required
  //   ],
  //   credentials: this.fb.group ( {
  //     email   : [ '',
  //                 [ Validators.required,
  //                   Validators.email
  //                 ]
  //     ],
  //     password: [ '',
  //                 Validators.required
  //     ]
  //   } )
  // } );
  // email  = this.myForm.get ( [ 'credentials',
  //                              'email'
  // ] );
  constructor( private fb: FormBuilder ) {
  }

  ngOnInit() {
    const formVO = {};
    for ( const inputVo of this.json.inputs ) {
      formVO[inputVo.key] =
        [
          inputVo.value || '',
          this.getValidators( inputVo.validators )
        ];
    }
    this.myForm = this.fb.group( formVO );
  }

  send() {
    console.log ( 'sending data', this.myForm.value );
  }

  private getValidators( validators?: ('required' | 'email')[] )  {
    return (validators || []).map(
      value => value === 'required' ?
        Validators.required :
        Validators.email
    );
  }
}
