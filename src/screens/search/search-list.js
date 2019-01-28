import React, { Component } from 'react';
import Search from '../../components/search/search';
import Footer from '../../components/footer/footer';

class SearchList extends Component {
  render() {
    return (
      <>
      <Search lang={this.props.lang} selectName={this.props.selectAuthor} testName={this.props.newName}/>
      <Footer />
      </>
    );
  }
}

export default SearchList;
