# backend-api-for-attendance-tracker
This nodeJs backend Api is used to track the attendance system .
# For testing this api in your local system
1. Fork and Clone this repo.
2. open CLI in the route folder of this project.
3. Run "npm start" command.
4. Now you can test this Api for marking the attendance.
5. First you need to sign up the user.
6. After that, create a login session for this user.Because marking the attendance need the authorize user which is done by creating the jsonwe
# List of api 
1. for signing-up the user - goto 'http://localhost:8000/users/sign-up'. Pass the email, password and name of a user in a form of POST.
2. After signing up the user, create session for that user. - goto 'http://localhost:8000/users/create-session' and pass the email and password in a form of POST.
3. For marking the user present, - goto 'http://localhost:8000/api/attendance/mark-present' , pass the jwt token in header to authenticate.
4. For getting all the users present today, - goto 'http://localhost:8000/api/attendance/total-users-present' , *GET* request.
