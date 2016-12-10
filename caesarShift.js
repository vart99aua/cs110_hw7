const letters = /^[a-zA-Z\s]+$/;

const caesarShift = function (string,number) {

    let caesarShiftString = '';
    for( let i = 0; i<string.length; i++){


        if(string[i].charCodeAt() == 32){
            caesarShiftString += ' ';
        } else{
            if(string[i] == string[i].toLowerCase()){
                var checkLower = true;
            } else  {
                var checkLower = false;
            }

            let letterToNumber = string[i].toLowerCase().charCodeAt() -96;   //97-1
            letterToNumber += number;
            if(letterToNumber > 26){
                letterToNumber %= 26;

            }
            if(checkLower) {
                caesarShiftString += String.fromCharCode(96 + letterToNumber);
            } else{
                caesarShiftString += String.fromCharCode(96 + letterToNumber).toUpperCase();
            }
        }

    }


    return caesarShiftString;


};

$('button').click(function () {
    let MyString = $('#caesarShiftString').val();
    let MyNumber = parseInt($('#caesarShiftNumber').val());
    if(letters.test(MyString)) {
        alert(caesarShift(MyString,MyNumber));
        $('#caesarShiftString').val('');
        $('#caesarShiftNumber').val('')
    } else {
        alert('Enter only string');
        return;
    }
})