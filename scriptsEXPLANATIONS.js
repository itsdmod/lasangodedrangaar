// -------------------------------------------------------------------
// LEARNING TO READ A JSON FILE AND ACCESS THE OBJECTS AND INFORMATION
// -------------------------------------------------------------------

    // Step 1 - Fetch the JSON file
    /* fetch("database/characters.json"); */
    /*  Step 1 explanation:
        fetch() is a JavaScript function that requests a resource (recurso) from somewhere
        fetch()  returns something called a Promise (promesa)
        A Promise represents a result that isn't available yet because the request takes time
    */


    // Step 2 - Receive the response
    /* fetch("database/characters.json")
        .then(response => {
            console.log(response);  // we're using console.log() to inspect what we receive
        });
    */
    /* Step 2 explanation:
        We received a Response object, not the JSON data itself
    */


    // Step 3 - Read the response
    /* fetch("database/characters.json")
        .then(response => {
            return response.json();     // There's a method available on the Response object called ".json()". It reads the response body and converts the JSON into JavaScript data.
        })
        .then(data => {
            console.log(data);
        });
    */
    /* Step 3 explanation:
        Successful retrieval and parsing of JSON file.
        We now get the actual JavaScript object created from the JSON
    */


    // Step 4 - Understanding what we received
    /* fetch("database/characters.json")
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data.characters);
        });
    */
    /* Step 4 explanation:
        We have moved one level deeper into the JSON structure
        Now, instead of seeing "characters" and then each character, we see directly the name of each character
        I've accessed the characters property, so JavaScript displays its contents directly
    */


    // Step 5 - Access an individual character's information
    /* fetch("database/characters.json")
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data.characters.ostoj.reincarnations[2].occupations[2]); // Accessing the third occupation of ostoj's second incarnation
        });
    */


    // Step 6 - Understanding variables (Learning how to store the characters object in a variable, so we don't have to write data.characters every time)
    /* const characters = data.characters;
    const ostoj = characters.ostoj;
    */
    /* To access ostoj's description: ostoj.description */

    // Step 7 - Let's retrieve something from the JSON
    /* fetch("database/characters.json")
        .then(response => {
            return response.json();
        })
        .then(data => {
            const characters = data.characters;
            const ostoj = characters.ostoj;

            console.log(ostoj.reincarnations[2].occupations[2]);
            console.log(ostoj.description);
        });
    */
    /* You should see Ostoj's description printed in the Console */


// ----------------------------------------------
// LEARNING TO DISPLAY INFORMATION ON THE WEBPAGE
// ----------------------------------------------

// Step 1 - Creating an element
// document.createElement("h2");
/* Explanation:
    JavaScript has a method called document.createElement().
    As its name suggests, it creates an HTML element.
    There's something important to understand: creating an element doesn't automatically put it on the webpage.
*/


// Step 2 - Storing the element in a variable
/* const characterName = document.createElement("h2");         // characterName holds a reference to the newly created <h2> element
 const characterDescription = document.createElement("p");   // paragraph element and store it in a variable called characterDescription
*/
/* Explanation:
    We don't want to create an element and immediately lose access to it. We want to keep a reference to it so we can modify it later.
*/


// Step 3 - Putting text inside an element
/* const characterName = document.createElement("h2");    
const characterDescription = document.createElement("p");
characterName.textContent = "Ostoj";    // This puts the text Ostoj inside your <h2> element
characterDescription.textContent = "A mysterious character";    // put the text "A mysterious character" inside your characterDescription paragraph
*/
/* Explanation:
    We can use a property called textContent to set the text inside an HTML element.
    The resulting HTML would be: <h2>Ostoj</h2>
*/


// Step 4 - Adding an element to the webpage
// document.body.appendChild(characterDescription);     // Add characterDescription paragraph to the webpage
/* Explanation:
Remember that the webpage has a <body> element.
We can access it through JavaScript using: document.body

And we can add our newly created element to it using appendChild(): document.body.appendChild(characterName);

This means:
- document.body → the parent.
- characterName → the child.
- appendChild() → adds the child inside the parent.
The resulting HTML would look like this:

    <body>
        <h2>Ostoj</h2>
    </body>
*/

// Still part of Step 4 - Code of adding 2 elements to the webpage (character name in h2 and character description in p)
/* fetch("database/characters.json")
    .then(response => {
        return response.json();
    })
    .then(data => {
        // Creating variables to access characters
        const character = data.characters;
        const ostoj = character.ostoj;

        // Creating HTML elements to display on the site and storing them into variables
        const txtCharacterName = document.createElement("h2");
        const txtCharacterDescription = document.createElement("p");

        // Putting text inside those HTML elements
        txtCharacterName.textContent = ostoj.name;
        txtCharacterDescription.textContent = ostoj.description;

        // Adding it to the webpage
        document.body.appendChild(txtCharacterName);
        document.body.appendChild(txtCharacterDescription);
 });
*/

// Still part of Step 4 - To add another character, it would look like this
/* fetch("database/characters.json")
    .then(response => {
        return response.json();
    })
    .then(data => {
        // Creating variables to access characters
        const character = data.characters;
        const ostoj = character.ostoj;
        const karno = character.karno;
        
        // Creating HTML elements to display on the site and storing them into variables
        const txtCharacterName = document.createElement("h2");
        const txtCharacterDescription = document.createElement("p");
        const txtCharacterName2 = document.createElement("h2");
        const txtCharacterDescription2 = document.createElement("p");
        
        // Putting text inside those HTML elements
        txtCharacterName.textContent = ostoj.name;
        txtCharacterDescription.textContent = ostoj.description;
        txtCharacterName2.textContent = karno.name;
        txtCharacterDescription2.textContent = karno.description;
        
        // Adding it to the webpage
        document.body.appendChild(txtCharacterName);
        document.body.appendChild(txtCharacterDescription);
        document.body.appendChild(txtCharacterName2);
        document.body.appendChild(txtCharacterDescription2);

    });
*/
// This would be repetition, which would be a problem the more characters we need to add. Because of this, we need to use loops

