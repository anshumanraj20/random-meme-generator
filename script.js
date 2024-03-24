document.addEventListener('DOMContentLoaded', function() {
    const generateBtn = document.getElementById('generateBtn');
    const memeContainer = document.getElementById('memeContainer');
  
    generateBtn.addEventListener('click', function() {
      fetch('https://api.imgflip.com/get_memes')
        .then(response => response.json())
        .then(data => {
          const memes = data.data.memes;
          const randomIndex = Math.floor(Math.random() * memes.length);
          const memeUrl = memes[randomIndex].url;
          memeContainer.innerHTML = `<img src="${memeUrl}" alt="Random Meme" style="max-width: 100%;">`;
        })
        .catch(error => console.error('Error fetching meme:', error));
    });
  });
  