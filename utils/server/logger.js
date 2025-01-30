const { colors, randomColor } = require("../song/colors");
const { start } = require("../song/lyrics");

function ready(){
    console.log(`${colors.bg.brightGreen}${colors.fg.black}Server is online !${colors.reset}`)
}

function showError(session, e){
    const res = session.res || session;

    console.error(`${colors.bg.red}${colors.fg.black}An error occured: ${e.message}${colors.reset}`);
    console.error(e);

    if(res.writable){
        res.write(`${colors.bg.red}${colors.fg.white}Sorry, a server error occured${colors.reset}\n`);
        res.write(`${colors.fg.brightRed}Please contact S2009 if the problem persists${colors.reset}\n`);
        res.write(`${colors.fg.gray}https://s2009.fr/${colors.reset}\n`);
    }

    if(session.id){
        session.disconnect();
    } else {
        res.end();
    }
}

function showSoon(session, releaseDate){
    const res = session.getRes();

    if(session.isBusy()) return;

    const msg = `
    ________  ________  ________  ________
   |\\   ____\\|\\   __  \\|\\   __  \\|\\   ___  \\
   \\ \\  \\___|\\ \\  \\|\\  \\ \\  \\|\\  \\ \\  \\\\ \\  \\
    \\ \\_____  \\ \\  \\\\\\  \\ \\  \\\\\\  \\ \\  \\\\ \\  \\
     \\|____|\\  \\ \\  \\\\\\  \\ \\  \\\\\\  \\ \\  \\\\ \\  \\
       ____\\_\\  \\ \\_______\\ \\_______\\ \\__\\\\ \\__\\
      |\\_________\\|_______|\\|_______|\\|__| \\|__|
      \\|_________|
   `;
   
   res.write(`${colors.clear}`);
   res.write(`${randomColor()}${msg}${colors.reset}`);

   if(releaseDate != ''){
        res.write(`${randomColor()}${releaseDate}${colors.reset}`);
   }

   const process = setTimeout(() => { showSoon(session, releaseDate) }, 500);
   session.addProcess(process);
}

function showCredits(session){
    const res = session.getRes();

    res.write(`${colors.bg.brightGreen}${colors.fg.black}CREDITS${colors.reset}\n`);
    res.write(`${colors.fg.gray}This Easter-egg was created and licensed by ${colors.fg.red}S2009${colors.fg.gray}, in collaboration with ${colors.fg.yellow}NanowarOfSteel${colors.fg.gray}.${colors.reset}\n`);
    res.write(`${colors.bg.brightRed}S2009${colors.reset} website: ${colors.fg.cyan}https://s2009.fr/${colors.reset}\n`);
    res.write(`${colors.bg.white}${colors.fg.black}GitHub${colors.reset} licenses and source code: ${colors.fg.cyan}https://github.com/${colors.reset}\n`);

    session.disconnect();
}

function welcome(session, version, delay) {
    const res = session.getRes();
    let remaining = delay;
    
    if(session.isBusy()) return;

    res.write(`${colors.bg.orange}${colors.fg.black}WARNING${colors.reset}\n`);
    res.write(`${colors.fg.orange}This content may potentially trigger seizures for people with epilepsy.${colors.reset}\n`);

    setTimeout(() => {
        if(session.isBusy()) return;

        res.write(`${colors.remove}`);
        res.write(`${colors.remove}`);
        res.write(`${colors.bg.brightGreen}${colors.fg.black}Welcome to the Nanowar Easter-egg (v${version})${colors.reset}\n`);
        res.write(`${colors.bg.yellow}${colors.fg.black}Nanowar${colors.reset} website: ${colors.fg.cyan}https://www.nanowar.it/${colors.reset}\n`);
        res.write(`${colors.bg.brightRed}YouTube${colors.reset} music video: ${colors.fg.cyan}https://www.youtube.com/watch?v=yup8gIXxWDU${colors.reset}\n`);
        res.write(`${colors.bg.white}${colors.fg.black}GitHub${colors.reset} music source code: ${colors.fg.cyan}https://github.com/NanowarOfSteel/HelloWorld${colors.reset}\n\n`);

        const interval = setInterval(() => {
            remaining--;
            if(session.isBusy()) return clearInterval(interval);
            if(remaining > 0){
                res.write(`${colors.remove}`);
                res.write(`${randomColor()}You must to play the music in ${remaining}s${colors.reset}\n`);
            } else {
                res.write(`${colors.remove}`);
                clearInterval(interval);
                start(session);
            }
        }, 1000);

        
        if(remaining > 0){
            res.write(`${randomColor()}You must to play the music in ${delay}s${colors.reset}\n`);
        } else {
            clearInterval(interval);
            start(session);
        }
    }, 3000);
}

module.exports = {
    ready,
    showError,
    showSoon,
    showCredits,
    welcome
}