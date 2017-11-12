

import { peek, take, throwErr, hasNext } from './sideEff';
function between0_9(c:string) {
  const zeroPoint = <number> '0'.codePointAt(0);
  const cPoint = <number>c.codePointAt(0);
  const ninePoint = <number>'9'.codePointAt(0);
  return zeroPoint <= cPoint && cPoint <= ninePoint;
}
function between1_9(c:string) {
  const onePoint = <number> '1'.codePointAt(0);
  const cPoint = <number>c.codePointAt(0);
  const ninePoint = <number>'9'.codePointAt(0);
  return onePoint <= cPoint && cPoint <= ninePoint;
}

function isNumberChar(c:string) {
  return c === 'e' || c === 'E' || c === '.' || c === '+' || c === '-' || between0_9(c);
}

export function nextIsNumber() {
  const next = peek();
  return next === '-' || between0_9(next);
}

function getNumersString(s:string):string {
  if (!hasNext()) {
    return s;
  }
  const next = peek();
  if (!isNumberChar(next)) {
    return s;
  }
  return getNumersString(s + take());
}

export function numberParser() {
  const s = getNumersString('');
  return Number(s);
}

