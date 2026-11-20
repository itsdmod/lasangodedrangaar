// This specific code was done by chatGPT

"use strict";

const status = document.querySelector("#status");
const characterSelect = document.querySelector("#character-select");
const reincarnationSelect = document.querySelector("#reincarnation-select");
const characterFields = document.querySelector("#character-fields");
const reincarnationFields = document.querySelector("#reincarnation-fields");
const downloadButton = document.querySelector("#download-button");
const resetButton = document.querySelector("#reset-button");

let characterData;

function makeTextEditor(container, object, keys, scope) {
  container.replaceChildren();
  for (const key of keys) {
    const value = object[key];
    if (typeof value !== "string" && value !== null) continue;

    const row = document.createElement("tr");
    const heading = document.createElement("th");
    heading.scope = "row";
    const label = document.createElement("label");
    label.htmlFor = `${scope}-${key}`;
    label.textContent = key;
    heading.append(label);

    const input = document.createElement("textarea");
    input.id = `${scope}-${key}`;
    input.rows = Math.max(2, Math.min(8, (value || "").split("\n").length + 1));
    input.value = value ?? "";
    input.addEventListener("input", () => {
      object[key] = input.value;
      status.textContent = "Edits are ready to download.";
    });

    const valueCell = document.createElement("td");
    valueCell.append(input);
    row.append(heading, valueCell);
    container.append(row);
  }
}

function currentCharacter() {
  return characterData.characters[characterSelect.value];
}

function renderCharacter() {
  const character = currentCharacter();
  makeTextEditor(characterFields, character, ["name", "realName", "title", "description"], "character");

  reincarnationSelect.replaceChildren();
  character.reincarnations.forEach((reincarnation, index) => {
    const option = document.createElement("option");
    option.value = String(index);
    option.textContent = reincarnation.reincarnationLabel || `Reincarnation ${index + 1}`;
    reincarnationSelect.append(option);
  });
  reincarnationSelect.disabled = character.reincarnations.length === 0;
  renderReincarnation();
}

function renderReincarnation() {
  const reincarnation = currentCharacter().reincarnations[Number(reincarnationSelect.value)];
  if (!reincarnation) {
    reincarnationFields.replaceChildren();
    return;
  }
  makeTextEditor(
    reincarnationFields,
    reincarnation,
    ["reincarnationLabel", "family", "relationships", "extraInfo", "briefDescription", "physicalDescription"],
    "reincarnation"
  );

  if (Array.isArray(reincarnation.occupations)) {
    const label = document.createElement("label");
    label.htmlFor = "reincarnation-occupations";
    label.textContent = "occupations (one per line)";
    const input = document.createElement("textarea");
    input.id = label.htmlFor;
    input.rows = Math.max(2, reincarnation.occupations.length);
    input.value = reincarnation.occupations.join("\n");
    input.addEventListener("input", () => {
      reincarnation.occupations = input.value.split("\n").map((item) => item.trim()).filter(Boolean);
      status.textContent = "Edits are ready to download.";
    });
    const row = document.createElement("tr");
    const heading = document.createElement("th");
    heading.scope = "row";
    heading.append(label);
    const valueCell = document.createElement("td");
    valueCell.append(input);
    row.append(heading, valueCell);
    reincarnationFields.append(row);
  }
}

characterSelect.addEventListener("change", renderCharacter);
reincarnationSelect.addEventListener("change", renderReincarnation);

downloadButton.addEventListener("click", () => {
  const blob = new Blob([`${JSON.stringify(characterData, null, 4)}\n`], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "characters.json";
  link.click();
  URL.revokeObjectURL(url);
  status.textContent = "Downloaded characters.json. Replace database/characters.json with the downloaded file to keep your edits.";
});

resetButton.addEventListener("click", () => window.location.reload());

fetch("database/characters.json")
  .then((response) => {
    if (!response.ok) throw new Error(`Could not load character data (${response.status}).`);
    return response.json();
  })
  .then((data) => {
    if (!data.characters || typeof data.characters !== "object") throw new Error("The JSON does not contain a characters object.");
    characterData = data;
    for (const [key, character] of Object.entries(data.characters)) {
      const option = document.createElement("option");
      option.value = key;
      option.textContent = character.name || key;
      characterSelect.append(option);
    }
    characterSelect.disabled = false;
    downloadButton.disabled = false;
    resetButton.disabled = false;
    status.textContent = "Character data loaded.";
    renderCharacter();
  })
  .catch((error) => {
    status.textContent = `${error.message} Open this page through a local web server so it can fetch database/characters.json.`;
  });
