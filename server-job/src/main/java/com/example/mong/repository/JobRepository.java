package com.example.mong.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.mong.Job;

public interface JobRepository extends MongoRepository<Job,String> {
    List<Job> findByPositionAndStatusAndType(String position, String status, String type);
    List<Job> findByPosition(String position);
    List<Job> findByStatus(String status);
    List<Job> findByType( String type);
}
