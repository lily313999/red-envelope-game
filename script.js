// script.js

// 定義所有紅包的ID
const envelopes = [
    'envelope1', 'envelope2', 'envelope3',
    'envelope4', 'envelope5', 'envelope6',
    'envelope7', 'envelope8', 'envelope9'
];

// 預設的隨機紅包內容
const rewards = [
    'reward1.png', 'reward2.png', 'reward3.png',
    'reward4.png', 'reward5.png', 'reward6.png',
    'reward7.png', 'reward8.png', 'reward9.png',
    'reward10.png', 'reward11.png'
];

// 特定暱稱的紅包內容（固定的圖片）
const specialRewards = [
    'special1.png', 'special2.png', 'special3.png',
    'special4.png', 'special5.png', 'special6.png',
    'special7.png', 'special8.png', 'special9.png'
];

// 定義紅包的HTML元素
const gameArea = document.getElementById('gameArea');
const resetButton = document.getElementById('resetButton');
const greetingMessage = document.getElementById('greetingMessage');
const nicknameSection = document.getElementById('nicknameSection');
const startButton = document.getElementById('startButton');
const greeting = document.getElementById('greeting');

// 設定紅包內容的變數
let currentRewards = [];

// 設定紅包點擊事件
function setupEnvelopes() {
    envelopes.forEach((id, index) => {
        const envelope = document.getElementById(id);

        envelope.addEventListener('click', () => {
            if (!envelope.classList.contains('opened')) {
                envelope.classList.add('opened');

                // 在紅包內插入圖片
                const imgElement = document.createElement('img');
                imgElement.src = currentRewards[index]; // 設定圖片來源
                imgElement.alt = '紅包內容';

                // 把圖片加入到紅包內
                envelope.appendChild(imgElement);
            }
        });
    });
}

// 隨機洗牌紅包內容
function shuffleRewards() {
    currentRewards = rewards.sort(() => Math.random() - 0.5); // 隨機排列紅包內容
}

// 顯示特定的紅包內容
function setSpecialRewards() {
    currentRewards = [...specialRewards]; // 設定為特定的圖片
}

// 處理暱稱輸入及顯示祝福
startButton.addEventListener('click', () => {
    const nickname = document.getElementById('nickname').value.trim();

    if (nickname) {
        // 隱藏暱稱輸入欄位，顯示祝福語句
        nicknameSection.style.display = 'none';
        greetingMessage.textContent = `祝福 ${nickname} 新年好運到，這是你的幸運紅包，快來抽獎吧！`;
        greeting.style.display = 'block';

        // 顯示遊戲區域
        gameArea.style.display = 'block';

        // 檢查是否是特定的暱稱
        if (nickname === '喵喵') {
            setSpecialRewards(); // 設置固定的紅包內容
        } else {
            shuffleRewards(); // 隨機洗牌紅包內容
        }

        // 初始化並顯示紅包
        setupEnvelopes();

        // 顯示再抽一次按鈕
        resetButton.style.display = 'inline-block';
    } else {
        alert('請輸入暱稱！');
    }
});

// 再抽一次功能
resetButton.addEventListener('click', () => {
    // 清除已開啟的紅包
    envelopes.forEach((id) => {
        const envelope = document.getElementById(id);
        envelope.classList.remove('opened');
        envelope.innerHTML = ''; // 清空紅包內容
    });

    // 重新顯示紅包內容
    if (greetingMessage.textContent.includes("喵喵")) {
        setSpecialRewards(); // 如果是喵喵，則使用固定的紅包內容
    } else {
        shuffleRewards(); // 否則隨機洗牌
    }
    
    // 重新設置紅包
    setupEnvelopes();
});
