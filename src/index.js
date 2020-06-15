
const categories = "https://localhost:3000/api/v1/categories"
const questions = "https://localhost:3000/api/v1/questions"

document.addEventListener('DOMContentLoaded', () => {
    getCategories(categories)
}) 

function getCategories(){ 
    fetch(categories) 
    .then(response => response.json()) 
    .then(data => console.log(JSON.stringify(data))) 
}

const renderCategory = (category) => { 
        method: "POST", 
        headers: {"Content-Type": "application/json"} 
        body: JSON.stringify(categories) 
    
    fetch(categories) 
    .then(response => response.json()) 
    .then(json => json.forEach(category => renderCategory(this.name)))
}
    

const getQuestions = () => {

    fetch(questions) 
    .then(response => response.json()) 
    .then(json => json.forEach(question =>  renderQuestion(question.description)          ))
}

const renderQuestion = () => { 
        method: "POST", 
        headers: {"Content-Type": "application/json"} 
        body: JSON.stringify(questions) 
    
    fetch(questions) 
    .then(response => response.json()) 
    .then(json => json.forEach(question => renderQuestion(this.description, this.Option, this.answer)
    
    let score = 0 
    document.querySelector.(`span[id="score-card"]`)
    for (let i = 0; i < questions.length; i++) {
    document.querySelector(`div[id="question-box"]`)
    document.innerHTML = "this.description"   
           document.querySelector(`div[class="options"]`)
           document.querySelector(`ul[id="ul"]`)
           button.querySelector(`li[id="opt1"]`)
           button.innerHTML = "this.option"
              button.addEventListener("onclick", function(e)) {
                  e.preventDefault() 
                  alert "Incorrect" 
              } 
            button.querySelector(`li[id="opt2"]`)
            button.innerHTML = "this.answer"
              button.addEventListener("onclick", function(e)) { 
                  e.preventDefault(); 
                  score ++; 
                  alert "Correct" 
              }  
         return score   
       }

}
