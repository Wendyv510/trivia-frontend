document.addEventListener('DOMContentLoaded', () => { 
    fetch("https://localhost:3000/api/v1/categories") 
    .then(response => response.json()) 
    .then(categories => { 
        console.log(categories)
    }) 
})
