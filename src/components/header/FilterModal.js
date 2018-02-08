import React from 'react';
import { Button, Modal, Glyphicon } from 'react-bootstrap';
import FilterForm from './FilterForm';

class FilterModal extends React.Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false
    }
    this.openModal = this.openModal.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true})
  }

  handleClose() {
    this.setState({modalIsOpen: false})
  }

  handleChange(e) {
    this.setState({checkedItem: e.target.checked})
  }
  render() {
    return(
      <div>
        <Button onClick={this.openModal}><Glyphicon glyph="filter" /> Filter </Button>
        <Modal show={this.state.modalIsOpen} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Filter items</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FilterForm/>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

export default FilterModal;
