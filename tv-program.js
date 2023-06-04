let data = {
  "list": {
    "g1": [
      {
        "id": "2022030428673",
        "event_id": "28673",
        "start_time": "2022-03-04T04:35:00+09:00",
        "end_time": "2022-03-04T04:40:00+09:00",
        "area": {
          "id": "130",
          "name": "東京"
        },
        "service": {
          "id": "g1",
          "name": "ＮＨＫ総合１",
          "logo_s": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-100x50.png",
            "width": "100",
            "height": "50"
          },
          "logo_m": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x100.png",
            "width": "200",
            "height": "100"
          },
          "logo_l": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x200.png",
            "width": "200",
            "height": "200"
          }
        },
        "title": "みんなのうた「ごっつぉさま」／「超変身！ミネラルフォーマーズ」",
        "subtitle": "「ごっつぉさま」うた：須貝智郎／「超変身！ミネラルフォーマーズ」うた：鬼龍院翔ｆｒｏｍゴールデンボンバー",
        "content": "「ごっつぉさま」うた：須貝智郎／「超変身！ミネラルフォーマーズ」うた：鬼龍院翔ｆｒｏｍゴールデンボンバー",
        "act": "",
        "genres": [
          "0409",
          "0700",
          "0504"
        ]
      },
      {
        "id": "2022030427069",
        "event_id": "27069",
        "start_time": "2022-03-04T23:05:00+09:00",
        "end_time": "2022-03-04T23:10:00+09:00",
        "area": {
          "id": "130",
          "name": "東京"
        },
        "service": {
          "id": "g1",
          "name": "ＮＨＫ総合１",
          "logo_s": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-100x50.png",
            "width": "100",
            "height": "50"
          },
          "logo_m": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x100.png",
            "width": "200",
            "height": "100"
          },
          "logo_l": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x200.png",
            "width": "200",
            "height": "200"
          }
        },
        "title": "パラスポーツ×アニメ「アニ×パラ」▽パラアルペンスキーテーマ曲江口寿史×ＡＣＣ",
        "subtitle": "パラスポーツの魅力をアニメで伝える番組。高速滑走に挑む精神力が試されるパラアルペンスキーを描く。キャラ原案：江口寿史／曲：Ａｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂ",
        "content": "パラスポーツの魅力をアニメで伝えるプロジェクトの第１３弾。圧倒的なスピードに挑む「パラアルペンスキー」の世界を江口寿史原案の魅力的なキャラクターで描く。平昌パラリンピック金メダリストの村岡桃佳選手への取材から生まれた主人公・桃は、スピードへの恐怖を克服していく。その壁を越えた先にあるものとは…　テーマ曲　♪「Ｏｎ　Ｙｏｕｒ　Ｍａｒｋ」はＡｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂが手掛けた。",
        "act": "【声】松本まりか，【出演】Ａｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂ，【監督】西村一彦，【脚本】加納新太，【原案】江口寿史",
        "genres": [
          "0700"
        ]
      }
    ]
  }
};

/////////////////// 課題3-2 はここから書き始めよう

let b = document.querySelector('#btn');
b.addEventListener('click', sendRequest);

function sendRequest() {
	let w = document.querySelectorAll('li'); 
  for(let i of w){
    i.remove();
  } 
  w = document.querySelectorAll('h1'); 
  for(let i of w){
    i.remove();
  } 
  let s;
  let g;
  let url
  for(let i of data.list.g1){
    s =i.service.id;//g1かe1を取得
    for(let j of i.genres){
      g=j;//0000とか取り出す
    }
    url ='https://www.nishita-lab.org/web-contents/jsons/nhk/'+s+'-'+g+'-j.json';
    console.log(url);
  }
  

	// 通信開始
	axios.get(url)
		.then(showResult)//通信成功
		.catch(showError)//通信失敗
		.then(finish);//通信の最後の処理(成功しても失敗しても)
}

function showResult(resp) {
	// サーバから送られてきたデータを出力
	let data = resp.data;

	// data が文字列型なら，オブジェクトに変換する
	if (typeof data === 'string') {
		data = JSON.parse(data);
	}
  console.log(data);

  //ここからがんばって検索結果を表示
  let rs = document.querySelectorAll('input[name="service"]');
  let serkey;
  for(let i of data.list.g1){
    for (let r of rs) {
      if (r.checked) {
        serkey=r.value;
      }  
    }
    if(serkey===i.service.id){
      let cs = document.querySelectorAll('input[name="genre"]');
      let cnt=0;
      for(let c of cs){
        if(c.checked){
          console.log("入力:"+c.value);
          for(let m of i.genres){
            if(c.value===m){
              cnt++;
              console.log("title:"+i.title);
              
              console.log("ジャンル:"+i.genres)
            } 
          }
          //cnt = 0;
        }
        
      }console.log(cnt);
      if(cnt>0){
        let str=i.start_time;
        let end=i.end_time;
        let sena=i.service.name;
        let ti=i.title;
        let subti=i.subtitle;
        let con=i.content;
        let act=i.act;
        
        let ul = document.createElement('ul');
        let pti = document.querySelector('p#tit');
        let h1 = document.createElement('h1');
        
        let li = document.createElement('li');
        
        h1.textContent=ti;
        pti.insertAdjacentElement('beforeend',h1);
        pti.insertAdjacentElement('beforeend',ul);
        li.textContent="開始時刻:"+str;
        ul.insertAdjacentElement('beforeend',li);
        li=document.createElement('li');
        li.textContent='終了時刻:'+end;
        ul.insertAdjacentElement('beforeend',li);
        li=document.createElement('li');
        li.textContent='チャンネル:'+sena;
        ul.insertAdjacentElement('beforeend',li);
        li=document.createElement('li');
        li.textContent='番組名:'+ti;
        ul.insertAdjacentElement('beforeend',li);
        li=document.createElement('li');
        li.textContent='番組サブタイトル:'+subti;
        ul.insertAdjacentElement('beforeend',li);
        li=document.createElement('li');
        li.textContent='番組説明:'+con;
        ul.insertAdjacentElement('beforeend',li);
        li=document.createElement('li');
        li.extContent='出演者:'+act;
        ul.insertAdjacentElement('beforeend',li);
      }
    }
  }
}
  
  
function showError(err) {
	console.log(err);
}
function finish() {
	console.log('Ajax 通信が終わりました');
}
