from AWS tutorial: [Deploy a Web App on AWS Elastic Beanstalk](https://aws.amazon.com/getting-started/guides/deploy-webapp-elb/)

Notes: 
- The default @aws versions in the cdk template didn't line up - I had to edit the imports to use @aws/cdk-core 
- I had to edit the solution stack to use Node.js 16
- I had to re-zip the app after making these changes
- I had to delete the app.zip file because it was too large for github