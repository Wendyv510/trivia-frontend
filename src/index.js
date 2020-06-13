const categories = "https://localhost:3000/api/v1/categories"
const questions = "https://localhost:3000/api/v1/questions"

document.addEventListener('DOMContentLoaded', () => getCategories()) 

const getCategories = () => { 
    fetch(categories) 
    .then(response => response.json()) 
    .then(json => json.forEach(category => renderCategory(category.name) 
}

const renderCategory = (category) => { 
    

function postFetch(name) { 
    const categoryName = {name} 
    fetch(categories, { 
        method: "POST", 
        headers: {"Content-Type": "application/json"} 
        body: JSON.stringify(categories) 
    })
    .then(response => response.json()) 
    .then(json => json.forEach(category => renderCategory(category.attributes.name)
    }) 
}
