import { parse } from './index';



describe('Checking parse',() => {
  it('number works',() => {
    expect(parse('1')).toEqual(1);
  });
  it('array works',() => {
    expect(parse('[1]')).toEqual([1]);
  });
  it('array works',() => {
    expect(parse('  [ 1,   2,3]')).toEqual([1,2,3]);
  });
  it('array works',() => {
    expect(parse('  [ 1,   2,[3,5]]')).toEqual([1,2,[3,5]]);
  });
  it('object works',() => {
    expect(parse('  { "a":"a","b":{}  }')).toEqual({ a:'a',b:{} });
  });
});
