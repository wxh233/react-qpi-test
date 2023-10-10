import Mock from 'mockjs';

Mock.mock('/api/books','get',{
  "list|4":[
    {
      "id|+1":1,
      "book|+1":["三国演义","水浒传","红楼梦","西游记"],
      "read|1": true
    }
  ]
})