import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get ( browser.baseUrl ) as Promise<any>;
  }

  getTitleText() {
    return element ( by.css ( 'tax-root h3' ) )
      .getText () as Promise<string>;
  }

  getGoToUsrBtn() {
    return element ( by.css ( 'button' ) );
  }

  getUserCompontentElem() {
    return element ( by.css ( 'tax-user' ) );
  }

  getContactLink() {
    return element ( by.css ( 'a[routerLink="contact"]' ) );
  }

  getMailField() {
    return element ( by.css ( 'input[ng-reflect-name="email"]' ) );
  }

  getNameField() {
    return element ( by.css ( 'input[ng-reflect-name="name"]' ) );
  }

  getMsgTextArea() {
    return element ( by.css ( 'textarea' ) );
  }

  getSendBtn() {
    return element ( by.css ( 'button[type="submit"]' ) );
  }
}
