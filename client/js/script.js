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
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Position</th>
            <th>Hits/Throws</th>
            <th>Hometown</th>
            <th>Debut</th>
          </tr>
        </thead>
        <tbody>
          ${players
            .map(
              (player, index) => `
              <tr>
              <td>${player.playerNumber || "Unknown Number"}</td>
              <td>${player.first_name || "Unknown Player"} ${player.last_name || "Unknown Player"}</td>
              <td>${player.position || "Unknown Player"}</td>
              <td>Hits: ${player.hits || "Unknown hits"}/Throws: ${player.throws || "Unknown Throws"}</td>
              <td>${player.hometown || "Unknown Hometown"}</td>
              <td>${player.debut || "Unknown Debut"}</td>
              </tr>
            `
            )
            .join("")}
        </tbody>
      </table>
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

// Function to render schedules as a table with alternating colored rows
const renderSchedules = (schedules) => {
  const schedulesContainer = document.getElementById("schedulesContainer");
  if (schedulesContainer) {
    schedulesContainer.innerHTML = `
      <h2>Scheduled Games List</h2>
      <table>
        <thead>
          <tr>
            <th>Game Date</th>
            <th>Home Team</th>
            <th>Away Team</th>
            <th>Ballpark</th>
          </tr>
        </thead>
        <tbody>
          ${schedules
            .map(
              (schedule, index) => `
              <tr>
              <td>${schedule.gameDate || "Unknown Date"}</td>
                <td>${schedule.homeTeam || "Unknown Home Team"}</td>
                <td>${schedule.awayTeam || "Unknown Away Team"}</td>
                <td>${schedule.ballpark || "Unknown Ballpark"}</td>
              </tr>
            `
            )
            .join("")}
        </tbody>
      </table>
    `;
  }
};

// Function to fetch scheduled games
const getSchedule = async () => {
  try {
    const response = await axios.get(`http://localhost:3001/schedules`);
    console.log("Scheduled games: ", response.data);

    renderSchedules(response.data);
  } catch (error) {
    console.error("Error getting scheduled games: ", error.message);
    console.log("Full error details: ", error);
  }
};

// Call the functions to fetch and display data
getTeams();
getPlayers();
getSchedule();
