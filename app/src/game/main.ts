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
    this.cameras.main.fadeIn(400, 0, 0, 0);
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

    mainRoom.on('pointerdown', (pointer: Phaser.Input.Pointer) =>
    {
      // console.log(`debug x: ${pointer.x}, y: ${pointer.y}`);

      if (checkHit(pointer.x, pointer.y, Room.door)){
        this.cameras.main.fadeOut(400, 0, 0, 0);
        this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, () => {
          this.scene.start('Door', this);
        });
      }
      else if(checkHit(pointer.x, pointer.y, Room.bed)){
        this.cameras.main.fadeOut(400, 0, 0, 0);
        this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, () => {
          this.scene.start('Bed', this);
        });
      }
      else if(checkHit(pointer.x, pointer.y, Room.desk)){
        this.cameras.main.fadeOut(400, 0, 0, 0);
        this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, () => {
          this.scene.start('Desk', this);
        });
      }
      else if(checkHit(pointer.x, pointer.y, Room.chest)){
        this.cameras.main.fadeOut(400, 0, 0, 0);
        this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, () => {
          this.scene.start('Chest', this);
        });
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