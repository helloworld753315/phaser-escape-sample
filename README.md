# 謎解きゲーム

## 実行方法

### 画像ファイル配置

`app/public/assets`内に`room`ディレクトリを作成し、その中に部屋の画像を配置

以下roomディレクトリの中身。

```
.
└── room
    ├── bed_up.jpg
    ├── chest_up.jpg
    ├── desk_up.jpg
    ├── door_up.jpg
    └── main.jpg
```



### Dockerコンテナの構築・起動(初回起動時のみ)

`$ docker-compose up -d --build`

### Dockerコンテナの起動

```
$ docker-compose up -d
```
または
```
$ docker-compose up
```


