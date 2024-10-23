const fetchTeamProfile = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const teamId = urlParams.get('id'); 
    console.log(teamId);

    if (!teamId) {
        console.error('Team ID not specified in the URL.');
        return;
    }

    try {
        const response = await axios.get(`http://localhost:3001/teams/${teamId}`);
        const team = response.data;

        if (team) {
            document.getElementById('teamLogo').src = team.teamLogo || '';
            document.getElementById('ballparkImage').src = team.ballparkImage || ''; 
            document.getElementById('teamName').textContent = team.teamName || 'Team Name Not Available';
            document.getElementById('city').textContent = `City: ${team.city || 'N/A'}`;
            document.getElementById('state').textContent = `State: ${team.state || 'N/A'}`;
            document.getElementById('teamInitials').textContent = `Initials: ${team.teamInitials || 'N/A'}`;
            document.getElementById('ballpark').textContent = `Ballpark: ${team.ballpark || 'N/A'}`; 
        } else {
            console.error('No team found with the provided ID.');
        }
    } catch (error) {
        console.error('Error fetching team profile:', error);
    }
};

window.onload = fetchTeamProfile;
