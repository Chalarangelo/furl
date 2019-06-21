import React from 'react';
import { drawCurve, drawLines, drawPoints, drawBars, drawPie, getCurvePoints, calculateCoords, flatten, maxBy, minBy, drawAxisX, drawAxisY } from '../utilities/graphUtils';
import { isUndefined } from 'util';
import { graphInterfaceColor, graphColors } from '../utilities/graphPalettes';

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
    ctx.lineCap = 'round';

    let minValue = (!isUndefined(min) && min !== 'auto') ? min : minBy(data, i => i.value);
    let maxValue = (!isUndefined(max) && max !== 'auto') ? max : maxBy(data, i => i.value);
    let coords = flatten(data.map((val, i) => calculateCoords(val.value, i, width, height, maxValue, minValue, data.length)));

    console.log(coords);
    if(type === 'scatter') {
      ctx.lineWidth = 0.5;
      ctx.strokeStyle = graphInterfaceColor;
      drawAxisX(ctx, width, height);
      drawAxisY(ctx, width, height);
      ctx.fillStyle = graphColors[0];
      ctx.strokeStyle = graphColors[0];
      ctx.lineWidth = 1;
      drawPoints(ctx, coords);
    }
    if (type === 'curve') {
      ctx.lineWidth = 0.5;
      ctx.strokeStyle = graphInterfaceColor;
      drawAxisX(ctx, width, height);
      drawAxisY(ctx, width, height);
      ctx.fillStyle = graphColors[0];
      ctx.strokeStyle = graphColors[0];
      ctx.lineWidth = 1;
      drawCurve(ctx, coords, 0.5, false, 16, true);
    }
    if(type === 'line') {
      ctx.lineWidth = 0.5;
      ctx.strokeStyle = graphInterfaceColor;
      drawAxisX(ctx, width, height);
      drawAxisY(ctx, width, height);
      ctx.fillStyle = graphColors[0];
      ctx.strokeStyle = graphColors[0];
      ctx.lineWidth = 1;
      drawLines(ctx, coords, true);
    }
    if(type === 'bar') {
      ctx.lineWidth = 0.5;
      ctx.strokeStyle = graphInterfaceColor;
      drawAxisX(ctx, width, height);
      drawAxisY(ctx, width, height);
      ctx.fillStyle = graphColors[0];
      ctx.strokeStyle = graphColors[0];
      ctx.lineWidth = 1;
      drawBars(ctx, coords, width, height);
    }
    if(type === 'pie') {
      drawPie(ctx, data, width, height, graphColors);
    }
  });
  
  return (
    <canvas ref={canvasRef} width={width} height={height}>
    </canvas>
  );
}

export default Graph;