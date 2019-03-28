const LayoutStyle = (layoutName, header, sidebar, contentSize) => {
  let gridAreas = '';
  let gridColumns = ['','','',''];
  if (header === 'top') {
    if (sidebar === 'left') {
      gridAreas = '"header header"\n". content"';
      gridColumns[0] = `${100 - contentSize[0] * 100}% ${contentSize[0] * 100}%`;
      gridColumns[1] = `${100 - contentSize[1] * 100}% ${contentSize[1] * 100}%`;
      gridColumns[2] = `${100 - contentSize[2] * 100}% ${contentSize[2] * 100}%`;
      gridColumns[3] = `${100 - contentSize[3] * 100}% ${contentSize[3] * 100}%`;
    }
    else if (sidebar === 'right') {
      gridAreas = '"header header"\n"content ."';
      gridColumns[0] = `${contentSize[0] * 100}% ${100 - contentSize[0] * 100}%`;
      gridColumns[1] = `${contentSize[1] * 100}% ${100 - contentSize[1] * 100}%`;
      gridColumns[2] = `${contentSize[2] * 100}% ${100 - contentSize[2] * 100}%`;
      gridColumns[3] = `${contentSize[3] * 100}% ${100 - contentSize[3] * 100}%`;
    }
    else {
      gridAreas = '"header"\n"content"';
      gridColumns[0] = `100%`;
      gridColumns[1] = `100%`;
      gridColumns[2] = `100%`;
      gridColumns[3] = `100%`;
    }
  }
  else if (header === 'bottom') {
    if (sidebar === 'left') {
      gridAreas = '". content"\n"header header"';
      gridColumns[0] = `${100 - contentSize[0] * 100}% ${contentSize[0] * 100}%`;
      gridColumns[1] = `${100 - contentSize[1] * 100}% ${contentSize[1] * 100}%`;
      gridColumns[2] = `${100 - contentSize[2] * 100}% ${contentSize[2] * 100}%`;
      gridColumns[3] = `${100 - contentSize[3] * 100}% ${contentSize[3] * 100}%`;
    }
    else if (sidebar === 'right') {
      gridAreas = '"content ."\n"header header"';
      gridColumns[0] = `${contentSize[0] * 100}% ${100 - contentSize[0] * 100}%`;
      gridColumns[1] = `${contentSize[1] * 100}% ${100 - contentSize[1] * 100}%`;
      gridColumns[2] = `${contentSize[2] * 100}% ${100 - contentSize[2] * 100}%`;
      gridColumns[3] = `${contentSize[3] * 100}% ${100 - contentSize[3] * 100}%`;
    }
    else {
      gridAreas = '"content"\n"header"';
      gridColumns[0] = `100%`;
      gridColumns[1] = `100%`;
      gridColumns[2] = `100%`;
      gridColumns[3] = `100%`;
    }
  }
  else {
    if (sidebar === 'left') {
      gridAreas = '". content"';
      gridColumns[0] = `${100 - contentSize[0] * 100}% ${contentSize[0] * 100}%`;
      gridColumns[1] = `${100 - contentSize[1] * 100}% ${contentSize[1] * 100}%`;
      gridColumns[2] = `${100 - contentSize[2] * 100}% ${contentSize[2] * 100}%`;
      gridColumns[3] = `${100 - contentSize[3] * 100}% ${contentSize[3] * 100}%`;
    }
    else if (sidebar === 'right') {
      gridAreas = '"content ."';
      gridColumns[0] = `${contentSize[0] * 100}% ${100 - contentSize[0] * 100}%`;
      gridColumns[1] = `${contentSize[1] * 100}% ${100 - contentSize[1] * 100}%`;
      gridColumns[2] = `${contentSize[2] * 100}% ${100 - contentSize[2] * 100}%`;
      gridColumns[3] = `${contentSize[3] * 100}% ${100 - contentSize[3] * 100}%`;
    }
    else {
      gridAreas = '"content"';
      gridColumns[0] = `100%`;
      gridColumns[1] = `100%`;
      gridColumns[2] = `100%`;
      gridColumns[3] = `100%`;
    }
  }
  let sidebarWidth = [0, 0, 0, 0];
  if (sidebar !== 'none') {
    sidebarWidth = [100 - contentSize[0] * 100, 100 - contentSize[1] * 100, 100 - contentSize[2] * 100, 100 - contentSize[3] * 100];
  }

  return `
  .${layoutName} {
    grid-template-areas: ${gridAreas};
    grid-template-columns: ${gridColumns[0]};
  }
  ${header === 'none' ? '' :
    `.${layoutName} .layout-header {
      ${header === 'top' ? 'top: 0;' : 'bottom: 0;'}
    }`
  }
  ${sidebar === 'none' ? '' :
    `.${layoutName} .layout-sidebar {
      ${sidebarWidth[0] === 0 ? 
        `${sidebar === 'left' ? 'left: -100%;' : 'right: -100%;'}
        width: calc(100% - var(--ls-250p));`:
        `${sidebar === 'left' ? 'left: 0;' : 'right: 0;'}
        width: ${sidebarWidth[0]}%;`
      }
      ${header === 'none' ? 'min-height: 100vh;' : ''}
      ${header === 'top' ? 'top: var(--ls-250p);' : header === 'bottom' ? 'bottom: var(--ls-250p);' : ''}
    }`
  }
  ${sidebar !== 'none' && sidebarWidth[0] === 0 ? 
    `.${layoutName} .layout-sidebar-tab {
      ${header === 'top' ? 'top: var(--ls-250p);' : header === 'bottom' ? 'bottom: var(--ls-250p);' : ''}
      ${sidebar === 'left' ? 'left: 0;' : 'right: 0;'}
    }`:
    `.${layoutName} .layout-sidebar-tab, .${layoutName} .layout-sidebar-overlay {
      display: none;
    }
    .${layoutName}.sidebar-visible .layout-sidebar {
      --box-shadow: var(--shadow-0);
    }
    `
  }
  .${layoutName}.sidebar-visible .layout-sidebar {
    ${sidebar === 'left' ? 'left: 0;' : 'right: 0;'}
  }
  .${layoutName}.sidebar-visible .layout-sidebar-tab {
    ${sidebar === 'left' ? 'left: calc(100% - var(--ls-250p));' : 'right: calc(100% - var(--ls-250p));'}
  }
  @media screen and (min-width: 600px) {
    .${layoutName} {
      grid-template-columns: ${gridColumns[1]};
    }
    ${sidebar === 'none' ? '' :
      `.${layoutName} .layout-sidebar {
      ${sidebarWidth[1] === 0 ?
        `${sidebar === 'left' ? 'left: -100%;' : 'right: -100%;'}
        width: calc(100% - var(--ls-250p));`:
        `${sidebar === 'left' ? 'left: 0;' : 'right: 0;'}
        width: ${sidebarWidth[1]}%;`
      }
    }`
    }
    ${sidebar !== 'none' && sidebarWidth[1] === 0 ?
      `.${layoutName} .layout-sidebar-tab {
        ${header === 'top' ? 'top: var(--ls-250p);' : header === 'bottom' ? 'bottom: var(--ls-250p);' : ''}
        ${sidebar === 'left' ? 'left: 0;' : 'right: 0;'}
      }`:
      `.${layoutName} .layout-sidebar-tab, .${layoutName} .layout-sidebar-overlay {
        display: none;
      }
      .${layoutName}.sidebar-visible .layout-sidebar {
        --box-shadow: var(--shadow-0);
      }
      `
    }
  }
  @media screen and (min-width: 900px) {
    .${layoutName} {
      grid-template-columns: ${gridColumns[2]};
    }
    ${sidebar === 'none' ? '' :
      `.${layoutName} .layout-sidebar {
      ${sidebarWidth[2] === 0 ?
        `${sidebar === 'left' ? 'left: -100%;' : 'right: -100%;'}
        width: calc(100% - var(--ls-250p))%;`:
        `${sidebar === 'left' ? 'left: 0;' : 'right: 0;'}
        width: ${sidebarWidth[2]}%;`
      }
    }`
    }
    ${sidebar !== 'none' && sidebarWidth[2] === 0 ?
    `.${layoutName} .layout-sidebar-tab {
      ${header === 'top' ? 'top: var(--ls-250p);' : header === 'bottom' ? 'bottom: var(--ls-250p);' : ''}
      ${sidebar === 'left' ? 'left: 0;' : 'right: 0;'}
    }`:
    `.${layoutName} .layout-sidebar-tab, .${layoutName} .layout-sidebar-overlay {
      display: none;
    }
    .${layoutName}.sidebar-visible .layout-sidebar {
      --box-shadow: var(--shadow-0);
    }
    `
  }
  }
  @media screen and (min-width: 1200px) {
    .${layoutName} {
      grid-template-columns: ${gridColumns[3]};
    }
    ${sidebar === 'none' ? '' :
    `.${layoutName} .layout-sidebar {
      ${sidebarWidth[3] === 0 ?
        `${sidebar === 'left' ? 'left: -100%;' : 'right: -100%;'}
        width: calc(100% - var(--ls-250p))%;`:
        `${sidebar === 'left' ? 'left: 0;' : 'right: 0;'}
        width: ${sidebarWidth[3]}%;`
      }
    }`
    }
    ${sidebar !== 'none' && sidebarWidth[3] === 0 ?
     `.${layoutName} .layout-sidebar-tab {
      ${header === 'top' ? 'top: var(--ls-250p);' : header === 'bottom' ? 'bottom: var(--ls-250p);' : ''}
      ${sidebar === 'left' ? 'left: 0;' : 'right: 0;'}
    }`:
    `.${layoutName} .layout-sidebar-tab, .${layoutName} .layout-sidebar-overlay {
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