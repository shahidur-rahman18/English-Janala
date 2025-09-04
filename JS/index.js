//   load lesson part
const loadLesson = () => {
  fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res) => res.json())
    .then((json) => display(json.data));
};

// for  load word
const loadWord = (id) => {
  const url = `https://openapi.programming-hero.com/api/level/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayWord(data.data)); /// here 1st data is a parameter and 2nd data is an array object which is comming from json file
};

// for load word

const displayWord = (word) => {
  const wordContainer = document.getElementById("word-container");
  wordContainer.innerHTML = "";

  if (word.length == 0) {
    wordContainer.innerHTML = `
     <div class="text-center col-span-full items-center rounded-xl py-10 space-y-6 font-bangla">
       <img class="mx-auto" src="./assets/alert-error.png" alt="">
        <p class="font-medium text-lg text-gray-400 " >এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
        <h2 class="font-bold text-3xl">নেক্সট Lesson এ যান।</h2>
      </div>

     `;
  }

  word.forEach((word) => {
    console.log(word);
    const wordCard = document.createElement("div");

    wordCard.innerHTML = `
    <div class="bg-white shadow-sm rounded-xl py-10 px-5  text-center space-y-3">
        <h1 class="font-bold text-2xl">${word.word? word.word: 'word পাওয়া যায়নি'} </h1>
        <p>Meaning /Pronounciation</p>
        <div class="font-bangla font-medium text-2xl">"${word.meaning ? word.meaning : 'meaning পাওয়া যায়নি' } / ${word.pronunciation ? word.pronunciation : 'pronunciation পাওয়া যায়নি'} "</div>

        <div class="flex justify-between items-center">
          <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]">
            <i class="fa-solid fa-circle-info"></i>
          </button>
          <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]">
            <i class="fa-solid fa-volume-low"></i>
          </button>
        </div>
      </div>
    `;
    wordContainer.append(wordCard);
  });
};

//  for load lesson part
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
       <button onclick="loadWord(${lesson.level_no})"  class="btn btn-outline btn-primary"> 
       <i class="fa-solid fa-book-open"></i>
       Lesson -${lesson.level_no}
       </button>
    `;

    // 4.append with parent and child

    levelContainer.appendChild(btnDiv);
  });
};

loadLesson();
