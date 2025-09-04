const loadLesson = () => {
  fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res) => res.json())
    .then((json) => display(json));
};

const display = (lesson) => {
  // 1.get the container & empty
  const levelContainer = document.getElementById('level-container');
  levelContainer.innerHTML = "";

  // 2. get into every data by loop
  for(let les of lesson){

  
  
    // 3. create a new Element
    console.log(les);
    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = `
       <button href=""> 
       <i class="fa-solid fa-book-open"></i>Lesson
       </button>
    `;

    // 4.append with parent and child

   levelContainer.appendChild(btnDiv)
   }

};


loadLesson();
