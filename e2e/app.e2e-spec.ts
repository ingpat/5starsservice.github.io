import { AngularModelProjectPage } from './app.po';

describe('angular-model-project App', function() {
  let page: AngularModelProjectPage;

  beforeEach(() => {
    page = new AngularModelProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
