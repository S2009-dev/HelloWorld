const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  dim: '\x1b[2m',
  underscore: '\x1b[4m',
  blink: '\x1b[5m',
  reverse: '\x1b[7m',
  hidden: '\x1b[8m',
  remove: '\x1b[1A\x1b[2K',
  clear: '\x1b[H\x1b[2J',
  fg: {
    black: '\x1b[30m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    magenta: '\x1b[35m',
    cyan: '\x1b[36m',
    white: '\x1b[37m',
    crimson: '\x1b[38m',
    gray: '\x1b[90m',
    orange: '\x1b[38;5;214m',
    brightRed: '\x1b[91m',
    brightGreen: '\x1b[92m',
    brightYellow: '\x1b[93m',
    brightBlue: '\x1b[94m',
    brightMagenta: '\x1b[95m',
    brightCyan: '\x1b[96m',
    brightWhite: '\x1b[97m'
  },
  bg: {
    black: '\x1b[40m',
    red: '\x1b[41m',
    green: '\x1b[42m',
    yellow: '\x1b[43m',
    blue: '\x1b[44m',
    magenta: '\x1b[45m',
    cyan: '\x1b[46m',
    white: '\x1b[47m',
    crimson: '\x1b[48m',
    gray: '\x1b[100m',
    orange: '\x1b[48;5;214m',
    brightRed: '\x1b[101m',
    brightGreen: '\x1b[102m',
    brightYellow: '\x1b[103m',
    brightBlue: '\x1b[104m',
    brightMagenta: '\x1b[105m',
    brightCyan: '\x1b[106m',
    brightWhite: '\x1b[107m'
  }
}

const randomColor = (type = 'fg') => {
  const colorsObject = Object.keys(colors[type]);
  const randomColorKey = colorsObject[Math.floor(Math.random() * colorsObject.length)];
  let randomColor = colors[type][randomColorKey];

  if(randomColor == colors.fg.black){
    randomColor = `${colors.bg.white}${colors.fg.black}`;
  } else if(randomColor == colors.bg.black){
    randomColor = `${colors.bg.black}${colors.fg.white}`;
  }  
  
  return randomColor;
}

module.exports = {
  colors,
  randomColor
};