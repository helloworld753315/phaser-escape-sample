import 'phaser'
import { windowConfig, Room } from '../const/config'
import { Button } from '../game/backbutton'

/**
 * メインシーン
 * 一応説明しておくと、
 * init⇒preload⇒create⇒update⇒update⇒...
 * のようなライフサイクルで動作する
 */
class BedScene extends Phaser.Scene {
  constructor() {
    super({
      key: 'Bed',
      active: false 
    })
  }

  /**
   * 初期処理
   */
  init(): void {
    this.cameras.main.fadeIn(400, 0, 0, 0);
  }

  /**
   * アセットデータ読込などを行う処理
   */
  preload(): void {
    this.load.image("bedUp", "./assets/room/bed_up.jpg");
  }

  /**
   * ゲーム画面の作成処理やイベントアクションを記述する処理
   */
  create(): void {
    const frontBed = this.add.sprite(0, 0, "bedUp").setOrigin(0).setInteractive();
    const backButton = new Button(windowConfig.width/2, windowConfig.height/2 + 200, '戻る', this);
  }

  /**
   * メインループ
   */
  update(): void {
  }
}

export default BedScene