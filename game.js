const WIN_STATUS = 'win';
const LOSS_STATUS = 'loss';
const ON_GOING_STATUS = 'match going';

const WICKET = 'W';
const GROUND_RADIUS = 60;

const LEG_SIDE = 'l';
const OFF_SIDE = 'r';
const BACK_FOOT = 'b';
const FRONT_FOOT = 'f';

const SINGLE = 1;
const DOUBLE = 2;
const TRIPLE = 3;
const BOUNDARY = 4;
const MAXIMUM = 6;

const FIELDER = '🏃🏻‍♂️';
const BOUNDARY_LINE = '🔴';
const INNER_BOUNDARY = '⚪';
const GRASS = '🟢';
const PITCH = '⬜️';
const EMPTY_GROUND = '⬛';

// [distance, angle]
const FIELDERS = [
  [40, 90],
  [-24, 90],
  [32, 135],
  [-32, 225],
  [80, 315],
  [-80, 45],
  [32, 180],
  [-32, 180],
  [80, 45],
  [-80, 240],
  [-80, 300],
  [-80, 175]
];

function isValidShot(shotChoice, validShots) {
  if (!shotChoice) return false;
  return validShots.includes(shotChoice.toLowerCase());
}

function chooseShot() {
  const validShots = [LEG_SIDE, OFF_SIDE, BACK_FOOT, FRONT_FOOT];

  while (true) {
    const shotChoice = prompt(
      'Choose Your Shot:\n' +
      'L: Leg-side\n' +
      'R: Straight/Right-side\n' +
      'B: Backfoot (Cut/Pull)\n' +
      'F: Frontfoot (Drive)\n'
    );

    if (isValidShot(shotChoice, validShots)) {
      return shotChoice.toLowerCase();
    }

    console.log("Invalid shot! Please try again.\n");
  }
}

function endGame(target, currScore) {
  const status = 'DEFEAT!';
  const emoji = '😭';
  const desc = `Target not reached. You were short by ${target - currScore} runs.`;
  console.log(`${emoji} ${status} ${desc}`);
}

function displayWinMessage(maxBatsmen, wicketsLost) {
  const status = 'VICTORY!';
  const desc = `You won by ${maxBatsmen - wicketsLost} wickets.`
  const emoji = '🎉'

  console.log(`${emoji} ${status} ${desc}`);
}

function getGameStatus(target, currScore, maxBatsmen, wicketsLoss) {
  const win = currScore >= target;
  const loss = wicketsLoss >= maxBatsmen;

  if (win) return WIN_STATUS;
  if (loss) return LOSS_STATUS;

  return ON_GOING_STATUS;
}

function displayGameInfo(mode, target, maxBatsmen) {
  console.log(`--- Game Initialized: ${mode.toUpperCase()} Mode ---`);
  console.log(`Target: ${target} runs`);
  console.log(`Max Wickets: ${maxBatsmen}`);
}

function getMaxBatsmen(mode) {
  if (mode === 'easy') return 6;
  if (mode === 'medium') return 5;
  return 4;
}

function randomInRange(range) {
  const min = range[0];
  const max = range[1];
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getTarget(mode) {
  if (mode === 'easy') return randomInRange([15, 20]);
  if (mode === 'medium') return randomInRange([35, 50]);
  return randomInRange([75, 100]);
}

function displayFeedBack(result, currScore, wicketsLoss, maxBatsmen) {
  let feedback = '';
  if (result === WICKET) {
    feedback = `🚨 WICKET! ${wicketsLoss}/${maxBatsmen}`;
  } else {
    feedback = `Scored ${result} runs. Score: ${currScore}/${wicketsLoss}`;
  }
  console.log(feedback);
}

function updateScore(score, wickets, result) {
  if (result === WICKET) return [score, wickets + 1];
  return [score + result, wickets];
}

function isCaught(distance, angle, fielders) {
  for (let i = 0; i < fielders.length; i++) {
    const fielderDist = fielders[i][0];
    const fielderAngle = fielders[i][1];

    const distDiff = Math.abs(distance - fielderDist);
    const angleDiff = Math.abs(angle - fielderAngle);

    if (distDiff < 10 && angleDiff < 15) {
      return true;
    }
  }
  return false;
}

function shotOutcome(distance, angle) {
  if (isCaught(distance, angle, FIELDERS)) {
    return WICKET;
  }

  if (distance < 20 && Math.random() < 0.3) return WICKET;

  const isRiskArea =
    (angle < 15 || angle > 345) ||
    (angle > 80 && angle < 100) ||
    (angle > 260 && angle < 280);

  if (distance > 50 && isRiskArea && Math.random() < 0.25) return WICKET;
  if (distance >= GROUND_RADIUS) return MAXIMUM;
  if (distance > GROUND_RADIUS - 20) return BOUNDARY;
  if (distance > 35) {
    const runs = [SINGLE, SINGLE, SINGLE, DOUBLE, DOUBLE, TRIPLE];
    return runs[Math.floor(Math.random() * 6)];
  }
  return 0;
}

function getAngleForShot(shot) {
  if (shot === LEG_SIDE) return randomInRange([200, 320]);
  if (shot === OFF_SIDE) return randomInRange([20, 120]);
  if (shot === BACK_FOOT) return randomInRange([250, 310]);
  return randomInRange([10, 100]);
}

function getDistanceForShot(shot) {
  if (shot === LEG_SIDE) return randomInRange([25, 70]);
  if (shot === OFF_SIDE) return randomInRange([30, 80]);
  if (shot === BACK_FOOT) return randomInRange([15, 55]);
  return randomInRange([40, GROUND_RADIUS]);
}

function getShotCoordinates(shot) {
  const distance = getDistanceForShot(shot);
  const angle = getAngleForShot(shot);
  return [distance, angle];
}

function determineOutcome(shot) {
  const coords = getShotCoordinates(shot);
  return shotOutcome(coords[0], coords[1]);
}

function playDelivery() {
  const userShot = chooseShot();
  return determineOutcome(userShot);
}

function game(mode, target, maxBatsmen) {
  let currScore = 0;
  let wicketsLoss = 0;
  let status = getGameStatus(target, currScore, maxBatsmen, wicketsLoss);

  while (status === ON_GOING_STATUS) {
    const result = playDelivery();
    const updated = updateScore(currScore, wicketsLoss, result)
    currScore = updated[0];
    wicketsLoss = updated[1];
    displayFeedBack(result, currScore, wicketsLoss, maxBatsmen);
    status = getGameStatus(target, currScore, maxBatsmen, wicketsLoss);
  }

  return [status, currScore, wicketsLoss];
}

function groundLegend() {
  let legend = 'Legend: \n';
  legend += `${BOUNDARY_LINE} Boundary | `;
  legend += `${INNER_BOUNDARY} Inner Ring | `;
  legend += `${FIELDER} Fielder | `;
  legend += `${PITCH} Pitch | `;
  legend += `${GRASS} Ground | `;
  legend += `${EMPTY_GROUND} Outside `;
  console.log(legend);
}

const sqr = function (x) {
  return x * x;
}

function distanceBetween(p1, p2) {
  return Math.sqrt(sqr(p1[0] - p2[0]) + sqr(p1[1] - p2[1]));
}

const center = function(width, height) {
  const abscissa = Math.floor(width / 2)
}

function createGround(width, height) {
  const grid = [];
  const centerAbscissa = Math.floor(width / 2);
  const centerOrdinate = Math.floor(height / 2);

  const boundaryRadius = Math.floor(width * 0.45);
  const innerRadius = Math.floor(width * 0.25);

  for (let y = 0; y < height; y++) {
    const row = [];
    for (let x = 0; x < width; x++) {
      const d = distanceBetween([x, y], [centerAbscissa, centerOrdinate]);

      if (Math.abs(d - boundaryRadius) < 1) row.push(BOUNDARY_LINE);
      else if (Math.abs(d - innerRadius) < 1) row.push(INNER_BOUNDARY);
      else if (d < boundaryRadius) row.push(GRASS);
      else row.push(EMPTY_GROUND);
    }
    grid.push(row);
  }

  return [grid, centerAbscissa, centerOrdinate];
}

function addPitch(grid, cx, cy) {
  const pitchHalf = 2;
  for (let dy = -pitchHalf; dy <= pitchHalf; dy++) {
    grid[cy + dy][cx] = PITCH;
  }
}

function placeFielders(grid, cx, cy) {
  for (let i = 0; i < FIELDERS.length; i++) {
    const dist = FIELDERS[i][0] / 8;
    const angle = FIELDERS[i][1] * (Math.PI / 180);

    const fx = Math.round(cx + dist * Math.cos(angle));
    const fy = Math.round(cy + dist * Math.sin(angle));

    if (grid[fy] && grid[fy][fx]) {
      grid[fy][fx] = FIELDER;
    }
  }
}

function renderGrid(grid) {
  for (let y = 0; y < grid.length; y++) {
    console.log(grid[y].join(""));
  }
}

function displayGround() {
  const width = 25;
  const height = 25;

  const result = createGround(width, height);
  const grid = result[0];
  const cx = result[1];
  const cy = result[2];

  addPitch(grid, cx, cy);
  placeFielders(grid, cx, cy);
  renderGrid(grid);

  groundLegend();
}

function initGame(mode = 'easy') {
  const target = getTarget(mode);
  const maxBatsmen = getMaxBatsmen(mode);
  displayGameInfo(mode, target, maxBatsmen);
  displayGround();

  const result = game(mode, target, maxBatsmen);
  const status = result[0];
  const runsScored = result[1];
  const wicketsLoss = result[2];

  if (status === WIN_STATUS) {
    displayWinMessage(maxBatsmen, wicketsLoss);
  } else {
    endGame(target, runsScored);
  }
}

initGame();