import React from 'react'
import fetchData from './fetchData';

const Article = () => {

      // function to fetch data on user request
  const handleClick = () => {
    fetchData() 
  }

  return (
    <div>
         <p>Enter a topic to search current headlines</p>
        <input type="text" name="searchBar" id="searchBar" />
        <button onClick={handleClick}>Populate Top Headlines</button>
        <p className="link-reminder">Click the headline to view the article at the NY Times</p>
        <ul id="ulElement"></ul>
    </div>
  )
}

export default Article