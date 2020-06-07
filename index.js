const categoryBackend = "https://localhost:3000/api/v1/categories"

document.addEventListener('DOMContentLoaded', () => { 
    getCategories() 
})

function getCategories() { 
    fetch(categoryBackend) 
    .then(response => response.json()) 
    .then(categories => { 
        console.log(categories)
    }) 
}
