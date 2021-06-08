import React from 'react';


function SearchList(props) {
    const filteredItems = props.items.filter(i => 
        (i.name ?? '').toLowerCase().includes(props.search) || (i.description ?? '').toLowerCase().includes(props.search));

    return (
      <div className="search">
        {filteredItems.map(i => (<div className="search-item">{i.name} - {i.description}</div>))}
      </div>
    );
  }
  
  export default SearchList;
  