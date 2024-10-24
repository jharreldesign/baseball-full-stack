const fetchTeamProfileAndPlayers = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const teamId = urlParams.get('id');

    if (!teamId) {
        console.error('Team ID not specified in the URL.');
        return;
    }

    try {
        // Fetch team profile
        const teamResponse = await axios.get(`http://localhost:3001/teams/${teamId}`);
        const team = teamResponse.data;

        console.log('Fetched team:', team); 
        if (team) {
            updateTeamProfileUI(team);

            const playersResponse = await axios.get(`http://localhost:3001/players`);
            const players = playersResponse.data;

            console.log('Fetched players:', players);

            const teamPlayers = players.filter(player => player.currentTeam && player.currentTeam._id === teamId);

            console.log('Filtered team players:', teamPlayers);

            populatePlayersTable(teamPlayers);
        } else {
            console.error('No team found with the provided ID.');
        }
    } catch (error) {
        console.error('Error fetching team profile or players:', error);
    }
};

const populatePlayersTable = (players) => {
    const playersTableBody = document.getElementById('playersTableBody');
    playersTableBody.innerHTML = ''; 

    players.forEach(player => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td><img src="${player.headshot || 'path/to/default/headshot.jpg'}" alt="${player.firstName} ${player.lastName}" class="player-headshot" /></td>
            <td>${player.firstName} ${player.lastName}</td>
            <td>${player.position || 'N/A'}</td>
            <td>${player.bats || 'N/A'}</td>
            <td>${player.throws || 'N/A'}</td>
            <td>${player.playerNumber || 'N/A'}</td>
        `;

        playersTableBody.appendChild(row);
    });
};

const updateTeamProfileUI = (team) => {
    document.getElementById('teamName').textContent = `${team.city.toUpperCase()} ${team.teamName.toUpperCase() || 'Team Name Not Available'}`;
    document.getElementById('city').textContent = `${team.city || 'N/A'}, ${team.state || 'N/A'}`;
    document.getElementById('teamInitials').textContent = `Team Initials: ${team.teamInitials || 'N/A'}`;
    document.getElementById('ballpark').textContent = `Ballpark: ${team.ballpark || 'N/A'}`;
    document.getElementById('teamLogo').src = `${team.teamLogo}` || ''; // Ensure logo is set correctly
    document.getElementById('ballparkImage').src = team.ballparkImage || 'path/to/default/ballpark.jpg';
};

fetchTeamProfileAndPlayers();
