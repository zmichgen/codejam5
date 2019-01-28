import React, { Component } from 'react';
import SearchInput, {createFilter} from 'react-search-input';
import authors from '../../data.json';
import './search.css';
import { Link } from "react-router-dom";

class Search extends Component {
  constructor (props) {
    super(props)
    this.state = {
      searchTerm: '',
    }
    this.searchUpdated = this.searchUpdated.bind(this);
  }
 
  render () {
    const authorsNameList = (Object.keys(authors[this.props.lang].autors)).map(i => {
      return {
        [this.props.lang]: authors[this.props.lang].autors[i],
        key: i
      }
    });
    const KEYS_TO_FILTERS = [`${this.props.lang}.name`, `${this.props.lang}.years`, `${this.props.lang}.birthdayPlace`];
    const filteredAuthors = authorsNameList.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
    return (
      <div>
        <SearchInput className="search-input" onChange={this.searchUpdated} />
        <div className="authors-container" onClick={this.selectAuthor}>
        {filteredAuthors.map((item, index) => {
          return (
            <Link key={index} to="/autor">
              <figure className="author-info" name={item.key} key={item[this.props.lang].name}>
                <img className="author-foto" src={process.env.PUBLIC_URL + (item[this.props.lang].image)} alt={item[this.props.lang].name}></img>
                <figcaption className="author-name">{item[this.props.lang].name}</figcaption>
                <p className="author-description">{item[this.props.lang].description}</p>
              </figure>
            </Link>
          )
        })}
        </div>
      </div>
    )
  }
 
  searchUpdated (term) {
    this.setState({searchTerm: term})
  }

  selectAuthor = (e) => {
    const target = e.target;
    if (target.tagName === 'FIGURE') {
      this.props.selectName(target.getAttribute("name"));
      localStorage.setItem('name', target.getAttribute("name"))
    } else {
      this.props.selectName(target.parentElement.getAttribute("name"));
      localStorage.setItem('name', target.parentElement.getAttribute("name"))
    }
  }
}

export default Search;
