import React, { Component } from 'react';
import SearchInput, {createFilter} from 'react-search-input';
import authors from '../../data.json';
import './search.css';

const lang = 'ru';

class Search extends Component {
  constructor (props) {
    super(props)
    this.state = {
      searchTerm: ''
    }
    this.searchUpdated = this.searchUpdated.bind(this)
  }
 
  render () {
    const KEYS_TO_FILTERS = [`${lang}.name`, `${lang}.years`, `${lang}.birthdayPlace`];
    const filteredAuthors = authors.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
 
    return (
      <div>
        <SearchInput className="search-input" onChange={this.searchUpdated} />
        <div className="authors-container" onClick={this.selectAuthor}>
        {filteredAuthors.map(item => {
          return (
            <figure className="author-info" name={item[lang].name} key={item[lang].name}>
              <img className="author-foto" src={process.env.PUBLIC_URL + (item[lang].image)} alt={item[lang].name}></img>
              <figcaption className="author-name">{item[lang].name}</figcaption>
            </figure>
          )
        })}
        </div>
      </div>
    )
  }
 
  searchUpdated (term) {
    this.setState({searchTerm: term})
  }

  selectAuthor(e) {
    const target = e.target;
    console.log(target.parentElement.getAttribute("name"));    
  }
}

export default Search;