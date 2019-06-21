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
  displayPoints = true,
  data
}) => {
  let canvasRef = React.createRef();
  
  React.useEffect(() => {
    let canvas = canvasRef.current;
    let ctx = canvas.getContext("2d");
    ctx.lineCap = 'round';

    let coords = [], minValue = 0, maxValue = Infinity, multipleSeries = false;
    if(Array.isArray(data[0])) {
      multipleSeries = true;
      minValue = (!isUndefined(min) && min !== 'auto') ? min : Math.min(...data.map(val => minBy(val, i => i.value)));
      console.log(minValue);
      maxValue = (!isUndefined(max) && max !== 'auto') ? max : Math.max(...data.map(val => maxBy(val, i => i.value)));
      console.log(maxValue);
      coords = data.map(series => flatten(series.map((val, i) => calculateCoords(val.value, i, width, height, maxValue, minValue, series.length))));
      console.log(coords);
    }
    else {
      minValue = (!isUndefined(min) && min !== 'auto') ? min : minBy(data, i => i.value);
      maxValue = (!isUndefined(max) && max !== 'auto') ? max : maxBy(data, i => i.value);
      coords = flatten(data.map((val, i) => calculateCoords(val.value, i, width, height, maxValue, minValue, data.length)));
    }

    if(type !== 'pie') {
      ctx.lineWidth = 0.5;
      ctx.strokeStyle = graphInterfaceColor;
      drawAxisX(ctx, width, height);
      drawAxisY(ctx, width, height);
      ctx.fillStyle = graphColors[0];
      ctx.strokeStyle = graphColors[0];
      ctx.lineWidth = 1;
    }

    if (type === 'curve') {
      if (multipleSeries) {
        coords.forEach((series, i) => {
          ctx.fillStyle = graphColors[i % graphColors.length];
          ctx.strokeStyle = graphColors[i % graphColors.length];
          drawCurve(ctx, series, 0.5, false, 16, displayPoints);
        });
      }
      else {
        drawCurve(ctx, coords, 0.5, false, 16, displayPoints);
      }
    }
    if (type === 'line') {
      if (multipleSeries) {
        coords.forEach((series, i) => {
          ctx.fillStyle = graphColors[i % graphColors.length];
          ctx.strokeStyle = graphColors[i % graphColors.length];
          drawLines(ctx, series, displayPoints);
        });
      }
      else {
        drawLines(ctx, coords, displayPoints);
      }
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