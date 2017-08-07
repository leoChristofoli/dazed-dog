import { DazedDogPage } from './app.po';

describe('dazed-dog App', () => {
  let page: DazedDogPage;

  beforeEach(() => {
    page = new DazedDogPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
