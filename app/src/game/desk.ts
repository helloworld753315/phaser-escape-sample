import 'phaser'
import { windowConfig, Room } from '../const/config'
import { Button } from '../game/backbutton'

/**
 * メインシーン
 * 一応説明しておくと、
 * init⇒preload⇒create⇒update⇒update⇒...
 * のようなライフサイクルで動作する
 */
class DeskScene extends Phaser.Scene {
  constructor() {
    super({
      key: 'Desk',
      active: false 
    })
  }

  /**
   * 初期処理
   */
  init(): void {
  }

  /**
   * アセットデータ読込などを行う処理
   */
  preload(): void {
    this.load.image("deskUp", "./assets/room/desk_up.jpg");
  }

  /**
   * ゲーム画面の作成処理やイベントアクションを記述する処理
   */
  create(): void {
    const frontDesk = this.add.sprite(0, 0, "deskUp").setOrigin(0).setInteractive();
    const backButton = new Button(windowConfig.width/2, windowConfig.height/2 + 200, '戻る', this);
  }

  /**
   * メインループ
   */
  update(): void {
  }
}

export default DeskScene