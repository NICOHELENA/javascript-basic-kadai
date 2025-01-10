// ボタン要素を取得
const btn = document.getElementById('btn');
// h2要素を取得
const text = document.getElementById('text');

// ボタンがクリックされたときの処理を設定
btn.addEventListener('click', () => {
  // 2秒後にh2要素のテキストを書き換える
  setTimeout(() => {
    text.innerText = 'ボタンをクリックしました！';
  }, 2000); // 
});
