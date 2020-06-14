const categories = "https://localhost:3000/api/v1/categories"
const questions = "https://localhost:3000/api/v1/questions"

document.addEventListener('DOMContentLoaded', () => getCategories()) 

const getCategories = () => { 
    fetch(categories) 
    .then(response => response.json()) 
    .then(json => json.forEach(category => renderCategory(category.name) 
}

const renderCategory = (category) => { 
        method: "POST", 
        headers: {"Content-Type": "application/json"} 
        body: JSON.stringify(categories) 
    
    fetch(categories) 
    .then(response => response.json()) 
    .then(json => json.forEach(category => renderCategory(category.attributes.name)
     
}
}
    

const getQuestions = () => { 
    fetch(questions) 
    .then(response => response.json()) 
    .then(json => json.forEach(question =>  renderQuestion(question.description)          ))
}

const renderQuestion = () => { 
    let score = 0 
    document.querySelector.(`span[id="score-card]`)
    for (let i = 0; i < questions.length; i++) {
    document.querySelector(`div[id="question-box]`)
    document.innerHTML = "${question.description}"   
           document.querySelector(`div[class="options]`)
           document.querySelector(`ul[id="ul"]`)
           button.querySelector(`li[id="opt1"]`)
           button.innerHTML = "${questions.option}"
              button.addEventListener("onclick", function(e)) {
                  e.preventDefault() 
                  alert "Incorrect" 
              } 
            button.querySelector(`li[id="opt2"]`)
            button.innerHTML = "${questions.answer}"
              button.addEventListener("onclick", function(e)) { 
                  e.preventDefault(); 
                  score ++; 
                  alert "Correct" 
              }  
         return score   
       }

}
