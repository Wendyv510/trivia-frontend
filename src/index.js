 
const categories = "https://localhost:3000/api/v1/categories"
const questions = "https://localhost:3000/api/v1/questions"
const users = "https://localhost:3000/api/v1/users"

document.addEventListener('DOMContentLoaded', () => { 
    getCategories(), getUsers()
    
    const createNewUserForm = document.getElementById("new-user") 

    createNewUserForm.addEventListener("submit", createFormHandler)
}) 



function getUsers(){ 
    fetch(users) 
    .then(response => response.json()) 
    .then(json => { 
        for (let user of json.data) { 

            let newUser = new User(user, user.attributes)  
            newUser.renderUser()
          }
    })
}

function createFormHandler(e) { 
    e.preventDefault()
    let newUser = document.querySelector("#create-user").value
    let score = document.querySelector("#score").value 
    postFetch(newUser)
 
}

function postFetch(newUser) { 
   fetch (users, { 
       method: "POST",
       headers: {"Content-Type":"application/json"},
       body: JSON.stringify({
           username: newUser,
           score: 1 // fix score

       })
   })
       .then(response => response.json()) 
       .then(user =>{
           debugger 
          let newUser = new User(user, user.attributes)
         // renderUser
          console.log(newUser)
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



function getQuestions(e) {

    fetch(questions) 
    .then(response => response.json()) 
    .then(json => {
        for (let question of json.data) {

            let newQuestion = new Question(question, question.attributes)
            
          }
          Question.renderQuestions(e);
    }) 
}

