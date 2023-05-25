// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 4;

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
let flag = false;
let cnt=1;
let b = document.querySelector('#kaitou');


b.addEventListener('click',hantei)




// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
    let yoso = Number(document.querySelector('input[name="yosou"]').value);
    let span = document.querySelector('span#kaisu');
    span.textContent = cnt; 
    span = document.querySelector('span#answer');
    span.textContent = yoso; 
    //console.log(cnt+"回目の予想:"+yoso);
    let i=document.querySelector('p#result');
    //let p=document.createElement('p');
    if(yoso===kotae && flag===false &&cnt<=3){
        i.textContent="正解です.おめでとう！";
        flag = true;
    }else if(yoso<kotae&&cnt<3){
        i.textContent="まちがい.答えはもっと大きいですよ";
    }else if(yoso>kotae&&cnt<3){
        i.textContent="まちがい.答えはもっと小さいですよ";
    }else if(cnt===3&&yoso!==kotae){
        i.textContent="まちがい.残念でした答えは "+kotae+"です.";
    }else if(yoso===kotae || flag===true || (cnt>3 && yoso!==kotae)){
        i.textContent="答えは "+kotae+" でした.すでにゲームは終わっています";
    }
    //i.insertAdjacentElement('deforeend',p);
    cnt=cnt+1;
  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
}