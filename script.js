function fetchdata() {
    var movieTitle = document.getElementById("movieInput").value.trim();
    var apiKey = 'e5e05c7310msh92bc170b558b46ep1bfeb0jsnfdd69cab1dac'; // Replace with your actual API key

    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://omdbapi.com/?apikey=d18429a4&t=' + encodeURIComponent(movieTitle));


    xhr.onload = function () {
        if (xhr.status === 200) {
            var data = JSON.parse(xhr.responseText);
            console.log(data); // Logging the response data to the console
            displaydata(data); // Call the function to display movie information
        } else {
            console.error('Error fetching movie data. Status code: ' + xhr.status);
        }
    };

    xhr.send();
}

function displaydata(data) {
    var movieInfo = document.getElementById("result");
    if (data && data.Response === "True") {
        movieInfo.innerHTML = `
            <h2>${data.Title} (${data.Year})</h2>
            <p>Directed by: ${data.Director}</p>
            <p>Genre: ${data.Genre}</p>
            <p>Actors: ${data.Actors}</p>
            <p>Language: ${data.Language}</p>
            <p>Country: ${data.Country}</p>
            <p>Released: ${data.Released}</p>
            <img src="${data.Poster}" alt="${data.Title} poster">
        `;
    } else {
        movieInfo.innerHTML = "<p>No movie found with that title.</p>";
    }
}