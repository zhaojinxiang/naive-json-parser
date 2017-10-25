

import { getState, init } from './sideEff';
import { pickChars, stringParser } from './stringParser';

describe('Checking pickChars',() => {
  it('  works',() => {
    init('"to be continue');
    const s = pickChars('1234');
    const { position,str } = getState();
    expect(s).toEqual('1234');
    expect(position).toEqual(0 + 1);
    expect(str).toEqual('to be continue');
  });
  it('  works',() => {
    init('apq"to be continue');
    const s = pickChars('1234');
    const { position,str } = getState();
    expect(s).toEqual('1234apq');
    expect(position).toEqual(3 + 1);
    expect(str).toEqual('to be continue');
  });
  it('  works',() => {
    init(String.raw`apq"to\\ be continue`);
    const s = pickChars('1234');
    const { position,str } = getState();
    expect(s).toEqual('1234apq');
    expect(position).toEqual(3 + 1);
    expect(str).toEqual(String.raw`to\\ be continue`);
  });
  it('  works',() => {
    init(String.raw`ap\\\n\r\t1"to\\ be continue`);
    const s = pickChars('1234');
    const { position,str } = getState();
    expect(s).toEqual('1234ap\\\n\r\t1');
    expect(position).toEqual(2 + 2 * 4 + 1 + 1);
    expect(str).toEqual(String.raw`to\\ be continue`);
  });
});




describe('Checking stringParser',() => {
  it('stringParser escape codes  works',() => {
    init('"\\"\\\\/\\b\\f\\n\\r\\t"');
    const s = stringParser();
    expect(s).toEqual(`\"\\\/\b\f\n\r\t`);
  });
  it('unicode works',() => {
    init(String.raw`"\uD842\uDFB7"`);
    const s = stringParser();
    expect(s).toEqual('𠮷');
  });
});



