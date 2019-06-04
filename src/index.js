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
  <Paragraph className='margin-ls-250p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent efficitur facilisis posuere. <Tooltip content='Simple text' position='top'>Hello.</Tooltip> Phasellus auctor justo eget dapibus blandit. Praesent at felis non leo suscipit finibus sit amet sit amet nibh. Donec suscipit diam viverra eleifend malesuada. <Tooltip content='Simple text' position='right'>Hello.</Tooltip> Etiam ligula magna, rutrum a enim semper, hendrerit finibus nibh. Sed pulvinar nisi ac est finibus, non rutrum dui egestas. Nulla facilisi. Ut vitae ullamcorper eros. <Tooltip content='Simple text' position='bottom'>Hello.</Tooltip> Curabitur eu elit odio. Maecenas ex diam, pellentesque eu facilisis aliquam, aliquet ac eros. Sed mattis pellentesque mauris, non faucibus urna iaculis non. <Tooltip content='Simple text' position='left'>Hello.</Tooltip> Nulla vel tellus sed turpis fringilla feugiat.</Paragraph>
  </>, 
  document.getElementById('root'));
