// ボタン要素を取得
const button = document.getElementById('btn');

// ボタンがクリックされたときの処理を設定
button.addEventListener('click', () => {
// h2要素のテキストを変更
const textElement = document.getElementById('text');
textElement.innerText = 'ボタンをクリックしました';
});