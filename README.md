## API Documentation

### User Registration

**Endpoint:** `POST /user/register`

**Description:** Register a new user.

**Request Body:**
```json
{
  "username": "exampleUser",
  "password": "examplePassword"
}
```

**Response:**
- Success: `201 Created`
  ```json
  {
    "msg": "User created successfully"
  }
  ```
- Error: `400 Bad Request`
  ```json
  {
    "msg": "Username and password are required"
  }
  ```
  ```json
  {
    "msg": "Username already taken"
  }
  ```
  ```json
  {
    "msg": "Duplicate username"
  }
  ```

### User Login

**Endpoint:** `POST /user/login`

**Description:** Login an existing user.

**Request Body:**
```json
{
  "username": "exampleUser",
  "password": "examplePassword"
}
```

**Response:**
- Success: `200 OK`
  ```json
  {
    "msg": "Logged in successfully",
    "token": "jwt_token_here"
  }
  ```
- Error: `400 Bad Request`
  ```json
  {
    "msg": "User does not exist"
  }
  ```
  ```json
  {
    "msg": "Invalid credentials"
  }
  ```

### User Logout

**Endpoint:** `GET /user/logout`

**Description:** Logout the current user.

**Response:**
- Success: `200 OK`
  ```json
  {
    "msg": "Logged out successfully"
  }
  ```

### Get User Info

**Endpoint:** `GET /user/userinfo`

**Description:** Get information about the logged-in user.

**Response:**
- Success: `200 OK`
  ```json
  {
    "_id": "user_id_here",
    "username": "exampleUser",
    // other user fields except password
  }
  ```
- Error: `500 Internal Server Error`
  ```json
  {
    "msg": "Internal server error"
  }
  ```
