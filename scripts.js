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

        // Prints an <h2> of each character name, the descriptions, and each reincarnation info. This example is done by using reincarnationNumber, just to test out a switch statement
        for (let i = 0; i < characters.length; i++){
            
            const character = data.characters[characters[i]];

            const headingCharacterName = document.createElement("h2");
            headingCharacterName.textContent = character.name;
            document.body.appendChild(headingCharacterName);

            const characterDescription = document.createElement("p");
            characterDescription.innerHTML = "<b>Description: </b>" + character.description;
            document.body.appendChild(characterDescription);

            for (let i = 0; i < character.reincarnations.length; i++){
                const characterReincarnationLabel = document.createElement("h3");
                        characterReincarnationLabel.innerHTML = character.reincarnations[i].reincarnationLabel;
                        document.body.appendChild(characterReincarnationLabel);
                }
                
            }

        });