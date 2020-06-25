 
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


            renderCategory(category);
          }
    }) 
}

function renderCategory(category) { 
    //console.log(category)

             let choose = document.getElementById("questionBox")
             choose.innerHTML = "Choose a Category" 
             let category1 = document.getElementById("opt1") 
             category1.innerHTML = `${category.attributes.name}` 
             let category2 = document.getElementById("opt2")
             category2.innerHTML = `${category.attributes.name}`

            opt1.addEventListener("onclick", getQuestions())
            opt2.addEventListener("onclick", getQuestions())         
}


function getQuestions() {

    fetch(questions) 
    .then(response => response.json()) 
    .then(json => {
        for (const question of json.data) {

            
            renderQuestions(question);
          }
    }) 
}

function renderQuestions(question) { 
    //console.log(question)
    
    let score = document.getElementById("score-card");
    for (let i = 0; i < questions.length; i++) {
    let question = document.getElementById("questionBox")
    question.innerHTML = `${question.attributes.description}`   
    let opt1 = document.getElementById("opt1")
    opt1.innerHTML = `${question.attributes.option}`
    opt1.addEventListener("onclick", function(e) {
        e.preventDefault(); 
        alert; "Incorrect" 
    }) 
    let opt2 = document.getElementById("opt2")
    opt2.innerHTML = `${question.attributes.answer}`
    opt2.addEventListener("onclick", function(e) { 
        e.preventDefault(); 
        score ++; 
        alert; "Correct" 
    })  
        return score   
  }

}

