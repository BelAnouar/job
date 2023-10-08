package com.example.mong.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.Aggregation;
import org.springframework.data.mongodb.core.aggregation.AggregationResults;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.stereotype.Service;

import com.example.mong.Job;
import com.example.mong.repository.JobRepository;

@Service
public class JobService {
    
    @Autowired
    private JobRepository repository;
    @Autowired
    private MongoTemplate mongoTemplate;

    public Job addJob(Job job){
        job.setCreatedAt(LocalDateTime.now());
        job.setUpdatedAt(LocalDateTime.now());
        return repository.save(job);
    }
    public List<Job> searchJobs(String position, String status, String type) {
        Criteria criteria = new Criteria();
        if (position != null) {
          criteria.and("position").is(position);
        }
        if (status != null) {
          criteria.and("status").is(status);
        }
        if (type != null) {
          criteria.and("type").is(type);
        }
        Aggregation aggregation = Aggregation.newAggregation(
            Aggregation.match(criteria),
            Aggregation.group("_id").push("$$ROOT").as("jobs"),
            Aggregation.project().and("jobs").concatArrays().as("jobs"),
            Aggregation.unwind("jobs"),
            Aggregation.replaceRoot("jobs")
        );
        AggregationResults<Job> results = mongoTemplate.aggregate(aggregation, "jobs", Job.class);
        return results.getMappedResults();
    
      }
    public List<Job> getAllJobs(){
         return repository.findAll();
    }

    public Job getJob(String jobId){
        return repository.findById(jobId).get();
    }

    public Job updateJob(Job job){
        Job existingJob = repository.findById(job.get_id()).get();
        existingJob.setPosition(job.getPosition());
        existingJob.setCompany(job.getCompany());
        existingJob.setLocation(job.getLocation());
        existingJob.setStatus(job.getStatus());
        existingJob.setType(job.getType());
        return repository.save(existingJob);
    }

    public String daleteJob(String jobId){
         repository.deleteById(jobId);
         return jobId;
    }
}
