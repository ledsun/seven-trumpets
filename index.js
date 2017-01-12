const AWS = require('aws-sdk')
const postChatworkMessage = require('post-chatwork-message')
const isTodaySecondFriday = require('./lib/isTodaySecondFriday')

const encryptedToken = process.env.ENCRYPTED_CHATWORK_API_TOKEN
const message = `MDCにいる方は18時から掃除です。宜しくお願いします。

掃除
- 床を拭く
- ゴミを集める
- トイレ掃除
  - 次の補充、全て掃除用具箱の中に入っています
  - トイレットペーパー
  - 手を拭く紙
  - 消臭力、消臭スプレー
- 灰皿を洗う
- 水とコーヒーの受け皿を洗う
- ゴミを一回に持っていく
- 使い終わったカップを元の位置に戻す
- カフェと会議室の机、棚拭き`

exports.handler = function(event, context) {
  // 第二金曜日は全社会議に続いて掃除をするので、通知不要
  if(isTodaySecondFriday()){
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
