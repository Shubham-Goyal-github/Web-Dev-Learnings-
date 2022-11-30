fetch('https://icanhazdadjoke.com/slack')
    .then(data => data.json())//converting the fetched data into JSON format
    .then(jokeData => {
        const jokeText = jokeData.attachments[0].text;
        const jokeElement = document.getElementById('jokeElement');

        jokeElement.innerHTML = jokeText;
    })