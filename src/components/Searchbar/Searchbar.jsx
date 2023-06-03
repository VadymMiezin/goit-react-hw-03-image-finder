import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { IoSearchOutline } from 'react-icons/io5';
import css from './Searchbar.module.css';

export default class Searchbar extends Component {
  state = { search: '' };

  handleFormSubmit = event => {
    event.preventDefault();
    const searchQuery = event.currentTarget.text.value.trim();

    if (searchQuery === '') {
      alert('Введіть назву в поле пошуку');
    } else this.props.onSubmit(searchQuery);
    this.reset();
  };

  handleChangeInput = event => {
    this.setState({
      search: event.currentTarget.value.toLowerCase().trim(),
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
