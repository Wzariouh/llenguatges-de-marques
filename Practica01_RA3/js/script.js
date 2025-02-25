//--------------1---------------

document.querySelector('#titol')
document.querySelector('.paragraf')

document.querySelector('h1').textContent = 'Canviar h1'
document.querySelector('p').textContent = 'Canviar contingut p'
document.querySelector('p').style.fontWeight ='bold'

//--------------2---------------
document.querySelector('#canviarText').addEventListener('click',function(){
    document.querySelector('h1').textContent = 'Canviar titol després del click'
    document.querySelector('p').style.color = 'green'

})

//--------------3---------------
document.querySelector('#afegirElement').addEventListener('click',function(){
    const lista = document.createElement('li')
    lista.textContent = 'Nou element afegit!'
    document.querySelector('ul').appendChild(lista)
})
document.querySelector('#eliminarElement').addEventListener('click', function() {
    const lista = document.querySelector('ul');
    if (lista.lastElementChild) { 
        lista.removeChild(lista.lastElementChild);
    }
})

//--------------4---------------
document.querySelector('body').style.backgroundColor = 'lightblue'

document.querySelector('#canviarText').addEventListener('mouseover',function(){ 
    document.querySelector('#canviarText').style.backgroundColor = 'red'
    document.querySelector('#canviarText').style.borderRadius = '40px'
    document.querySelector('#canviarText').style.fontWeight ='bold'
})

document.querySelector('#afegirElement').addEventListener('mouseover',function(){ 
    document.querySelector('#afegirElement').style.backgroundColor = 'yellow'
    document.querySelector('#afegirElement').style.borderRadius = '40px'
    document.querySelector('#afegirElement').style.fontWeight ='bold'
})

document.querySelector('#eliminarElement').addEventListener('mouseover',function(){ 
    document.querySelector('#eliminarElement').style.backgroundColor = 'green'
    document.querySelector('#eliminarElement').style.borderRadius = '40px'
    document.querySelector('#eliminarElement').style.fontWeight ='bold'
})