import { defineComponent, h, onMounted, ref, createApp, App } from "vue";
import { Application, Graphics, Text, TextStyle } from "pixi.js";
import { useMouse } from "@vueuse/core";

const mockMatchPos = [
  2, 40, 60, 80, 100, 120, 140, 160, 180, 400, 220, 240, 260, 280, 600,
];

/**
 * 缩放比例
 */
const scale = 20;

/**
 * 坐标系的x,y总长
 */
const canvasX = 600;
const canvasY = 400;

/**
 * 默认5段
 */
const defaultCount = 5;

/**
 * 局部坐标系原点
 */
const origin = {
  x: 100,
  y: 500,
};

/**
 * 线的样式
 */
const lineStyle = {
  width: 1,
  color: 0xffffff,
  alpha: 1,
};

/**
 * 文字样式
 */
let textStyle = new TextStyle({
  fontFamily: "Arial",
  fontSize: 12,
  fill: "white",
  // stroke: "#ff3300",
  strokeThickness: 4,
  // dropShadow: true,
  // dropShadowColor: "#000000",
  // dropShadowBlur: 4,
  // dropShadowAngle: Math.PI / 6,
  // dropShadowDistance: 6,
});

const drawCircle = (x: number, y: number, radius: number = 4) => {
  let circle = new Graphics();
  circle.beginFill(0x9966ff);
  circle.drawCircle(x, y, radius);
  circle.endFill();
  circle.x = origin.x;
  circle.y = origin.y;
  return circle;
};

const drawAxis = () => {
  /**
   * x轴
   */
  let AxisX = new Graphics();
  AxisX.lineStyle(lineStyle.width, lineStyle.color, lineStyle.alpha);
  AxisX.moveTo(0, 0);
  AxisX.lineTo(canvasX, 0);
  AxisX.x = origin.x;
  AxisX.y = origin.y;

  /**
   * 绘制x轴上的分隔刻度
   */
  const interval = canvasX / defaultCount;
  for (let i = 0; i <= defaultCount; i++) {
    let text = new Text(`${i * interval}`, textStyle);
    text.x = i * interval - 10;
    text.y = 10;
    let line = new Graphics();
    line.lineStyle(lineStyle.width, lineStyle.color, lineStyle.alpha);
    line.moveTo(i * interval, 0);
    line.lineTo(i * interval, 5);
    AxisX.addChild(text);
    AxisX.addChild(line);
  }

  /**
   * y轴
   */
  let AxisY = new Graphics();
  AxisY.lineStyle(lineStyle.width, lineStyle.color, lineStyle.alpha);
  AxisY.moveTo(0, 0);
  AxisY.lineTo(0, -canvasY);
  AxisY.x = origin.x;
  AxisY.y = origin.y;

  return [AxisX, AxisY];
};

let app: App | null = null;
const { x, y } = useMouse();

const onMouseEnter = (e: any, pos: number) => {
  if (app) return;
  const currentTarget = e.currentTarget;
  console.log(e.currentTarget);

  console.log(x.value);
  console.log(y.value);
  console.log(x.value + currentTarget.x);
  console.log(y.value - 100);
  app = createApp({
    render() {
      return h(
        "div", // 标签名称
        {
          style: {
            position: "absolute",
            left: `${x.value}px`,
            top: `${y.value - 150}px`,
            color: "red",
            backgroundColor: "rgba(255,255,255,0.5)",
          },
        },
        `位置：${pos}`
      );
    },
  });
  app.mount("#pixi-popover");
};

const onMouseLeave = (e: any) => {
  app?.unmount();
  app = null;
};

const drawMatchLine1 = (params: { scaleX: number }) => {
  const { scaleX } = params;

  /**
   * 都在y=-100的横轴上
   */
  const y = -100;

  /**
   * 横轴
   */
  let matchLine = new Graphics();
  matchLine.lineStyle(lineStyle.width, lineStyle.color, lineStyle.alpha);
  matchLine.moveTo(0, y);
  matchLine.lineTo(600, y);
  matchLine.x = origin.x;
  matchLine.y = origin.y;

  const circles = mockMatchPos.map((pos) => {
    const circle = drawCircle(pos / scaleX, y, 5);
    circle.interactive = true;
    circle.on("mouseover", (e) => {
      onMouseEnter(e, pos);
    });
    circle.on("mouseout", onMouseLeave);
    return circle;
  });

  let PN = new Text("WO12341234123", textStyle);
  PN.style = {
    ...PN.style,
    wordWrap: true,
    wordWrapWidth: 20,
    // align: "center",
  };
  PN.x = origin.x - 100;
  PN.y = origin.y + y;

  return [PN, matchLine, ...circles];
};

/**
 * pixi 画布
 */
export const PixiContainer = defineComponent({
  name: "PixiContainer",
  setup() {
    const pixiContainer = ref();

    const app = new Application({
      //   background: "#1099bb",
      resizeTo: pixiContainer.value,
    });

    const xLength = 2000;
    const yLength = 1000;

    const scaleX = xLength / canvasX;
    const scaleY = yLength / canvasY;

    const circle = drawCircle(60, -100, 5);
    const axis = drawAxis();
    const matchLine = drawMatchLine1({ scaleX });

    app.stage.addChild(...axis);
    app.stage.addChild(...matchLine);
    app.stage.addChild(circle);

    const init = () => {
      if (pixiContainer.value) {
        pixiContainer.value.appendChild(app.view);
      }
    };

    onMounted(init);

    return { pixiContainer };
  },
  render() {
    return (
      <div>
        <div id="pixi-popover" class="relative"></div>
        <div ref="pixiContainer"></div>
      </div>
    );
  },
});
