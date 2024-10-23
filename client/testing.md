<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Player Profile</title>
    <link rel="stylesheet" href="player-profile.css">
</head>
<body>

<div class="container">
    <div class="hero-image">
        <img class="player-action-photo" src="path/to/action-photo.jpg" alt="Action Photo of Player" />
        <div class="player-info">
            <img class="player-headshot" src="path/to/headshot.jpg" alt="Headshot of Player" />
            <div class="player-details">
                <div class="player-number" id="playerNumber">#99</div>
                <h1 id="playerName">John Doe</h1>
                <p id="hometown">Hometown: Springfield</p>
                <p id="hits">Hits: 250</p>
                <p id="throws">Throws: Right</p>
                <p id="debut">Debut: 2015</p>
            </div>
        </div>
    </div>

    <div class="stats">
        <h2>Career Stats</h2>
        <table>
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Games</th>
                    <th>Average</th>
                    <th>Home Runs</th>
                    <th>RBIs</th>
                </tr>
            </thead>
            <tbody id="careerStatsBody">
                <tr>
                    <td>2020</td>
                    <td>50</td>
                    <td>.320</td>
                    <td>15</td>
                    <td>45</td>
                </tr>
                <!-- Add more rows as needed -->
            </tbody>
        </table>

        <h2>Recent Performance</h2>
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Opponent</th>
                    <th>Result</th>
                    <th>Hits</th>
                    <th>RBIs</th>
                </tr>
            </thead>
            <tbody id="recentPerformanceBody">
                <tr>
                    <td>10/01/2024</td>
                    <td>Team A</td>
                    <td>W</td>
                    <td>2</td>
                    <td>3</td>
                </tr>
                <!-- Add more rows as needed -->
            </tbody>
        </table>
    </div>
</div>

</body>
</html>
