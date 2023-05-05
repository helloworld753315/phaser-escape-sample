import 'phaser'
import { windowConfig, Room } from '../const/config'

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

    const backbutton = this.add.text(windowConfig.width/2, windowConfig.height/2 + 200, '戻る');
    backbutton.setFontSize(32).setColor('#ffffff').setOrigin(0.5).setPadding(6).setInteractive();

    backbutton.on('pointerdown', () =>
    {
      this.scene.start('Main', this);
    }, this);
  }

  /**
   * メインループ
   */
  update(): void {
  }
}

export default DeskScene