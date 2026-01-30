import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  imports: [NgFor],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  experiences = [
    {
      role: 'Software Engineer',
      company: 'Bocxy Technologies Pvt. Ltd',
      duration: 'Mar 2025 – Present',
      description: 'Spearheaded the development of a multi-tenant Aesthetic Clinic Management System using <strong>Spring Boot 3</strong> and Angular. Optimized appointment scheduling algorithms, reducing booking conflicts by <strong>40%</strong>. Implemented role-based access control (RBAC) securely for 4 distinct user personas, ensuring strict data compliance.'
    },
    {
      role: 'Software Engineer',
      company: 'TecData IT Services Pvt. Ltd',
      duration: 'May 2024 – Dec 2024',
      description: 'Architected a unified Motor Insurance Integration platform connecting <strong>5+ major insurers</strong> via RESTful APIs. Designed a secure document storage solution using <strong>Amazon S3</strong>, processing <strong>10,000+ policy documents</strong> monthly with zero data loss. Reduced policy issuance time by <strong>60%</strong> through automated workflows.'
    },
    {
      role: 'Software Engineer',
      company: 'FA Software Services Pvt. Ltd',
      duration: 'Nov 2022 – Apr 2024',
      description: 'Engineered a high-throughput Outbound Calling System (OBS) handling <strong>1M+ daily calls</strong>. Reduced system latency by <strong>35%</strong> by optimizing database queries and implementing <strong>Redis caching</strong>. Integrated WhatsApp/SMS APIs, improving agent productivity by <strong>25%</strong> and enabling real-time analytics.'
    }
  ];

}
