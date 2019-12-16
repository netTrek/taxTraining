
const list = [1, 2, 3];
const listClone = [...list];
const listExt = [...list, 4, 5, 6]; // 1,2,3,4,5,6
const listExt1 = [0, ...list, 4, 5, 6]; // 0, 1,2,3,4,5,6

const user = { name: 'saban', age: 44 };
const userClone = { ...user };
const userOverride = { ...user, name: 'peter' };
const userExt = { ...user, zip: 46282 };

const dataSet = { col1: 1, col2: 2, col3: 3 };
const { col2, col1 } = dataSet;
console.log(col2);

function func1() {
  console.log('hello func1');
}

const funct2 = function ()  {
  console.log('hello func1');
}
const func3 = new Function ( `console.log('hello func1')`)

function sum( a: number, b: number ): number {
  return a + b;
}

const arr1 = () => {
  console.log('hello func1');
}
const arrSum = (a: number, b: number): number => {
  return a + b;
}

const multiplyWith5 = (param) => {
  return param * 5;
}


const multiplyWith5_version2 = param => {
  return param * 5;
}

const multiplyWith5_version3 = param => param * 5;

// <button id='btn' onclick="handler()">click</
// button.onclick = function....

class NavButton {

  name = 'navBtn'

  constructor(private btn: HTMLButtonElement) {
    this.init();
  }
  private init() {

    this.btn.addEventListener('click',  () => {
      console.log('button was clicked', this.name);
    });
  }
}

const btn = new NavButton(
  document.getElementById('btn') as HTMLButtonElement
);

const personName = 'saban';
const personAge = 123;
const person = { personName, personAge };

interface IHuman {
  name: string;
  age: number,
  getYourAge( age: number): void;
}

abstract class Human implements IHuman {
  /*
  private name: string;
  constructor(name: string) {
      this.name = name;
  }
  */

  static TYPE = 'HUMAN';
  private _age = 33;



  get age(): number {
    return this._age;
  }

  set age(age: number) {
    this._age = age;
  }

  constructor(public name: string) {
    console.log(name);
  }

  getYourName(): string {
    return this.name;
  }

  getYourAge(): number {
    return this.age;
  }

}


class Man extends Human {

  constructor(name: string) {
    super(name);
  }

  getYourAge(): number {
    return super.getYourAge() - 5;
  }

  sayHello( msg:string = 'hello world' ) {
    console.log(msg);
  }


  sayHello2( msg:string = 'hello world'  ) {
    console.log(msg);
  }

  sayHello3( prefix, msg?:string  ) {
    console.log(msg);
  }

  getBooksOf(usrID: number, ...isbn: number[] ) {

  }
}



const saban: Man = new Man('saban');
saban.getBooksOf ( 12, 213, 3123, 12321, 123123, 123312)
saban.sayHello2( undefined ); // hello world
saban.sayHello(); // hello world
saban.sayHello('holla'); // hola
// saban.sayHello('msg');
// saban.age = 123;
// console.log(saban.age )
// saban.setAge(12);
// saban.getAge();
// console.log(saban.name);

const myVar = 123;
// myVar = 333;

let username = 'saban';
// busername = 23;

let userage: number;

userage = 123;


for (let i = 0; i < 10; i++) {
  console.log(i);
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
}
// console.log(i);
