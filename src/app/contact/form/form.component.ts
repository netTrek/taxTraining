import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormVO } from './form-vo';
import { InputVO } from './input-vo';

@Component ( {
  selector   : 'tax-form',
  templateUrl: './form.component.html',
  styleUrls  : [ './form.component.scss' ]
} )
export class FormComponent implements OnInit {
  json2: FormVO = {
    inputs: [
      {
        type      : 'email',
        validators: [ 'required' ],
        key       : 'mail',
        label     : 'mail adress'
      }
    ]
  };
  json1: FormVO  = {
    inputs: [
      {
        key       : 'name',
        label     : 'user name',
        type      : 'text',
        validators: [ 'required' ]
      },
      {
        key       : 'email',
        label     : 'your mail address',
        type      : 'email',
        validators: [ 'required',
                      'email'
        ],
        value     : 'us@netTrek.de'
      },
      {
        key       : 'msg',
        label     : 'type your message here',
        type      : 'textarea',
        validators: [ 'required' ]
      }
    ]
  };
  selectedForm: FormGroup;
  selectedFormVo: FormVO;
  private myForm1: FormGroup;
  private myForm2: FormGroup;
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
    this.myForm1  = this.fb.group (
      this.getFormVo ( this.json1.inputs )
    );
    this.myForm2  = this.fb.group (
      this.getFormVo ( this.json2.inputs )
    );
    this.selectedForm = this.myForm1;
    this.selectedFormVo = this.json1;
  }

  private getFormVo( inputs: InputVO[]) {
    const formVO = {};
    for ( const inputVo of inputs ) {
      formVO[ inputVo.key ] =
        [
          inputVo.value || '',
          this.getValidators ( inputVo.validators )
        ];
    }
    return formVO;
  }

  send() {
    console.log ( 'sending data', this.selectedForm.value );
  }

  private getValidators( validators?: ('required' | 'email')[] ) {
    return (validators || []).map (
      value => value === 'required' ?
        Validators.required :
        Validators.email
    );
  }

  toggForm() {
    if ( this.selectedForm === this.myForm1 ) {
      this.selectedForm = this.myForm2;
      this.selectedFormVo = this.json2;
    } else {
      this.selectedForm = this.myForm1;
      this.selectedFormVo = this.json1;
    }
  }
}
