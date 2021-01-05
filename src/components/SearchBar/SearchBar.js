import React from "react";
import "./Searchbar.css";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term: "",
      location: "",
      sortBy: "best_match",
    };

    this.sortByOptions = {
      "Best Match": "best_match",
      "Highest Rated": "rating",
      "Most Reviewed": "review_count",
    };

    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  getSortByClass(sortByOption) {
    if (this.state.sortBy === sortByOption) {
      return "active";
    } else {
      return "";
    }
  }

  renderSortByOptions() {
    return Object.keys(this.sortByOptions).map((sortByOption) => {
      let sortByOptionValue = this.sortByOptions[sortByOption];
      return (
        <li
          key={sortByOptionValue}
          className={this.getSortByClass(sortByOptionValue)}
          onClick={this.handleSortByChange.bind(this, sortByOptionValue)}
        >
          {sortByOption}
        </li>
      );
    });
  }

  handleSortByChange(sortByOption) {
    this.setState({ sortBy: sortByOption });
  }

  handleTermChange(e) {
    const serachBusinness = e.target.value;
    this.setState({ term: serachBusinness });
  }

  handleLocationChange(e) {
    const searchLocation = e.target.value;
    this.setState({ location: searchLocation });
  }

  handleSearch(e) {
    const { term, location, sortBy } = this.state;
    this.props.searchYelp(term, location, sortBy);
    e.preventDefault();
  }

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>{this.renderSortByOptions()}</ul>
        </div>
        <div className="SearchBar-fields">
          <input
            placeholder="Search Businesses"
            onChange={this.handleTermChange}
          />
          <input placeholder="Where?" onChange={this.handleLocationChange} />
        </div>
        <div className="SearchBar-submit">
          <a href="http://localhost:3000/#" onClick={this.handleSearch}>
            Let's Go
          </a>
        </div>
      </div>
    );
  }
}

export default SearchBar;
