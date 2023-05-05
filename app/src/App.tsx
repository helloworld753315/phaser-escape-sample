import { CSSProperties, useEffect } from 'react';
import 'phaser'
import { windowConfig } from './const/config';
import MainScene from './game/main';
import MenuScene from './game/menu';
import DoorScene from './game/door';
import BedScene from './game/bed';
import DeskScene from './game/desk';
import ChestScene from './game/chest';

// Phaserの設定
const config: Phaser.Types.Core.GameConfig = {
  width: windowConfig.width,
  height: windowConfig.height,
  type: Phaser.AUTO,
  pixelArt: false,
  backgroundColor: windowConfig.backgroundColor,

  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_VERTICALLY,
    parent: 'game',
    fullscreenTarget: 'game'
  },

  // ここで読み込むシーンを取得する
  // 今回は軽いテストなので、MainSceneのみ
  scene: [MenuScene, MainScene, DoorScene, BedScene, DeskScene, ChestScene],
};

/**
 * PhaserのGameを生成するためのクラス
 */

class Game extends Phaser.Game {
  // eslint-disable-next-line
  constructor(config: Phaser.Types.Core.GameConfig) {
    super(config);
  }
}

/**
 * ゲームを描写するDivコンポーネント
 */
const App: React.FC<{ className?: string }> = ({ className }) => {
  // お手軽にCSSの設定（フルスクリーンで、Canvasを中央寄せにする）
  const style: CSSProperties = {
    width: "100vw",
    height: "100vh",
    textAlign: "center"
  }

  // 画面の発描写時に実行する
  // 画面の終了時にはGameをDestroyする
  useEffect(() => {
    const g = new Game(config)
    return () => {
      g?.destroy(true)
    }
  }, []);

  // canvasをAppendするdivコンポーネント
  return (
    <div id="game" className={className} style={style}>
    </div >
  )
}

export default App;