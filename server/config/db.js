import mongo from 'mongodb';
import monk from 'monk';

var db = monk('localhost:27017/DBNAME');

export default db;
