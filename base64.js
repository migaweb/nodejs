
/* 
    Gets a string from arguments or by input and converts it to base64.
    Converted string is copied to the clipboard (win).
*/
const readline = require('readline');

let args = process.argv.slice(2);
let stringToEncode = '';
if (args.length <= 0) {
    const read1 = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    read1.question('Enter a string: ', (answer) => {
        stringToEncode = answer;
        convertStringToBase64(stringToEncode);
        read1.close();
    });
}
else {
    stringToEncode = args[0];
    convertStringToBase64(stringToEncode);
}

function convertStringToBase64(stringToEncode) {
    let buff = Buffer.from(stringToEncode);
        let base64data = buff.toString('base64');
        require('child_process').spawn('clip').stdin.end(base64data);
        console.log('"' + stringToEncode + '" converted to Base64 is "' + base64data + '"');
}

