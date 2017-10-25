
import { init } from './sideEff';
import valueParser from './valueParser';

describe('Checking valueParser',() => {

  it('num works',() => {
    init('1');
    const s = valueParser();
    expect(s).toEqual(1);
  });
  it('array works',() => {
    init('[]');
    const s = valueParser();
    const arr:Array<any> = [];
    expect(s).toEqual(arr);
  });
});
