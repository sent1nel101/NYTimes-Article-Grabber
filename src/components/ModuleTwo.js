import { React } from 'react'
import '../App.css'
const APIKey = `E0HjrrMTtvUFkNSviUpQf2ah588jjahy`

const ModuleTwo = () => {
  
  // fetch API data
  const fetchData = async () => {
    // capture the search term from the user in an input field
    const searchTerm = document.querySelector('#searchBar').value
    // send the request
    const response = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchTerm}&api-key=${APIKey}`)
    const data = await response.json()
    const mapData = Object.entries(data)
    // map over response data to display the results
    mapData[2][1].docs.map((article, i) => {
      const ulElement = document.querySelector('#ulElement')
      const  newLine = document.createElement('li')
      console.log(article)
        newLine.innerHTML = `
        <div class='listItem'>
        <div class="text-wrapper">
        <a class="listLink" style="color: #fff" href="${article.web_url}" target="_blank"><h3><strong>${article.headline.main}</strong></h3></a>
        <p class="listItem-p">${article.snippet}</p>
        <p class="link-reminder">Click the headline to view the article at the NY Times</p>
        </div>
        <img src="https://www.nytimes.com/${article.multimedia[7].url}"></div>
        `
        ulElement.appendChild(newLine)
    })
    
  }

  // function to fetch data on user request
  const handleClick = () => {
    fetchData() 
  }

  return (
    <div>
      <p>Enter a topic to search current headlines</p>
      <input type="text" name="searchBar" id="searchBar" />
      <button onClick={handleClick}>Populate Top Headlines</button>
      <ul id="ulElement"></ul>
      </div>
  )
}

export default ModuleTwo