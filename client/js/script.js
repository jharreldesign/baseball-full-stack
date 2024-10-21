const baseURL = "http://localhost:3001";

// Function to render teams
const renderTeams = (teams) => {
  const teamsContainer = document.getElementById("teamsContainer");
  if (teamsContainer) {
    teamsContainer.innerHTML = `
            <h2>Teams List</h2>
            <ul>
                ${teams
                  .map((team) => {
                    let ballparkName;
                    if (team.ballpark && team.ballpark.ballparkName) {
                      ballparkName = team.ballpark.ballparkName;
                    } else {
                      ballparkName = "unknown ballpark";
                    }
                    return `
                    <li>
                        ${team.teamName} | 
                        ${team.teamInitials} | 
                        ${team.ballpark} | 
                    </li>`;
                  })
                  .join("")}
            </ul>
        `;
  }
};

// Function to fetch all teams
const getTeams = async () => {
  try {
    const response = await axios.get(`${baseURL}/teams`);
    console.log("Teams: ", response.data);

    renderTeams(response.data);
  } catch (error) {
    console.error("Error getting teams: ", error.message);
    console.log("Full error details: ", error);
  }
};

// Function to render players
const renderPlayers = (players) => {
  const playersContainer = document.getElementById("playersContainer");
  if (playersContainer) {
    playersContainer.innerHTML = `
            <h2>Players List</h2>
            <ul>
                ${players
                  .map(
                    (player) => `
                <li>
                    ${player.playerNumber} ${player.first_name} ${player.last_name} | 
                    ${player.position} | 
                    ${player.throws} | 
                    ${player.hits} | 
                    ${player.debut} | 
                    ${player.currentTeam.teamName}
                </li>`
                  )
                  .join("")}
            </ul>
        `;
  }
};

// Function to fetch players
const getPlayers = async () => {
  try {
    const response = await axios.get(`${baseURL}/players`);
    console.log("Players: ", response.data);

    renderPlayers(response.data);
  } catch (error) {
    console.error("Error getting players: ", error.message);
    console.log("Full error details: ", error);
  }
};


  

// Call the functions to fetch and display data
getTeams();
getPlayers();
