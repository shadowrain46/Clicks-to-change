// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()


const db = cloud.database();
// 云函数入口函数
exports.main = async (event, context) => {
  return db.collection('list3').where({
    tag: event.tag,
    tab: event.tab,
    tar: event.tar,
    taf: event.taf,
    tad: event.tad

  }).get()
}