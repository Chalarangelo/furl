import '!style-loader!css-loader!sass-loader!../src/styles/index.scss'; 
import { addParameters, configure } from '@storybook/react';

addParameters({
  options: {
    showAddonPanel: false
  }
});

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
