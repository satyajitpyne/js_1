var p = document.querySelector('.unline')
var b = document.querySelector('button')
var a = document.querySelector('.down h1')
var k = 0 
b.addEventListener('click', function(){
    var j = setInterval(function(){
        k++;
        p.style.width = k+'%'
        a.innerHTML = k
    } ,50)

    setTimeout(function(){
        clearInterval(j)
        b.innerHTML = 'downloaded'
        b.style.width = `${140}px`
        b.style.opacity = 0.5
        b.style.pointerEvents = 'none'
    },5000)
    

})
