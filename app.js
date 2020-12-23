const discord = require('discord.js')
const client = new discord.Client()
function roll(roll_amount, dice_type, modifier){
    switch(dice_type){
        case 'D8'.Trim().toLowerCase():
            dice_type = 8
        case 'D6'.Trim().toLowerCase():
            dice_type = 6
        case 'D4'.Trim().toLowerCase():
            dice_type = 4
        case 'D20'.trim().toLowerCase():
            dice_type = 20
        case 'D16'.trim().toLowerCase():
            dice_type=16
    
    return roll_amount * dice_type + modifier;

    }
}

