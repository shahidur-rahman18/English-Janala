const loadLesson = () => {
  fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res) => res.json())
    .then((json) => display(json.data));
};

const display = (lesson) => {
  // 1.get the container & empty
  const levelContainer = document.getElementById("level-container");
  levelContainer.innerHTML = "";

  // 2. get into every data by loop
  lesson.forEach((lesson) => {
    // 3. create a new Element
    console.log(lesson);
    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = `
       <button  class="btn btn-outline btn-primary"> 
       <i class="fa-solid fa-book-open"></i>
       Lesson -${lesson.level_no}
       </button>
    `;

    // 4.append with parent and child

    levelContainer.appendChild(btnDiv);
  });
};

loadLesson();
