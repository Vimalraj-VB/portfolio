import { Component } from '@angular/core';
import { NgFor } from '@angular/common'; // ✅ Import this

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor], // ✅ Add NgFor here
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Clinic Management API (SaaS)',
      description: 'Built a multi-tenant backend using <strong>Spring Boot 3</strong> & <strong>Spring Security (OAuth2)</strong>. Engineered a custom appointment scheduling algorithm that reduced double-bookings by <strong>90%</strong>. Implemented HIPAA-compliant data access patterns.',
      link: '#'
    },
    {
      title: 'E-commerce Microservices',
      description: 'Designed a scalable microservices architecture handling product catalog, cart, and orders. Integrated <strong>Stripe</strong> payment gateway ensuring <strong>99.9%</strong> transaction success rates. Deployed on <strong>AWS ECS</strong> with load balancing.',
      link: '#'
    },
    {
      title: 'Real-Time Notification Engine',
      description: 'Developed an event-driven notification service using <strong>Apache Kafka</strong> and <strong>WebSockets</strong>. Processed <strong>1M+ daily alerts</strong> with sub-second latency, ensuring real-time engagement for end-users.',
      link: '#'
    },
    {
      title: 'Financial Ledger System',
      description: 'Implemented a secure batch-processing module using <strong>Spring Batch</strong> for end-of-day financial reconciliation. Automated error detection for <strong>50k+ daily transactions</strong>, achieving <strong>100%</strong> financial accuracy.',
      link: '#'
    },
    {
      title: 'Smart Movie Booking System',
      description: 'Created a concurrency-safe booking engine preventing seat collisions using <strong>pessimistic locking</strong> strategies in MySQL. Optimized database performance to support <strong>1000+</strong> simultaneous seat selections.',
      link: '#'
    }
  ];
}
