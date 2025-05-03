/*DOM selectors are methods used to selectt elements from the HTML document
getElementById()	     -Selects an element by its id.
getElementsByClassName() -Selects elements by their class.
getElementsByTagName()	 -Selects elements by their tag name.
querySelector()	         -Selects the first element matching a CSS selector.
querySelectorAll()	     -Selects all elements matching a CSS selector.
getAttribute()	         -Gets an attribute's value.
setAttribute()	         -Sets an attribute's value.
children	      -Selects all child elements (no text or comment nodes).
childNodes	      -Selects all child nodes (includes text and comment nodes).
parentNode	      -Selects the parent node.
nextSibling	      -Selects the next sibling node.
previousSibling   -Selects the previous sibling node.
firstChild	      -Selects the first child node.
lastChild	      -Selects the last child node.
firstElementChild -Selects the first child element.
lastElementChild  -Selects the last child element.
*/


// Accessing the attributes
document.getElementById("title");    // -><h1 id="title" class="heading">DOM learning Heading</h1>
document.getElementById("title").id; // ->title
document.getElementById("title").class;//->undefined
document.getElementById("title").className; //->heading

// .getAttribute() is also used for accessing the attribute
document.getElementById("title").getAttribute('id'); //->'title'
document.getElementById("title").getAttribute('class');//->'heading'


// .setAttribute() to make changes in the attribute
document.getElementById("title").setAttribute('class','testheasdkjd');//->undefined
    //it changed the class from 'heading' to 'testheasdkjd'
    // <h1 id="title" class="testheasdkjd">DOM learning Heading</h1>

// making changes in the style
title.style.backgroundColor='red';//->'red'
title.style.padding = '15px';//->'15px'
title.style.borderRadius = '15px';//->'15px'

para.innerText; //->'akjkbfagfloadgnladgadliadbl'
para.textContent;//->'akjkbfagfloadgnladgadliadbl  Span Text'
para.innerHTML;//->'akjkbfagfloadgnladgadliadbl <span style="display: none;"> Span Text</span>'

// querySelector() is use to select the first element in the DOM that matches a given CSS selector
document.querySelector('h1');//-><h1 id=​"title" class=​"testheasdkjd" style=​"background-color:​ red;​ padding:​ 15px;​ border-radius:​ 15px;​">​DOM learning Heading​</h1>​
    //here query selector returns the first h1 

//selecting the unorderlist and from the unordere list first list-item's background color is changed in to yellow
const unorderedList=document.querySelector('ul');//->undefined
const turnGreen=unorderedList.querySelector('li');//->undefined
turnGreen.style.backgroundColor= 'yellow';//->'yellow'


// querySelectorAll() selects all the matching elements into a NodeList
const liList= document.querySelectorAll('li')//->undefined
    // liList is NodeList which is similar to array but not exactlly like array
liList[1].style.color = 'green'//->'green'


liList.forEach(function(l){
    l.style.backgroundColor='blue'
}) // this function changes the background Color


document.getElementsByClassName('list-item')// get the element in HTML-Collection which is similar to array but not array
const classList= document.getElementsByClassName('list-item')
const myConArray=Array.from(classList)