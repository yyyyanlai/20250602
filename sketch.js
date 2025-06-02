let video;
let handPose;
let hands = [];
const INDEX_FINGER_TIP = 8; // 食指尖端的索引

function preload() {
  // 載入 handPose 模型
  handPose = ml5.handPose({ maxHands: 1 }, modelLoaded);
}

function modelLoaded() {
  console.log("HandPose model loaded successfully!");
}

function setup() {
  createCanvas(640, 480); // 設定畫布大小
  video = createCapture(VIDEO); // 初始化攝影機
  video.size(640, 480);         // 設定攝影機大小
  video.hide();                 // 隱藏攝影機的預設輸出

  // 開始偵測手勢
  handPose.on("predict", gotHands);
}

function draw() {
  background(220);              // 設定背景顏色
  
  // 顯示鏡像的攝影機畫面
  translate(width, 0);          // 水平翻轉畫布
  scale(-1, 1);                 // 水平鏡像
  image(video, 0, 0, width, height); // 將攝影機畫面顯示在畫布上

  // 如果有手勢資料，顯示食指位置
  if (hands.length > 0) {
    let hand = hands[0]; // 取得第一隻手的資料
    let indexFinger = hand.keypoints[INDEX_FINGER_TIP]; // 取得食指尖端的位置

    fill(255, 0, 0); // 設定顏色為紅色
    noStroke();
    circle(indexFinger.x, indexFinger.y, 20); // 在食指尖端位置畫一個圓
  }
}

function gotHands(results) {
  hands = results; // 儲存手勢資料
}
