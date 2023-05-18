//// 注意: 以下は編集しないこと!
let data = [
	{name:'札幌', lat:43.06417, lng:141.34694},
	{name:'仙台', lat:38.26889, lng:140.87194},
	{name:'新宿', lat:35.68944, lng:139.69167},
	{name:'名古屋', lat:35.18028, lng:136.90667},
	{name:'大阪', lat:34.68639, lng:135.52},
	{name:'広島', lat:34.39639, lng:132.45944},
	{name:'高知', lat:33.55972, lng:133.53111},
	{name:'福岡', lat:33.60639, lng:130.41806},
	{name:'鹿児島', lat:31.56028, lng:130.55806},
	{name:'沖縄', lat:26.2125, lng:127.68111}
];
//// 注意: 以上は編集しないこと!

// 練習4-2 メッセージ追加プログラム
let y = document.querySelector('h2#ex42'); 
let p = document.createElement('p');
p.textContent='写真表と年の緯度軽度のページです'; 
p.setAttribute('style','text-emphasis:sesame green;');
y.insertAdjacentElement('beforeend',p); 
// 練習4-3 写真表作成プログラム
let div = document.querySelector('div#phototable');
p = document.createElement('p'); 
let img = document.createElement('img'); 
img.setAttribute('src','taro.png'); 
p.insertAdjacentElement('beforeend',img); 
div.insertAdjacentElement('beforeend',p); 

p = document.createElement('p'); 
img = document.createElement('img'); 
img.setAttribute('src','jiro.png'); 
p.insertAdjacentElement('beforeend',img); 
div.insertAdjacentElement('beforeend',p); 

p = document.createElement('p'); 
img = document.createElement('img'); 
img.setAttribute('src','hanako.png'); 
p.insertAdjacentElement('beforeend',img); 
div.insertAdjacentElement('beforeend',p); 

// 練習4-4 箇条書き削除プログラム
let w = document.querySelectorAll('li'); 
for(let i of w){
	i.remove();
} 

// 練習4-5 箇条書き追加プログラム
let ul = document.querySelector('ul#location');
let li = document.createElement('li') ;
let nam; 
let lat;
let lng;
for(let i=0;i<data.length;i++){
  for(let j of data[i].name){
    nam = data[i].name;
	lat = data[i].lat;
	lng = data[i].lng;
  }
	li.textContent = nam+' ... 緯度:'+lat+', 経度:'+lng;
	ul.insertAdjacentElement('beforeend',li);
	li = document.createElement('li') ;
}