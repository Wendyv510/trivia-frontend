class Question { 
    constructor(question, questionAttributes) { 
        this.id = question.id
        this.description = questionAttributes.description 
        this.answer = questionAttributes.answer 
        this.category_id = questionAttributes.category_id 
    }

    function renderCategory() {
        return  
          <div data-id = "${this.id}">
              <h1> ${this.description} </h1>
              <button> ${this.answer} </button>
          </div> 
    }  
}

Question.all = [] 

