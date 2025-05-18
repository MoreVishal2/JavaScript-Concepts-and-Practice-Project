const color=document.querySelectorAll('.color')
const body=document.querySelector('body')
const h=document.querySelector('h1')
const p=document.querySelector('p')

color.forEach(function(button){
    button.addEventListener('click',function(event){
        col=event.target.id
        switch(col){
            case "green":
                body.style.backgroundColor= 'green';
                h.style.color ='black';
                p.style.color='black';
                break;
            case "blue":
                body.style.backgroundColor='blue';
                h.style.color ='white';
                p.style.color='white';
                break;

            case "white":
                body.style.backgroundColor= 'white';
                h.style.color ='black';
                p.style.color='black';
                break;
            case "yellow":
                body.style.backgroundColor= 'yellow';
                h.style.color ='black';
                p.style.color='black';
                break;
            case "grey":
                body.style.backgroundColor= 'grey';
                h.style.color ='black';
                p.style.color='black';
                break;
        }
    })
})