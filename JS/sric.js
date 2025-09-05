const createElement = (data)=>{
    const htmlElement=arr.map((element)=> `<span class='btn'>${element}</span>`)
    console.log(htmlElement.join(''))
}

const arr =["abl","abl","sdl"]
createElement(arr)