

const in1 = document.getElementById("input1").value

const in2 = document.getElementById("input2").value

const res = document.getElementById("res")

const quote = document.getElementById("quote")

console.log(in1);

const y =( Math.random() * 40 + 60);
const x = Math.floor(y)
if (x <= 50){
    console.log("You match is imperfect")
    res.innerHTML = "You match is imperfect"
    
}

else if (x <= 80){
    console.log("You match is good")
    res.innerHTML = "You match is good"
}
else if (x >= 80){
    console.log("You match is Awsome")
    res.innerHTML = "You match is Awsome"
}




//function
function go() {

// console.log(x)

if(in1 == ''){
    alert("Enter Your name")
}
if(in2 == ''){
    alert("Enter Your Partner's name")
}



    // API endpoint for random love quotes
    const apiUrl = 'https://api.quotable.io/random?tags=love';

    // Fetch data from the API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Extract the quote and author from the API response
            const quote = data.content;
            const author = data.author;

            // Display the quote in the HTML element with id "quote"
            document.getElementById('quote').textContent = `"${quote}" - ${author}`;
        })
        .catch(error => {
            console.error('Error fetching quote:', error);
        });
}
