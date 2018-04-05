package com.example.connect.dao;

import com.example.connect.model.Video;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VideoDaoImp extends JpaRepository<Video,Integer> {
}
