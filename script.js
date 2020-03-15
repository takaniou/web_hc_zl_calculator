// 取得結果元素
var result = document.getElementById('result');
// 取得按鈕
var btns = document.getElementsByClassName('btn');
// 空值，讓存取值變成純文字，點數字會往後堆疊而不是相加
var final = "";
var equalBtn = document.getElementById('equal');

equalBtn.addEventListener('click', equal);

function equal() {
    if (final == "") {
        return;
    }
    result.innerHTML = eval(final);
    final = "";
}

for (let i = 0; i < btns.length; i++) {
    // 按鈕[編號].添加事件監聽器("點擊"，匿名函式(){函式();})
    btns[i].addEventListener('click', function () {
        // 顯示(按鈕[編號].內容)
        show(btns[i].innerHTML);
    })
}



// 函式 顯示(參數=內容)
function show(content) {
    if (final == "") {
        if (content == "0") return;
        if (content == "*") return;
        if (content == "/") return;
    }

    var last = final[final.length - 1];
    console.log(last);

    final += content;
    // 結果元素.內容 = 參數-內容
    result.innerHTML = final;
}
