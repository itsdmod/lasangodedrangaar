fetch("database/characters.json")
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