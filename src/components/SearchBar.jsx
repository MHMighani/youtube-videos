import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = event =>{
    event.preventDefault()

    //TODO: make sure we call callback from  parent component
    this.props.onFormSubmit(this.state.term)
  }

  render() {
    return (
      <div className="search-bar ui segment">
        <form action="" onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>video search</label>
            <input
              className=""
              value={this.state.term}
              onChange={event => this.setState({ term: event.target.value })}
              type="text"
              placeholder="search for video"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
