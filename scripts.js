fetch("database/characters.json")
    .then(response => {
        return response.json();
    })
    .then(data => {
        // Creating variables to access characters
        const characters = Object.keys(data.characters); // Retrieves the names of all the properties and returns them as an array
        // Retrieve the existing container from HTML
        const allCharactersContainer = document.getElementById("main-characters-container"); // Same main container for every character. We only need to retrieve it once

        // Going through the characters
        for(let i = 0; i < characters.length; i++) {
            const character = data.characters[characters[i]];   // Each iteration retrieves a different character object
            const reincarnations = character.reincarnations;
            const latestReincarnation = reincarnations[reincarnations.length - 1];

        // MAIN CHARACTER CONTAINER
            const characterContainer = document.createElement("div");
            characterContainer.className = "character-container";

        // FIRST DIV: CHARACTER INFORMATION
            const characterInfoContainer = document.createElement("div");
            characterInfoContainer.className = "character-info-container";

            const txtName = document.createElement("h2");
            const txtRealName = document.createElement("span");
            const txtTitle = document.createElement("p");
                const titleLabel = document.createElement("strong");
                const titleValue = document.createElement("span");
            const txtDescription = document.createElement("p");

            txtName.textContent = character.name;
            txtRealName.textContent = " (" + character.realName + ")";
            txtRealName.hidden = character.realName == null;
            titleLabel.textContent = "Title: ";
            titleValue.textContent = character.title;
            txtDescription.textContent = character.description;
            txtName.appendChild(txtRealName);
            characterInfoContainer.appendChild(txtName);
            characterInfoContainer.appendChild(txtTitle);
                txtTitle.appendChild(titleLabel);
                txtTitle.appendChild(titleValue);
            characterInfoContainer.appendChild(txtDescription);

            characterContainer.appendChild(characterInfoContainer);


        // SECOND DIV WITH BUTTONS FOR EACH REINCARNATION
            const reincarnationButtonsContainer = document.createElement("div");
            reincarnationButtonsContainer.className = "reincarnation-buttons-container";

            characterContainer.appendChild(reincarnationButtonsContainer);

            // Button to switch reincarnations
            for(let j = 0; j < reincarnations.length; j++) {
                const bttnReincarnation = document.createElement("button");
                bttnReincarnation.textContent = reincarnations[j].reincarnationLabel;
                reincarnationButtonsContainer.appendChild(bttnReincarnation);

                bttnReincarnation.addEventListener("click", function() {
                    txtReincarnationLabel.textContent = reincarnations[j].reincarnationLabel;
                    briefDescriptionValue.textContent = reincarnations[j].briefDescription;
                    birthYearValue.textContent = reincarnations[j].birthYear;
                    txtDeathYear.hidden = reincarnations[j].deathYear == null;
                    deathYearValue.textContent = reincarnations[j].deathYear;
                    txtshellAge.hidden = reincarnations[j].shellAge == null;
                    shellAgeValue.textContent = reincarnations[j].shellAge;
                    soulAgeValue.textContent = reincarnations[j].soulAge;
                    txtshellAgeAtDeath.hidden = reincarnations[j].shellAgeAtDeath == null;
                    shellAgeAtDeathValue.textContent = reincarnations[j].shellAgeAtDeath;
                    occupationsValue.textContent = reincarnations[j].occupations.join(", ");
                    relationshipsValue.textContent = reincarnations[j].relationships;
                    extraInfoValue.textContent = reincarnations[j].extraInfo;
                });
            };


        // THIRD DIV WITH SPECIFIC REINCARNATION INFORMATION
            const reincarnationInfoContainer = document.createElement("div");
            reincarnationInfoContainer.className = "reincarnation-info-container";

            characterContainer.appendChild(reincarnationInfoContainer);

            const txtReincarnationLabel = document.createElement("h3");
            const briefDescriptionValue = document.createElement("p");
            const txtBirthYear = document.createElement("p");
                const birthYearLabel = document.createElement("strong");
                const birthYearValue = document.createElement("span");
            const txtDeathYear = document.createElement("p");
                const deathYearLabel = document.createElement("strong");
                const deathYearValue = document.createElement("span");
            const txtshellAge = document.createElement("p");
                const shellAgeLabel = document.createElement("strong");
                const shellAgeValue = document.createElement("span");
            const txtshellAgeAtDeath = document.createElement("p");
                const shellAgeAtDeathLabel = document.createElement("strong");
                const shellAgeAtDeathValue = document.createElement("span");
            const txtSoulAge = document.createElement("p");
                const soulAgeLabel = document.createElement("strong");
                const soulAgeValue = document.createElement("span");
            const txtOccupations = document.createElement("p");
                const occupationsLabel = document.createElement("strong");
                const occupationsValue = document.createElement("span");
            const txtRelationships = document.createElement("p");
                const relationshipsLabel = document.createElement("strong");
                const relationshipsValue = document.createElement("span");
            const txtExtraInfo = document.createElement("p");
                const extraInfoLabel = document.createElement("strong");
                const extraInfoValue = document.createElement("span");


            txtReincarnationLabel.textContent = latestReincarnation.reincarnationLabel;
            briefDescriptionValue.textContent = latestReincarnation.briefDescription;
            birthYearLabel.textContent = "Birth year: ";
            birthYearValue.textContent = latestReincarnation.birthYear;
            deathYearLabel.textContent = "Death year: ";
            deathYearValue.textContent = latestReincarnation.deathYear;
            shellAgeLabel.textContent = "Shell's age: ";
            shellAgeValue.textContent = latestReincarnation.shellAge;
            soulAgeLabel.textContent = "Soul's age: ";
            soulAgeValue.textContent = latestReincarnation.soulAge;
            shellAgeAtDeathLabel.textContent = "Shell's age at death: ";
            shellAgeAtDeathValue.textContent = latestReincarnation.shellAgeAtDeath;
            occupationsLabel.textContent = "Occupations: ";
            occupationsValue.textContent = latestReincarnation.occupations.join(", ");
            relationshipsLabel.textContent = "Relationships: ";
            relationshipsValue.textContent = latestReincarnation.relationships;
            extraInfoLabel.textContent = "Extra info: ";
            extraInfoValue.textContent = latestReincarnation.extraInfo;


            reincarnationInfoContainer.appendChild(txtReincarnationLabel);
            reincarnationInfoContainer.appendChild(briefDescriptionValue);
            reincarnationInfoContainer.appendChild(txtBirthYear);
                txtBirthYear.appendChild(birthYearLabel);
                txtBirthYear.appendChild(birthYearValue);
            reincarnationInfoContainer.appendChild(txtDeathYear);
                txtDeathYear.appendChild(deathYearLabel);
                txtDeathYear.appendChild(deathYearValue);
            txtDeathYear.hidden = latestReincarnation.deathYear == null;
            reincarnationInfoContainer.appendChild(txtshellAge);
                txtshellAge.appendChild(shellAgeLabel);
                txtshellAge.appendChild(shellAgeValue);
            txtshellAge.hidden = latestReincarnation.shellAge == null;
            reincarnationInfoContainer.appendChild(txtSoulAge);
                txtSoulAge.appendChild(soulAgeLabel);
                txtSoulAge.appendChild(soulAgeValue);
            reincarnationInfoContainer.appendChild(txtshellAgeAtDeath);
                txtshellAgeAtDeath.appendChild(shellAgeAtDeathLabel);
                txtshellAgeAtDeath.appendChild(shellAgeAtDeathValue);
            txtshellAgeAtDeath.hidden = latestReincarnation.shellAgeAtDeath == null;
            reincarnationInfoContainer.appendChild(txtOccupations);
                txtOccupations.appendChild(occupationsLabel);
                txtOccupations.appendChild(occupationsValue);
            reincarnationInfoContainer.appendChild(txtRelationships);
                txtRelationships.appendChild(relationshipsLabel);
                txtRelationships.appendChild(relationshipsValue);
            reincarnationInfoContainer.appendChild(txtExtraInfo);
                txtExtraInfo.appendChild(extraInfoLabel);
                txtExtraInfo.appendChild(extraInfoValue);

            allCharactersContainer.appendChild(characterContainer);
        }

    });