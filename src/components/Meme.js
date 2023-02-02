 import React, { useEffect, useState } from 'react'




function Meme() {

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg" 
})
  const [allMemes, setAllMemes] = useState([])

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
  }, [])

  function handleChange(event) {
    const {name, value} = event.target
    setMeme(prevMeme => ({
        ...prevMeme,
        [name]: value
    }))
}

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length)
    const url = allMemes[randomNumber].url  
    setMeme(prevMeme => ({
        ...prevMeme,
        randomImage: url
    }))
    
}

  console.log(allMemes)



  return (
    <main>
        <div className='inputFrom' >
            <input 
              type="text" 
              placeholder='Top text' 
              className='fromTop'
              name='topText'
              value={meme.topText}
              onChange={handleChange}/>
            <input 
              type="text" 
              placeholder='Bottom text' 
              className='fromBottom'
              name='bottomText'
              value={meme.bottomText}
              onChange={handleChange}
              />
        </div>
        <div className='inputButton' >
            <button className="form--button" onClick={getMemeImage}>Get a new meme image</button>
        </div>
        <div className='image-section' >
          <img src={meme.randomImage}></img>
          <h2 className='image-section-h2 top'>{meme.topText}</h2>
          <h2 className='image-section-h2 bottom'>{meme.bottomText}</h2>
        </div>
    </main>
  )
}

export default Meme