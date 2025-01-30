const { colors } = require("../song/colors");

const sessions = [];
const processes = [];

class SessionManager {
    constructor(res){
        this.res = res;
        this.busy = false;
        this.id = (Math.floor(Math.random() * ((10 ** 16 - 1) - (10 ** 15) + 1)) + (10 ** 15)) + sessions.length;
        sessions.push(this.id);
    }

    getId(){ return this.id };
    getRes(){ return this.res };
    isBusy(){ return this.busy };

    addProcess(process){
        processes.push({
            id: this.id,
            p: process
        });
    }

    disconnect(){
        this.busy = true;
        
        for (const process of processes) {
            if(process.id == this.id){
                clearTimeout(process.p);
            }
        }
        
        this.res.write(`${colors.reset}`);
        this.res.end();
    }
}

module.exports = SessionManager;