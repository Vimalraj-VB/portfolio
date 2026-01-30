import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-tech-excellence',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './tech-excellence.component.html',
    styleUrls: ['./tech-excellence.component.scss']
})
export class TechExcellenceComponent {
    expertise = [
        {
            title: 'Backend Architecture',
            icon: 'bi-cpu',
            details: [
                'Microservices with Spring Boot 3',
                'Scalable RESTful API Design',
                'Event-Driven Systems with Kafka'
            ]
        },
        {
            title: 'Data Management',
            icon: 'bi-database',
            details: [
                'PostgreSQL Query Optimization',
                'Redis Distributed Caching',
                'Zero-Data-Loss S3 Storage'
            ]
        },
        {
            title: 'DevOps & Reliability',
            icon: 'bi-shield-check',
            details: [
                'Docker & Containerization',
                'AWS Cloud Infrastructure',
                'CI/CD Pipeline Automation'
            ]
        }
    ];
}
