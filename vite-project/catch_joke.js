import axios from "axios";

const displayQuote = document.getElementById("display-quote");
const displayCharacter = document.getElementById("display-character");
const refreshButton = document.getElementById("refresh-button");

export async function fetchData() {
    const errorMessage = `Mistakes were made. Try Again!`;

    const apiURL = `https://thesimpsonsquoteapi.glitch.me/quotes`;

    try {
        const response = await axios.get(apiURL);

        if (Array.isArray(response.data) && response.data.length > 0) {
            const randomQuoteIndex = Math.floor(Math.random() * response.data.length);
            const randomQuoteObject = response.data[randomQuoteIndex];

            const randomQuote = randomQuoteObject.quote;
            const randomCharacter = randomQuoteObject.character;

            displayQuote.textContent = `"${randomQuote}"`;
            displayCharacter.textContent = `- ${randomCharacter}`;

            console.log(randomQuote);
            console.log(randomCharacter);

        } else {
            throw new Error("No quotes found in the response.");
        }

    } catch (error) {
        displayQuote.textContent = errorMessage;
        console.error(error);
    }
}

const refreshPage = () => {
    location.reload();
  }
  
refreshButton.addEventListener('click', refreshPage);