# 🇬🇧 English Janala  
A modern and interactive vocabulary learning web application powered by the Programming Hero Open API. Users can browse vocabulary levels, view word details, search, hear pronunciation, and save words for later review.

---

## 🌍 Live Demo  
🔗 **Live Site:**  
https://shahidur-rahman18.github.io/English-Janala/

---

## ✨ Features

### 📚 Vocabulary Levels  
- Fetch and display all learning levels from API  
- Levels load automatically on page load  
- Active level button is highlighted visually  

### 📝 Word Cards  
- Load all words of a selected level  
- Each card displays:
  - Word  
  - Meaning  
  - Pronunciation  
  - Actions (Sound, Details)

### 🔍 Search System  
- Real-time word searching  
- Search resets the active level selection  
- Displays matched results immediately

### 💾 Save Vocabulary  
- Save any word to a **Saved Box**  
- Helps students track learned vocabulary

### 🔊 Voice Pronunciation  

```js
function pronounceWord(word) {
  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = "en-EN"; 
  window.speechSynthesis.speak(utterance);
}
