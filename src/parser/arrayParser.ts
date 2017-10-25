import { peek, ws, consume } from './sideEff';
import valueParser from './valueParser';

export function nextIsArray() {
  return peek() === '[';
}

function nextIsArrayEnd() {
  ws();
  return peek() === ']';
}
function arrayHasNextItem() {
  ws();
  return peek() === ',';
}

export function arrayParser() {
  consume('[');
  if (nextIsArrayEnd()) {
    consume(']');
    return [];
  }
  const xs = [];
  xs.push(valueParser());
  while (arrayHasNextItem()) {
    consume(',');
    xs.push(valueParser());
  }
  consume(']');
  return xs;
}
