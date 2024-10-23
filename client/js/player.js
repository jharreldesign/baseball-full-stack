const fetchPlayers = async () => {
    const playersContainer = document.getElementById('playersContainer');
    playersContainer.innerHTML = ''; 

    try {
        const players = await getPlayers(); 
        players.forEach(player => {
            console.log(player); 
            const playerCard = createPlayerCard(player); 
            playersContainer.appendChild(playerCard); 
        });
    } catch (error) {
        console.error('Error fetching players:', error);
    }
};

const getPlayers = async () => {
    const response = await axios.get('http://localhost:3001/players');
    console.log(response.data);
    return response.data; 
};

const createPlayerCard = (player) => {
    const playerCard = document.createElement('div'); 
    playerCard.className = 'player-card'; 

    
    if (!player._id) {
        console.error('Player ID is missing:', player);
        return; 
    }

    playerCard.innerHTML = `
        <a href="playerProfile.html?id=${player._id}" class="player-card-link">
            <img src="${player.headshot}" alt="${player.firstName} ${player.lastName}" />
            <h3>${player.firstName} ${player.lastName}</h3>
            <p>Number: ${player.playerNumber}</p>
            <p>Position: ${player.position}</p>
            <p>Current Team: ${player.currentTeam.teamName}</p>
        </a>
    `;

    return playerCard; 
};


window.onload = fetchPlayers;
