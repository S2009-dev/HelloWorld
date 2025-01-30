const { colors } = require("./colors");

const lyrics = [
    {
        text: `${colors.fg.magenta}package ${colors.fg.white}it.nanowar.ofsteel.helloworld;`,
        start: 29190,
        end: 33920
    },
    {
        text: ` `,
        start: 34000,
        end: 34001
    },
    {
        text: `${colors.fg.magenta}public class ${colors.fg.white}HelloWorldMainLauncherClass {`,
        start: 38650,
        end: 43260
    },
    {
        text: ` `,
        start: 44000,
        end: 44001
    },
    {
        text: `    ${colors.fg.magenta}public ${colors.fg.white}HelloWorldMainLauncherClass(${colors.fg.magenta}int ${colors.fg.white}foo) {`,
        start: 48340,
        end: 52500
    },
    {
        text: ` `,
        start: 52600,
        end: 52601
    },
    {
        text: `        ${colors.fg.magenta}super${colors.fg.white}();`,
        start: 52960,
        end: 53760
    },
    {
        text: `        ${colors.fg.magenta}this${colors.fg.white}.${colors.fg.magenta}foo${colors.fg.white}=foo;`,
        start: 53880,
        end: 55730
    },
    {
        text: `    }`,
        start: 55840,
        end: 57460
    },
    {
        text: ` `,
        start: 57500,
        end: 57501
    },
    {
        text: `    ${colors.fg.magenta}private ${colors.fg.white}Integer ${colors.fg.gray}foo${colors.fg.white}=0;`,
        start: 58030,
        end: 62420
    },
    {
        text: ` `,
        start: 62500,
        end: 62501
    },
    {
        text: `    ${colors.fg.magenta}public void ${colors.fg.white}songRefrain() {`,
        start: 62760,
        end: 66570
    },
    {
        text: ` `,
        start: 66600,
        end: 66601
    },
    {
        text: `        ${colors.fg.magenta}for ${colors.fg.white}(${colors.fg.magenta}int ${colors.fg.gray}i${colors.fg.white}=0; i<foo; i++) {`,
        start: 67030,
        end: 70840
    },
    {
        text: `            System.${colors.fg.magenta}out${colors.fg.white}.println(${colors.fg.blue}"Hello World!"${colors.fg.white});`,
        start: 70960,
        end: 74420
    },
    {
        text: ` `,
        start: 74500,
        end: 74501
    },
    {
        text: `        }`,
        start: 74650,
        end: 75460
    },
    {
        text: ` `,
        start: 75500,
        end: 75501
    },
    {
        text: `        ${colors.fg.magenta}int ${colors.fg.gray}pippo${colors.fg.white}=0;`,
        start: 76610,
        end: 78460
    },
    {
        text: `        ${colors.fg.magenta}while ${colors.fg.white}(pippo<foo) {`,
        start: 78570,
        end: 80190
    },
    {
        text: `            System.${colors.fg.magenta}out${colors.fg.white}.println(${colors.fg.blue}"Hello World!"${colors.fg.white});`,
        start: 80300,
        end: 83760
    },
    {
        text: `            pippo++;`,
        start: 84000,
        end: 84920
    },
    {
        text: `        }`,
        start: 85030,
        end: 85500
    },
    {
        text: `    }`,
        start: 85610,
        end: 86190
    },
    {
        text: ` `,
        start: 90000,
        end: 90001
    },
    {
        text: `    ${colors.fg.magenta}public static void ${colors.fg.white}main (String ${colors.fg.gray}[] args${colors.fg.white}) {`,
        start: 95070,
        end: 99800
    },
    {
        text: `        System.${colors.fg.magenta}out${colors.fg.white}.println(${colors.fg.blue}"Hello World Programmer Start"${colors.fg.white});`,
        start: 104420,
        end: 109260
    },
    {
        text: `        HelloWorldMainLauncherClass ${colors.fg.gray}tizio ${colors.fg.white}= ${colors.fg.magenta}new ${colors.fg.white}HelloWorldMainLauncherClass(2);`,
        start: 114460,
        end: 122650
    },
    {
        text: `        tizio.songRefrain();`,
        start: 123920,
        end: 127960
    },
    {
        text: `        System.${colors.fg.magenta}out${colors.fg.white}.println(${colors.fg.blue}"Program Finished!"${colors.fg.white});`,
        start: 128190,
        end: 131070
    },
    {
        text: `        tizio.falseMethod();`,
        start: 131190,
        end: 131760
    },
    {
        text: `    }`,
        start: 131880,
        end: 132570
    },
    {
        text: ` `,
        start: 140000,
        end: 140001
    },
    {
        text: `    ${colors.fg.green}/*`,
        start: 150000,
        end: 150002
    },
    {
        text: `    ${colors.fg.green}* If I may introduce a bug, the JVM will manage it for me`,
        start: 151840,
        end: 159000
    },
    {
        text: `    ${colors.fg.green}* ensuring both security and portability`,
        start: 159230,
        end: 167300
    },
    {
        text: `    ${colors.fg.green}* Then I'll write my code once, and run it everywhere!`,
        start: 167530,
        end: 175380
    },
    {
        text: `    ${colors.fg.green}* With Static and Strong Typing, will let my programs be type safe!`,
        start: 175610,
        end: 184610
    },
    {
        text: `    ${colors.fg.green}*/`,
        start: 185000,
        end: 185002
    },
    {
        text: `    ${colors.fg.magenta}public void ${colors.fg.white}falseMethod() {`,
        start: 206880,
        end: 210460
    },
    {
        text: `        ${colors.fg.magenta}boolean ${colors.fg.gray}metal${colors.fg.white}=${colors.fg.magenta}false${colors.fg.white};`,
        start: 211840,
        end: 215530
    },
    {
        text: `        ${colors.fg.magenta}if${colors.fg.white}(metal==${colors.fg.magenta}false${colors.fg.white}) {`,
        start: 215760,
        end: 219690
    },
    {
        text: `            String ${colors.fg.gray}joeyDeCaio${colors.fg.white}=${colors.fg.magenta}null${colors.fg.white};`,
        start: 224530,
        end: 228920
    },
    {
        text: `            joeyDeCaio.length();`,
        start: 230760,
        end: 233070
    },
    {
        text: `        }`,
        start: 233100,
        end: 233200
    },
    {
        text: `    }`,
        start: 233300,
        end: 233400
    },
    {
        text: `}`,
        start: 233500,
        end: 233600
    }
]

const null_error = [
    {
        text: `    ${colors.fg.brightRed}Exception in thread "main" java.lang.NullPointerException`,
        start: 233760,
        end: 234760
    },
    {
        text: `        ${colors.fg.red}at HelloWorldMainLauncherClass.falseMethod(HelloWorldMainLauncherClass.java:46)`,
        start: 234760,
        end: 235760
    },
    {
        text: `        ${colors.fg.red}at HelloWorldMainLauncherClass.main(HelloWorldMainLauncherClass.java:32)`,
        start: 235760,
        end: 236000
    }
]

function writeLine(session, prefix, line){
    const res = session.getRes();
    const totalTime = line.end - line.start;
    const startTime = Date.now();
    const initialIntervalTime = Math.floor(totalTime / line.text.length);

    let index = 0;
    let chars = '';

    if(session.isBusy()) return;

    function writeChar() {
        if(session.isBusy()) return;

        if (index < line.text.length) {
            let char = line.text[index];
            let nextChar = line.text[index + 1];

            res.write(`\n${colors.remove}`);
            if (char === '\x1b' && nextChar === '[') {
                const endIndex = line.text.indexOf("m", index) + 1;
                const char = line.text.substring(index, endIndex);

                index = endIndex;
                chars += char;
                res.write(`${prefix}${chars}${colors.reset}`);
                writeChar();
            } else if (char === ' ') {
                index++;
                chars += char;
                res.write(`${prefix}${chars}${colors.reset}`);
                writeChar();
            } else {
                index++;
                chars += char;
                res.write(`${prefix}${chars}${colors.reset}`);
                const remainingChars = line.text.length - index;
                const elapsedTime = Date.now() - startTime;
                const remainingTime = totalTime - elapsedTime;

                if(remainingChars != 0){
                    const intervalTime = Math.floor(remainingTime / remainingChars);
                    const process = setTimeout(writeChar, intervalTime);
                    session.addProcess(process);
                } else {
                    writeChar();
                }
            }
        } else {
            res.write('\n');
        }
    }

    res.write(`${prefix}${line.text[0]}${colors.reset}`);

    const process = setTimeout(writeChar, initialIntervalTime);
    session.addProcess(process);
}

function end(session) {
    const { showCredits } = require("../server/logger");
    
    if(session.isBusy()) return;

    writeLine(session, '', null_error[0]);

    setTimeout(() => {
        writeLine(session, '', null_error[1]);
    }, 1000);

    setTimeout(() => {
        writeLine(session, '', null_error[2]);
    }, 2000);

    setTimeout(() => {
        showCredits(session);
    }, 3000);
}

function start(session){
    const res = session.getRes();

    let line_to_check = 0;
    let elapsedTime = 0;
    let delay = lyrics[line_to_check].start - elapsedTime;

    if(session.isBusy()) return;

    res.write(`${colors.fg.gray}[INTRO]${colors.reset}\n`);

    function showLyrics() {
        if(session.isBusy()) return;

        let num;

        if (line_to_check + 1 < 10) {
            num = ` ${line_to_check + 1}`;
        } else {
            num = line_to_check + 1;
        }

        writeLine(session, `${colors.fg.gray}${num}    ${colors.fg.white}`, lyrics[line_to_check]);
        line_to_check++;

        if(line_to_check >= lyrics.length) return end(session);

        elapsedTime += delay;
        delay = lyrics[line_to_check].start - elapsedTime;
        if (delay > 0) {
            const process = setTimeout(showLyrics, delay);
            session.addProcess(process);
        }
    }

    const process = setTimeout(showLyrics, delay);
    session.addProcess(process);
}

module.exports = {
    start
}