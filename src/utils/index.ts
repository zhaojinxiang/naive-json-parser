
// TODO
const blankCharList = [' ','\n','\r','\t'];

const isBlankChar = (s:string) => {
  return blankCharList.includes(s);
};

function leftBlankNum(s:string):number {
  if (s === '') {
    return 0;
  }
  if (isBlankChar(s[0])) {
    return 1 + leftBlankNum(s.slice(1));
  }
  return 0;
}

export { leftBlankNum };
