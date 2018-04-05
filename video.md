# 视频外链API

## baseUrl:
```
http://120.78.195.149:8080/connect-0.0.1-SNAPSHOT/video
```


简述 | URI操作 | 备注 
---|---|---
获取所有视频外链 | GET | 不带url参数
获取某个视频外链 | GET /{id}| 不带url参数
增加视频外链接 | POST | 带url参数
删除视频外链 | DELETE /{id}| 不带url参数
修改视频外链接 | PUT /{id}| 带url参数


对象说明：

```
{
        "id": id,           //[NoWrite]
        "url": "https://"   //[Required]
},
```

返回示例：

```
[
    {
        "id": 2,
        "url": "https://www.bilibili.com/bangumi/play/ep172119/"
    },
    {
        "id": 3,
        "url": "https://www.bilibili.com/bangumi/play/ep172120/"
    },
    {
        "id": 4,
        "url": "https://www.bilibili.com/bangumi/play/ep172121/\n"
    }
]
```
如果数据库为空，返回：

```
[]
```
对某个不存在的id进行操作，返回：

```
{
    "timestamp": "2018-04-05T08:58:50.102+0000",
    "status": 500,
    "error": "Internal Server Error",
    "message": "No class com.example.connect.model.Video entity with id 1 exists!",
    "path": "/connect-0.0.1-SNAPSHOT/video/1"
}
```

