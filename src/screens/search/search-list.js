import React, { Component } from 'react';
import Search from '../../components/search/search';

class SearchList extends Component {
  render() {
    return (
      <>
      <Search lang={this.props.lang} selectName={this.props.selectAuthor} testName={this.props.newName}/>
      </>
    );
  }
}

export default SearchList;