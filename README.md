[Render] Registration, Creating a Service and Deployment
These instructions are for the deployment of the app to Render instead of Heroku (which no longer offers any free tier options).

The application we are building in this course will require absolutely no changes to use (yay!).

1. Register for Render Account
Navigate to https://dashboard.render.com/register and connect your Github / Gmail / GitLab account (or use your email address if you would prefer) to register.

2. Select Web Service
After confirming your email you should be redirected to the Render Dashboard. Click the Web Services panel:


3. Authorize GitHub
You will see a prompt to connect your GitHub or GitLab account. This step will require you to log in to GitHub and authorize Render to see and make changes to your repositories. It will also prompt you to install the Render app.


https://render.com/docs/github
https://render.com/docs/gitlab

4. Connect Repository
After connecting your account, you will need to connect the repo that was just created to the new service by clicking the Connect button to the right of it. My repo was named nrf, yours might be emaily or something totally different:


5. Create Service
This will launch a form asking for information about your new service. Give the service a Name and set the Branch to main (or master, if that is what you chose to do). Scroll down and find the Build Command. Set this to npm install. This is very important as it will ensure that your dependencies are installed on the remote server.


The Start Command should be auto-populated with the node index.js. If it isn't then, the repo you have connected is either empty or not structured properly. The root of the repository should include the index.js file and the package.json and should not be nested inside of an additional directory. Render expects this structure in order to properly determine certain environment settings and to allow for proper deployment.

Scroll down some more and make sure that the Free tier is selected, then, click the Create Web Service button.

6. Deployment
After clicking the Create Web Service button, Render will build and deploy your application to a remote server. Watch the logs and you will eventually see a success message similar to below:


7. Visit your Deployed Application
After a successful deployment, you can visit using the URL provided below the service name:


You should see the "hi there" text printed on your screen.

Follow Up Deployments
After this first deployment, Render will build and deploy every time you commit and push to your main branch.

Important Note - As mentioned in the final step, Render will build and deploy every time you commit and push to your main branch. This is very important to understand as there are many instances throughout the course where a deployment is not going to be appropriate and you will see a build failure. We only deploy 4 or 5 times in total throughout the course! Make sure that you are paying attention to these intervals and that you are not chasing errors for a deployment that was never made or shown in the course videos.
