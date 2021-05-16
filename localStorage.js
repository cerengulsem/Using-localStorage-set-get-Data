// STORE DATA ON LOCALSTORAGE WITH CLICK EVENT

let counter = localStorage.getItem('counterInfo') ? localStorage.getItem('counterInfo') : 0
counter = JSON.parse(counter)

let counterDOM = document.querySelector('#counter')
let increaseDOM = document.querySelector('#increase')
let decreaseDOM = document.querySelector('#decrease')

counterDOM.innerHTML = counter

increaseDOM.addEventListener("click", clickEvent)
decreaseDOM.addEventListener("click", clickEvent)

function clickEvent(){

  if(this.id == "increase"){
    counterDOM.innerHTML = counter +=1

    
    localStorage.setItem('counterInfo' ,JSON.stringify(counter))
  }

  if(this.id == "decrease"){
    counterDOM.innerHTML = counter -=1
    
    localStorage.setItem('counterInfo' ,JSON.stringify(counter )) 
  }
} 



// **** OR ****

/*
let counter = localStorage.getItem('counter') ? Number(localStorage.getItem('counter')) : 0

let counterDOM = document.querySelector('#counter')
let increaseDOM = document.querySelector('#increase')
let decreaseDOM = document.querySelector('#decrease')

counterDOM.innerHTML = counter

increaseDOM.addEventListener("click", clickEvent)
decreaseDOM.addEventListener("click", clickEvent)

function clickEvent(){
    this.id == "increase" ? counter += 1 : counter -= 1
    localStorage.setItem('counter' , counter)
    counterDOM.innerHTML = counter
}
 */