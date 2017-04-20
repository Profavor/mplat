import { ViewPage } from './app.po';

describe('view App', () => {
  let page: ViewPage;

  beforeEach(() => {
    page = new ViewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
