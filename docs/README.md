# Tech Shadow!

### Available Endpoints
### Base URL: https://tech-shadow.herokuapp.com

|       Method        |      Route            | Return Object                         
| -------------       |-----------------------| ------------------------------------------
| POST                | /api/v1/users/login   | Log in   
| GET                 | /api/v1/users/logout  | Log out   
| GET                 | /api/v1/users/Id      | Find a user by its ID
| GET                 | /search?term=query    | find users based on its tags   
| GET                 | /api/v1/users         | Shows all users 


## What it is
Tech shadow is the future of peer coding and tutoring! Our vision is to allow coders like the ones on our team have what we call "master devs" shadow us as we code and make sure there we don't make any errors. This allows for fluid programming. Our API gives you access to a database of master developers waiting to be hired by you. Check out the live deployment [here](https://tech-shadow.herokuapp.com).

## User schema
Our user schema looks like this:
```
{
  name:       {type: String, trim: true, required: true},
  email:      { type: String, uniquie: true, trim: true, required: true},
  password:   {type: String, required: true, select: false},
  codeLanguage: [{type: Schema.Types.ObjectId, ref: "Skill"}]
}
```
And ths nested skill schema is:
```
{
  name: {type: String, required: true}
}
```

## What did we use to build our app?
We used mongoDB as our database
We also used express js
We used JWT and custom middleware for authentication

## How do I use routes?
You might not be able to find a user by its ID but you can find a user by tagname and if you liked them you can remember them with their id and use that to access it later. You can also view all users at once if you want to go through the hassle of looking through all of out users. 

