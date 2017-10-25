

import { peek, take, throwErr, hasNext } from './sideEff';
function betweenO_9(c:string) {
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

export function nextIsNumber() {
  return between1_9(peek());
}
export function numberParser() {
  return intParser();
}




function intParserhelper(n:number):number {
  if (!hasNext()) {
    return n;
  }
  const next = peek();
  if (!betweenO_9(next)) {
    return n;
  }
  take();
  return intParserhelper(n * 10 + Number(next));
}

function intParser() {
  const first = take();
  if (!between1_9(first)) {
    throwErr(`illegal num ${first}`);
  }
  return intParserhelper(Number(first));
}
