import { replaceSpace } from './utilities';

describe('#replaceSpace', () => {
  it('Should replace all the %20 to spaces', () => {
    const string = 'tre%20abc%20the';
    const expected = 'tre abc the';

    expect(replaceSpace(string)).toEqual(expected);
  });
});
