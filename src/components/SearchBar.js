import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  render() {
    return (
      <section className="section section-search red darken-4 white-text center">
        <div className="container">
          <div className="row">
            <div className="col s12">
              <h4 className="left-align">YouTuber</h4>
              <div className="input-field">
                <input
                  className="white grey-text autocomplete"
                  placeholder="  Watch Something Now!"
                  type="text"
                  value={this.state.term}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SearchBar;
