import { ReversePipe } from './reverse.pipe';

describe('ReversePipe', () => {
  let pipe: ReversePipe;

  beforeEach(() => {
    pipe = new ReversePipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should reverse a string', () => {
    const reversedString = pipe.transform('hello');
    expect(reversedString).toEqual('olleh');
  });
});
