const sidebarFormEl = document.querySelector('.sidebar__form');
const fNameEl = document.querySelector('.fName');
const lNameEl = document.querySelector('.lName');
const occupEl = document.querySelector('.occupation');
const countryEl = document.querySelector('.country');
const ageEl = document.querySelector('.age');
const selectGender = document.querySelector('#gender');
const cardCollection = document.querySelector('.card__collection')

sidebarFormEl.addEventListener('submit', (event) => {
    event.preventDefault()
    if(!fNameEl.value.trim() || !lNameEl.value.trim() || !occupEl.value.trim() || !countryEl.value.trim() || selectGender.value === ''){

        alert('Error: Please write at least one character for each input')
    }else{
        const cardList = document.createElement('div')
        cardList.className = 'card__list'
        const userImage = document.createElement('div');
        userImage.className = 'user__image';
        const userInfo = document.createElement('ul')
        userInfo.innerHTML = `
        <li>Fullname: <span>${fNameEl.value} ${lNameEl.value}</span></li>
        <li>Occupation: <span>${occupEl.value}</span></li>
        <li>Country: <span>${countryEl.value}</span></li>
        <li>Age: <span>${ageEl.value}</span></li>
        <li>Gender: <span>${selectGender.value}</span></li>
        `
    userImage.innerHTML = `
    <img src="${selectGender.value === 'Male' ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgdmvTNzX2AmCX2rSRQBa4KkZsU2GgiWh8sA&s" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzPRQ6LprnPzvvP-_vVO_nhSokwda8CMsnwQ&s"}">
    `
    cardList.append(userImage, userInfo)
    cardCollection.appendChild(cardList)
    
    fNameEl.value = ''
    lNameEl.value = ''
    occupEl.value = ''
    countryEl.value = ''
    ageEl.value = ''
    selectGender.value = ''
}
})