import { FacebookAuthGuard } from './facebook-auth.guard';

describe('FacebookAuthGuard', () => {
  it('should be defined', () => {
    expect(new FacebookAuthGuard()).toBeDefined();
  });
});
