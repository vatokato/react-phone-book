import React from 'react';
import { connect } from 'react-redux'
import { Search } from '../components/Search'
import { setQuery } from '../actions/SearchActions'


class SearchContainer extends React.Component {
  render () {
    console.log("SearchContainer render", this.props);
    const {search,setQuery} = this.props;
    return (
      <div className="phone-search-container">
        <Search query={search.query} setQuery={setQuery} />
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    search: store.search
  };
}

const mapDispatchToProps = dispatch => {
  return {
    setQuery: (query) => dispatch(setQuery(query))
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(SearchContainer);
