const categories = "https://localhost:3000/api/v1/categories"
const questions = "https://localhost:3000/api/v1/questions"

document.addEventListener('DOMContentLoaded', () => getCategories()) 

const getCategories = () => { 
    fetch(categories) 
    .then(response => response.json()) 
    .then(json => json.forEach(category => renderCategory(category.name) 
}

const renderCategory = (category) => { 
    const categoryMarkup =  
            <div data-id="${category.id}">
                <h1> Choose a Category </h1> 
                <button> ${category.attributes.name} </button>
            </div>
            <br> </br>;

            document.querySelector('#quiz-wrapper').innerHTML += categoryMarkup 
}

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
