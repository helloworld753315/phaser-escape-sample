import 'phaser'

/**
 * メインシーン
 * 一応説明しておくと、
 * init⇒preload⇒create⇒update⇒update⇒...
 * のようなライフサイクルで動作する
 */
class MenuScene extends Phaser.Scene {
  constructor() {
    super({
      key: 'Menu',
      active: true
    })
  }

  /**
   * 初期処理
   */
  init(): void {
    console.log("init")
  }

  /**
   * アセットデータ読込などを行う処理
   */
  preload(): void {
    console.log("preload")
  }

  /**
   * ゲーム画面の作成処理やイベントアクションを記述する処理
   */
  create(): void {
    console.log("create")

    interface GameWindow {
      width: number;
      height: number
    }

    const gameWindow: GameWindow = {
      width: this.sys.game.scale.gameSize.width/2,
      height: this.sys.game.scale.gameSize.height/2,
    }

    let title = this.add.text(gameWindow.width, gameWindow.height, '脱出ゲームほげほげ');
    title.setFontSize(64).setColor('#ffffff').setOrigin(0.5).setPadding(6).setInteractive();

    

    title.on('pointerdown', () =>
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

export default MenuScene