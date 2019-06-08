import React from 'react';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Hyperlink, Anchor, Button, ButtonGroup, List, ListItem, Breadcrumb, BreadcrumbItem, Step, StepItem, Layout, Grid, Row, Column as Col, Content, Sidebar, Header, Card, CardSection, Menu, MenuItem, Table, TableRow, TableCell, TableHead, TableBody, TableCaption, Dropdown, Collapse, Title, Text, Paragraph, Code, Preformatted, Kbd, Quote, Tooltip, Popover, Badge, Checkbox, Radio, Icon, TextInput, NumberInput, Image, EmailInput, PasswordInput, UrlInput, SelectInput, Option, ComboboxInput, CreditCardInput, PhoneInput, CurrencyInput, TimeInput, Search, Progress, Loader, Switch, Divider, Calendar, ContextButton, Pagination, PaginationItem, ColorInput, Accordion, Tab, TabItem, FileInput, DateInput, RatingInput, SliderInput, Form, FormLegend, FormLabel, Modal, ModalSection, ModalCenter, Alert, Notification, NotificationCenter } from '../src/components';

const wrapper = shallow(
  <Hyperlink href='#'>
    Open in same tab.
  </Hyperlink>
); 

test('Hyperlink renders an <a> element', () => {
  expect(wrapper).toContainMatchingElement('a');
});