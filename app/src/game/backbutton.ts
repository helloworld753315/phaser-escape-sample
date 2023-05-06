import 'phaser'

export class Button {
  constructor(x: number, y: number, label: string, scene: Phaser.Scene) {
      const button = scene.add.text(x, y, label)
          .setOrigin(0.5)
          .setPadding(15, 10)
          .setStyle({ backgroundColor: '#111' })
          .setInteractive({ useHandCursor: true })
          .on('pointerdown', () => {
            scene.cameras.main.fadeOut(500, 0, 0, 0);
            scene.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, () => {
              scene.scene.start('Main', this);
            });
          }
          )
          .on('pointerover', () => button.setStyle({ fill: '#f39c12' }))
          .on('pointerout', () => button.setStyle({ fill: '#FFF' }));
  }
}