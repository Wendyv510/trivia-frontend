 
const categories = "https://localhost:3000/api/v1/categories"
const questions = "https://localhost:3000/api/v1/questions"

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
    console.log(category)
    //categories.forEach(category => console.log(category))
}
        // data.forEach(category => {

             let choose = document.getElementById("questionBox")
             choose.innerHTML = "Choose a Category" 
             let category1 = document.getElementById("opt1")
             category1.innerHTML = "${category[1].attributes.name}" 
             let category2 = document.getElementById("opt2")
             category2.innerHTML = "category[2].name"

        //     category.questions.forEach(question => renderQuestions(question))
        // })
    //);

    

function getQuestions() {

    fetch(questions) 
    .then(response => response.json()) 
    .then(json => json.forEach(question =>  renderQuestions(question.description)          ))
}

function renderQuestions() { 
        method: "POST", 
        headers; {"Content-Type"; "application/json"} 
        body: JSON.stringify(questions) 
    
    fetch(questions) 
    .then(response => response.json()) 
    .then(json => json.forEach(question => renderQuestion(this.description, this.option, this.answer)));
    
    let, score = 0, 
    document.querySelector("span.score-card");
    for (let i = 0; i < questions.length; i++) {
    let question = document.querySelector("div.question-box")
    question.innerHTML = "this.description"   
    let opt1 = document.querySelector("li.opt1")
    opt1.innerHTML = "this.option"
    opt1.addEventListener("onclick", function(e) {
        e.preventDefault(); 
        alert; "Incorrect" 
    }) 
    opt2.querySelector("li.opt2")
    opt2.innerHTML = "this.answer"
    opt2.addEventListener("onclick", function(e) { 
        e.preventDefault(); 
        score ++; 
        alert; "Correct" 
    })  
        return score   
  }

}//}
