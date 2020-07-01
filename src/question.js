class Question { 
    constructor(question, questionAttributes) { 
        this.id = question.id
        this.description = questionAttributes.description 
        this.answer = questionAttributes.answer 
        this.option = questionAttributes.option 
        this.category_id = questionAttributes.category_id 
        Question.all.push(this) 
    }

    static renderQuestions() { 
        let ul = document.getElementById("ul")
        ul.innerHTML = ""
        let score = document.getElementById("score-card"); 
        let  resultContainer = document.getElementById("correct-incorrect") 
        let i = 0 
        // Focus on displaying all the questions and answers that correspond to that question
        // Focus on only displaying ONE at a time
        while ( i < questions.length) {
             //   Question.all.forEach(question => {
             //   let questions = document.getElementById("questionBox")
             //    questions.innerHTML = `${question.description}` 
             //    let ul2 = document.getElementById("ul2") 
                  
                   
       Question.all.forEach(question => {  
           // question.innerHTML += 
           // you might even want to create an element here 
        let questions = document.getElementById("questionBox")
        questions.innerHTML = `${question.description}`   
        
        let li = document.createElement("li") 
        li.innerHTML = `${question.option}`
        ul.appendChild(li)
         li.addEventListener('click', function() {
           resultContainer.innerHTML =  "Incorrect"
            i++ 
         })
         
         let li1 = document.createElement("li1") 
         li1.innerHTML = `${question.answer}`
         ul.appendChild(li1)
         li1.addEventListener('click', function() { 
         resultContainer.innerHTML =  "Correct"
         score ++;
         i++
         
        }) 
       })    
      }
    }
}

Question.all = [] 

