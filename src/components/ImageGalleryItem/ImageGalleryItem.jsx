import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';
import Modal from 'components/Modal/Modal';

export default class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  toggleModal = () => {
    this.setState(({ isModalOpen }) => ({ isModalOpen: !isModalOpen }));
  };

  render() {
    return (
      <li className={css.ImageGalleryItem}>
        <img
          src={this.props.webURL}
          alt={this.props.tags}
          className={css.ImageGalleryItemImage}
          onClick={this.toggleModal}
        />

        {this.state.isModalOpen && (
          <Modal
            onCloseModal={this.toggleModal}
            largeImageURL={this.props.largeImageURL}
            tags={this.props.tags}
          />
        )}
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  webURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
