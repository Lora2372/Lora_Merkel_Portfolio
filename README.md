# Portfolio
Go to the github web page: https://github.com/Lora2372/Lora_Merkel_Portfolio

Click code, then download ZIP, save it to your computer, and open it with your unzipping application of choice (such as winrar). Extract it to a location of your choice. Open up visual studio code, click file, open folder, navigate to the project directory, and click select folder.

Run npm install in both frontend and backend directories

NOTE!!! Beaware that after cloning this repo, you need to delete the upload folder and its contents in the strapi backend.

In the backend run npm run develop

In your backend recreate the folder upload under extensions, then in the upload folder create the config folder, in the config folder create settings.json file with the following structure.

    { "provider": "cloudinary", "providerOptions": { "cloud_name": "xxxx", "api_key": "xxxxxx", "api_secret": "xxx" } } Replace the content of cloud_name, api_key and api_secret with your own credentials from Cloudnairy

NOTE!!! In your frontend, change settings for student-portfolio/student_frontend/src/pages/contact.js, the settings for form action must be specifically be yours that you recieved from formspree

In the frontend run gatsby develop

To use the git make file, please ensure that there are only tabs and no spaces. You can control this with the following add-on "Space Cadet"

Then you're good to go!
