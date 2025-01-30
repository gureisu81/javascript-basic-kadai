const today = new Date();
const [month, day, year] = [
    today.getMonth() + 1,  // 月は0から始まるので、+1をします
    today.getDate(),
    today.getFullYear(),
];

console.log(`${year}年${month}月${day}日`);
