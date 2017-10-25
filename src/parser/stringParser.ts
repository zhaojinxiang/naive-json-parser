

import { peek, consume, take } from './sideEff';

export function nextIsString() {
  return '"' === peek();
}
export function stringParser() {
  consume(`"`);
  const s = parseChars();
  return s;
}

function parseChars() {
  return pickChars('');
}

// 一直抓取字符，直到抓到字符串结束
export function pickChars(s:string) :string {
  const c = take();
  if (c === '"') {
    return s;
  }
  if (c === '\\') {
    const c = take();
    const ESCAPE_LIST:{[key:string]:string} = {
      '\"':'\"',
      '\\':'\\',
      '\/':'\/',
      b:'\b',
      f:'\f',
      n:'\n',
      r:'\r',
      t:'\t',
    };
    if (Object.keys(ESCAPE_LIST).includes(c)) {
      return pickChars(s + ESCAPE_LIST[c]);
    }
    if (c === 'u') {
      const numStr = [take(),take(),take(),take()].join('');
      const num = parseUnicodePoint(numStr);
      const unicodeChar = String.fromCodePoint(num);
      return pickChars(s + unicodeChar);
    }
  }
  return pickChars(s + c);
}

function parseUnicodePoint(numStr:string) {// TODO 对numStr的检验
  return parseInt(numStr,16);
}








