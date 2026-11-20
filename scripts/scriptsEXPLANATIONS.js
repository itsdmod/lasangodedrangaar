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



// ---------------------------------------
// LEARNING TO ADD INFORMATION USING LOOPS
// ---------------------------------------

// Step 1 - Understanding what we need to iterate through
/* Explanation: 
Our data.characters object looks like this:
    {
        ostoj: {...},
        karno: {...},
        preacher: {...},
        priest: {...}
    }

We want JavaScript to go through each property:
    1. ostoj
    2. karno
    3. preacher
    4. priest
But there's a small obstacle: objects don't have the same numbered indexes as arrays.

That's why we use:
    const characters = Object.keys(data.characters);

>> Object.keys() retrieves the names of all the properties and returns them as an array. <<

The resulting array looks like this:
    ["ostoj", "karno", "preacher", "priest"]

We can now use our regular for loop.
*/


// Step 2 - Going through the characters
/* Explanation:
Let's write the loop:
    const characters = Object.keys(data.characters);
    for (let i = 0; i < characters.length; i++) {}

Let's break it down:
Code	                Purpose
let i = 0	            Creates a counter starting at zero.
i < characters.length   Keeps looping while the counter is smaller than the array length.
i++	                    Increases the counter by one after each iteration.

This should look familiar from your previous work with reincarnations.
*/


// Step 3 - Retrieving each character
/* Explanation:
Now we need to retrieve the actual character object.

Remember, characters[i] gives us a property name, not the character itself.
For example: characters[0] returns "ostoj".

We can use that property name to access the original object: data.characters[characters[i]]

Let's store the result in a variable: const characters = Object.keys(data.characters);

    for (let i = 0; i < characters.length; i++) {
        const character = data.characters[characters[i]];
    }

Now, during each iteration, character refers to a different character object.
What happens during the loop?
0                   1                   2                   3
characters[0]       characters[1]       characters[2]       characters[3]
ostoj               karno               preacher            priest
Ostoj               Karno               Preacher            Priest

Each iteration retrieves a different character object.
*/


// Step 4 - Creating the HTML elements inside the loop
/* Explanation:
Here's where things become interesting.

Previously, we created elements individually:
    const txtCharacterName = document.createElement("h2");
    const txtCharacterDescription = document.createElement("p");

But now we can put those instructions inside the loop.
    for (let i = 0; i < characters.length; i++) {
        const character = data.characters[characters[i]];

        const txtCharacterName = document.createElement("h2");
        const txtCharacterDescription = document.createElement("p");
    }

Why inside the loop?
Because every iteration needs to create a new heading and a new paragraph.
If we created them outside the loop, we wouldn't get four separate headings and paragraphs.
*/


// Step 5 - Putting the information inside the elements
/* Explanation:
This part should be familiar:
    txtCharacterName.textContent = character.name;
    txtCharacterDescription.textContent = character.description;

Notice that we no longer write ostoj.name or karno.name.
We simply write character.name.
Why? Because character changes with every iteration!
*/


// Step 6 - Adding the elements to the webpage
/* Explanation:
Finally, we add them to the body:
    document.body.appendChild(txtCharacterName);
    document.body.appendChild(txtCharacterDescription);
Again, these instructions belong inside the loop.

Otherwise, we wouldn't append the elements created during each iteration.
*/


// Step 7 - Putting everything together
/* Explanation:
Here's the complete result:
    fetch("database/characters.json")
        .then(response => {
            return response.json();
        })
        .then(data => {

            const characters = Object.keys(data.characters);

            for (let i = 0; i < characters.length; i++) {

                const character = data.characters[characters[i]];

                const txtCharacterName = document.createElement("h2");
                const txtCharacterDescription = document.createElement("p");

                txtCharacterName.textContent = character.name;
                txtCharacterDescription.textContent = character.description;

                document.body.appendChild(txtCharacterName);
                document.body.appendChild(txtCharacterDescription);

            }

        });

What we've achieved: the webpage now generates the headings and descriptions for all four characters automatically.

You no longer need to write separate instructions for Ostoj, Karno, the Preacher, and the Priest.
*/

