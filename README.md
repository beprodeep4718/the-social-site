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

### Create Post

**Endpoint:** `POST /post/create`

**Description:** Create a new post.

**Request Headers:**
- `Authorization: Bearer <token>`

**Request Body:**
- `content`: The content of the post.
- `image`: The image file to be uploaded (optional).

**Response:**
- Success: `201 Created`
  ```json
  {
    "_id": "post_id_here",
    "content": "Post content here",
    "image": {
      "url": "url_of_uploaded_image",
      "public_id": "image_public_id"
    },
    "author": "user_id_here",
    "createdAt": "timestamp_here",
    "updatedAt": "timestamp_here"
  }
  ```
- Error: `400 Bad Request`
  ```json
  {
    "message": "Error message here"
  }
  ```

### Get All Posts

**Endpoint:** `GET /post/`

**Description:** Retrieve all posts.

**Response:**
- Success: `200 OK`
  ```json
  [
    {
      "_id": "post_id_here",
      "content": "Post content here",
      "image": {
        "url": "url_of_uploaded_image",
        "public_id": "image_public_id"
      },
      "author": {
        "_id": "user_id_here",
        "username": "exampleUser"
      },
      "createdAt": "timestamp_here",
      "updatedAt": "timestamp_here"
    },
    // ...other posts...
  ]
  ```
- Error: `400 Bad Request`
  ```json
  {
    "message": "Error message here"
  }
  ```
