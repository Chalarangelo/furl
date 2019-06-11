/* istanbul ignore next */
const LayoutStyle = (layoutName, headerSize, sidebarSize, contentSize) => {
  let gridAreas = ['', '', '', ''];
  let gridColumns = ['', '', '', ''];
  headerSize.forEach((header, i) => {
    let sidebar = sidebarSize[i];
    if (header === 'top') {
      if (sidebar === 'left') {
        gridAreas[i] = '"header header"\n". content"';
        gridColumns[i] = `${100 - contentSize[i] * 100}% ${contentSize[i] * 100}%`;
      } else if (sidebar === 'right') {
        gridAreas[i] = '"header header"\n"content ."';
        gridColumns[i] = `${contentSize[i] * 100}% ${100 - contentSize[i] * 100}%`;
      } else {
        gridAreas[i] = '"header"\n"content"';
        gridColumns[i] = `100%`;
      }
    } else if (header === 'bottom') {
      if (sidebar === 'left') {
        gridAreas[i] = '". content"\n"header header"';
        gridColumns[i] = `${100 - contentSize[i] * 100}% ${contentSize[i] * 100}%`;
      } else if (sidebar === 'right') {
        gridAreas[i] = '"content ."\n"header header"';
        gridColumns[i] = `${contentSize[i] * 100}% ${100 - contentSize[i] * 100}%`;
      } else {
        gridAreas[i] = '"content"\n"header"';
        gridColumns[i] = `100%`;
      }
    } else {
      if (sidebar === 'left') {
        gridAreas[i] = '". content"';
        gridColumns[i] = `${100 - contentSize[i] * 100}% ${contentSize[i] * 100}%`;
      } else if (sidebar === 'right') {
        gridAreas[i] = '"content ."';
        gridColumns[i] = `${contentSize[i] * 100}% ${100 - contentSize[i] * 100}%`;
      } else {
        gridAreas[i] = '"content"';
        gridColumns[i] = `100%`;
      }
    }
  });
  let sidebarWidth = [0, 0, 0, 0];
  sidebarSize.forEach((sidebar, i) => {
    sidebarWidth[i] = sidebar !== 'none' ? 100 - contentSize[i] * 100 : 0;
  });

  return `
  @media screen and (max-width: 599px) {
    ${headerSize[0] === 'none'
    ? `.${layoutName} .layout-header { display: none; }`
    : ''}
    ${sidebarSize[0] === 'none'
    ? `.${layoutName} .layout-sidebar { display: none; }`
    : ''}
    .${layoutName} {
      grid-template-areas: ${gridAreas[0]};
      grid-template-columns: ${gridColumns[0]};
    }
    ${headerSize[0] === 'none' ? ''
    : `.${layoutName} .layout-header {
        ${headerSize[0] === 'top' ? 'top: 0;' : 'bottom: 0;'}
      }`
}
    ${sidebarSize[0] === 'none' ? ''
    : `.${layoutName} .layout-sidebar {
        ${sidebarWidth[0] === 0
    ? `${sidebarSize[0] === 'left' ? 'left: -100%;' : 'right: -100%;'}
          width: calc(100% - var(--ls-250p));`
    : `${sidebarSize[0] === 'left' ? 'left: 0;' : 'right: 0;'}
          width: ${sidebarWidth[0]}%;`
}
        ${headerSize[0] === 'none' ? 'min-height: 100vh;' : ''}
        ${headerSize[0] === 'top' ? 'top: var(--ls-250p);' : headerSize[0] === 'bottom' ? 'bottom: var(--ls-250p);' : ''}
      }`
}
    ${sidebarSize[0] !== 'none' && sidebarWidth[0] === 0
    ? `.${layoutName} .layout-sidebar-tab {
        ${headerSize[0] === 'top' ? 'top: var(--ls-250p);' : headerSize[0] === 'bottom' ? 'bottom: var(--ls-250p);' : ''}
        ${sidebarSize[0] === 'left' ? 'left: 0;' : 'right: 0;'}
      }`
    : `.${layoutName} .layout-sidebar-tab, .${layoutName} .layout-sidebar-overlay {
        display: none;
      }
      .${layoutName}.sidebar-visible .layout-sidebar {
        --box-shadow: var(--shadow-0);
      }
      `
}
    .${layoutName}.sidebar-visible .layout-sidebar {
      ${sidebarSize[0] === 'left' ? 'left: 0;' : 'right: 0;'}
    }
    .${layoutName}.sidebar-visible .layout-sidebar-tab {
      ${sidebarSize[0] === 'left' ? 'left: calc(100% - var(--ls-250p));' : 'right: calc(100% - var(--ls-250p));'}
    }
  }
  @media screen and (min-width: 600px) and (max-width: 899px) {
    ${headerSize[1] === 'none'
    ? `.${layoutName} .layout-header { display: none; }`
    : ''}
    ${sidebarSize[1] === 'none'
    ? `.${layoutName} .layout-sidebar { display: none; }`
    : ''}
    .${layoutName} {
      grid-template-areas: ${gridAreas[1]};
      grid-template-columns: ${gridColumns[1]};
    }
    ${sidebarSize[1] === 'none' ? ''
    : `.${layoutName} .layout-sidebar {
      ${sidebarWidth[1] === 0
    ? `${sidebarSize[1] === 'left' ? 'left: -100%;' : 'right: -100%;'}
        width: calc(100% - var(--ls-250p));`
    : `${sidebarSize[1] === 'left' ? 'left: 0;' : 'right: 0;'}
        width: ${sidebarWidth[1]}%;`
}
      ${headerSize[1] === 'none' ? 'min-height: 100vh;' : ''}
      ${headerSize[1] === 'top' ? 'top: var(--ls-250p);' : headerSize[1] === 'bottom' ? 'bottom: var(--ls-250p);' : ''}
    }`
}
    ${sidebarSize[1] !== 'none' && sidebarWidth[1] === 0
    ? `.${layoutName} .layout-sidebar-tab {
        ${headerSize[1] === 'top' ? 'top: var(--ls-250p);' : headerSize[1] === 'bottom' ? 'bottom: var(--ls-250p);' : ''}
        ${sidebarSize[1] === 'left' ? 'left: 0;' : 'right: 0;'}
      }`
    : `.${layoutName} .layout-sidebar-tab, .${layoutName} .layout-sidebar-overlay {
        display: none;
      }
      .${layoutName}.sidebar-visible .layout-sidebar {
        --box-shadow: var(--shadow-0);
      }
      `
}
    .${layoutName}.sidebar-visible .layout-sidebar {
      ${sidebarSize[1] === 'left' ? 'left: 0;' : 'right: 0;'}
    }
    .${layoutName}.sidebar-visible .layout-sidebar-tab {
      ${sidebarSize[1] === 'left' ? 'left: calc(100% - var(--ls-250p));' : 'right: calc(100% - var(--ls-250p));'}
    }
  }
  @media screen and (min-width: 900px) and (max-width: 1199px) {
    ${headerSize[2] === 'none'
    ? `.${layoutName} .layout-header { display: none; }`
    : ''}
    ${sidebarSize[2] === 'none'
    ? `.${layoutName} .layout-sidebar { display: none; }`
    : ''}
    .${layoutName} {
      grid-template-areas: ${gridAreas[2]};
      grid-template-columns: ${gridColumns[2]};
    }
    ${sidebarSize[2] === 'none' ? ''
    : `.${layoutName} .layout-sidebar {
      ${sidebarWidth[2] === 0
    ? `${sidebarSize[2] === 'left' ? 'left: -100%;' : 'right: -100%;'}
        width: calc(100% - var(--ls-250p))%;`
    : `${sidebarSize[2] === 'left' ? 'left: 0;' : 'right: 0;'}
        width: ${sidebarWidth[2]}%;`
}
      ${headerSize[2] === 'none' ? 'min-height: 100vh;' : ''}
      ${headerSize[2] === 'top' ? 'top: var(--ls-250p);' : headerSize[2] === 'bottom' ? 'bottom: var(--ls-250p);' : ''}
    }`
}
    ${sidebarSize[2] !== 'none' && sidebarWidth[2] === 0
    ? `.${layoutName} .layout-sidebar-tab {
      ${headerSize[2] === 'top' ? 'top: var(--ls-250p);' : headerSize[2] === 'bottom' ? 'bottom: var(--ls-250p);' : ''}
      ${sidebarSize[2] === 'left' ? 'left: 0;' : 'right: 0;'}
    }`
    : `.${layoutName} .layout-sidebar-tab, .${layoutName} .layout-sidebar-overlay {
      display: none;
    }
    .${layoutName}.sidebar-visible .layout-sidebar {
      --box-shadow: var(--shadow-0);
    }
    `
}
  }
  @media screen and (min-width: 1200px) {
    ${headerSize[3] === 'none'
    ? `.${layoutName} .layout-header { display: none; }`
    : ''}
    ${sidebarSize[3] === 'none'
    ? `.${layoutName} .layout-sidebar { display: none; }`
    : ''}
    .${layoutName} {
      grid-template-areas: ${gridAreas[3]};
      grid-template-columns: ${gridColumns[3]};
    }
    ${sidebarSize[3] === 'none' ? ''
    : `.${layoutName} .layout-sidebar {
      ${sidebarWidth[3] === 0
    ? `${sidebarSize[3] === 'left' ? 'left: -100%;' : 'right: -100%;'}
        width: calc(100% - var(--ls-250p))%;`
    : `${sidebarSize[3] === 'left' ? 'left: 0;' : 'right: 0;'}
        width: ${sidebarWidth[3]}%;`
}
      ${headerSize[3] === 'none' ? 'min-height: 100vh;' : ''}
      ${headerSize[3] === 'top' ? 'top: var(--ls-250p);' : headerSize[3] === 'bottom' ? 'bottom: var(--ls-250p);' : ''}
    }`
}
    ${sidebarSize[3] !== 'none' && sidebarWidth[3] === 0
    ? `.${layoutName} .layout-sidebar-tab {
      ${headerSize[3] === 'top' ? 'top: var(--ls-250p);' : headerSize[3] === 'bottom' ? 'bottom: var(--ls-250p);' : ''}
      ${sidebarSize[3] === 'left' ? 'left: 0;' : 'right: 0;'}
    }`
    : `.${layoutName} .layout-sidebar-tab, .${layoutName} .layout-sidebar-overlay {
      display: none;
    }
    .${layoutName}.sidebar-visible .layout-sidebar {
      --box-shadow: var(--shadow-0);
    }
    `
}
  }
  `;
}
;

export default LayoutStyle;
