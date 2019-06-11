import React from 'react';
import { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Modal, ModalCenter, ModalSection, Button } from '../src/components';

test('ModalCenter renders a <div> element of the appropriate structure.', () => {
  const modalCenterRef = React.createRef();
  const wrapper = mount(
    <ModalCenter isOpen ref={modalCenterRef}>
      <Modal>
        <ModalSection media="."/>
        <ModalSection>
          <h5>Hello world<small>Lorem ipsum</small></h5>
          <p>This is some demo content that I want to test the Card with.</p>
        </ModalSection>
        <ModalSection>
          <p>More stuff here.</p>
        </ModalSection>
        <Button onClick={() => modalCenterRef.current.hide()}>Close</Button>
      </Modal>
    </ModalCenter>
  );

  expect(wrapper).toContainMatchingElement('div.modal-center');
  expect(wrapper).toContainMatchingElement('div.modal-overlay');
  expect(wrapper).toContainMatchingElement('div.modal');
  expect(wrapper).toContainMatchingElement('div.modal-section');
  expect(wrapper).toContainMatchingElement('div.modal-media-section');
});
