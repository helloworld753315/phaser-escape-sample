import 'phaser'

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
    this.add.text(10, 10, "Hello, phaser")
    let title = this.add.text(1, 1, '脱出ゲームほげほげ');
    title.setFontSize(64).setColor('#ffffff').setOrigin(0.5).setPadding(6).setInteractive();
  }

  /**
   * メインループ
   */
  update(): void {
  }
}

export default MainScene