package com.example.mong.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.mong.Job;
import com.example.mong.service.JobService;

@RestController
@RequestMapping("api/job")
@CrossOrigin("http://localhost:3000")
public class JobController {
     
    @Autowired
    private JobService service;



    @GetMapping
    public List<Job> getJobs( ){
       
     return service.getAllJobs();
          
    }
    
    @GetMapping("/search")
    public List<Job> search( @RequestParam(name = "position", required = false) String position,
    @RequestParam(name = "status", required = false) String status,
    @RequestParam(name = "type", required = false) String type){
      
            return service.searchJobs(position, status, type);
          
    }
   
    @GetMapping("/{jobId}")
    public Job getJob(@PathVariable String jobId){
        return service.getJob(jobId);
    }

    @PostMapping
    public Job createJob(@RequestBody Job job){
        return service.addJob(job);
    }



    @PutMapping
    public Job modifyjob(@RequestBody Job job){
        return service.updateJob(job);
    }
     
    @DeleteMapping("/{jobId}")
    public String deleteJob(@PathVariable String jobId){
        return service.daleteJob(jobId);
    }



}
