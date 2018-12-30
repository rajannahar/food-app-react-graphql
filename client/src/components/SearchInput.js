import React, { Component } from 'react'
import Home from"./Home";

class SearchInput extends Component {

  constructor(props) {
    super(props);

    this.state = {
      searchInput: ""
    };

    this.searchText = this.searchText.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  searchText(e) {
    e.preventDefault();
    this.setState({
      searchInput: e.target.value
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.refs.searchForm.submit();
  }

  handleKeyPress = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      this.refs.searchForm.submit();
    }
  }

  render() {
    return (
      <div className="row" style={{marginTop: "25px"}}>
        <Home />
        <div className="col-9">
          <form className="form" id="seachForm" onSubmit={this.submitForm} ref="searchForm" action={`/search/${this.state.searchInput}`}>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                id="addInput"
                placeholder="Search..." 
                aria-label="Search" 
                aria-describedby="Search" 
                onChange={this.searchText} 
                onKeyPress={this.handleKeyPress} 
              />
              <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button" onClick={this.handleSubmit}>Search</button>
            </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default SearchInput;