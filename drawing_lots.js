let isStart = false;
let Partici = [];
let Winner = 1;
let PrizeWinner = [];

let WinnerClone = 0;
let ParticiClone = [];

function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {

    if (room == 'your room name') {

        if (msg == "!뽑기") {
            replier.reply(help());
        }

        Ready(msg, replier);

        Setting(msg, replier);

        Start(msg, replier);

        Cancel(msg, replier);

        View(msg, replier);
    }
}

function Ready(msg, replier) {
    if (msg == "!뽑기준비" && !isStart) {
        isStart = !isStart;
        Partici = [];
        Winner = 1;
        PrizeWinner = [];
        replier.reply("뽑기가 준비중 입니다.\n참가자를 등록하고 당첨자 수를 정해주세요.");
    } else if (msg == "!뽑기준비" && isStart) {
        replier.reply("뽑기가 이미 준비중입니다.");
    }
}

function Setting(msg, replier) {
    if (isStart){
        if (msg.startsWith("!뽑기참가 ") && isStart) {
            let Par = msg.substr(6);
            Partici.push(Par);
            ParticiClone = Partici;
            replier.reply(Par + "님이 등록 되었습니다.");
        }

        if (msg.startsWith("!뽑기당첨자수 ")) {
            Winner = Number(msg.substr(8));
            WinnerClone = Winner;
            replier.reply("당첨자 수가 " + Winner + "명으로 설정 되었습니다.");
        }
    }
}

function Start(msg, replier) {
    if (msg == "!뽑기시작" && isStart) {
        if (Partici.length < 2) {
            replier.reply("참가자 수가 최소 2명 이상은 있어야 합니다.");
        } else if (Partici.length <= Winner) {
            replier.reply("당첨자 수는 참가자 수 보다 크거나 같을 수 없습니다.");
        } else if (Winner <= 0) {
            replier.reply("당첨자 수가 최소 1명 이상은 있어야 합니다.");
        } else {

            for (Winner; Winner > 0; Winner--) {
                let Pick = Math.floor(Math.random() * Partici.length);
                PrizeWinner.push(Partici[Pick]);
                Partici.splice(Pick, 1);
            }

            replier.reply(PrizeWinner + "님이 당첨되었습니다!");
            isStart = !isStart;
            Partici = [];
        }
    } else if (msg == "!뽑기시작" && !isStart) {
        replier.reply("준비 되어있는 뽑기가 없습니다.");
    }
}

function Cancel(msg, replier) {
    if (msg == "!뽑기취소" && isStart) {
        isStart = !isStart;
        replier.reply("진행중인 뽑기가 취소되었습니다.");
    } else if (msg == "!뽑기취소" && !isStart) {
        replier.reply("진행중인 뽑기가 없습니다.");
    }
}

function View(msg, replier) {
    if (msg == "!당첨자수 보기" && isStart) {
        replier.reply("당첨자 수\n" + WinnerClone + "명");
    } else if (msg == "!당첨자 보기") {

        if (PrizeWinner.length <= 0) {
            replier.reply("이번 뽑기의 당첨자가 없습니다.");
        } else {
            replier.reply("이전 뽑기 당첨자 "+ PrizeWinner.length +"명\n"+ PrizeWinner);
        }

    } else if (msg == "!낙첨자 보기") {

        if (ParticiClone.length <= 0) {
            replier.reply("낙첨자가 없습니다.");
        } else {
            replier.reply("이전 뽑기 낙첨자 " + ParticiClone.length + "명\n" + ParticiClone);
        }

    } else if (msg == "!참가자 보기") {

        if (Partici.length <= 0) {
            replier.reply("참가자가 없습니다.");
        } else {
            replier.reply("참가자 " + Partici.length + "명\n" + Partici);
        }

    } else if (msg == ">여부") {
        replier.reply("isStart = " + isStart);
    }
}

function help(){
    let msg = '뽑기 관련 명령어​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​\n\n';
    const help = [
        '!뽑기준비 - 뽑기를 준비합니다.',
        '!뽑기참가 (이름) - 뽑기에 참가시킵니다.',
        '!뽑기당첨자수 (숫자) - 당첨자 수를 정합니다.',
        '!뽑기시작 - 뽑기를 뽑습니다.',
        '!뽑기취소 - 뽑기를 취소합니다.',
        '',
        '!참가자 보기 - 현재 뽑기에 등록된 참가자를 봅니다.',
        '!당첨자수 보기 - 현재 뽑기에 당첨자 수를 봅니다.',
        '!당첨자 보기 - 이전 뽑기의 당첨자를 봅니다.',
        '!낙첨자 보기 - 이전 뽑기의 낙첨자를 봅니다.'
    ];

    msg += help.join('\n');

    return msg;
}