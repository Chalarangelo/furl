const feather = require('feather-icons');

const generateBackgroundIcon = ({
  name,
  width = 24,
  height = 24,
  viewBox = '0 0 24 24',
  fill = 'none',
  stroke = 'currentColor',
  strokeWidth = 2,
  strokeLinecap = 'round',
  strokeLinejoin = 'round',
}) => {
  let icon = feather.icons[name].toSvg({
    class: '',
    width: width,
    height: height,
    viewBox: viewBox,
    fill: fill,
    stroke: stroke,
    'stroke-width': strokeWidth,
    'stroke-linecap': strokeLinecap,
    'stroke-linejoin': strokeLinejoin
  });
  icon = icon
    .replace(/"/g, "'")
    .replace(/#/g, '%23')
    .replace(/</g, '%3C')
    .replace(/>/g, '%3E');
  return {
    backgroundImage: `url("data:image/svg+xml,${icon}")`
  };
}

export default generateBackgroundIcon;
