 
const categories = "https://localhost:3000/api/v1/categories"
const questions = "https://localhost:3000/api/v1/questions"
const users = "https://localhost:3000/api/v1/users"

document.addEventListener('DOMContentLoaded', () => { 
    getCategories(), getUsers()
    
    const createNewUserForm = document.getElementById("new-user") 

    createNewUserForm.addEventListener("submit", (e) => 
    createFormHandler(e))
}) 

function createFromHandler(e) { 
    e.preventDefault()
     let newUser = document.querySelector("#create-user").value
     postFetch(newUser) 
}

function postFetch(newUser) { 
    console.log(newUser)
}

function getUsers(){ 
    fetch(users) 
    .then(response => response.json()) 
    .then(json => { 
        for (let user of json.data) { 

            let newUser = new User(user, user.attributes)  

          }
          User.renderUsers(); 
    })
}



function getCategories(){ 
    fetch(categories) 
    .then(response => response.json()) 
    .then(json => {
        for (let category of json.data) {

            let newCategory = new Category(category, category.attributes)
        }
            Category.renderCategory();    
    }) 
}



function getQuestions() {

    fetch(questions) 
    .then(response => response.json()) 
    .then(json => {
        for (let question of json.data) {

            let newQuestion = new Question(question, question.attributes)
            
          }
          Question.renderQuestions();
    }) 
}

