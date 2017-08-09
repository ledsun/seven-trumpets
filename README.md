# What's this

これは週末の掃除の時間を告げるAWS Lambda関数です。

# Configurable

## 環境変数

|key|value|
|---|-----|
| ENCRYPTED_CHATWORK_API_TOKEN |KMSで暗号化したChatwork API Token|
| CHATWORK_ROOM_ID | 投稿したいChatworkのRoom ID（数字のみ）|

# How To Deploy

## refs
[AWS LambdaからChatworkに定時通知する - Qiita](http://qiita.com/ledsun/items/cc90978d0e09f459d571)を参考にしてください。

圧縮ファイルは

```
rm -rf node_modules
npm install --only=production --no-save
npm run zip
```

で作成可能です。
avaを含めると15MBを超えるので、devDependenciesのmoduleを一度削除します。

## cron expression

Run at 17:55(JST) every friday.

`55 8 ? * FRI *`
