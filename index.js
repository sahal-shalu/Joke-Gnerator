const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");
const apikey = "piQrTmEXc8/imiJcRNcvMw==YsMydJs7zD36sjpl";
const options = {
  method: 'GET',
  headers: {
    "x-Api-Key": apikey,
  },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke() {
  try {
    jokeEl.innerText = "Updating...";
    btnEl.disabled = true;
    btnEl.innerText = "Loading...";
    const response = await fetch(apiURL, options);
    btnEl.disabled = false;
    btnEl.innerText = "Tell me a joke";
    const data = await response.json();
    jokeEl.innerText = data[0].joke;
  } catch (error) {
    console.log(error);
    jokeEl.innerText = "An error happened, try again later";
    btnEl.disabled = false;
    btnEl.innerText = "Tell me a Joke";
  }
}

btnEl.addEventListener('click', getJoke);
