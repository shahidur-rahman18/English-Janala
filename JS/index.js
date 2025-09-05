const createElements= (arr) => {
  const htmlElement = arr.map((element) => `<span class='btn'>${element}</span>`)
  return (htmlElement.join(''))
}

// spinner

const manageSpinner = (status)=>{
  if(status== true){
    console.log('oh i see ')
    document.getElementById('spinner').classList.remove('hidden')
    document.getElementById('word-container').classList.add('hidden')
  }
  else{
    console.log('oh i ')
    document.getElementById('word-container').classList.remove('hidden')
    document.getElementById('spinner').classList.add('hidden')

  }
}

//   load lesson part
const loadLesson = () => {
  fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res) => res.json())
    .then((json) => display(json.data));
};



 
// for  load word

// this function is used for remove effect first for every lesson button 
const removeActive = ()=>{
  const lessonAllBtn = document.querySelectorAll('.all-lesson-btn')
  lessonAllBtn.forEach((btn)=> btn.classList.remove('active'))
  // console.log(lessonAllBtn)
}
 
const loadWord = (id) => {
  manageSpinner(true)
  const url = `https://openapi.programming-hero.com/api/level/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {

 removeActive();  // remove first 
      const clickBtn = document.getElementById(`lesson-btn ${id}`);
      // console.log(clickBtn)
 clickBtn.classList.add('active') //add effect 

      displayWord(data.data);
    }); /// here 1st data is a parameter and 2nd data is an array object which is comming from json file
};

 const loadDetails=async(id)=> {

  const url =`https://openapi.programming-hero.com/api/word/${id}`
  const res= await fetch(url)
  const details= await res.json()
  displayDetails(details.data)
 }

 const displayDetails =(word) =>{
  console.log(word)

/*   {
    "word": "Sincere",
    "meaning": "সত্‍ / আন্তরিক",
    "pronunciation": "সিনসিয়ার",
    "level": 1,
    "sentence": "He gave a sincere apology.",
    "points": 1,
    "partsOfSpeech": "adjective",
    "synonyms": [
        "honest",
        "genuine",
        "truthful"
    ],
    "id": 19
} */

  const detailsBox= document.getElementById('details=container')
  detailsBox.innerHTML=`
        <div>
            <h2 class="text-2xl font-bold">${word.word} (<i class="fa-solid fa-microphone-lines"></i> :${word.pronunciation})</h2>
          </div>

          <div>
            <h4 class="font-bold text-lg">Meaning</h4>
            <p class="font-bangla font-semibold">${word.meaning}</p>
          </div>
          <div>
            <h4 class="font-bold text-lg">Example</h4>
            <p>${word.sentence}</p>
          </div>
          <div>
            <h4 class="font-bangla font-bold ">সমার্থক শব্দ গুলো</h4>
             <div>${createElements(word.synonyms)}</div>
      
          </div>
  `
  document.getElementById('my_modal_5').showModal()
 }

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
     
     manageSpinner(false)
     return
  }

  word.forEach((word) => {
    // console.log(word);
    const wordCard = document.createElement("div");

    wordCard.innerHTML = `
    <div class="bg-white shadow-sm rounded-xl py-10 px-5  text-center space-y-3">
        <h1 class="font-bold text-2xl">${
          word.word ? word.word : "word পাওয়া যায়নি"
        } </h1>
        <p>Meaning /Pronounciation</p>
        <div class="font-bangla font-medium text-2xl">"${
          word.meaning ? word.meaning : "meaning পাওয়া যায়নি"
        } / ${
      word.pronunciation ? word.pronunciation : "pronunciation পাওয়া যায়নি"
    } "</div>

        <div class="flex justify-between items-center">
          <button onClick="loadDetails(${word.id})" class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]">
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
  manageSpinner(false)
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
       <button id="lesson-btn ${lesson.level_no}" onclick=" loadWord (${lesson.level_no})"  class="btn btn-outline btn-primary all-lesson-btn"> 
       <i class="fa-solid fa-book-open"></i>
       Lesson -${lesson.level_no}
       </button>
    `;

    // 4.append with parent and child

    levelContainer.appendChild(btnDiv);
  });
};

loadLesson();
