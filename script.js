
let v = document.querySelector('button')
let p = document.querySelector('h1')
v.addEventListener('click',()=>{
    let x = Math.floor(Math.random()*100)
    let y = Math.floor(Math.random()*100)
    let q =  Math.floor(Math.random()*255)
    let w =  Math.floor(Math.random()*255)
    let e = Math.floor(Math.random()*255)
    let m = document.createElement('button')
    m.innerHTML = 'brother'
    m.style.position = 'absolute'
    m.style.left = x+`%`
    m.style.top = y+`%`
    m.style.backgroundColor = `rgb(${q},${w},${e})`
    m.style.height = '40px'
    m.style.width = '80px'
    m.style.font = '10px'
    m.style.borderRadius = '15px'
    console.log(m);
    p.appendChild(m)
})