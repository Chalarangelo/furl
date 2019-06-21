import React from 'react';
import { drawCurve, drawLines, getCurvePoints, calculateCoords, flatten } from '../utilities/graphUtils';

const Graph = ({
  width = 400,
  height = 300,
  type = 'curve',
  data
}) => {
  let canvasRef = React.createRef();
  
  React.useEffect(() => {
    let canvas = canvasRef.current;
    let ctx = canvas.getContext("2d");
    ctx.fillStyle = '#2C8CF1';
    ctx.strokeStyle = '#07327E';
    let minValue = 0;
    let maxValue = Math.max(...data);
    let coords = flatten(data.map((val, i) => calculateCoords(val, i, width, height, maxValue, minValue, data.length)));
    if(type === 'curve')
      drawCurve(ctx, coords, 0.5, false, 16, true);
    if(type === 'line')
      drawLines(ctx, coords, true);
  });
  
  return (
    <canvas ref={canvasRef} width={width} height={height}>
    </canvas>
  );
}

export default Graph;