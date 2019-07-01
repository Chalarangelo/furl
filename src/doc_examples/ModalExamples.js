import React from 'react';
import { ModalCenter, Modal, ModalSection, Button } from '../lib';

const ModalExamples = (props) => {
  const modalCenterRef = React.createRef();

  return (
    <div className="example-wrapper">
      <ModalCenter ref={modalCenterRef} />
      <Button style={{margin: 'var(--margin-vertical) auto'}} color='primary' onClick={() => {
        modalCenterRef.current.setContent(
          <Modal>
            <ModalSection>
              <h5>Howdy, there!</h5>
              <p>Nice to see you here. You can learn more about our website by visiting more pages.</p>
              <Button color='primary' onClick={() => modalCenterRef.current.hide()}>Take me back</Button>
            </ModalSection>
          </Modal>
        );

        modalCenterRef.current.show();
      }}>Open modal dialog</Button>
    </div>
  );
};

export default ModalExamples;