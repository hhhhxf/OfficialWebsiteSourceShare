package com.example.connect.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Video {

    @Id
    @GeneratedValue
    private Integer id;
    private String url;

    public Video() {
    }

    public Video(Integer id, String url) {
        this.id = id;
        this.url = url;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    @Override
    public String toString() {
        return "Video{" +
                "id=" + id +
                ", url='" + url + '\'' +
                '}';
    }
}
