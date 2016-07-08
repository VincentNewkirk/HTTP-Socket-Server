function getDaGet (data) {
  var g = [];
  var data = data.toString();
  var getPos = data.search("GET");
  var y = data.search('/r/n');
  var x = data.slice(5, y);
  var z = x.search(' ');
  x = x.slice(0, x.search(' '));
  console.log(x);
  g.push(x);

  // var str = data.toString();
  // var tempArr = str.split('');
  // var resultArr = [];
  // // console.log(tempArr);
  // for(var i = 0; i < 5; i++){
  //   tempArr.shift();
  // }
  // console.log(tempArr.indexOf('H'));
  // for(var i = 0; i < (tempArr.indexOf('H') + 2); i++){
  //   resultArr.push(tempArr.shift());
  // }
  // // console.log(resultArr)
  // var resultStr = resultArr.join('');
  // console.log(resultStr);
}

module.exports = getDaGet;