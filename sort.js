const fruits = [
  "apple",
  "bannana",
  "apple",
  "orange",
  "bannana",
  "kiwi",
  "grapes",
  "grapes",
  "apple",
];

const uniqueFruits = [];
const stocks = [];

// Aaa loop aakha fruits ma fare che
for (let i = 0; i < fruits.length; i++) {
  //  include matlab current fruit unique vala arr ma humna nathi atle false starting ma
  let include = false;
  // starting ma obj jema fruit nu naam ne stock 0 set kairu che
  let fruit = { fruit: fruits[i], stock: 0 };

  // aa loop aakha unique fruits vala array ma fare che
  for (let j = 0; j < uniqueFruits.length; j++) {
    //   jov chu ke current fruit su unique fruits ma che ?
    if (fruits[i] === uniqueFruits[j]) {
      // agar aaiya chu matlab ke aa fruit unique ma che j already atle include ne true set kar didhu
      include = true;
    }
  }
  // aa loop aakha fruits ma fare che
  for (let j = 0; j < fruits.length; j++) {
    //   jov chu aa fruit fruits na array ma ketli vaar aave che
    if (fruits[i] === fruits[j]) {
      // aaiya aaivo matlab aa fruit reapet thayo che to stock vadharu chu ek thi
      fruit.stock += 1;
    }
  }
  // jov chu ke fruit already che to ni ne unique vala array ma
  if (!include) {
    //   aaya chu matlab unique fruit ma aa fruit ni hat atle add kari dev chu
    uniqueFruits.push(fruits[i]);
    // stocks vala array ma fruit valu obj jema stock increment kare lu a nakhu chu
    stocks.push(fruit);
  }
}
console.log("Unique Fruits: ", uniqueFruits);
console.log("Stocks: ", stocks);
