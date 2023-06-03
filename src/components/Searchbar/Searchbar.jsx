import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { IoSearchOutline } from 'react-icons/io5';
import css from './Searchbar.module.css';

export default class Searchbar extends Component {
  state = { search: '' };

  handleFormSubmit = e => {
    e.preventDefault();
    const searchQuery = e.currentTarget.text.value.trim();

    if (searchQuery === '') {
      alert('Please enter at least one word');
    } else this.props.onSubmit(searchQuery);
    this.reset();
  };

  handleChangeInput = e => {
    this.setState({
      search: e.currentTarget.value.toLowerCase().trim(),
    });
  };

  reset = () => {
    this.setState({
      search: '',
    });
  };

  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.handleFormSubmit}>
          <button type="submit" className={css.SearchFormButton}>
            <span className={css.SearchFormButtonLabel}>
              <IoSearchOutline className={css.Icon} />
            </span>
          </button>

          <input
            className={css.SearchFormInput}
            value={this.state.search}
            type="text"
            name="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChangeInput}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
