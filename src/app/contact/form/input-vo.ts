export interface InputVO {
  key: string;
  label: string;
  value?: any;
  type: 'password'|'email'|'number'|'text'|'textarea';
  validators?: ('required'|'email')[];
}
