//Exercise 1
console.log("This is exercise 1:");
// Psychotic Bird
// In your JavaScript file, write a while loop that outputs the phrase "TWEET TWEET" 100 times to the console.

var i = 0;
while (i < 100) {
    console.log("TWEET TWEET");
    i++;
}


//Exercise 2
console.log("This is Exercise 2:")
// 2. Psychotic Bird: For Loop Edition
// In your JavaScript, write a for loop that outputs the phrase "TWEET TWEET" 100 times to the console.

for (var i = 0; i < 100; i++) {
    console.log("TWEET TWEET")
}

//Exercise 3
console.log("This is Exercise 3:")
// 3. Favorite Foods
// In your JavaScript array, create a new variable called favoriteFoods. It should store an array of strings representing five of your favorite foods.
// Loop through the array and print each food item to the console.

var favoriteFoods = ["burritos", "tacos", "tomato soup", "salad", "quinoa"]
console.log(favoriteFoods)

for (var i = 0; i < favoriteFoods.length; i++) {
    console.log(favoriteFoods[i]);
}

//Exercise 4
console.log("This is Exercise 4:")
// In your JavaScript file, create an array of 5 of your interests.
// Loop through the interests and console log the phrase "One of my interests is: [your interest]." for each of the interests in your array.
// Pick your favorite interest. Add an if statement in your loop that checks each time if the interest is your favorite interest. For the one item that is your favorite, console log "My absolute favorite interest is: [your favorite interest]." Still console log the message for each of your other interests from the step above.

var favoriteInterests = ["running", "sewing", "cooking", "eating", "reading"];

for (var i = 0; i < favoriteInterests.length; i++) {


    if (favoriteInterests[i] === favoriteInterests[3]) {
        console.log(favoriteInterests[i], "is my favorite interest")
    }
    else {
        console.log("One of my interests is:", favoriteInterests[i]);
    }
}

//Exercise 5
console.log("This is Exercise 5:")
// 5. Harry Potter Titles
// Copy and paste the following array into your JavaScript file:
var harryPotterTitles = ["and the Sorcerer's Stone", "and the Chamber of Secrets", "and the Prisoner of Azkaban", "and the Goblet of Fire", "and the Order of the Phoenix", "and the Half-Blood Prince", "and the Deathly Hallows"];
// Use a for loop to output the complete titles to the console. Expected output:
// "Harry Potter and the Sorcerer's Stone"
// "Harry Potter and the Chamber of Secrets"
// .
// .
// .
// "Harry Potter and the Deathly Hallows"


for (i = 0; i < harryPotterTitles.length; i++) {
    console.log("Harry Potter", harryPotterTitles[i]);
}

//Exercise 6
console.log("This is Exercise 7:")
// Copy and paste the folowing array of grades into your JavaScript file:
var grades = [92, 91, 75, 66, 52, 90, 83, 85, 64, 90, 72, 88, 77, 98, 100, 73, 92]
// Loop through the grades with a for loop
// If the current grade is greater than or equal to 0 and less than or equal to 69, log "You got an F" to the console.
// If it's between 70 and 76, log "You got a D" to the console.
// If it's between 77 and 84, log "You got a C" to the console.
// If it's between 84 and 92, log "You got a B" to the console.
// If it's between 93 and 100, log "You got an A" to the console.

for (i = 0; i < grades.length; i++) {

    if (grades[i] >= 70 && grades[i] <= 76) {
        console.log(grades[i], "You got a D")
    } else if (grades[i] >= 77 && grades[i] <= 84) {
        console.log(grades[i], "You got a C")
    } else if (grades[i] >= 85 && grades[i] <= 92) {
        console.log(grades[i], "You got a B")
    } else if (grades[i] >= 93 && grades[i] <= 100) {
        console.log(grades[i], "You got an A")
    }
}

//Exercise 7
console.log("This is Exercise 7:")
// Copy and paste the following array into your JavaScript file:
var sentenceArray = ["the", "cow", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];
// Copy and paste the following code into your HTML document:
// <span id="cow-sentence"></span>
// Write a loop that builds sentenceArray into a real sentence, except every fourth word should be "MOOOOOO". Hint: look up the modulus operator.
// Use document.querySelector and .innerHTML to print your sentence to the DOM.
// Expected output:
// the cow danced MOOOOOOOO through the trees MOOOOOOOO in the light MOOOOOOOO of the moon

HTMLstring = ""
var cowSentence = document.querySelector("#cow-sentence");

for (i = 0; i < sentenceArray.length; i++) {
    HTMLstring = HTMLstring + ` ${sentenceArray[i]}`;

    var remainder = i % 3;
    //console.log(remainder);
    if (remainder === 2) {
        HTMLstring = HTMLstring + ` MOOOOOOOOOOOOOO`
    }
    //console.log(HTMLstring);

    cowSentence.innerHTML = HTMLstring;
}

//Exercise 8
// 8. Downtown Restaurants
console.log("This is Exercise 8:")
// Copy and paste the following array into your JavaScript file:
var restaurantString = "";
var downtownRestaurants = ["Backyard Pizza and Raw Bar", "The Bodega", "Surin of Thailand", "Bahnhof", "Jim's Steak and Spaghetti House", "The Peddler", "Jewel City Seafood Market", "Black Sheep Burritos & Brews", "La Famiglia", "Le Bistro", "Charlie Graingers", "The Cellar Door"];
var restaurantList = document.querySelector("#restaurants-list");

// Copy and paste the following code into your index.html file:
// <ul id="restaurants-list"></ul>
// Loop over the downtownRestaurants array.
// Inside the loop, build up your HTMLString with an <li> element for each item in the array.
// Use document.querySelector and .innerHTML to print your HTMLString to the DOM.
// When you're done, you should see a bulleted list of all the items in downtownRestaurants on the DOM.

for (i = 0; i < downtownRestaurants.length; i++) {
    restaurantString = restaurantString + `<li>${downtownRestaurants[i]}</li>`;
    //console.log(restaurantString);

}
restaurantList.innerHTML = restaurantString;

//Exercise 9
console.log("This is Exercise 9:")

// 9. Movie Schedule Take Two
// You've been hired to build an app for a movie theater. You need to list all of the movies that are currently playing.

// Start with some basic HTML:

// <body>
//   <div id="movie-schedule"></div>
// </body>
// In your JavaScript file, copy and paste the following array of objects:

var movieSchedule = [
    {
        title: "Ralph Breaks the Internet",
        rating: "PG",
        currentlyPlaying: true,
        poster: "https://lumiere-a.akamaihd.net/v1/images/r_ralphbreakstheinternet_header_ddt-17403_08ef6d92.jpeg?region=0,0,1024,1274&optimize=true"
    },
    {
        title: "The Grinch",
        rating: "G",
        currentlyPlaying: true,
        poster: "https://images-na.ssl-images-amazon.com/images/I/71vgX4VFdiL._SY679_.jpg"
    },
    {
        title: "A Star is Born",
        rating: "R",
        currentlyPlaying: false,
        poster: "https://images-na.ssl-images-amazon.com/images/I/718zWbDKmvL._SY606_.jpg"
    },
    {
        title: "Bohemian Rhapsody",
        rating: "PG-13",
        currentlyPlaying: true
    },
    {
        title: "Fantastic Beasts: The Crimes of Grindlewald",
        rating: "PG-13",
        currentlyPlaying: true,
        poster: "https://images-na.ssl-images-amazon.com/images/I/716fk%2BBZ-NL._SY606_.jpg"
    },
    {
        title: "Robin Hood",
        rating: "PG-13",
        currentlyPlaying: false,
        poster: "https://images-na.ssl-images-amazon.com/images/I/61K%2BTyGjsCL.jpg"
    },
    {
        title: "Spider-Man: Into the Spider-Verse",
        rating: "PG-13",
        currentlyPlaying: true,
    

    }
]
// Use a for loop to loop through the movies and build up an HTML string to represent the data.
// You can use any elements you like in your HTML string as long as all the data in the movieSchedule object is included. It'll probably look pretty similar to the movie poster you made in the chapter on The DOM.
// (Hint: if you want to take advantage of VS Code's autocomplete features, you can type most of this in your HTML document and then cut and paste it into your JavaScript file.)
// Use document.querySelector to select the element in your HTML file with an id of "movie-schedule"
// Use the .innerHTML property to set the contents of the "movie-schedule" container equal to the HTML string you just created.

// Add a conditional so that you only print movies where the currentlyPlaying property is equal to true.
// Use flexbox to arrange your movie schedule side by side on your web page.
// If a movie does not have a poster property, give it a placeholder image like this
// Give all G-rated movies a dotted green border that's 2px wide.
// Give all PG-rated movies a dotted yellow border that's 2px wide.
// Give all PG-13 movies a dotted orange border that's 2px wide.
// Give all R-rated movies a dotted red border that's 2px wide.

var movieString = ""
var movieContainer = document.querySelector("#movie-schedule");
for (i = 0; i < movieSchedule.length; i++) {

    if (movieSchedule[i].currentlyPlaying === true) {

        movieString = movieString +
            `<h3 class ="title">${movieSchedule[i].title}</h3>`
            if(movieSchedule[i].rating)
            
            `<p class = "rating">Rated: ${movieSchedule[i].rating}</p>`
        
            if (!movieSchedule[i].poster) {
            movieString = movieString + `<img class = "movie-poster" src=https://www.snhrc.com/wp-content/uploads/2018/09/Image-Coming-Soon.png alt = Movie Poster"/>`
        }
        else {
            movieString = movieString + `<img class = "movie-poster" src=${movieSchedule[i].poster} alt = Movie Poster"/>`
        } 
     {
            movieString = movieString;
        }

    }
}

    movieContainer.innerHTML = movieString;



