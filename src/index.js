 
const categories = "https://localhost:3000/api/v1/categories"
const questions = "https://localhost:3000/api/v1/questions"
const users = "https://localhost:3000/api/v1/users"

document.addEventListener('DOMContentLoaded', () => { 
    getCategories(), getUsers()
    
    const createNewUserForm = document.getElementById("new-user") 

    createNewUserForm.addEventListener("submit", (e) => createFormHandler(e))
}) 

function createNewUserForm(e) { 
    e.preventDefault() 
}

function getUsers(){ 
    fetch(users) 
    .then(response => response.json()) 
    .then(json => { 
        for (let user of json.data) { 

            let newUser = new User(user, user.attributes)  

            // newUser.renderUsers();
          }
          // you should be calling the renderUsers function HERE
          User.renderUsers(); 
    })
}

//function renderUsers(users) { 
  //  let player1 = document.getElementById("player1")
    //player1.innerHTML = `${player1.username} - ${player1.score}`
    //debugger
    //let player2 = document.getElementById("player2")
    //player2.innerHTML = `${users.attributes.username}-${users.attributes.score}`
    //let player3 = document.getElementById("player3")
    //player3.innerHTML = `${users.attributes.username}-${users.attributes.score}`
//}

function getCategories(){ 
    fetch(categories) 
    .then(response => response.json()) 
    .then(json => {
        for (const category of json.data) {

            let newCategory = new Category(category, category.attributes)
        }
            Category.renderCategory();
          
    }) 
}



function getQuestions() {

    fetch(questions) 
    .then(response => response.json()) 
    .then(json => {
        for (const question of json.data) {

            let newQuestion = new Question(question, question.attributes)
            
          }
          Question.renderQuestions();
    }) 
}

