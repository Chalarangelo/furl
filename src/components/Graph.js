import React from 'react';

const Graph = ({
  width = 400,
  height = 300,
  type = 'line',
  data
}) => {
  let canvasRef = React.createRef();
  
  React.useEffect(() => {
    let canvas = canvasRef.current;
    let ctx = canvas.getContext("2d");
    let minValue = 0;
    let maxValue = Math.max(...data);
    let lastCoords = [0,0];
    data.forEach((val, i) => {
      let y = height - val/(maxValue - minValue) * height;
      let x = i * width/data.length;
      ctx.fillRect(x,y, 2, 2);
      ctx.fillText(`${val} (${i})`, x,y);
      ctx.beginPath();
      ctx.moveTo(...lastCoords);
      ctx.lineTo(x,y);
      ctx.stroke();
      lastCoords=[x,y];
    })
  });
  
  return (
    <canvas ref={canvasRef} width={width} height={height}>
    </canvas>
  );
}

ReactDOM.render(<Graph data={[1,2,3,1,2,1,2,3,1,4,1]}/>, document.getElementById('app'));

export default Graph;