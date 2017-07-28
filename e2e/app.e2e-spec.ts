import { UltimateBraveryPage } from './app.po';

describe('ultimate-bravery App', () => {
  let page: UltimateBraveryPage;

  beforeEach(() => {
    page = new UltimateBraveryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
