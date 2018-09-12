// touchmoveをブロックしたらそもそもスクロールできない
// document.addEventListener('touchmove', (e) => {
//   e.preventDefault();
// }, { passive: false });

// 中スクロール要素のイベントハンドル
document.querySelector('.scroll__inner').addEventListener('scroll', (e) => {
  console.log('inner scroll');
});

// documentのイベントハンドル
document.addEventListener('scroll', (e) => {
  console.log('document scroll');
  // scrollした時に発生するイベントなので当然ブロックはできない
  e.preventDefault();
}, { passive: false });
