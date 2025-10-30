# System Design: ZITF System Design.

## 1. Clarify & Gather Requirements

### Functional Requirements

- User authentication: Login, Signup(Fullname, Email, password, role).

### Non-Functional Requirements / Constraints

- Scale: The system should be able to handle about 100 users in a time.
- Latency: [ ]
- Availability: [ ]
- Consistency: [ ]
- Storage: [ ]
- Budget/Cost: [ ]

### Questions / Assumptions

- I assume that the number of users that should register for the system will be more than 100 per day.

---

## 2. API & Data Model

### APIs

### User Routes

- **POST /...**

  - Request: [Create Account](http://localhost:4000/api/v1/users/signup)
  ```sh
  curl -X POST http://localhost:4000/api/v1/users/signup \
  -H "Content-Type: application/json" \
  -d '{"name": "Godbless Nyagawa", "email" :"k5@gmail.com", "password": "Oxmcintyre189"}'
  ```
  - Response:

  ```json
  {
    "email":"k6@gmail.com","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTAzZTMzMWFhM2NhMTg5MzZkMTBlYmMiLCJpYXQiOjE3NjE4NjI0NDksImV4cCI6MTc2NDQ1NDQ0OX0.zeQUvmnv-YBnGBo3bzrd_yxhKcMzKH8VA93WPVay7eM"
  } 
  ```

  - Request: [Login](http://localhost:4000/api/v1/users/login)
  ```sh
  curl -X POST http://localhost:4000/api/v1/users/login \
  -H "Content-Type: application/json" \
  -d '{"email" :"k5@gmail.com", "password": "Oxmcintyre189"}'
  ```
  - Response:

  ```json
  {
    "email":"k5@gmail.com","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTAzZTMxZmFhM2NhMTg5MzZkMTBlYjgiLCJpYXQiOjE3NjE4NjI1OTgsImV4cCI6MTc2NDQ1NDU5OH0.y7Su_e-cs7NdBZExh2kxDn5wU2nX_oanGokYlmwrQII"
  }
  ```

  - Request: [Get All Users](http://localhost:4000/api/v1/users/)
  ```sh
  curl -X GET http://localhost:4000/api/v1/users/
  ```
  - Response:

  ```json
  [{"_id":"6903e506ed57067920ffa7c2","name":"Godbless Nyagawa","email":"k9@gmail.com","createdAt":"2025-10-30T22:21:58.043Z","updatedAt":"2025-10-30T22:21:58.043Z","__v":0},{"_id":"6903e4e777c9f8096c7c80e1","name":"Godbless Nyagawa","email":"k8@gmail.com","createdAt":"2025-10-30T22:21:27.548Z","updatedAt":"2025-10-30T22:21:27.548Z","__v":0}]
  ```

  - Request: [Get User](http://localhost:4000/api/v1/users/)
  ```sh
  curl -X GET http://localhost:4000/api/v1/users/6903e506ed57067920ffa7c2
  ```
  - Response:

  ```json
  [
    {
      "_id":"6903e506ed57067920ffa7c2",
      "name":"Godbless Nyagawa",
      "email":"k9@gmail.com",
      "createdAt":"2025-10-30T22:21:58.043Z","updatedAt":"2025-10-30T22:21:58.043Z",
      "__v":0
    }
  ]
  ```

- **DELETE /...**

  - Request: [Get User](http://localhost:4000/api/v1/users/:id)
  ```sh
  curl -X DELETE http://localhost:4000/api/v1/users/6903e506ed57067920ffa7c2
  ```

  - Response:


  ```json
  {
  "message": "Deleted sucessfully",
  "deletedUser": {
    "_id": "6903e4afefaab6a61c262840",
    "name": "Godbless Nyagawa",
    "email": "k7@gmail.com",
    "password": "$2b$10$UgCYX2purH5eaLsVbkNLWuQA/LeHCoYicYPyQCCAHjS4HVf/fN/FS",
    "createdAt": "2025-10-30T22:20:31.751Z",
    "updatedAt": "2025-10-30T22:20:31.751Z",
    "__v": 0
  }
  }
  ```

### Announcements Routes

- **GET /...**

  - Request: [Get Announcements](http://localhost:4000/api/v1/announcements)
  ```sh
  curl -X GET http://localhost:4000/api/v1/announcements
  ```

  

  - Response:

  ```json
  [
    {
      "_id":"6903f02980e74a2508bf904f",
      "title":"Maadhimisho ya miaka 60 ya uhuru wa Jamhuri ya muuunga","body":"karibu katika kilele cha maadhimisho ya miaka 6o ya uhuru wa Tanzania karibu katika kilele cha maadhimisho ya miaka 6o ya uhuru wa Tanzania karibu katika kilele cha maadhimisho ya miaka 6o ya uhuru wa Tanzania karibu katika kilele cha maadhimisho ya miaka 6o ya uhuru wa Tanzaniakaribu katika kilele cha maadhimisho ya miaka 6o ya uhuru wa Tanzaniakaribu katika kilele cha maadhimisho ya miaka 6o ya uhuru wa Tanzania","createdAt":"2025-10-30T23:09:29.237Z","updatedAt":"2025-10-30T23:09:29.237Z",
      "__v":0
      },
  ]
  ```

  - Request: [Add announcements](http://localhost:4000/api/v1/announcements)

  ```sh
  curl -X POST http://localhost:4000/api/v1/announcements \
  -H "Content-Type: application/json" \
  -d '{
  "title": "Maadhimisho ya miaka 60 ya uhuru wa Jamhuri ya muuunga",
  "body": "karibu katika kilele cha maadhimisho ya miaka 6o ya uhuru wa Tanzania karibu katika kilele cha maadhimisho ya miaka 6o ya uhuru wa Tanzania karibu katika kilele cha maadhimisho ya miaka 6o ya uhuru wa Tanzania karibu katika kilele cha maadhimisho ya miaka 6o ya uhuru wa Tanzaniakaribu katika kilele cha maadhimisho ya miaka 6o ya uhuru wa Tanzaniakaribu katika kilele cha maadhimisho ya miaka 6o ya uhuru wa Tanzania",
  "createdBy": "6903e506ed57067920ffa7c2"
  }'
  ```

  - Response: 

  ```json
  {
  "title": "Maadhimisho ya miaka 60 ya uhuru wa Jamhuri ya muuunga",
  "body": "karibu katika kilele cha maadhimisho ya miaka 6o ya uhuru wa Tanzania karibu katika kilele cha maadhimisho ya miaka 6o ya uhuru wa Tanzania karibu katika kilele cha maadhimisho ya miaka 6o ya uhuru wa Tanzania karibu katika kilele cha maadhimisho ya miaka 6o ya uhuru wa Tanzaniakaribu katika kilele cha maadhimisho ya miaka 6o ya uhuru wa Tanzaniakaribu katika kilele cha maadhimisho ya miaka 6o ya uhuru wa Tanzania",
  "_id": "6903efd091eac5bff19ef85a",
  "createdAt": "2025-10-30T23:08:00.694Z",
  "updatedAt": "2025-10-30T23:08:00.694Z",
  "__v": 0
  }
  ```

- Request: [Get announcement](http://localhost:4000/api/v1/announcements/:id)

  ```sh
  curl -X GET http://localhost:4000/api/v1/announcements/6903efd091eac5bff19ef85a
  ```

  - Response: 

  ```json
  {
    "_id":"6903efd091eac5bff19ef85a",
    "title":"Maadhimisho ya miaka 60 ya uhuru wa Jamhuri ya muuunga","body":"karibu katika kilele cha maadhimisho ya miaka 6o ya uhuru wa Tanzania karibu katika kilele cha maadhimisho ya miaka 6o ya uhuru wa Tanzania karibu katika kilele cha maadhimisho ya miaka 6o ya uhuru wa Tanzania karibu katika kilele cha maadhimisho ya miaka 6o ya uhuru wa Tanzaniakaribu katika kilele cha maadhimisho ya miaka 6o ya uhuru wa Tanzaniakaribu katika kilele cha maadhimisho ya miaka 6o ya uhuru wa Tanzania","createdAt":"2025-10-30T23:08:00.694Z","updatedAt":"2025-10-30T23:08:00.694Z",
  "__v":0
  }
  ```


  - Request: [Delete announcement](http://localhost:4000/api/v1/announcements/:id)

  ```sh
  curl -X DELETE http://localhost:4000/api/v1/announcements/6903efd091eac5bff19ef85a
  ```

  - Response: 

  ```json
  {
  "message": "announcement deleted sucessfully}",
  "deletedAnnouncement": {
    "_id": "6903efd091eac5bff19ef85a",
    "title": "Maadhimisho ya miaka 60 ya uhuru wa Jamhuri ya muuunga",
    "body": "karibu katika kilele cha maadhimisho ya miaka 6o ya uhuru wa Tanzania karibu katika kilele cha maadhimisho ya miaka 6o ya uhuru wa Tanzania karibu katika kilele cha maadhimisho ya miaka 6o ya uhuru wa Tanzania karibu katika kilele cha maadhimisho ya miaka 6o ya uhuru wa Tanzaniakaribu katika kilele cha maadhimisho ya miaka 6o ya uhuru wa Tanzaniakaribu katika kilele cha maadhimisho ya miaka 6o ya uhuru wa Tanzania",
    "createdAt": "2025-10-30T23:08:00.694Z",
    "updatedAt": "2025-10-30T23:08:00.694Z",
    "__v": 0
  }
  }
  ```

### Healthy Routes

- **GET /...**
  - Request: [Check Healthy](http://localhost:4000/api/v1/healthy)
  - Response:
  ```json
  { "message": "Everything well!" }
  ```

### Data Model

- Entities:
  - User
    - fullname, email, password:
  - Announcements
    - title, body.createdBy.
  - [Entity2]
    - fields:

---

## 3. High-Level Architecture

**Components**

- [ ] Load Balancer
- [ ] Application Servers
- [ ] Cache
- [ ] Database(s)
- [ ] Background Jobs / Workers
- [ ] Other: [ ]

**Request Flow**

1. [ ]
2. [ ]
3. [ ]

---

## 4. Deep Dive into Key Subsystems

### Subsystem 1: [e.g., ID Generation / Partitioning]

- Options:
- Trade-offs:
- Scaling:

### Subsystem 2: [e.g., Database / Storage]

- Options:
- Trade-offs:
- Scaling:

### Subsystem 3: [Optional extra deep dive]

---

## 5. Edge Cases & Failure Modes

- Component failure: [ ]
- Data growth / skew: [ ]
- Hotspots: [ ]
- Security / abuse: [ ]
- Cost vs performance: [ ]

---

## 6. Scaling & Growth Plan

- Vertical scaling: [ ]
- Horizontal scaling: [ ]
- Sharding / Partitioning: [ ]
- Multi-region support: [ ]
- Monitoring & Alerts: [ ]
- Traffic spikes: [ ]

---

## 7. Summary

- Final design recap
- Key trade-offs made
- Future improvements
