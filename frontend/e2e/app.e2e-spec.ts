import { BinBillPage } from './app.po';

describe('binbill App', () => {
  let page: BinBillPage;

  beforeEach(() => {
    page = new BinBillPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
