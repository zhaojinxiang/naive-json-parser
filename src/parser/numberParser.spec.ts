
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
  it('1.1 works',() => {
    init('1.1');
    const s = numberParser();
    expect(s).toEqual(1.1);
  });
  it('1.2e2 works',() => {
    init('1.2e2');
    const s = numberParser();
    expect(s).toEqual(120);
  });
  it('1.2e10 works',() => {
    init('1.2e10');
    const s = numberParser();
    expect(s).toEqual(1.2e10);
  });
  it('-1.2e10 works',() => {
    init('-1.2e10');
    const s = numberParser();
    expect(s).toEqual(-1.2e10);
  });
});
