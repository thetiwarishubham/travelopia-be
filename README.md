# Introduction 
Travelopia Backend App -- Node.js

* This boilerplate is built using Express.js web framework, and is using Javascript Lang for writing the app's logic.
* For Database -  Repo contains the use of Moongoose (ie. MongoDB) object modeling for Node.js).

### Prerequisites
* NPM
* MongoDB

### Installation
1. Clone the repo
```sh
git clone https://github.com/thetiwarishubham/travelopia-be.git
```
2. Install NPM packages
```sh
npm install
```
3. Run the App 
```sh
npm run start
```

## API Endpoints

### Retrieve Flight Information

**Endpoint**: `GET` https://highlevel-be-api.onrender.com/api/flights/65d0438b12bae3141632094b

**Response:**
```json
{
    "data": {
        "_id": "65d0438b12bae3141632094b",
        "flightNumber": "A12B42",
        "airline": "Airline 12",
        "origin": "Origin 12",
        "destination": "Destination 12",
        "departureTime": "2024-02-17T08:11:39.270Z",
        "status": "Delayed",
    }
}
```

### Retrieve All Flights Information

**Endpoint**: `GET` https://highlevel-be-api.onrender.com/api/flights

**Response:**
```json
{
    "data": [
        {
            "_id": "65d054cb22c10f1ddeed2188",
            "flightNumber": "A12B42",
            "airline": "Airline 12",
            "origin": "Origin 12",
            "destination": "Destination 12",
            "departureTime": "2024-02-17T08:11:39.270Z",
            "status": "Delayed",
        },
        {
            "_id": "65d054d622c10f1ddeed218a",
            "flightNumber": "A12B42",
            "airline": "Airline 13",
            "origin": "Origin 13",
            "destination": "Destination 13",
            "departureTime": "2024-02-17T08:11:39.270Z",
            "status": "Delayed",
        }
    ]
}
```

### Create a Flight

**Endpoint**: `POST` https://highlevel-be-api.onrender.com/api/flights

**Request Body:**
```json
{
    "flightNumber": "A12B42",
    "airline": "Airline 12",
    "origin": "Origin 12",
    "destination": "Destination 12",
    "departureTime": "2024-02-17T08:11:39.270Z",
    "status": "Delayed"
}
```
**Response:**
```json
{
    "data": "Flight Created Successfully"
}
```

### Update a Flight

**Endpoint**: `PATCH` https://highlevel-be-api.onrender.com/api/flights/65d0438b12bae3141632094b

**Request Body:**
```json
{
    "flightNumber": "A12B43",
    "airline": "Airline 13",
    "origin": "Origin 13",
    "destination": "Destination 13",
    "departureTime": "2024-02-17T08:11:39.270Z",
    "status": "Delayed"
}
```
**Response:**
```json
{
    "data": "Flight Updated Successfully"
}
```
### Delete Flight

**Endpoint**: `DELETE` https://highlevel-be-api.onrender.com/api/flights/65d0438b12bae3141632094b

**Response:**
```json
{
    "data": "Deleted Successfully."
}
```

## Important Note

### Server Spin-Down

- **Description**: The deployment instance used for this project is on a free plan, and it may spin down after a period of inactivity.
  
- **Potential Delay**: Requests made to the server after a period of inactivity might experience delays of 50 seconds or more as the server spins up.