for(let i=0;i<places.length;i++){
    document.querySelector('.city-list').append(document.createElement('li'))
    // li태그만들기

    const country=document.createElement('span')
    country.classList.add('country')
    country.textContent = places[i]['country']
    document.querySelectorAll('li')[i].append(country)
    document.querySelectorAll('.country')[i].setAttribute('style','font-weight: 900')
    // li태그안에 country 넣기
    
    const city=document.createElement('div')
    city.classList.add('city')
    city.textContent = `City : ${places[i]['city']}`
    document.querySelectorAll('li')[i].append(city)
    // li태그안에 country 넣기
    
    const address=document.createElement('div')
    address.classList.add('address')
    address.textContent = `Address : ${places[i]['address']}`
    document.querySelectorAll('li')[i].append(address)
    // li태그안에 country 넣기

    document.querySelectorAll('li')[i].setAttribute('style','padding:5px')
}

document.querySelector('.city-list').setAttribute('style',"list-style: none; padding: 5px")

