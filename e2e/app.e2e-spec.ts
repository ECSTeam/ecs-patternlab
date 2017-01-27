import { EcsPatternlabPage } from './app.po';

describe('ecs-patternlab App', function() {
  let page: EcsPatternlabPage;

  beforeEach(() => {
    page = new EcsPatternlabPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
