const AWS = require('aws-sdk')
const postChatworkMessage = require('post-chatwork-message')
const japaneseHolidays = require('japanese-holidays')
const isTodaySecondFriday = require('./lib/isTodaySecondFriday')

const encryptedToken = process.env.ENCRYPTED_CHATWORK_API_TOKEN
const message = `町田本社にいる方は18時から掃除です。宜しくお願いします。

掃除
- 掃除機をかける
- クイックルワイパーで床を拭く
- ゴミを集める
- 灰皿を洗う
- 水とコーヒーの受け皿を洗う
- 使い終わったカップを元の位置に戻す
- 居室と会議室の机、棚拭き`

exports.handler = function(event, context) {
  // 第二金曜日は全社会議に続いて掃除をするので、通知不要
  if(isTodaySecondFriday()){
    return
  }

  // 実行日が祝日の時は、通知不要 
  if(japaneseHolidays.isHoliday(new Date())){
    return
  }

  new AWS.KMS({
      region: 'ap-northeast-1'
    })
    .decrypt({
      CiphertextBlob: new Buffer(encryptedToken, 'base64')
    }, (err, data) => {
      if (err) {
        console.log(err)
        return context.fail(err)
      }
      postChatworkMessage(data.Plaintext.toString(), process.env.CHATWORK_ROOM_ID, message)
    })
}
