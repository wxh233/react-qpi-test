import Mock, { Random } from 'mockjs';

Random.ip()
Mock.mock('/api/list','get',{
  'data|1':[
    {
      'id|+1':1,
      'base':'星期',
      'week|1':['日','一','二','三','四','五','六'],
      'ip':'@ip'
    }
  ]
})