document.addEventListener('DOMContentLoaded', () => {
    const fortunes = [
        "True wisdom comes not from knowledge, but from understanding.",
        "A journey of a thousand miles begins with a single step.",
        "The best time to plant a tree was 20 years ago. The second best time is now.",
        "Your patience will be rewarded sooner than you think.",
        "Good things come to those who wait, but better things come to those who act.",
        "A smile is your passport into the hearts of others.",
        "Every day is a new beginning. Take a deep breath and start again.",
        "The only way to do great work is to love what you do.",
        "Happiness is not something ready made. It comes from your own actions.",
        "In the middle of difficulty lies opportunity."
    ];

    const fortuneBox = document.getElementById('fortune-box');
    const fortuneText = document.getElementById('fortune-text');

    const randomIndex = Math.floor(Math.random() * fortunes.length);
    fortuneText.textContent = fortunes[randomIndex];

    function applyTheme(fontColor, bgColor, borderColor, fontSize, fontFamily) {
        fortuneText.style.color = fontColor;
        fortuneBox.style.backgroundColor = bgColor;
        fortuneBox.style.borderColor = borderColor;
        fortuneText.style.fontSize = fontSize;
        fortuneText.style.fontFamily = fontFamily;
    }

    document.getElementById('btn-theme-1').addEventListener('click', () => {
        applyTheme('#c0392b', '#fef9e7', '#8e44ad', '1rem', '"Poppins", sans-serif');
    });

    document.getElementById('btn-theme-2').addEventListener('click', () => {
        applyTheme('#7b4106', '#fdebd0', '#16a085', '1.05rem', '"Georgia", serif');
    });

    document.getElementById('btn-theme-3').addEventListener('click', () => {
        applyTheme('#1a5276', '#ebf5fb', '#d4a017', '1.1rem', '"Dancing Script", cursive');
    });

    document.getElementById('btn-theme-4').addEventListener('click', () => {
        applyTheme('#1e6e3e', '#e8f5e9', '#e74c3c', '0.95rem', '"Trebuchet MS", sans-serif');
    });
});
