
import { leftBlankNum } from '../utils';


let position = 0 ;
let str = '';

function init(input:string) {
  str = input;
  position = 0;
}

function hasNext() {
  return str !== '';
}
function peek() {
  if (str === '') {
    throw new Error(`Illegal end  at ${position}`);
  }
  return str[0];
}


function posMove(n:number) {
  position += n;
  str = str.slice(n);
}

function take() {
  const c = peek();
  posMove(1);
  return c;
}

function ws() {
  posMove(leftBlankNum(str));
}

function matches(s:string) {
  return str.startsWith(s);
}
function consume(s:string) {
  if (matches(s)) {
    posMove(s.length);
    return;
  }
  throw new Error(`Expected ${s} at ${position}`);
}

function getState() {
  return { str,position };
}

function throwErr(s:string) {
  throw new Error(`${s}. Happen at ${position}`);
}
export { init,peek,posMove,ws,matches,consume,take, getState ,throwErr, hasNext };
