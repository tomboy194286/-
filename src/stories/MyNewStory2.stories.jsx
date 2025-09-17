import React from 'react';
import { useSpeechSynthesis } from 'react-speech-kit'; // 從套件中匯入語音功能

export default {
  title: '我的第一個故事',
};

// 將你的故事內容放在一個變數裡，這是你小說的第一部分
const storyText = `
  台灣某個夜裡的女子監獄...一個身形高大.黑長髮英氣十足的女性.坐在牢房的地板抽著菸...
  ???-/嗯....嗯?幹...沒菸了.沒辦法...只好出去買了./
  於是女子就這樣走到牢房的欄杆.用她驚人的力氣掰開.直接走了出去...
`;

export const MyStoryWithAudio = () => {
  // 呼叫 useSpeechSynthesis 函式來啟用語音功能
  const { speak } = useSpeechSynthesis();

  return (
    <div>
      <h1>我的小說（附語音朗讀）</h1>
      {/* 建立一個按鈕，當點擊時就朗讀故事內容 */}
      <button onClick={() => speak({ text: storyText })}>
        點我播放故事
      </button>
      <hr />
      <p>{storyText}</p>
    </div>
  );
};