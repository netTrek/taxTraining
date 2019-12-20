import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', async () => {
    await page.navigateTo();
    expect(page.getTitleText()).toEqual('hello word');
  });

  it('should click the button and switch to user', async () => {
    await page.navigateTo();
    page.getGoToUsrBtn().click();
    browser.sleep( 100 );
    expect(page.getGoToUsrBtn()).toBeTruthy();
  });

  fit('should click "contact" and switch to user', async () => {
    await page.navigateTo();
    page.getContactLink().click();
    browser.sleep( 100 );
    expect(page.getMailField()).toBeTruthy();
    expect(page.getNameField()).toBeTruthy();
    expect(page.getMsgTextArea()).toBeTruthy();
    expect(page.getSendBtn()).toBeTruthy();
    page.getMailField().sendKeys('saban@uenlue.de');
    browser.sleep( 1000 );
    page.getNameField().sendKeys('saban ünlü');
    browser.sleep( 1000 );
    page.getMsgTextArea().sendKeys('hello world');
    browser.sleep( 1000 );
    expect(page.getSendBtn().isEnabled()).toBe( true );
    browser.sleep( 1000 );
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
