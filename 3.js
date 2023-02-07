const evenOfPiece = (start, end) => Array.from(new Array(++end-start), (x, i) => i + start).filter(v => v % 2 === 0);
console.log(evenOfPiece(2, 20)); 