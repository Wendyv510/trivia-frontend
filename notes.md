const categoryMarkup =  
            <div class="categories"> 
                <button> ${category.attributes.name} </button>
            </div>
            <br> </br>;

            document.querySelector('#categories-container').innerHTML += categoryMarkup 

<img src ="https://www.salidalibrary.org/wp-content/uploads/2018/12/trivia.png">


const categoryMarkup =  
            <div data-id="${category.id}">
                <h1> Choose a Category </h1> 
                <button> ${category.attributes.name} </button>
            </div>
            <br> </br>;
             document.querySelector('#quiz-wrapper').innerHTML += categoryMarkup 
}


-- in classes render 

 renderCategory() {
        return  
          <div data-id = "${this.id}">
              <h1> ${this.description} </h1>
              <button> ${this.option} </button>
              <button> ${this.answer} </button>
          </div> 
    }  


renderCategory() {
      return  
        <div data-id = "${this.id}">
            <button data-id = "${this.id}"> "${this.name}" </button>
        </div> 
  }  
           
  

  console.log(categoriesObjects)
}
        // method: "POST"; 
        // headers: {
        //     "Content-Type"; "application/json";
        //     "Accept"; "application/json" 
        // };  
        // body: JSON.stringify(categories) 
    
    // fetch(categories) 
    // .then(response => response.json())
     
    // .then(json => 
    //     console.log(json) 

    
    renderQuestions
        method: "POST", 
        headers; {"Content-Type"; "application/json"} 
        body: JSON.stringify(questions) 
    
    fetch(questions) 
    .then(response => response.json()) 
    .then(json => json.forEach(question => renderQuestion(this.description, this.option, this.answer)));
    

    -Next button HTML 
<!-- <div class="next">
        <button id="btnNext" type="button" onclick="next()">
          Next
        </button>
    </div>-->

    -Category JS 
     Category.all.forEach(category => {
                 let category1 = document.getElementById("opt1") 
                 category1.innerHTML = `${category.name}` 
                 let category2 = document.getElementById("opt2")
                 category2.innerHTML = `${category.name}` 

- Render Questions 
let ol = document.getElementById("ul2")
        //ul2.innerHTML = ""
        let score = document.getElementById("score-card"); 
        let  resultContainer = document.getElementById("correct-incorrect") 
        //let i = 0 
        // Focus on displaying all the questions and answers that correspond to that question
        // Focus on only displaying ONE at a time
       //while ( i < Question.all.length) {          
       Question.all.forEach(question => {  
           // question.innerHTML += 
           // you might even want to create an element here 
        let categoryQuestions = document.getElementById("category-questions")
        let questions = document.createElement("questions")
        questions.innerHTML += `${question.description}`   
        categoryQuestions.appendChild(questions)
        questions.appendChild(ol)
        let li = document.createElement("li") 
        li.innerHTML = `${question.option}`
        ol.appendChild(li)
        li.addEventListener('click', function() {
           resultContainer.innerHTML =  "Incorrect"
            i++ 
         })
         
         let li1 = document.createElement("li1") 
         li1.innerHTML = `${question.answer}`
         ol.appendChild(li1)
         li1.addEventListener('click', function() { 
         resultContainer.innerHTML =  "Correct"
         score ++;
         i++
         
        }) 
    //   })    
      })
    }


    -- Commented out in render questions 
    //let ol = document.getElementById("ul2")
        //ul2.innerHTML = ""

        //let i = 0 
        // Focus on displaying all the questions and answers that correspond to that question
        // Focus on only displaying ONE at a time
       //while ( i < Question.all.length) {     

       // question.innerHTML += 
           // you might even want to create an element here

          //    i++      
