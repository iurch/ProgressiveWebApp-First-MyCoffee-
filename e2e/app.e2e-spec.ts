import { MycoffeappPage } from './app.po';

describe('mycoffeapp App', () => {
  let page: MycoffeappPage;

  beforeEach(() => {
    page = new MycoffeappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
