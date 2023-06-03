import React, { Component } from 'react';
import fetchImages from 'services/PixabayApi';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';

export default class App extends Component {
  state = {
    query: '',
    imgs: [],
    page: null,
    isLoadMoreBtn: false,
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      fetchImages(this.state.query, this.state.page)
        .then(data =>
          data.hits.length < 12
            ? this.setState(PrevState => ({
                imgs: [...PrevState.imgs, ...data.hits],
                isLoading: false,
                isLoadMoreBtn: false,
              }))
            : this.setState(PrevState => ({
                imgs: [...PrevState.imgs, ...data.hits],
                isLoading: false,
                isLoadMoreBtn: true,
              }))
        )
        .catch(error => console.log(error));
    }
  }

  handleFormSubmit = query => {
    this.setState({
      query,
      imgs: [],
      page: 1,
      isLoading: true,
      isLoadMoreBtn: false,
    });
  };

  handleLoadMore = () => {
    this.setState(({ page }) => ({
      page: page + 1,
      isLoading: true,
      isLoadMoreBtn: false,
    }));
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {this.state.query && <ImageGallery imgs={this.state.imgs} />}
        {this.state.isLoadMoreBtn && <Button onClick={this.handleLoadMore} />}
        {this.state.isLoading && <Loader />}
      </div>
    );
  }
}
