import React from 'react';
import ReactDOM from 'react-dom';

import Type from './docs/Type';
import ButtonDocs from './docs/Button';
import CardDocs from './docs/Card';
import DropdownDocs from './docs/Dropdown';
import HyperlinkDocs from './docs/Hyperlink';
import TableDocs from './docs/Table';
import ImageDocs from './docs/Image';
import ListDocs from './docs/List';
import GridDocs from './docs/Grid';
import MenuDocs from './docs/Menu';
import LayoutSysDocs from './docs/LayoutSystem';
import LayoutDocs from './docs/Layout';
import TypographyDocs from './docs/Typography';

import { Hyperlink, Anchor, Button, ButtonGroup, List, ListItem, Breadcrumb, BreadcrumbItem, Step, StepItem, Layout, Grid, Row, Column as Col, Content, Sidebar, Header, Card, CardSection, Menu, MenuItem, Table, TableRow, TableCell, TableHead, TableBody, TableCaption, Dropdown, Collapse, Title, Text, Paragraph, Code, Preformatted, Kbd, Quote, Tooltip, Popover, Badge, Checkbox, Radio, Icon, TextInput, NumberInput, Image, EmailInput, PasswordInput, UrlInput, SelectInput, Option, ComboboxInput, CreditCardInput, PhoneInput, CurrencyInput, TimeInput, Search, Progress, Loader, Switch, Divider, Calendar, ContextButton, Pagination, PaginationItem, ColorInput, Accordion, Tab, TabItem, FileInput, DateInput, RatingInput, SliderInput, Form, FormLegend, FormLabel, Modal, ModalSection, ModalCenter, Alert, Notification, NotificationCenter } from './components';

import './styles/index.scss';
import './index.scss';
import 'prismjs/themes/prism.css';

ReactDOM.render(<>
  <Tab openIndex={2}>
    <TabItem title='Lorem Ipsum'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel nisi ultricies, convallis enim iaculis, commodo nisi. Suspendisse commodo arcu nibh, ut pretium felis imperdiet ac. Etiam nec volutpat arcu. Aliquam et congue magna, aliquam luctus quam. Ut vulputate lorem risus, non feugiat magna maximus non. Sed tellus nisl, fermentum id finibus gravida, molestie vel lectus. Cras quam mi, sodales sed scelerisque eget, dignissim et nisi. Suspendisse sodales faucibus tellus ut iaculis.</p></TabItem>
    <TabItem title='Dolor Sit Amet'><p>Etiam eros ex, imperdiet non pharetra vel, accumsan ut erat. Phasellus nisl enim, cursus aliquet faucibus a, dignissim vestibulum leo. Aenean ullamcorper sem mauris, in pharetra quam rhoncus at. Phasellus posuere velit commodo venenatis tempus. Quisque vulputate nisi sem, ut maximus elit malesuada a. Duis vitae lectus vel mi pretium luctus non non lacus. Sed vitae est nec sem dictum accumsan quis eleifend tellus. Sed at dignissim velit. Pellentesque nec erat sed massa condimentum semper id id eros. Sed eleifend ex sit amet eros molestie fermentum. Pellentesque quis purus mi.</p></TabItem>
    <TabItem title='Peprendur'><p>Etiam rutrum lobortis porta. Vivamus justo diam, condimentum ut facilisis vitae, imperdiet ac lacus. Curabitur rutrum ex arcu, et lobortis augue gravida id. Mauris eu neque erat. Ut leo arcu, molestie sed pulvinar efficitur, facilisis id nisl. Etiam luctus ut nibh et eleifend. Cras lorem enim, posuere id vehicula vitae, iaculis at ante. Integer id ligula eu risus tristique commodo. Mauris tincidunt convallis erat ac faucibus. Fusce vehicula malesuada dui at fringilla. Phasellus efficitur, est vel tincidunt faucibus, arcu libero dignissim elit, non varius est ante nec urna. Sed in metus fermentum libero sodales vulputate. Nunc vel placerat ante. Mauris nec efficitur ante, eget ultricies magna. Morbi elementum interdum nunc ut suscipit. Donec in orci vel lectus mattis finibus sit amet in metus.</p></TabItem>
    <TabItem title='Nulla sit etiam'><p>Nam sit amet convallis justo. Etiam tristique diam sem, at feugiat felis mattis vitae. Morbi ullamcorper, urna non fermentum mollis, purus lacus eleifend elit, eget sagittis mi arcu et arcu. Integer nec augue aliquet risus viverra ullamcorper. Integer dapibus nunc ut vestibulum accumsan. Aliquam luctus in erat id placerat. Proin eleifend cursus nulla, non rutrum libero efficitur eget. Nam nec purus finibus, cursus augue ac, maximus elit. Aenean at est in turpis lacinia lacinia. Mauris lectus lorem, luctus ac pharetra at, blandit a lectus. Pellentesque vel ex tristique, pulvinar risus sed, elementum lacus. Curabitur sed imperdiet augue, ut malesuada augue.</p></TabItem>
  </Tab>
  </>, 
  document.getElementById('root'));
