// 入力された文字を取得する関数
function inputText() {
    return $(".inputText").val();
}

// 1行目に文字を表示する関数
function showText1(message) {
    $(".showText1").text(message);
}

// 2行目に文字を表示する関数
function showText2(message) {
    $(".showText2").text(message);
}

// 3行目に文字を表示する関数
function showText3(message) {
    $(".showText3").text(message);
}

// 4行目に文字を表示する関数
function showText4(message) {
    $(".showText4").text(message);
}

function showText5(message) {
    $(".showText5").text(message);
}




// サーバーと通信する関数
function sendRequest(func) {
    $.ajax({
        url: deployURL,
        type: "GET",
        dataType: "json",

        // 通信に成功した時に実行
        success: function (all) {
            var list = all.list;
            func(list)
        }
    });
}
