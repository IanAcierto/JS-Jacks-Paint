/*Color
Price per Gallon
Lime Green
$14.99
Medium Brown
$11.14
Royal Blue
$22.99
Solid Black
$4.99
Solid Cyan
$8.22
Solid Purple
$11.99
Solid Red
$13.42
Solid White
$21.98
Solid Yellow
$14.99
*/
function configureListeners() {
    let images = document.getElementsByTagName('img')// select img elements  


     for (var i = 0; i < images.length; i++) {        
        let imgId = document.getElementById(images[i].id);
        imgId.addEventListener('mouseover',addOpacity,false);
        imgId.addEventListener('mouseout',removeOpacity,false);// iterate over images and add mouseover event listeners      
    } 
}

function addOpacity(event) {
    if(!this.classList.contains('dim')){
        this.classList.add('dim')
    }// add appropriate CSS class
    getProductInfo(event.target.id);     
}

function removeOpacity(event) {
    if (this.classList.contains('dim')){
        this.classList.remove('dim')
    }
     //remove appropriate CSS class

    let element = document.getElementById('color-price');
        element.textContent = '';
        
    let color = document.getElementById('color-name');
        color.textContent = ''; 

    event.preventDefault();    
}

function getProductInfo(paintColor) {
    let price;
    let colorName;  
    
    switch (paintColor) {
        case 'pn1':
            price = '$14.99'
            colorName = 'lime-green';
            updatePrice(colorName,price);           
             // set variables for price and color name and invoke a function to update the price     
            break;           
        case 'pn2':
            price = '$11.14'
            colorName = 'medium-brown';
            updatePrice(colorName,price);  
            // set variables for price and color name and invoke a function to update the price    
            break;            
        case 'pn3':
            price = '$22.99'
            colorName = 'royal-blue'
            updatePrice(colorName,price);  
            // set variables for price and color name and invoke a function to update the price  
            break;   
        case 'pn4':
            price = '$13.42'
            colorName = 'solid-red'
            updatePrice(colorName,price);  
            // set variables for price and color name and invoke a function to update the price  
            break;   
        case 'pn5':
            price = '$21.98'
            colorName = 'solid-white'
            updatePrice(colorName,price);  
            // set variables for price and color name and invoke a function to update the price       
            break;   
        case 'pn6':
            price = '$4.99'
            colorName = 'solid-black'
            updatePrice(colorName,price);  
            // set variables for price and color name and invoke a function to update the price        
            break;   
        case 'pn7':
            price = '$8.22'
            colorName = 'solid-cyan'
            updatePrice(colorName,price);  
            // set variables for price and color name and invoke a function to update the price 
            break;   
        case 'pn8':
            price = '$11.99'
            colorName = 'solid-purple'
            updatePrice(colorName,price);  
            // set variables for price and color name and invoke a function to update the price   
            break;   
        case 'pn9':
            price = '$14.99'
            colorName = 'solid-yellow'
            updatePrice(colorName,price);  
            // set variables for price and color name and invoke a function to update the price 
            break;   
          default:              
    }

    function updatePrice(colorName, price)
    {       
        let colorPrice = document.getElementById('color-price')// select element with corresponding id
        colorPrice.textContent = price;
        // display price
        
        let color = document.getElementById('color-name')
        color.textContent = colorName // select element with corresponding id
        //display color name
    }
    
}
