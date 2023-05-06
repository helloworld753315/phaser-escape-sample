import 'phaser'
import { windowConfig, Room } from '../const/config'
import { Button } from '../game/backbutton'

/**
 * メインシーン
 * 一応説明しておくと、
 * init⇒preload⇒create⇒update⇒update⇒...
 * のようなライフサイクルで動作する
 */
class DoorScene extends Phaser.Scene {
  constructor() {
    super({
      key: 'Door',
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
    this.load.image("doorUp", "./assets/room/door_up.jpg");
  }

  /**
   * ゲーム画面の作成処理やイベントアクションを記述する処理
   */
  create(): void {
    const frontDoor = this.add.sprite(0, 0, "doorUp").setOrigin(0).setInteractive();
    const backButton = new Button(windowConfig.width/2, windowConfig.height/2 + 200, '戻る', this);
  }

  /**
   * メインループ
   */
  update(): void {
  }
}

export default DoorScene