const span = document.querySelector('h3 span')

const url = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i='
let id = localStorage.getItem('id')

if (id) {
    span.innerText = id
    fetch(url + id)
        .then(res => res.json())
        .then(info => {
            const { strMeal, strMealThumb } = info.meals[0]
            console.log(strMeal, strMealThumb);
            for (let i = 1; i < 21; i++) {


                if (info.meals[0]['strIngredient' + i]) {
                    console.log(
                        info.meals[0]['strIngredient' + i],
                        ":",
                        info.meals[0]['strMeasure' + 1])

                }
            }
        })

}