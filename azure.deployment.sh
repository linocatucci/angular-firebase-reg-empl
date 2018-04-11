#!/bin/bash

gitrepo=https://github.com/linocatucci/angular-firebase-reg-empl
token=9fdb487e1a85f7dc8c142abceddd3269f46b7bac
webappname=lc-ang-appv2

# Create a resource group.
#az group create --location westeurope --name myResourceGroup

# Create an App Service plan in `FREE` tier.
#az appservice plan create --name $webappname --resource-group myResourceGroup --sku FREE

# Create a web app.
az webapp create --name $webappname --resource-group playground-angular-rg-dev --plan $webappname

# Configure continuous deployment from GitHub.
# --git-token parameter is required only once per Azure account (Azure remembers token).
az webapp deployment source config --name $webappname --resource-group playground-angular-rg-dev \
--repo-url $gitrepo --branch master --git-token $token

# Copy the result of the following command into a browser to see the web app.
echo http://$webappname.azurewebsites.net
