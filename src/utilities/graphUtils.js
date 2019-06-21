const _drawLines = (ctx, pts) => {
  ctx.moveTo(pts[0], pts[1]);
  for(let i=2;i<pts.length-1;i+=2) 
    ctx.lineTo(pts[i], pts[i+1]);
};

const maxBy = (arr, fn) => Math.max(...arr.map(typeof fn === 'function' ? fn : val => val[fn]));
const minBy = (arr, fn) => Math.min(...arr.map(typeof fn === 'function' ? fn : val => val[fn]));

const drawLines = (ctx, ptsa, showPoints = false) => {
  ctx.beginPath();
  _drawLines(ctx, ptsa);
  ctx.stroke();
  if (showPoints)
    drawPoints(ctx, ptsa);
};

const getCurvePoints = (pts, tension = 0.5, isClosed = false, numOfSegments = 16) => {
  var _pts = [], res = [],    // clone array
    x, y,                     // our x,y coords
    t1x, t2x, t1y, t2y,       // tension vectors
    c1, c2, c3, c4,           // cardinal points
    st, t, i;                 // steps based on num. of segments

  // clone array so we don't change the original
  _pts = pts.slice(0);

  // The algorithm require a previous and next point to the actual point array.
  // Check if we will draw closed or open curve.
  // If closed, copy end points to beginning and first points to end
  // If open, duplicate first points to befinning, end points to end
  if (isClosed) {
      _pts.unshift(pts[pts.length - 1]);
      _pts.unshift(pts[pts.length - 2]);
      _pts.unshift(pts[pts.length - 1]);
      _pts.unshift(pts[pts.length - 2]);
      _pts.push(pts[0]);
      _pts.push(pts[1]);
  }
  else {
      _pts.unshift(pts[1]);   //copy 1. point and insert at beginning
      _pts.unshift(pts[0]);
      _pts.push(pts[pts.length - 2]); //copy last point and append
      _pts.push(pts[pts.length - 1]);
  }

  // ok, lets start..
  // 1. loop goes through point array
  // 2. loop goes through each segment between the 2 pts + 1e point before and after
  for (i=2; i < (_pts.length - 4); i+=2) {
      for (t=0; t <= numOfSegments; t++) {
          // calc tension vectors
          t1x = (_pts[i+2] - _pts[i-2]) * tension;
          t2x = (_pts[i+4] - _pts[i]) * tension;
          t1y = (_pts[i+3] - _pts[i-1]) * tension;
          t2y = (_pts[i+5] - _pts[i+1]) * tension;
          // calc step
          st = t / numOfSegments;
          // calc cardinals
          c1 =   2 * Math.pow(st, 3)  - 3 * Math.pow(st, 2) + 1; 
          c2 = -(2 * Math.pow(st, 3)) + 3 * Math.pow(st, 2); 
          c3 =       Math.pow(st, 3)  - 2 * Math.pow(st, 2) + st; 
          c4 =       Math.pow(st, 3)  -     Math.pow(st, 2);
          // calc x and y cords with common control vectors
          x = c1 * _pts[i]    + c2 * _pts[i+2] + c3 * t1x + c4 * t2x;
          y = c1 * _pts[i+1]  + c2 * _pts[i+3] + c3 * t1y + c4 * t2y;
          //store points in array
          res.push(x);
          res.push(y);
      }
  }
  return res;
}

const drawCurve = (ctx, ptsa, tension, isClosed, numOfSegments, showPoints = false) => {
  ctx.beginPath();
  _drawLines(ctx, getCurvePoints(ptsa, tension, isClosed, numOfSegments));
  ctx.stroke();
  if (showPoints)
    drawPoints(ctx, ptsa);
};

const drawPoints = (ctx, ptsa) => {
  ctx.beginPath();
  for(let i=0;i<ptsa.length-1;i+=2) 
    drawFilledCircle(ctx, ptsa[i], ptsa[i+1], 3);
}

const drawFilledCircle = (ctx, x, y, r) => {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  ctx.fill();
}

const drawBars = (ctx, ptsa, width, height) => {
  for(let i=0;i<ptsa.length-1;i+=2) 
    drawBar(ctx, ptsa[i], ptsa[i+1], 8, width, height);
}

const drawBar = (ctx, x, y, width, w, h) => {
  ctx.fillRect(x, y, width, h-y-12);
}

const drawPie = (ctx, data, width, height, colors) => {
  let total = data.reduce((acc,v) => acc + v.value, 0);
  let x = (width - 24) / 2;
  let y = (height - 24) / 2;
  let r = Math.min((width - 24), (height - 24))/2;
  let startAngle = 0 * Math.PI;
  for(let i=0;i<data.length;i++){
    let color = colors[i % colors.length]
    ctx.fillStyle = color;
    console.log(color);
    let endAngle = startAngle + data[i].value/total * 2 * Math.PI;
    ctx.beginPath();
    ctx.moveTo(x + 12,y + 12);
    ctx.arc(x + 12, y + 12, r, startAngle, endAngle)
    ctx.moveTo(x + 12,y + 12);
    ctx.closePath();
    ctx.fill();
    console.log(startAngle, endAngle);
    startAngle = endAngle;
  }
}

const drawAxisX = (ctx, width, height) => {
  ctx.beginPath();
  ctx.moveTo(12, height - 12);
  ctx.lineTo(width - 12, height - 12);
  ctx.stroke(); 
}

const drawAxisY = (ctx, width, height) => {
  ctx.beginPath();
  ctx.moveTo(12, 12);
  ctx.lineTo(12, height - 12);
  ctx.stroke(); 
}

const calculateCoords = (value, index, width, height, maxValue, minValue, numberOfValues) => 
  [index * (width - 24)/numberOfValues + 12, (height - 24) - value/(maxValue - minValue) * (height - 24) + 12];

const flatten = (arr, depth = 1) =>
  arr.reduce((a, v) => a.concat(depth > 1 && Array.isArray(v) ? flatten(v, depth - 1) : v), []);

export { drawCurve, drawLines, drawPoints, drawBars, drawPie, drawFilledCircle, getCurvePoints, calculateCoords, flatten, maxBy, minBy, drawAxisX, drawAxisY };