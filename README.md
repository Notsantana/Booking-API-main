# Booking-API (Hotel Booking)


## Part 1 Required Stories

### Create a Firebase database for your application. . ***(3 points)***
    - The names of class fields should match the names presented in the last coding assignment (this includes casing)-
    - Add a createdAt field to each table
    - Include sample data
### Create an endpoint for each of the major classes (Hotel, Room, User) ***(6 points)***
    - Create the required models, controllers, and services
    - Each controller should have at least 2 methods
    - Get all
    - Get by id
### Document endpoints. ***(1 point)***
    - Add to the README file the URI for each endpoint and a description (see example below)

All URIs start with: `http://localhost:8080/api/v1`

| Action | Network         | Description                                   | 
|--------|-----------------|-----------------------------------------------| 
|        | `/bookings`     | Retrieves all bookings                        | 
|        | `/booking/{id}` | Retrieves a specific booking based on it's ID |
|        | `/hotels`       | Retrieves all hotels                        | 
|        | `/hotel/{id}`   | Retrieves a specific hotel based on it's ID |
|        | `/reviews`      | Retrieves all reviews                       | 
|        | `/review/{id}`  | Retrieves a specific review based on it's ID |
|        | `/rooms`        | Retrieves all rooms                         | 
|        | `/room/{id}`    | Retrieves a specific room based on it's ID  |
|        | `/users`        | Retrieves all users                         | 
|        | `/user/{id}`    | Retrieves a specific user based on it's ID  |

## Part 2 Required Stories

### Create an endpoint for each of the major classes (Hotel, Room, User) ***(9 points)***
    -  Create the required models, controllers, and services
    -  Each controller should have 4 methods:
        - Retrieve an entry
        - Create a new entry
        - Update an existing entry
        - Delete an existing entry
### Document endpoints. ***(1 point)***
    - Add to the README file the URI for each endpoint and a description (see example below)
    - This should include **ALL** endpoints, including those from last week. *Note that there is an extra column*

#### Endpoints
All URIs start with: `http://localhost:8080/api/v1`

| Action   | Network      | Description                      | 
|----------|--------------|----------------------------------|
| `GET`    | `/hotels`       | Retrieves all hotels                        | 
|    `GET`      | `/hotel/{id}`   | Retrieves a specific hotel based on it's ID |
| `POST`   | `/hotels`    | Creates a new hotel              |
| `PUT`    | `/{hotelId}` | Updates a hotel based on it's ID |
| `DELETE` | `/{hotelId}` | Deletes a hotel based on it's ID |
|     `GET`     | `/rooms`        | Retrieves all rooms                         | 
|     `GET`     | `/room/{id}`    | Retrieves a specific room based on it's ID  |
| `POST`   | `/rooms`     | Creates a new room               |
| `PUT`    | `/{roomId}`  | Updates a room based on it's ID  |
| `DELETE` | `/roomId}`   | Deletes a room based on it's ID  |
|    `GET`      | `/users`        | Retrieves all users                         | 
|      `GET`    | `/user/{id}`    | Retrieves a specific user based on it's ID  |
| `POST`   | `/users`     | Creates a new user               |
| `PUT`    | `/{userId}`  | Updates a user based on it's ID  |
| `DELETE` | `/{userId}`  | Deletes a user based on it's ID  |

## Frontend Part 1
