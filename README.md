# CMPT276 Assignment 2
Assignment 2 of CMPT276 instructed by Bobby Chan in 2024.

Official Description: "You are commissioned to create an application to track a group of students.  Your app will have the ability to add new students, change student attributes, and delete students."

Assignment guidelines can be found at: <https://canvas.sfu.ca/courses/83043/assignments/952047>

## Student Tracker
A small web app designed to track a group of students. Will be able to display students in rectangles. Can also add, edit, and delete students.

Deployed on Render.com.


## Notes for Marking This
### Port ID
The port when deploying this project to `localhost` have been changed to `9090`. This is because `8080` is being used by a local LLM that have the port number be hardcoded in.

### Environment Variables
Environment variables are being used to store the database credentials.

As shown in `src\main\resources\application.properties`, the environment variables are `${DB_ASN2_URL}`, `${DB_ASN2_USERNAME}`, and `${DB_ASN2_PASSWORD}`.

For my local development, I have set these environment variables using Windows Settings. You may need to replace these with actual environment variables. They should be provided with the txt file for assignment submission. If there are any issues, please contact me at <kzcheng@sfu.ca>.

### Commits with Descriptions
Some commits may have more details in descriptions. They may be useful to provide more insight.

### More Insight into my Workflow Available
If you are interested in seeing more of my workflow, feel free to check out the [GitHub Issue page](https://github.com/kzcheng/CMPT276-Assignment-2/issues) and the [GitHub Projects](https://github.com/users/kzcheng/projects/2) page of this assignment.

Work that are done will no longer be open, so remember to check not just the open Issues.

### Where Does Assignment 2 Begin?
Throughout the commit history, you can see that all the work, including Bobby's tutorial on Spring Boot and Assignment 1 are all in the history of this Repo.

To find the beginning of Assignment 2, you can go to commit [840a809](https://github.com/kzcheng/CMPT276-Assignment-2/commit/840a809136441366efe78a616364d2151480d8db).


## Other Stuff
### UI Mockup
![UI Mockup](<documentation/Screenshot 2024-02-12 185134.png>)

### Database Mockup
![Database Mockup](<documentation/Screenshot 2024-02-12 185121.png>)

### Usage of GitKraken in Workflow
![GitKraken](<documentation/Screenshot 2024-02-25 103216.png>)