//CREATE TEAM

document.getElementById('playerForm').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent form from refreshing the page
    
    const first_name = document.getElementById('first_name').value;
    const last_name = document.getElementById('last_name').value;
    const playerNumber = document.getElementById('playerNumber').value;
    const position = document.getElementById('position').value;
    const throws = document.getElementById('throws').value;
    const hits = document.getElementById('hits').value;
    const hometown = document.getElementById('hometown').value;
    const headshot = document.getElementById('headshot').value;
    const debut = document.getElementById('debut').value;
  
    const player = { first_name, last_name, playerNumber, position, throws, hits, hometown, headshot, debut };
  
    try {
      const response = await fetch('http://localhost:3001/players', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(player)
      });
  
      if (response.ok) {
        const result = await response.json();
        document.getElementById('message').innerText = `Player created successfully: ${result.player}`;
      } else {
        const error = await response.text();
        document.getElementById('message').innerText = `Error: ${error}`;
      }
    } catch (err) {
      document.getElementById('message').innerText = `Error: ${err.message}`;
    }
  });

  document.addEventListener("DOMContentLoaded", function () {
    const teamSelect = document.getElementById('team');
  
    // Fetch the team names from the backend
    axios.get('http://localhost:3001/teams')
      .then(response => {
        const teams = response.data; 
        console.log(response.data);
        teams.forEach(team => {
          const option = document.createElement('option');
          option.value = team.teamName;
          option.textContent = team.teamName;
          teamSelect.appendChild(option);
        });
      })
      .catch(error => {
        console.error("There was an error fetching the teams!", error);
      });
  });
  