const fetchSchedules = async () => {
  try {
    const response = await axios.get("http://localhost:3001/schedules");
    const schedules = response.data;

    const schedulesContainer = document.getElementById("schedulesContainer");
    schedulesContainer.innerHTML = ""; 

    if (schedules.length === 0) {
      document.getElementById("message").textContent =
        "No schedules available.";
      return;
    }

    schedules.forEach((schedule) => {

      const gameDate = new Date(schedule.gameDate).toLocaleString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });

      const scheduleCardHTML = `
      <a href="scheduleProfile.html?id=${schedule._id}" class="schedule-card">
          <div>
              <h3>
                  <img src="${schedule.homeTeam.teamLogo}" alt="${schedule.homeTeam.teamName} Logo" class="teamLogo" />
                  ${schedule.homeTeam.teamName} vs 
                  ${schedule.awayTeam.teamName} 
                  <img src="${schedule.awayTeam.teamLogo}" alt="${schedule.awayTeam.teamName} Logo" class="teamLogo" />
              </h3>
              <h4>${gameDate}</h4>
              <h5>Ballpark: ${schedule.ballpark}</h5>
          </div>
      </a>
  `;

      schedulesContainer.insertAdjacentHTML("beforeend", scheduleCardHTML);
    });
  } catch (error) {
    console.error(
      "Error fetching schedules:",
      error.response ? error.response.data : error.message
    );
    document.getElementById("message").textContent =
      "Failed to load schedules. Please try again later.";
  }
};

const fetchPlayers = async () => {
  try {
    const response = await axios.get('http://localhost:3001/players');
    const players = response.data;
    console.log('Fetched players:', players);

    const playersContainer = document.getElementById('playersContainer');
    playersContainer.innerHTML = '';

    players.forEach(player => {
      const playerCardHTML = `
        <a href="playerProfile.html?id=${player._id}" class="player-card">
          <img src="${player.headshot}" alt="${player.firstName} ${player.lastName}" class="playerLogo" />
          <div>
            <h3>${player.firstName} ${player.lastName}</h3>
            <p>Position: ${player.position || "Unknown"}</p>
            <p>Team: ${player.team?.teamName || "Free Agent"}</p>
          </div>
        </a>
      `;
      playersContainer.insertAdjacentHTML('beforeend', playerCardHTML);
    });
  } catch (error) {
    console.error('Error fetching players:', error);
  }
};

window.onload = fetchSchedules;
