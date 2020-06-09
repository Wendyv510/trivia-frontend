const categories = "https://localhost:3000/api/v1/categories"
const questions = "https://localhost:3000/api/v1/questions"

document.addEventListener('DOMContentLoaded', () => { 
    getCategories() 
})

function getCategories() { 
    fetch(categories) 
    .then(response => response.json()) 
    .then(categories => { 
        categories.data.forEach(category => {
          render(category)
        })
    }) 
}

function render(category) { 
    const categoryMarkup =  
            <div data-id="${category.id}"> 
                <button> ${category.attributes.name} </button>
            </div>
            <br> </br>;

            document.querySelector('#categories-container').innerHTML += categoryMarkup 
}

function postFetch(name) { 
    const categoryName = {name} 
    fetch(categories, { 
        method: "POST", 
        headers: {"Content-Type": "application/json"} 
        body: JSON.stringify(categories) 
    })
    .then(response => response.json()) 
    .then(categories => { 
        categories.data.forEach(category => {
          render(category)
        })
    }) 
}
