import React from 'react';

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
          <form onSubmit={this.onFormSubmit}>
            <div className="row">
              <div className="col s12">
                <h4 className="left-align">YouTuber</h4>
                <div className="input-field">
                  <input
                    className="white grey-text autocomplete"
                    placeholder="  Watch Something Now!"
                    type="text"
                    value={this.state.term}
                    onChange={this.onInputChange}
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default SearchBar;
