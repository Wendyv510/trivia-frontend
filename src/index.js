 
const categories = "https://localhost:3000/api/v1/categories"
const questions = "https://localhost:3000/api/v1/questions"

document.addEventListener('DOMContentLoaded', () => 
    getCategories()) 

function getCategories(){ 
    fetch(categories) 
    .then(response => response.json()) 
    .then(data => console.log(JSON.stringify(data))) 
}

function renderCategories(categories) { 
        method: "POST", 
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json" 
        },  
        body: JSON.stringify(categories) 
    
    fetch(categories) 
    .then(response => response.json()) 
    .then(json => json.forEach(category => renderCategory(this.name)))

    let choose = document.querySelector("div.question-box")
    choose.innerHTML = "Choose a Category" 
    let category1 = document.querySelector("li.opt1")
    category1.innerHTML = "${category[1].name}" 
    let category2 = document.querySelector("li.opt2")
    category2.innerHTML = "${category[2].name}"

    category.questions.forEach(question => renderQuestion(question))
}


    

function getQuestions = () => {

    fetch(questions) 
    .then(response => response.json()) 
    .then(json => json.forEach(question =>  renderQuestion(question.description)          ))
}

function renderQuestion = () => { 
        method: "POST", 
        headers: {"Content-Type": "application/json"} 
        body: JSON.stringify(questions) 
    
    fetch(questions) 
    .then(response => response.json()) 
    .then(json => json.forEach(question => renderQuestion(this.description, this.option, this.answer)
    
    let score = 0 
    document.querySelector("span.score-card")
    for (let i = 0; i < questions.length; i++) {
    let question = document.querySelector("div.question-box")
    question.innerHTML = "this.description"   
    let opt1 = document.querySelector("li.opt1")
    opt1.innerHTML = "this.option"
    opt1.addEventListener("onclick", function(e)) {
        e.preventDefault() 
        alert "Incorrect" 
    } 
    opt2.querySelector("li.opt2")
    opt2.innerHTML = "this.answer"
    opt2.addEventListener("onclick", function(e)) { 
        e.preventDefault(); 
        score ++; 
        alert "Correct" 
    }  
        return score   
  }

}
