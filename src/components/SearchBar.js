import React from 'react';
import './Style.css';

class SearchBar extends React.Component {
  state = { term: '' };

  onInputChange = e => {
    this.setState({ term: e.target.value });
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <section className="section section-search red darken-4 white-text center">
        <div className="container">
          <div className="row">
            <div className="col s12">
              <h4 className="left-align">YouTuber</h4>
              <div className="nav-wrapper">
                <form onSubmit={this.onFormSubmit}>
                  <div className="input-field">
                    <input
                      className="white grey-text autocomplete"
                      placeholder="  Watch Something Now!"
                      type="search"
                      id="search"
                      value={this.state.term}
                      onChange={this.onInputChange}
                    />
                    <label className="label-icon red-text">
                      <i className="material-icons">search</i>
                    </label>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SearchBar;
