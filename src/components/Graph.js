import React from 'react';
import { drawCurve, drawLines, drawPoints, drawBars, drawPie, getCurvePoints, calculateCoords, flatten, maxBy, minBy, drawAxisX, drawAxisY } from '../utilities/graphUtils';
import { isUndefined } from 'util';

const Graph = ({
  width = 400,
  height = 300,
  type = 'curve',
  max = 'auto',
  min = 0,
  data
}) => {
  let canvasRef = React.createRef();
  
  React.useEffect(() => {
    let canvas = canvasRef.current;
    let ctx = canvas.getContext("2d");

    ctx.fillStyle = '#2C8CF1';
    ctx.strokeStyle = '#07327E';

    let minValue = (!isUndefined(min) && min !== 'auto') ? min : minBy(data, i => i.value);
    let maxValue = (!isUndefined(max) && max !== 'auto') ? max : maxBy(data, i => i.value);
    let coords = flatten(data.map((val, i) => calculateCoords(val.value, i, width, height, maxValue, minValue, data.length)));

    console.log(coords);
    if(type === 'scatter') {
      drawAxisX(ctx, width, height);
      drawAxisY(ctx, width, height);
      drawPoints(ctx, coords);
    }
    if (type === 'curve') {
      drawAxisX(ctx, width, height);
      drawAxisY(ctx, width, height);
      drawCurve(ctx, coords, 0.5, false, 16, true);
    }
    if(type === 'line') {
      drawAxisX(ctx, width, height);
      drawAxisY(ctx, width, height);
      drawLines(ctx, coords, true);
    }
    if(type === 'bar') {
      drawAxisX(ctx, width, height);
      drawAxisY(ctx, width, height);
      drawBars(ctx, coords, width, height);
    }
    if(type === 'pie')
      drawPie(ctx, data, width, height);
  });
  
  return (
    <canvas ref={canvasRef} width={width} height={height}>
    </canvas>
  );
}

export default Graph;