let joke = document.getElementById('joke')
let jokeBtn = document.getElementById('joke-btn')

let xhr = new XMLHttpRequest()


function reloadPage(e){
   console.log("ReloadPage");

   // joke.textContent = ''

   xhr.open('GET', 'https://api.chucknorris.io/jokes/random')

   xhr.onreadystatechange = function() {
      // console.log()
      if(this.readyState === 4 && this.status === 200){
         const data = JSON.parse(this.responseText)

         joke.textContent = ''
         const p = document.createElement('p')
         p.innerHTML = `${data.value}`
         joke.appendChild(p)
      }
   }

   xhr.send();
}

jokeBtn.addEventListener('click', reloadPage)