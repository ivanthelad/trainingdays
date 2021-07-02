(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{309:function(t,e,a){t.exports=a.p+"assets/img/pipelines.0565036c.svg"},318:function(t,e,a){t.exports=a.p+"assets/img/pr-build-validation.e0c6fcce.png"},681:function(t,e,a){t.exports=a.p+"assets/img/scm-frontend-ci.3bc698be.png"},865:function(t,e,a){"use strict";a.r(e);var s=a(44),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"challenge-5-build-and-deploy-the-scm-frontend"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#challenge-5-build-and-deploy-the-scm-frontend"}},[t._v("#")]),t._v(" Challenge 5: Build and deploy the SCM Frontend")]),t._v(" "),s("p",[s("img",{attrs:{src:a(309),alt:"Azure Pipelines"}})]),t._v(" "),s("h2",{attrs:{id:"here-is-what-you-will-learn-🎯"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#here-is-what-you-will-learn-🎯"}},[t._v("#")]),t._v(" Here is what you will learn 🎯")]),t._v(" "),s("ul",[s("li",[t._v("Create a CI build to create SCM Frontend's deployment artifacts")]),t._v(" "),s("li",[t._v("Create a "),s("em",[t._v("Pull Request")]),t._v(" validation build, that is triggered to validate a "),s("em",[t._v("Pull Request")])]),t._v(" "),s("li",[t._v("Create a CD Build to deploy SCM Frontend to the stages "),s("em",[t._v("Development")]),t._v(" and "),s("em",[t._v("Testing")])])]),t._v(" "),s("h2",{attrs:{id:"table-of-contents"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#table-of-contents"}},[t._v("#")]),t._v(" Table of Contents")]),t._v(" "),s("ol",[s("li",[s("a",{attrs:{href:"#create-the-ci-build"}},[t._v("Create the CI Build")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#create-the-pull-request-validation-build"}},[t._v("Create the Pull Request Validation Build")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#create-the-cd-build"}},[t._v("Create the CD Build")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#create-a-pull-request"}},[t._v("Create a Pull Request")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#trigger-the-pr-build-to-validate-a-pull-request"}},[t._v("Trigger the PR-Build to validate a Pull Request")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#see-the-build-flow-in-action"}},[t._v("See the Build Flow in Action")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#wrap-up"}},[t._v("Wrap-Up")])])]),t._v(" "),s("h2",{attrs:{id:"create-the-ci-build"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-the-ci-build"}},[t._v("#")]),t._v(" Create the CI Build")]),t._v(" "),s("p",[t._v("Go to Azure Boards and set the User Story S14 and S15 to active. We create a new build definition with the steps as follows:")]),t._v(" "),s("ul",[s("li",[t._v("Build the SCM Frontend")]),t._v(" "),s("li",[t._v("Copy the ARM Template to the artifact location")]),t._v(" "),s("li",[t._v("Publish the artifacts")])]),t._v(" "),s("ol",[s("li",[t._v("Create a feature branch "),s("em",[t._v('"features/scmfrontendcicd"')]),t._v(" and check it out")]),t._v(" "),s("li",[t._v("Add a file named "),s("code",[t._v("_scm-frontend-ci.yaml_")]),t._v(" in the directory "),s("code",[t._v("_day4/apps/pipelines_")])]),t._v(" "),s("li",[t._v("Add the following yaml snippet that defines the build trigger:")])]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("pr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" none\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("trigger")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branches")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("include")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" master\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("paths")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("include")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" day4/apps/frontend/*\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" day4/apps/infrastructure/templates/scm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("fe.json\n")])])]),s("p",[t._v("Here we specified when the build must be triggered. The build is triggered only if changes were made to the master branch and when the changes were made to either "),s("code",[t._v("_day4/apps/infrastructure/templates/scm-fe.json_")]),t._v(" or to any files in the directory "),s("code",[t._v("_day4/apps/frontend/\\*_")])]),t._v(" "),s("ol",{attrs:{start:"4"}},[s("li",[t._v("Add the following yaml snippet to define the needed build steps:")])]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("steps")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("task")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Npm@1\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("inputs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("command")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'install'")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("workingDir")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'day4/apps/frontend/scmfe'")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("task")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Npm@1\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("inputs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("command")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'custom'")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("workingDir")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'day4/apps/frontend/scmfe'")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("customCommand")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'run build'")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("task")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" CopyFiles@2\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("inputs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("SourceFolder")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'day4/apps/frontend/scmfe/dist'")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Contents")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'**'")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("TargetFolder")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'$(Build.ArtifactStagingDirectory)/dist'")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("task")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" CopyFiles@2\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("inputs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("sourceFolder")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" day4/apps/infrastructure/templates\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("contents")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token scalar string"}},[t._v("\n        scm-fe.json")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("targetFolder")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $(Build.ArtifactStagingDirectory)/templates\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("task")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" PublishPipelineArtifact@1\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("inputs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("targetPath")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $(Build.ArtifactStagingDirectory)\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("artifactName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" drop\n")])])]),s("ol",{attrs:{start:"5"}},[s("li",[t._v("Commit your changes and push the branch to your remote repository")]),t._v(" "),s("li",[t._v("Navigate to your Azure DevOps project")]),t._v(" "),s("li",[t._v("In your project navigate to the Pipelines page. Then choose the action to create a new Pipeline")]),t._v(" "),s("li",[t._v("Walk through the steps of the wizard by first selecting Azure Repos Git as the location of your source code")]),t._v(" "),s("li",[t._v("Select your college repository")]),t._v(" "),s("li",[t._v("Select "),s("em",[t._v('"Existing Azure Pipelines YAML file"')])]),t._v(" "),s("li",[t._v("Select your feature branch and specify the path: "),s("em",[t._v('"/day4/apps/pipelines/scm-frontend-ci.yaml"')])]),t._v(" "),s("li",[t._v("Run your CI Build by clicking the action "),s("em",[t._v('"Run"')])]),t._v(" "),s("li",[t._v("Rename your CI Build to "),s("em",[t._v('"SCM-Frontend-CI"')])]),t._v(" "),s("li",[t._v("Navigate to the Pipelines page and open the last run of the build "),s("em",[t._v('"SCM-Frontend-CI"')]),t._v(". You see that the artifact is linked to your build")])]),t._v(" "),s("h2",{attrs:{id:"create-the-pull-request-validation-build"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-the-pull-request-validation-build"}},[t._v("#")]),t._v(" Create the Pull Request Validation Build")]),t._v(" "),s("p",[t._v("In "),s("RouterLink",{attrs:{to:"/day4-azdevops/challenges/challenge-2.html"}},[t._v("Challenge 2")]),t._v(" we configured the master branch's policies to require a "),s("em",[t._v("Pull Request")]),t._v(" before changes are merged into the master.\nWith Azure Pipelines you can define a build that is executed whenever a Pull Request is created in order to validate a merge into the master branch.")],1),t._v(" "),s("ol",[s("li",[t._v("Add a file named "),s("code",[t._v("scm-frontend-pr.yaml")]),t._v(" in the directory "),s("code",[t._v("_day4/apps/pipelines_")])]),t._v(" "),s("li",[t._v("Add the following yaml snippet:")])]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("trigger")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" none\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("steps")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("task")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Npm@1\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("inputs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("command")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'install'")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("workingDir")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'day4/apps/frontend/scmfe'")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("task")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Npm@1\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("inputs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("command")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'custom'")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("workingDir")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'day4/apps/frontend/scmfe'")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("customCommand")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'run build'")]),t._v("\n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[t._v("Commit your changes and push the branch to your remote repository")]),t._v(" "),s("li",[t._v("Navigate to your Azure DevOps project")]),t._v(" "),s("li",[t._v("In your project navigate to the Pipelines page. Then choose the action to create a new pipeline")]),t._v(" "),s("li",[t._v("Walk through the steps of the wizard by first selecting Azure Repos Git as the location of your source code")]),t._v(" "),s("li",[t._v("Select your college repository")]),t._v(" "),s("li",[t._v("Select "),s("em",[t._v('"Existing Azure Pipelines YAML file"')])]),t._v(" "),s("li",[t._v("Select your feature branch and specify the path: "),s("em",[t._v('"/day4/apps/pipelines/scm-frontend-pr.yaml"')])]),t._v(" "),s("li",[t._v("Run your PR Build by clicking the action "),s("em",[t._v('"Run"')])]),t._v(" "),s("li",[t._v("Rename your PR Build to "),s("em",[t._v('"SCM-Frontend-PR"')])])]),t._v(" "),s("h2",{attrs:{id:"create-the-cd-build"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-the-cd-build"}},[t._v("#")]),t._v(" Create the CD Build")]),t._v(" "),s("p",[t._v("Now we have created the deployment artifacts with the build "),s("em",[t._v("SCM-Frontend-CI")]),t._v(". It is time to create a Release pipeline to deploy the SCM Frontend to Azure. As in "),s("RouterLink",{attrs:{to:"/day4-azdevops/challenges/challenge-3.html"}},[t._v("Challenge 3")]),t._v(" we deploy the artifacts to the stages "),s("em",[t._v("Development")]),t._v(" and "),s("em",[t._v("Testing")]),t._v(" and we create a manual "),s("em",[t._v("Pre-deployment condition")]),t._v(" to approve the deployment to the "),s("em",[t._v("Testing")]),t._v(" stage.")],1),t._v(" "),s("ol",[s("li",[s("p",[t._v("Create a new release build and name it "),s("em",[t._v("SCM-Frontend-CD")])])]),t._v(" "),s("li",[s("p",[t._v("Add the SCM-Frontend-CI build's artifacts")])]),t._v(" "),s("li",[s("p",[t._v("Create a "),s("em",[t._v("Development")]),t._v(" stage")])]),t._v(" "),s("li",[s("p",[t._v("Add the the following variables and replace "),s("strong",[t._v("'prefix'")]),t._v(" with your own value:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Variable")]),t._v(" "),s("th",[t._v("Value")]),t._v(" "),s("th",[t._v("Scope")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("ResourceGroupName")]),t._v(" "),s("td",[t._v("ADC-DAY4-SCM-DEV")]),t._v(" "),s("td",[t._v("Development")])]),t._v(" "),s("tr",[s("td",[t._v("Location")]),t._v(" "),s("td",[t._v("westeurope")]),t._v(" "),s("td",[t._v("Development")])]),t._v(" "),s("tr",[s("td",[t._v("StorageAccountName")]),t._v(" "),s("td",[s("em",[t._v("{prefix}")]),t._v(" day4scmfedev")]),t._v(" "),s("td",[t._v("Development")])]),t._v(" "),s("tr",[s("td",[t._v("ApplicationInsightsName")]),t._v(" "),s("td",[t._v("your ApplicationInsights instance name of stage Development")]),t._v(" "),s("td",[t._v("Development")])]),t._v(" "),s("tr",[s("td",[t._v("ContactsEndpoint")]),t._v(" "),s("td",[t._v("https endpoint of the SCM Contacts API in Development stage")]),t._v(" "),s("td",[t._v("Development")])]),t._v(" "),s("tr",[s("td",[t._v("ResourcesEndpoint")]),t._v(" "),s("td",[s("em",[t._v("leave blank, will be needed later")])]),t._v(" "),s("td",[t._v("Development")])]),t._v(" "),s("tr",[s("td",[t._v("SearchEndpoint")]),t._v(" "),s("td",[s("em",[t._v("leave blank, will be needed later")])]),t._v(" "),s("td",[t._v("Development")])]),t._v(" "),s("tr",[s("td",[t._v("ReportsEndpoint")]),t._v(" "),s("td",[s("em",[t._v("leave blank, will be needed later")])]),t._v(" "),s("td",[t._v("Development")])])])])]),t._v(" "),s("li",[s("p",[t._v("Go to the Tasks section of the "),s("em",[t._v('"Development"')]),t._v(" stage and use the latest Ubuntu version to run the agent on")])]),t._v(" "),s("li",[s("p",[t._v("Add the task "),s("em",[t._v('"ARM template deployment"')])])]),t._v(" "),s("li",[s("p",[t._v("Select your Azure Subscription")])]),t._v(" "),s("li",[s("p",[t._v("Set the name of the ResourceGroup, use the variable $(ResourceGroupName)")])]),t._v(" "),s("li",[s("p",[t._v("Set the Location, use the variable $(Location)")])]),t._v(" "),s("li",[s("p",[t._v("Select the template from your drop location")])]),t._v(" "),s("li",[s("p",[t._v("Override the template parameters as follow:")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("-storageAccountName "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("StorageAccountName"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("Add three additional Azure CLI Tasks. To deploy the SCM Frontend Single Page Application to a staging environment we need to set the endpoints of the APIs and the InstrumentationKey of ApplicationInsights. As we deploy the single application to a storage account we need to enable the static website hosting for the storage account. Use the following Azure CLI tasks before the application is deployed to the storage account and after the Resource Group deployment task:")]),t._v(" "),s("ol",[s("li",[s("p",[t._v('Azure CLI task "Enable static website hosting" inline script:')]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("az storage blob service-properties update --account-name "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("StorageAccountName"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v(" --static-website  --index-document index.html --404-document index.html\n")])])])]),t._v(" "),s("li",[s("p",[t._v('Azure CLI task "Configure SPA settings" inline script:')]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"var uisettings = { '),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("enableStats"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": true, "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("endpoint"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("ContactsEndpoint"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(", "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("resourcesEndpoint"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("ResourcesEndpoint"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(", "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("searchEndpoint"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("SearchEndpoint"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(", "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("reportsEndpoint"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("ReportsEndpoint"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(", "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("aiKey"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),t._v("az resource show -g "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("$(")]),t._v("ResourceGroupName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" -n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("$(")]),t._v("ApplicationInsightsName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" --resource-type "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"microsoft.insights/components"')]),t._v(" --query "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"properties.InstrumentationKey"')]),t._v(" -o tsv"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(' };"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("System.ArtifactsDirectory"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("/_SCM-Frontend-CI/drop/dist/settings/settings.js\n")])])])]),t._v(" "),s("li",[s("p",[t._v('Azure CLI task "Copy SPA to StorageAccount" inline script:')]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("az storage blob upload-batch -d "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'$web'")]),t._v(" --account-name "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("StorageAccountName"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v(" -s "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("System.ArtifactsDirectory"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("/_SCM-Frontend-CI/drop/dist\n")])])])])])]),t._v(" "),s("li",[s("p",[t._v("Save the release definition and create a release to check if everything works")])])]),t._v(" "),s("h3",{attrs:{id:"create-the-testing-stage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-the-testing-stage"}},[t._v("#")]),t._v(" Create the "),s("em",[t._v("Testing")]),t._v(" stage")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Edit the Release definition and go to the task view")])]),t._v(" "),s("li",[s("p",[t._v("Clone the "),s("em",[t._v("Development")]),t._v(" stage and rename the cloned stage to "),s("em",[t._v("Testing")])])]),t._v(" "),s("li",[s("p",[t._v("Open the Release definition's variable view and add new variables as follow:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Variable")]),t._v(" "),s("th",[t._v("Value")]),t._v(" "),s("th",[t._v("Scope")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("ResourceGroupName")]),t._v(" "),s("td",[t._v("ADC-DAY4-SCM-TEST")]),t._v(" "),s("td",[t._v("Testing")])]),t._v(" "),s("tr",[s("td",[t._v("Location")]),t._v(" "),s("td",[t._v("westeurope")]),t._v(" "),s("td",[t._v("Testing")])]),t._v(" "),s("tr",[s("td",[t._v("StorageAccountName")]),t._v(" "),s("td",[s("em",[t._v("{prefix}")]),t._v(" day4scmfetest")]),t._v(" "),s("td",[t._v("Testing")])]),t._v(" "),s("tr",[s("td",[t._v("ApplicationInsightsName")]),t._v(" "),s("td",[t._v("your ApplicationInsights instance name of stage Testing")]),t._v(" "),s("td",[t._v("Testing")])]),t._v(" "),s("tr",[s("td",[t._v("ContactsEndpoint")]),t._v(" "),s("td",[t._v("https endpoint of the SCM Contacts API in Testing stage")]),t._v(" "),s("td",[t._v("Testing")])]),t._v(" "),s("tr",[s("td",[t._v("ResourcesEndpoint")]),t._v(" "),s("td",[s("em",[t._v("leave blank, will be needed later")])]),t._v(" "),s("td",[t._v("Testing")])]),t._v(" "),s("tr",[s("td",[t._v("SearchEndpoint")]),t._v(" "),s("td",[s("em",[t._v("leave blank, will be needed later")])]),t._v(" "),s("td",[t._v("Testing")])]),t._v(" "),s("tr",[s("td",[t._v("ReportsEndpoint")]),t._v(" "),s("td",[s("em",[t._v("leave blank, will be needed later")])]),t._v(" "),s("td",[t._v("Testing")])])])])]),t._v(" "),s("li",[s("p",[t._v("Save the definition and create a release")])])]),t._v(" "),s("h2",{attrs:{id:"create-a-pull-request"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-a-pull-request"}},[t._v("#")]),t._v(" Create a Pull Request")]),t._v(" "),s("p",[t._v("Create a Pull Request and merge all changes into the master branch. Don't forget to link the User Stories S14 and S15.")]),t._v(" "),s("h2",{attrs:{id:"trigger-the-pr-build-to-validate-a-pull-request"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#trigger-the-pr-build-to-validate-a-pull-request"}},[t._v("#")]),t._v(" Trigger the PR-Build to validate a Pull Request")]),t._v(" "),s("p",[t._v("Now we have to enable the PR-Build to be triggered whenever a Pull Request is created and when files are changed that belongs to the SCM Frontend.")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Open the branch policies of the master branch")])]),t._v(" "),s("li",[s("p",[t._v("Add a build validation and select your SCM-Frontend-PR build")])]),t._v(" "),s("li",[s("p",[t._v("Set the path filter as follow:")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("/day4/apps/infrastructure/templates/scm-fe.json"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("/day4/apps/frontend/*\n")])])]),s("p",[t._v("With this filter the PR build is only triggered when files were changed that belongs to the SCM Frontend")])]),t._v(" "),s("li",[s("p",[t._v("Save your changes")])])]),t._v(" "),s("h2",{attrs:{id:"see-the-build-flow-in-action"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#see-the-build-flow-in-action"}},[t._v("#")]),t._v(" See the Build Flow in Action")]),t._v(" "),s("p",[t._v("Now it's time to see the whole build flow in action.")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Checkout the master branch and pull the latest changes")])]),t._v(" "),s("li",[s("p",[t._v("Create and checkout a new feature branch "),s("em",[t._v("features/scmfrontendflow")])])]),t._v(" "),s("li",[s("p",[t._v("Open the file "),s("a",{attrs:{href:"../apps/frontend/scmfe/src/components/home/Home.vue"}},[t._v("day4/apps/frontend/scmfe/src/components/home/Home.vue")]),t._v(" and change the name the "),s("em",[t._v("Welcome")]),t._v(" text in line 13:")]),t._v(" "),s("div",{staticClass:"language-HTML extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("display-2 font-weight-bold mb-3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Welcome to My SCM Contacts App"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("Commit your changes and push the feature branch to your remote repository")])]),t._v(" "),s("li",[s("p",[t._v("Create a "),s("em",[t._v("Pull Request")]),t._v(" to merge the changes into the master branch. Don't forget to link the User Story S15.\nYou will see that the PR-Build is part of the required policies of your Pull Request\n"),s("img",{attrs:{src:a(318),alt:"PullRequest"}})])]),t._v(" "),s("li",[s("p",[t._v("Complete your Pull Request")])]),t._v(" "),s("li",[s("p",[t._v("Navigate to the Pipelines view and you will notice that the SCM-Contacts-CI build is triggered\n"),s("img",{attrs:{src:a(681),alt:"SCM-Frontend-CI"}}),t._v("\nWait until the build is finished and the deployment artifacts are available")])]),t._v(" "),s("li",[s("p",[t._v("Navigate to the Release view and you will see that the CD Pipeline is triggered and starts to deploy the artifacts to the Development stage")])]),t._v(" "),s("li",[s("p",[t._v("Go to Azure Boards and set the stories S14 and S15 to completed")])])]),t._v(" "),s("h2",{attrs:{id:"wrap-up"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wrap-up"}},[t._v("#")]),t._v(" Wrap-Up")]),t._v(" "),s("p",[t._v("🥳 "),s("strong",[t._v("Congratulation")]),t._v(" - You have completed the User Stories S14 and S15 🥳")]),t._v(" "),s("p",[t._v("Now you have seen how you can create a Pull Request validation build that protects your master branch from build breaks. After changes are merged into the master branch, the CI build is triggered and it creates the deployment artifacts. The deployment artifacts are then deployed to your stages. After this challenge we have deployed the SCM Frontend to Azure. The SCM Contact API and SCM Frontend is running on Azure.")]),t._v(" "),s("p",[t._v("Now that you have deployed the Frontend to Azure it's time to test it! Go to the Azure Portal and navigate to the ResourceGroup "),s("code",[t._v("ADC-DAY4-SCM-DEV")]),t._v(". Open the StorageAccount "),s("code",[t._v("{prefix} day4scmfedev")]),t._v(" and go to Static website. Copy the url of the primary endpoint, open a new browser window and paste the url.")]),t._v(" "),s("p",[t._v("If everything is configured correctly you can add some contacts.")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("📝 At the moment we have only deployed the SCM Contacts API and the SCM Frontend. It is not possible to set an image for a contact or to create visit reports.")])]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/day4-azdevops/challenges/challenge-4.html"}},[t._v("◀ Previous challenge")]),t._v(" | "),s("RouterLink",{attrs:{to:"/day4-azdevops/"}},[t._v("🔼 Day 4")]),t._v(" | "),s("RouterLink",{attrs:{to:"/day4-azdevops/challenges/challenge-bo-1.html"}},[t._v("Next challenge ▶")])],1)])}),[],!1,null,null,null);e.default=n.exports}}]);