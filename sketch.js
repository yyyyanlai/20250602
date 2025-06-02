let video;

function setup() {
  createCanvas(640, 480); // 設定畫布大小
  video = createCapture(VIDEO); // 初始化攝影機
  video.size(640, 480);         // 設定攝影機大小
  video.hide();                 // 隱藏攝影機的預設輸出
}

function draw() {
  background(220);              // 設定背景顏色
  image(video, 0, 0, width, height); // 將攝影機畫面顯示在畫布上
}
