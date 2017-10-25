import { init } from './sideEff';
import { singleElemParser } from './singleElemParser';

describe('Checking singleElemParser',() => {
  it(' true works',() => {
    init('true');
    const s = singleElemParser();
    expect(s).toEqual(true);
  });
  it(' false works',() => {
    init('false');
    const s = singleElemParser();
    expect(s).toEqual(false);
  });
  it('null works',() => {
    init('null');
    const s = singleElemParser();
    expect(s).toEqual(null);
  });
});
