package com.example.connect.API;

import com.example.connect.dao.VideoDaoImp;
import com.example.connect.model.Video;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/*
database:api
table:Video
id
url
 */
@RestController
public class VideoApi {

    @Autowired
    private VideoDaoImp videoDaoImp;

    //返回列表,json格式
    @GetMapping(value = "/video")
    public List<Video> getVideos(){
        return videoDaoImp.findAll();
    }

    //查询数据库
    @GetMapping(value = "/video/{id}")
    public Video getVideoById(@PathVariable("id") Integer id){
        return videoDaoImp.findById(id).get();
    }

    //新增数据post请求 字段为"url",返回对象
    @PostMapping(value = "/video")
    public Video addVideo(@RequestParam("url") String url){
        Video video = new Video();
        video.setUrl(url);
        return videoDaoImp.save(video);

    }

    //删除
    @DeleteMapping(value = "/video/{id}")
    public void deleteVideoById(@PathVariable("id") Integer id){
      videoDaoImp.deleteById(id);
    }

    //更新
    @PutMapping(value = "/video/{id}")
    public Video updateVideoById(@PathVariable("id") Integer id,
                                 @RequestParam("url") String url){

        Video video = new Video();
        video.setId(id);
        video.setUrl(url);
        return videoDaoImp.save(video);
    }
}
