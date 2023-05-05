import 'phaser'
import { windowConfig, Room } from '../const/config'
import { checkHit } from '../scripts/checkHit'

/**
 * メインシーン
 * 一応説明しておくと、
 * init⇒preload⇒create⇒update⇒update⇒...
 * のようなライフサイクルで動作する
 */
class MainScene extends Phaser.Scene {
  constructor() {
    super({
      key: 'Main',
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
    this.load.image("mainRoom", "./assets/room/main.jpg");
  }

  /**
   * ゲーム画面の作成処理やイベントアクションを記述する処理
   */
  create(): void {
    this.add.text(10, 10, "Hello, phaser");
    const mainRoom = this.add.sprite(0, 0, "mainRoom").setOrigin(0).setInteractive();

    /*
    let box = this.add.graphics()
	  box.fillStyle(0xff7f50, 0.8).fillRect(720, 200, 260, 300).setInteractive();
    const backbutton = this.add.text(windowConfig.width/2, windowConfig.height/2 + 200, '戻る');
    backbutton.setFontSize(32).setColor('#ffffff').setOrigin(0.5).setPadding(6).setInteractive();
    */

    mainRoom.on('pointerdown', (pointer: Phaser.Input.Pointer) =>
    {
      console.log(`debug x: ${pointer.x}, y: ${pointer.y}`);

      if (checkHit(pointer.x, pointer.y, Room.door)){
        this.scene.start('Door', this);
      }
      else if(checkHit(pointer.x, pointer.y, Room.bed)){
        this.scene.start('Bed', this);
      }
      else if(checkHit(pointer.x, pointer.y, Room.desk)){
        this.scene.start('Desk', this);
      }
      else if(checkHit(pointer.x, pointer.y, Room.chest)){
        this.scene.start('Chest', this);
      }
    });
  }

  /**
   * メインループ
   */
  update(): void {
  }
}

export default MainScene