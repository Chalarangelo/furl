const parseFontFamily = (fontFamily) => {
  let regex = /^(-{0}|-{2})(font-)?[abc]$/;
  let _fontFamily = fontFamily.toLowerCase().trim();
  if (regex.test(_fontFamily))
    return `var(--font-${_fontFamily.slice(-1)})`;
  return fontFamily;
}

const parseFontSize = (fontSize) => {
  let regex = /^(-{0}|-{2})(ts-)?\d{1,3}p?$/
  let _fontSize = fontSize.toLowerCase().trim();
  if (regex.test(_fontSize))
    return `var(--ts-${_fontSize.match(regex)[3]}p)`;
  return _fontSize;
}

const parseFontWeight = (fontWeight) => {
  return fontWeight.toLowerCase().trim();
}

const parseShadow = (shadow) => {
  let regex = /^(-{0}|-{2})(shadow-)?\d{1,3}?$/
  let _shadow = shadow.toLowerCase().trim();
  if (regex.test(_shadow))
    return `var(--shadow-${_shadow.match(regex)[3]}p)`;
  return _shadow;
}

const parseColor = (color) => {
  let regex = /^(-{0}|-{2})(.+-\d{1,3})?$/;
  let _color = color.toLowerCase().trim();
  if (regex.test(_color))
    return `var(--${_color.match(regex)[2]})`;
  return _color;
}

const parseLayout = (layoutSize) => {
  let regex = /^(-{0}|-{2})(ls-)?\d{1,3}p?$/
  let _layoutSize = layoutSize.toLowerCase().trim();
  if (regex.test(layoutSize))
    return `var(--ls-${_layoutSize.match(regex)[3]}p)`;
  return _layoutSize;
}

const parseVariablesFromProps = (props) => {
  let variables = {};
  if (props.fontFamily)       variables['--font-family'] = parseFontFamily(props.fontFamily);
  if (props.fontSize)         variables['--font-size'] = parseFontSize(props.fontSize);
  if (props.fontWeight)       variables['--font-weight'] = parseFontWeight(props.fontWeight);
  if (props.boxShadow)        variables['--box-shadow'] = parseShadow(props.boxShadow);
  if (props.borderRadius)     variables['--border-radius'] = parseLayout(props.borderRadius);
  if (props.margin)           variables['--margin'] = parseLayout(props.margin);
  if (props.marginRight)      variables['--margin-right'] = parseLayout(props.marginRight);
  if (props.marginLeft)       variables['--margin-left'] = parseLayout(props.marginLeft);
  if (props.padding)          variables['--padding'] = parseLayout(props.padding);
  if (props.paddingRight)     variables['--padding-right'] = parseLayout(props.paddingRight);
  if (props.paddingLeft)      variables['--padding-left'] = parseLayout(props.paddingLeft);
  if (props.color)            variables['--color'] = parseColor(props.color);
  if (props.backgroundColor)  variables['--background-color'] = parseColor(props.backgroundColor);
  return variables;
}

const combineStyles = (props, ...styleObjects) => 
  Object.assign({}, ...styleObjects, parseVariablesFromProps(props));

export default combineStyles;