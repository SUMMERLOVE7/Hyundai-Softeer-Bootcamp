const readline = require('readline');
const inputValidate = require('./validate');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));

const input = async () => {
  let query = '';

  try {
    query = await prompt('명령 하세요 : ');

    if (query === '0') throw '종료 되었습니다.';
    else if (!inputValidate(query)) throw '[ERROR] 입력값이 올바르지 않습니다.\n';
  } catch (e) {
    console.log(e);

    if (e === '종료 되었습니다.') {
      rl.close();
      process.exit(0);
    } else {
      return query;
    }
  }

  query = query.split('$').map((str) => str);

  return query;
};

module.exports = input;