
import { numberParser } from './numberParser';
import { init } from './sideEff';

describe('Checking numberParser',() => {
  it('1 works',() => {
    init('1');
    const s = numberParser();
    expect(s).toEqual(1);
  });
  it('987 works',() => {
    init('987');
    const s = numberParser();
    expect(s).toEqual(987);
  });
});
