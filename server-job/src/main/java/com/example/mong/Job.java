package com.example.mong;

import java.time.LocalDateTime;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection = "jobs")
@Data
@AllArgsConstructor
@NoArgsConstructor

public class Job {
    @Id
    private String _id;
    private String position;
    private String company;
    private String location;
    private String status;
    private String type;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

  
    
}
