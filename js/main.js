'use strict';

{
    const btn = document.getElementById('btn');

    btn.addEventListener('click', () => {
        const n = Math.random();
        // const results = ['大吉', '中吉', '凶', '末吉'];
        // const results = ['大吉', '大吉', '大吉', '大吉', '凶'];  配列を書き換える方法
        // btn.textContent = results[Math.floor(Math.random() * results.length)];
        if (n < 0.05) {
            btn.textContent = '大吉'; // 5%
        } else if (n < 0.2) {
            btn.textContent = '中吉'; // 15%
        } else {
            btn.textContent = '凶'; // 80%
        }
    });
}