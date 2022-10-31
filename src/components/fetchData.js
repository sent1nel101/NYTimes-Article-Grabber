const APIKey = `E0HjrrMTtvUFkNSviUpQf2ah588jjahy`;

 // fetch API data
 const fetchData = async () => {
  // capture the search term from the user in an input field
  const searchTerm = document.querySelector('#searchBar').value
  // send the request
  const response = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchTerm}&api-key=${APIKey}`)
  const data = await response.json()
console.log(data)
  if (searchTerm != ""){
    const mapData = Object.entries(data)

    if (mapData[2][1].meta.time > 30){
  // map over response data to display the results
  mapData[2][1].docs.map((article, i) => {
    const ulElement = document.querySelector('#ulElement')
    const  newLine = document.createElement('li')
      newLine.innerHTML = `
      <div key=${i} class='listItem'>
      <div class="text-wrapper">
      <a class="listLink" style="color: #fff" href="${article.web_url}" target="_blank"><h3><strong>${article.headline.main}</strong></h3></a>
      <p class="listItem-p">${article.snippet}</p>
      </div>
      <img src="https://www.nytimes.com/${article.multimedia[7].url}"></div>
      `
      ulElement.appendChild(newLine)
  })
} else{
  const ulElement = document.querySelector('#ulElement')
  const  newLine = document.createElement('li')
    newLine.innerHTML = `Nothing was entered or nothing was found with that term.<br />Please, try typing a succint search term in the field above.`
    ulElement.appendChild(newLine)
    setTimeout(function(){
      ulElement.removeChild(newLine)
    }, '5000')
}
  } else{
    const ulElement = document.querySelector('#ulElement')
    const  newLine = document.createElement('li')
      newLine.innerHTML = `Nothing was entered or nothing was found with that term.<br />Please, try typing a succint search term in the field above.`
      ulElement.appendChild(newLine)
      setTimeout(function(){
        ulElement.removeChild(newLine)
      }, '5000')
  }
  
  
}


module.exports = fetchData