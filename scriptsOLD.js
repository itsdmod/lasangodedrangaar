fetch("database/characters.json")
    .then(response => {             // Receives the HTTP response and converts its body into JavaScript data
        return response.json();
    })
    .then(data => {                 // Receives that converted data
        const karno = data.characters.karno;
        console.log(karno.name);
        console.log(karno.title);
        console.log(karno.reincarnations[0].birthYear);

        const ostoj = data.characters.ostoj;
        for (let i = 0; i < ostoj.reincarnations.length; i++){
            console.log(ostoj.reincarnations[i].birthYear);
        }

        const characters = Object.keys(data.characters);    // Retrieves all the property names from an object
        
        
        // Printing just the character names
        for (let i = 0; i < characters.length; i++){
            console.log(characters[i]);
        }

        // Printing each character's actual name property
        for (let i = 0; i < characters.length; i++){
            console.log(data.characters[characters[i]]);
        }

        // Prints an <h2> of each character name
    /*  for (let i = 0; i < characters.length; i++){
            const headingCharacterName = document.createElement("h2");
            headingCharacterName.textContent = data.characters[characters[i]].name;
            document.body.appendChild(headingCharacterName);
        }
    */

        // Prints an <h2> of each character name and the descriptions
    /*  for (let i = 0; i < characters.length; i++){
            
            const character = data.characters[characters[i]];

            const headingCharacterName = document.createElement("h2");
            headingCharacterName.textContent = character.name;
            document.body.appendChild(headingCharacterName);

            const characterDescription = document.createElement("p");
            characterDescription.innerHTML = "<b>Description: </b>" + character.description;
            document.body.appendChild(characterDescription);
        }
    */

        // Prints an <h2> of each character name, the descriptions, and each reincarnation info. This example is done by using reincarnationNumber, just to test out a switch statement
    /*  for (let i = 0; i < characters.length; i++){
            
            const character = data.characters[characters[i]];

            const headingCharacterName = document.createElement("h2");
            headingCharacterName.textContent = character.name;
            document.body.appendChild(headingCharacterName);

            const characterDescription = document.createElement("p");
            characterDescription.innerHTML = "<b>Description: </b>" + character.description;
            document.body.appendChild(characterDescription);

            for (let i = 0; i < character.reincarnations.length; i++){
                const characterReincarnationNumber = document.createElement("h3");
                switch (character.reincarnations[i].reincarnationNumber) {
                    case 0:
                        characterReincarnationNumber.innerHTML = "Fresh shell"
                        document.body.appendChild(characterReincarnationNumber);
                        break;
                    case 1:
                        characterReincarnationNumber.innerHTML = "First reincarnation"
                        document.body.appendChild(characterReincarnationNumber);
                        break;
                    case 2:
                        characterReincarnationNumber.innerHTML = "Second reincarnation"
                        document.body.appendChild(characterReincarnationNumber);
                        break;
                    case 3:
                        characterReincarnationNumber.innerHTML = "Third reincarnation"
                        document.body.appendChild(characterReincarnationNumber);
                        break;
                    case 4:
                        characterReincarnationNumber.innerHTML = "Fourth reincarnation"
                        document.body.appendChild(characterReincarnationNumber); 
                        break;
                    default:
                        characterReincarnationNumber.innerHTML = "<b>Reincarnation number: </b>" + character.reincarnations[i].reincarnationNumber;
                        document.body.appendChild(characterReincarnationNumber);
                }
                
            }

        }

        */
        /*
        // Prints an <h2> of each character name, the descriptions, and each reincarnation info. This example is done by using reincarnationNumber, just to test out a switch statement
        for (let i = 0; i < characters.length; i++){
            
            // Const that grabs one character by object name
            const character = data.characters[characters[i]];

            // Get the property value of "name" and inserts it into an h2
            const headingCharacterName = document.createElement("h2");
            headingCharacterName.textContent = character.name;
            document.body.appendChild(headingCharacterName);

            // Get the property value of "description" and inserts it into a p
            const characterDescription = document.createElement("p");
            characterDescription.innerHTML = "<b>Description: </b>" + character.description;
            document.body.appendChild(characterDescription);

            // Get the property values of each reincarnation on a character "label, birth year, and death year" and inserts it into an ul.
            for (let j = 0; j < character.reincarnations.length; j++){
                const characterReincarnationLabel = document.createElement("h3");
                characterReincarnationLabel.innerHTML = character.reincarnations[j].reincarnationLabel;
                document.body.appendChild(characterReincarnationLabel);

                const characterReincarnationInfo = document.createElement("ul");    // Main list containing the birth and death years
                characterReincarnationInfo.innerHTML =  "<li><b>Birth year:</b> " + character.reincarnations[j].birthYear + "</li>";

                // If the character didn't die, display that the character is still alive
                if (character.reincarnations[j].deathYear === null) { 
                    characterReincarnationInfo.innerHTML += "<li><b>Death year:</b> Still alive </li>"
                } else {
                    characterReincarnationInfo.innerHTML += "<li><b>Death year:</b> " + character.reincarnations[j].deathYear + "</li>"
                }

                // Occupations are an array, therefore they need a for loop
                // Create the parent list item
                const occupationsTitle = document.createElement("li");
                occupationsTitle.innerHTML = "<b>Occupations:</b>";

                // Create the nested list
                const occupationsItems = document.createElement("ul");

                // Populate the nested list
                for (let k = 0; k < character.reincarnations[j].occupations.length; k++) {
                    const occupation = document.createElement("li");                        // Creates a new, empty <li>
                    occupation.textContent = character.reincarnations[j].occupations[k]     // Gets one occupation from the array and puts it inside that <li>
                    occupationsItems.appendChild(occupation);                               // Puts that <li> inside our nested <ul>
                }

                // Connect everything (put our "Occupations" item inside it)
                occupationsTitle.appendChild(occupationsItems); // appendChild() is a JavaScript method that puts an HTML element inside another HTML element
                characterReincarnationInfo.appendChild(occupationsTitle);

                // Add the completed reincarnation information to the page
                document.body.appendChild(characterReincarnationInfo);

            }
                
        } */

    });