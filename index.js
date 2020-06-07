const categoryBackend = "https://localhost:3000/api/v1/categories"
const questionBackend = "https://localhost:3000/api/v1/questions"

document.addEventListener('DOMContentLoaded', () => { 
    getCategories() 
})

function getCategories() { 
    fetch(categoryBackend) 
    .then(response => response.json()) 
    .then(categories => { 
        categories.data.forEach(category => {
          const categoryMarkup =  
            <div class="categories"> 
                <button> ${category.attributes.name} </button>
            </div>
            <br> </br>;

            document.querySelector('#categories-container').innerHTML += categoryMarkup 
        })
    }) 
}
