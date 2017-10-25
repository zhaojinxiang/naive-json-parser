import { init,peek,posMove,ws,matches,consume,take, getState,throwErr,hasNext } from './sideEff';

export function nextIsSingleElem() {
  const next = peek();
  return ['t','f','n'].includes(next);
}

export function singleElemParser() {
  const next = peek();
  if (next === 't') {
    consume('true');
    return true;
  }
  if (next === 'f') {
    consume('false');
    return false;
  }
  if (next === 'n') {
    consume('null');
    return null;
  }
  throwErr('singleElemParser Error 不可能接下来还可能下去啦');
}
