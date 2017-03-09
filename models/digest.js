/**
 * 文摘模型
 */
var mongoose = require('mongoose');
var tools = require('../common/tools');

var Schema = mongoose.Schema;

// Schema 一种以文件形式存储的数据库模型骨架，不具备数据库的操作能力
var DigestSchema = new Schema({
    title         : {type : String},
    content       : {type : String},
    provenance    : {type : String},
    readQuantity  : {type : Number},
    time          : {type : String, default: tools.getNowDate()},
});

// model 由Schema发布生成的模型，具有抽象属性和行为的数据库操作对
mongoose.model('Digest', DigestSchema);
