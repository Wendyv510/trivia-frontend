class Category { 
    constructor(category, categoryAttributes) {
        this.id = category.id 
        this.name = categoryAttributes.name 
    }

  function renderCategory() {
      return  
        <div data-id = "${this.id}">
            <button data-id = "${this.id}"> "${this.name}" </button>
        </div> 
  }  
}

Category.all = [] 






