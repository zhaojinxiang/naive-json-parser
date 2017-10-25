import { peek, ws, consume } from './sideEff';
import { stringParser } from './stringParser';
import valueParser from './valueParser';

export function nextIsObject() {
  return peek() === '{';
}
function nextIsObjectEnd() {
  ws();
  return peek() === '}';
}
function objectHasNextItem() {
  ws();
  return peek() === ',';
}
function pairParser() {
  const key = stringParser();
  ws();
  consume(':');
  const val = valueParser();
  return { key,val };
}
export function objectParser() {
  consume('{');
  if (nextIsObjectEnd()) {
    consume('}');
    return {};
  }
  const xs:{[key:string]:any} = {};

  const { key ,val } = pairParser();
  xs[key] = val;
  while (objectHasNextItem()) {
    consume(',');
    const { key ,val } = pairParser();
    xs[key] = val;
  }
  consume('}');
  return xs;
}

