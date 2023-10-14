Create a server for a news service using express.

Technical Requirements:
The server should be written using express and should start on the host and port specified in environment variables HOST and PORT.

Data can be stored either in memory or in file on the server.

{
  "id": 3,
  "title": "A Fox in Chernihiv Zoo Gives Birth to a Cub",
  "text": "A wonderful event has occurred at the Chernihiv Zoo! A fox named Red has given birth to a beautiful cub! So hurry up and visit to see this adorable creature!"
}

The GET /api/newsposts?page=1&size=10 endpoint should return a list of all news articles with pagination. If there are no news articles, it should return an empty array. If an error occurs, it should return a status of 500.

The GET /api/newsposts/:id endpoint should return a single news article by the specified id. If no news article with that id is found, it should return a status of 404. If an error occurs, it should return a status of 500.

The POST /api/newsposts/ endpoint should create a new news article and return the news article object with the specified id. If an error occurs, it should return a status of 500. The data for the new news article should be taken from the request body. Below is an example request body in JSON format:

{
  "title": "A Fox in Chernihiv Zoo Gives Birth to a Cub",
  "text": "A wonderful event has occurred at the Chernihiv Zoo! A fox named Red has given birth to a beautiful cub! So hurry up and visit to see this adorable creature!"
}

The PUT /api/newsposts/:id endpoint should update a news article by the specified id, changing the data specified in the body, and return the modified news article object. If no news article with that id is found, it should return a status of 404. If an error occurs, it should return a status of 500. Below is an example request body in JSON format:

{
  "title": "Little Fox"
}

The DELETE /api/newsposts/:id endpoint should delete a news article by the specified id and return a status of 200. If no news article with that id is found, it should return a status of 404. If an error occurs, it should return a status of 500.

Add logging middleware that will be writing logs in format {METHOD} {URL} query:{QUERYPARAMS} body:{BODY}
