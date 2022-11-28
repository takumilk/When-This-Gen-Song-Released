// ボタンで動く関数
function clickButton() {
  // サーバーと通信する
  sendRequest(onRequest)
}

// サーバーと通信できたときに動く関数
function onRequest(list) {
  // i < xのとき、xの数だけ繰り返す
  for (var i = 0; i < 24; i++) {
    // もし、入力した文字とリスト上のパンの名前が一致したら
    if (inputText() == list[i]["name"]) {

      // 1行目にname列の情報を表示する
      showText1(list[i]["name"]);

      // 2行目にtime列の情報を表示する
      showText2(list[i]["album"]);

      // 3行目にprice列の情報を表示する
      showText3(list[i]["bpm"] );

      // 4行目にpoint列の情報を表示する
      showText4(list[i]["long"]);

　　　 // 4行目にpoint列の情報を表示する
      showText5(list[i]["release"]);



      // パンのデータを表示したら繰り返しを止める
      break;
    }

    // それ以外の場合
    else {
      // 1行目に表示する
      showText1("入力した文字を確認してね");

      // 2行目に表示する
      showText2("?");

      // 3行目に表示する
      showText3("?");

      // 4行目に表示する
      showText4("?");

     // 5行目に表示する
      showText5("?");

    }
  }
}