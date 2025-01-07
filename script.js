// script.js

// 這裡定義所有紅包的ID
const envelopes = [
    'envelope1', 'envelope2', 'envelope3',
    'envelope4', 'envelope5', 'envelope6',
    'envelope7', 'envelope8', 'envelope9'
];

// 隨機生成紅包內容，這裡用圖片示例
const rewards = [
    'reward1.png', 'reward2.png', 'reward3.png', 
    'reward4.png', 'reward5.png', 'reward6.png', 
    'reward7.png', 'reward8.png', 'reward9.png'
];

// 用來隨機打亂紅包內容
const shuffledRewards = rewards.sort(() => Math.random() - 0.5);

// 設定紅包點擊事件
envelopes.forEach((id, index) => {
    const envelope = document.getElementById(id);

    envelope.addEventListener('click', () => {
        if (!envelope.classList.contains('opened')) {
            envelope.classList.add('opened');
            // 顯示隨機圖片
            envelope.style.backgroundImage = `url(${shuffledRewards[index]})`;
        }
    });
});
