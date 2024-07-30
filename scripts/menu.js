const buttons = document.querySelectorAll('button')


const baseUrl = 'https://www.themealdb.com/api/json/v1/1'
const divFoods = document.querySelector('.foods')


// value index  array
buttons.forEach((btn) => {

    btn.addEventListener('click', () => {
        buttons.forEach(el => {
            if (el.innerText == btn.innerText) {
                el.className = 'active'
            } else {
                el.className = ''
            }
        })

        fetchFilterFoods(btn.innerText)
    })
})



function fetchFilterFoods(category = "Breakfast") {
    fetch(baseUrl + '/filter.php?c=' + category)
        .then(res => res.json())
        .then(foods => {
            const sliced= foods.meals.slice(0, 8)
            
            showFoods(sliced)
        })
}

fetchFilterFoods()


function showFoods(foods = []) {
    divFoods.innerHTML = ''
    for (const food of foods) {
        const {strMeal, strMealThumb, idMeal} = food
        divFoods.innerHTML += `
        <div class="food" onclick="getInfo(${idMeal})">
        <img src="${strMealThumb}" alt="img" width="250px" height="300px">
    <h2>$ ${idMeal}</h2>
<h3>${strMeal}</h3>
</div>
`
    }
}

function getInfo(foodId){
    localStorage.setItem('id', foodId)
    window.location.href = 'blog2.html'
}