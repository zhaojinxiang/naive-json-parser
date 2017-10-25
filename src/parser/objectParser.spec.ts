
import { init } from './sideEff';
import { objectParser } from './objectParser';

describe('Checking objectParser',() => {
  it('{} works',() => {
    init('{   }');
    const s = objectParser();
    expect(s).toEqual({});
  });
  it('{ a:\'a\' } works',() => {
    init('{ "a":"a"  }');
    const s = objectParser();
    expect(s).toEqual({ a:'a' });
  });
  it('{ a:\'a\',b:{} } works',() => {
    init('{ "a":"a","b":{}  }');
    const s = objectParser();
    expect(s).toEqual({ a:'a',b:{} });
  });
});
