# Sample Azure Static Web App

This project was created to represent a static web app written with React (```Create React App```), with a supporting managed API written with ```Node.js v18 (JavaScript)``` and the ```v4``` Azure Functions programming model.

It contains both the ```staticwebapp.config.json``` and ```swa-cli.config.json``` files.

## Pre-requisites

1. Node.js V18 or above
2. Azure CLI - https://learn.microsoft.com/en-us/cli/azure/install-azure-cli?view=azure-cli-latest
2. Azure CLI (staticwebapp) - https://learn.microsoft.com/en-us/cli/azure/staticwebapp?view=azure-cli-latest
3. SWA CLI - https://azure.github.io/static-web-apps-cli

## Getting Started

1. Clone the repository
   ```
   git clone https://github.com/your-github-organization/my-static-web-app
   cd my-static-web-app/react-app
   ```
2. Install the npm packages
   ```
   npm install
   cd ./api
   npm install
   cd ..
   ```
3. Run the Front-end app only
   ```
   npm start
   ```
4. Run the API only
   ```
   npm run start-api
   ```
5. Use the SWA Emulator to run the Front-end (assumes the API is already running)
   ```
   npm run swa-start-fe
   ```
5. Use the SWA Emulator to run the Front-end and API
   ```
   npm run swa-start-all
   ```
6. Perform a Production Build
   ```
   swa build
   ```
## Local Development

For local development, the front-end and APi will be available at the following URLs.

> Using react-app dev server: http://localhost:3000

> The API is served at: http://localhost:7071

> Using Azure Static Web Apps emulator: http://localhost:4280

## Deployment

1. Create a resource group
   ```
   az group create -n <resource group> -l uksouth --query "properties.provisioningState"
   ```
2. Create a Static Web App resource

   **Note:** static web app resources are only available in these locations: ```westus2```,```centralus```,```eastus2```,**```westeurope```**,```eastasia```
   ```
   az staticwebapp create -n <app name> -g <resource group> -l westeurope --sku Standard --query "defaultHostname"
   ```
   **Retrieve the deployment token from the Azure Portal.**

   **or, retrieve the deployment token using the AZ CLI.**
   ```
   az staticwebapp secrets list --name <app name> --query "properties.apiKey"
   ```

3. Perform a Production Build
   ```
   swa build
   ```
4. Login to Azure using the SWA CLI
   ```
   swa login
   ```
5. Deploy to the **Production** environment
   ```
   swa deploy --resource-group <resource group> --app-name <app name> --env production --deployment-token <deployment token>
   ```
6. Deploy to the **Preview** environment
   ```
   swa deploy --resource-group <resource group> --app-name <app name> --env preview --deployment-token <deployment token>
   ```

## Resources

### Azure Static Web Apps

- Learn how to [Publish an Angular, React, Svelte, or Vue JavaScript app and API with Azure Static Web Apps](https://docs.microsoft.com/learn/modules/publish-app-service-static-web-app-api?wt.mc_id=mslearn_staticwebapp-github-jopapa)
- [API support in Azure Static Web Apps](https://docs.microsoft.com/azure/static-web-apps/apis?wt.mc_id=mslearn_staticwebapp-github-jopapa)
- [Add an API to Azure Static Web Apps](https://docs.microsoft.com/azure/static-web-apps/add-api?wt.mc_id=mslearn_staticwebapp-github-jopapa)
- [Authentication and authorization](https://docs.microsoft.com/azure/static-web-apps/authentication-authorization?wt.mc_id=mslearn_staticwebapp-github-jopapa)
- [Routes](https://docs.microsoft.com/azure/static-web-apps/routes?wt.mc_id=mslearn_staticwebapp-github-jopapa)
- [Review pre-production environments](https://docs.microsoft.com/azure/static-web-apps/review-publish-pull-requests?wt.mc_id=mslearn_staticwebapp-github-jopapa)

### Azure Functions

- Learn how to [Refactor Node.js and Express APIs to Serverless APIs with Azure Functions](https://docs.microsoft.com/learn/modules/shift-nodejs-express-apis-serverless/?wt.mc_id=mslearn_staticwebapp-github-jopapa)
- Learn about the Azure Functions [local.settings.json](https://docs.microsoft.com/azure/azure-functions/functions-run-local#local-settings-file?wt.mc_id=mslearn_staticwebapp-github-jopapa) file
- Learn how to [Deploy to Azure Using Azure Functions](https://code.visualstudio.com/tutorials/functions-extension/getting-started?wt.mc_id=mslearn_staticwebapp-github-jopapa)
- Sign up for a [Free Trial of Azure](https://azure.microsoft.com/free/?wt.mc_id=mslearn_staticwebapp-github-jopapa)

### Visual Studio Code

- [Azure Free Trial](https://azure.microsoft.com/free/?wt.mc_id=mslearn_staticwebapp-github-jopapa)
- [VS Code](https://code.visualstudio.com?wt.mc_id=mslearn_staticwebapp-github-jopapa)
- [VS Code Extension for Node on Azure](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-node-azure-pack&WT.mc_id=mslearn_staticwebapp-github-jopapa)
- Azure Functions [local.settings.json](https://docs.microsoft.com/azure/azure-functions/functions-run-local#local-settings-file?WT.mc_id=mslearn_staticwebapp-github-jopapa) file

### Debugging Resources

- [Debugging Angular in VS Code](https://code.visualstudio.com/docs/nodejs/angular-tutorial?wt.mc_id=mslearn_staticwebapp-github-jopapa)
- [Debugging React in VS Code](https://code.visualstudio.com/docs/nodejs/reactjs-tutorial?wt.mc_id=mslearn_staticwebapp-github-jopapa)
- [Debugging Vue in VS Code](https://code.visualstudio.com/docs/nodejs/vuejs-tutorial?wt.mc_id=mslearn_staticwebapp-github-jopapa)
