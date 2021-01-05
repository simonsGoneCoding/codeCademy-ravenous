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

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>{this.renderSortByOptions()}</ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" />
          <input placeholder="Where?" />
        </div>
        <div className="SearchBar-submit">
          <a href="https://google.com">Let's Go</a>
        </div>
      </div>
    );
  }
}

export default SearchBar;
