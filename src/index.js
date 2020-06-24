 
const categories = "https://localhost:3000/api/v1/categories"
const questions = "https://localhost:3000/api/v1/questions"
const users = "https://localhost:3000/api/v1/users"

document.addEventListener('DOMContentLoaded', () => { 
    getCategories()
}) 

function getCategories(){ 
    fetch(categories) 
    .then(response => response.json()) 
    .then(json => {
        for (const element of json.data) {
            renderCategory(element);
          }
    }) 
}

function renderCategory(category) { 
    //console.log(category)
    //categories.forEach(category => console.log(category))

         //categories.forEach(category => {

             let choose = document.getElementById("questionBox")
             choose.innerHTML = "Choose a Category" 
             let category1 = document.getElementById("opt1") 
             category1.innerHTML = `${category.attributes.name}` 
             let category2 = document.getElementById("opt2")
             category2.innerHTML = `${category.attributes.name}`

             opt1.addEventListener("onclick", (e) => {
                e.preventDefault(); 
                getQuestions() 
            })
 
            
            opt2.addEventListener(`onclick`, function(e) { 
                e.preventDefault(); 
                getQuestions(category) 
            })  



            // category.questions.forEach(question => renderQuestions(question))
         //})
    //);
}

    

function getQuestions() {

    fetch(questions) 
    .then(response => response.json()) 
    .then(json => {
        for (const element of json.data) {
            renderQuestions(element);
          }
    }) 
}

function renderQuestions(question) { 
    
    let score = document.getElementById("score-card");
    for (let i = 0; i < questions.length; i++) {
    let question = document.getElementById("questionBox")
    question.innerHTML = `${question.description}`   
    let opt1 = document.getElementById("opt1")
    opt1.innerHTML = `this.option`
    opt1.addEventListener("onclick", function(e) {
        e.preventDefault(); 
        alert; "Incorrect" 
    }) 
    let opt2 = document.getElementById("opt2")
    opt2.innerHTML = `this.answer`
    opt2.addEventListener("onclick", function(e) { 
        e.preventDefault(); 
        score ++; 
        alert; "Correct" 
    })  
        return score   
  }

}//}
