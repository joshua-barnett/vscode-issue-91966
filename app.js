const process = require('process');
const util = require('util');

const sleep = util.promisify(setTimeout);

let done = false;

async function main() {
    debugger;
    console.log(Date.now());
    if (!done) {
        await sleep(1000);
        await main();
    }
    return 0;
}

main().then(code => process.exit(code));
