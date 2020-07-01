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
        
        let score = document.getElementById("score-card"); 
        let  resultContainer = document.getElementById("correct-incorrect") 
        
        for (let i = 0; i < questions.length; i++) {
             //     Question.all.forEach(question => {
             //   let questions = document.getElementById("questionBox")
             //    questions.innerHTML = `${question.description}` 
             //    let ul2 = document.getElementById("ul2") 
                  
             //       let li = document.createElement("li") 
             //       li.innerHTML = `${question.option}`
             //        li.addEventListener('click', function() {
             //          resultContainer.innerHTML =  "Incorrect"   
              //       })
             //        ul.appendChild(li)
             //        let li1 = document.createElement("li1") 
             //        li1.innerHTML = `${question.answer}`
             //        li1.addEventListener('click', function() { 
             //        resultContainer.innerHTML =  "Correct"
             //        score ++;
             //        ul.appendChild(li1)
             //       }) 
             //   })
       Question.all.forEach(question => {  
        let questions = document.getElementById("questionBox")
        questions.innerHTML = `${question.description}`   
        let opt1 = document.getElementById("opt1")
        opt1.innerHTML = `${question.option}`
        opt1.addEventListener('click', function()  {
            resultContainer.innerHTML =  "Incorrect"
            ++questions  
        })
        let opt2 = document.getElementById("opt2")
        opt2.innerHTML = `${question.answer}`
        opt2.addEventListener('click', function()  { 
            resultContainer.innerHTML =  "Correct"
            ++questions
            score ++;
            
        }) 
        })    
      }
    }
}

Question.all = [] 

