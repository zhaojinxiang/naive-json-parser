import { init, ws, getState, throwErr } from './sideEff';
import valueParser from './valueParser';


export function parse(s:string) {
  init(s);
  ws();
  const v = valueParser();
  ws();
  const { str } = getState();
  if (str !== '') {
    throwErr ('SyntaxError: Unexpected end in JSON');
  }
  return v;
}

