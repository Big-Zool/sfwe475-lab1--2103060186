# sfwe475-lab1--2103060186


Request method -> GET
Status code    -> 304 (when i delete the cach by domig hard refresh it become 200)
content-type   -> application/json; charset=utf-8
Body           -> {
  				"userId": 1,
  				"id": 1,
  				"title": "delectus aut autem",
  				"completed": false
			   }
			   
_______________
https://jsonplaceholder.typicode.com/todos/99999 
404             -> client error, meaning the request was the problem 
_______________

Scheme 		Host 						Path
https    ://jsonplaceholder.typicode.com     /todos/99999


____________

https://jsonplaceholder.typicode.com/todos?userId=1
It uses the user ID to filter the search .



_______________________

A GET request asks the server to send data back to me
a POST requestt asks the server to receive and process data 
that my browser sends 

__________________

Is the response safe to cache?
Yes, The headercache-control: max-age=43200 lets the browser keep and reuse the response for 43200 seconds.
 Nothing like "no-store" is there to forbid caching.

