# IMPORTANT THINGS FOR DEPLOYMENT:

## Backend:

Backend should be chill to redeploy. Just edit code and deploy and see if it works. 

## Frontend:

Inorder to deploy frontend, please make changes in a separate frontend repository / folder and then run:

### "npm run build"

To generate a build folder. You then will need to copy and paste this content into the backend folder. (You can just replace all the content within the static folder with this content.)

Note: Inorder for it to work, you need to move the css, js and media files out of the inner static folder and into the main static folder. (Follow the same structure as the current static folder PLEASE!)
Ensure you change the index.html file paths to reflect this change.


