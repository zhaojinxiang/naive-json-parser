import { arrayParser } from './arrayParser';
import { init } from './sideEff';

describe('Checking arrayParser',() => {
  it('[] works',() => {
    init('[   ]');
    const s = arrayParser();
    expect(s).toEqual([]);
  });
  it('[1 ] works',() => {
    init('[1 ]');
    const s = arrayParser();
    expect(s).toEqual([1]);
  });
  it('[true] works',() => {
    init('[true ]');
    const s = arrayParser();
    expect(s).toEqual([true]);
  });
  it('[1,true] works',() => {
    init('[1 , 2 ,  3 ,true ]');
    const s = arrayParser();
    const arr:Array<any> = [1 , 2 ,  3 ,true];
    expect(s).toEqual(arr);
  });
  it('[1,[2,true]] works',() => {
    init('[1 , 2 ,  [5,[6,7]] ,true ]');
    const s = arrayParser();
    const arr:Array<any> = [1 , 2 ,  [5,[6,7]] ,true];
    expect(s).toEqual(arr);
  });
});
