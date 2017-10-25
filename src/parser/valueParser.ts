import { ws,throwErr } from './sideEff';

import { nextIsNumber, numberParser } from './numberParser';
import { arrayParser, nextIsArray } from './arrayParser';
import { stringParser, nextIsString } from './stringParser';
import { nextIsSingleElem, singleElemParser } from './singleElemParser';
import { nextIsObject, objectParser } from './objectParser';


export default function valueParser():any {
  ws();
  if (nextIsString()) {
    return stringParser();
  }
  if (nextIsNumber()) {
    return numberParser();
  }
  if (nextIsSingleElem()) {
    return singleElemParser();
  }
  if (nextIsObject()) {
    return objectParser();
  }
  if (nextIsArray()) {
    return arrayParser();
  }
  throwErr('不可能了，你完了()');
}

