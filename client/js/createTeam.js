//CREATE TEAM

document.getElementById('teamForm').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent form from refreshing the page
    
    const teamName = document.getElementById('teamName').value;
    const teamInitials = document.getElementById('teamInitials').value;
    const ballpark = document.getElementById('ballpark').value;
  
    const team = { teamName, teamInitials, ballpark };
  
    try {
      const response = await fetch('http://localhost:3001/teams', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(team)
      });
  
      if (response.ok) {
        const result = await response.json();
        document.getElementById('message').innerText = `Team created successfully: ${result.teamName}`;
      } else {
        const error = await response.text();
        document.getElementById('message').innerText = `Error: ${error}`;
      }
    } catch (err) {
      document.getElementById('message').innerText = `Error: ${err.message}`;
    }
  });