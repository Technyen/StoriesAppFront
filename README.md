# **DEMO Stories for Kids**
https://storiesapp202307.netlify.app/

# Whatsapp me to request credentials for the site👉[![homepage](https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/40px-WhatsApp.svg.png)](https://api.whatsapp.com/send/?phone=541130662155&text=Hola,%20me%20gustaria%20probar%20tu%20sitio,%20me%20podrias%20pasar%20un%20usuario%20y%20password%20de%20prueba?&type=phone_number&app_absent=0 "Redirect to WhatsApp")



Backend link:

https://github.com/Technyen/StoriesAppBack

## **Index** 📝
- [Objetive](#Objetive)
- [Backend Part](#Backend)
  * Onion Architecture
  * Interfaces
  * Automapper
  * Xunit
  * Moq
  * CRUD
  * Swagger
  * Azure Cosmos DB
  * Azure Blob Storage
  * CI/CD
  * OpenID Connect
- [Frontend Part](#Frontend)
  * Create React App
  * Bootstrap
  * React Js
  * React-Bootstrap
  * React Hook Form
  * Netlify

## Introduction 🔊<a name="Objetive"></a>
This project was created mainly for children’s stories. The idea is to be able to create your own stories and be able to share them with your children or loved ones.

To carry out this project, I utilized Azure DevOps to organize the workload and plan out Epics, Features, and daily User Stories for coding, spikes, and design tasks. Also, I used Scrum to address my project as this working methodology helped my workflow be more agile, productive, and efficient. For planning we set up  the Sprint’s goals and essential tasks, evaluated and estimated the time they would take and how I would complete them. For example, before starting this project, I started to learn the C# language, React framework, and other technologies or libraries that are related, and we estimated the expected time to complete it. 

Throughout the project, I communicated with the product owner regularly to report on the progress of my task performed the day before and scheduled for the day ahead. I also  demonstrated the completed functionality of the project to my colleague, discussed possible better solutions and the current state of the product Backlog, and forecasted for the next sprint. We evaluated each iteration of the product backlog and assessed what went well and what needed to be improved.

The Project is separated into 2 repositories, which are a front-end React web app and a NET 7 back-end API. The reasons were modularization and deployment because having a multirepo approach makes my project scalable, and also easier to integrate with CI/CD tools.

## **The backend part 💻**<a name="Backend"></a>

<img width="1000" alt="image" src="https://github.com/Technyen/StoriesAppFront/assets/111035289/c2433f8f-fad9-48f8-b010-4683219c3735">


I used an **`Onion Architecture`** because it enables the layers to have a separation of concerns so they are not tightly coupled. The goal was to keep external dependencies as far away from the rest of the layers as possible. Also, all code depends on a domain model with layers connected by interfaces that offer better maintainability, and easier testability, and the entire code can be written for distinct levels without affecting the others. I split the code into 4 layers:

- Domain layer: Story, User

- Service layer: StoryService, UserService

- Infrastructure layer: CosmosDbService, BlobStorageService

- Presentation layer: StoryController. UserController.

I achieved loose coupling using **`C# interfaces`**. Having interfaces gave me the flexibility to provide the class instance which implements from the interface to reduce code complexity and make it easier in case we need to change the infrastructure behind it. In my code, you can see that I used IStorageService to abstract the service to store stories’ images, and IRepositoryService to abstract Cosmos which stores data about users and stories.

I enabled **`CORS`** in my API to allow requests originating from my app hosted in Netlify (production), and I created a logic in my program.cs file to check if the app was running in my development environment, in which case the CORS was set up to allow localhost.

I utilized **`AutoMapper`** to avoid writing code that maps one object type to another or having to manually transform the data. In the project, I mapped classes from the domain layer to the service layer for example, mapped CreateStoryModel to Story in the Stories API controller.    

I used a constructor **`dependency injection`** design pattern to make the classes loosely coupled. I injected Cosmos Db service and Azure Client with the singleton pattern that let me ensure that a class has only one instance while providing a global access point to this instance. And for the services I used scoped objects that are the same within a request, but different across different requests.

**`Xunit`** was used to unit test some methods as a proof of concept and it is planned to have a code coverage of all the code. **`Moq`** was involved in the creation of mock objects to control their behavior and outcomes. Each test was organized following the recommendations: the arrange part where I prepared the variables, the methods, or the services that need to be used to test. The act part, where I executed the method with all the required parameters, and finally, the assert where I validated if the outcome was expected or not.

<img width="1257" alt="image" src="https://github.com/Technyen/StoriesAppFront/assets/111035289/eb47dd92-1a3e-49fb-a135-285504b2a3d2">

For each entity, its respective **`CRUD`** controller was created, in turn, this API is connected to the services of each entity and then connects to the infrastructure layer consisting of COSMOS DB and BlobStorage services. I used **`Swagger`** to interact with the API and try out the endpoint calls easily. All code of the project was developed and debugged with **`Visual Studio 2022`**. 

<img width="1000" alt="image" src="https://github.com/Technyen/StoriesAppFront/assets/111035289/1ec3490a-ee38-46d8-95a5-1a9c136c0513">

**Azure services**

I authenticated all Azure services with **`passwordless`** authentication because it is considered a more secure alternative than using bare passwords. The Azure identity library in this regard, provides token authentication and allowed me to authenticate to Azure resources with the application locally in Visual Studio and to authenticate the API in Azure with DefaultAzureCredential and Role Based Access control. 

**`Azure Cosmos DB`** is a fully managed NoSQL database that I used for this project where I stored entities like Story and User as JSON documents. LINQ was used to make it easy to filter, order, and group collections of users and stories.

**`Azure Blob Storage`** allowed me to store files such as stories‘ images for my project represented as blobs which are organized in containers that work similarly to directories, that in turn, exist in a Storage Account.

**Deployment**

<img width="1000" alt="image" src="https://github.com/Technyen/StoriesAppFront/assets/111035289/1d24d44c-b910-46c4-8c1c-ff12dd36dd8b">


I used GitHub pipelines **`CI/CD`** solution to get more reliable PRs delivered and to automate the deployment workflow of my backend API. I created two pipelines, one that gets triggered with every push to a branch involved in a PR so the reviewer could validate that the project was built and the tests passed. This streamlined the PR process and reduced it to just reviewing the code and feedback discussion. The other pipeline is meant to execute the same building and testing steps plus the deployment phase to production only after the PR is approved and merged into the master branch.

I used **`OpenID Connect`** with the pipelines because it simplifies the way to verify the identity of the deployment pipeline (GitHub Actions) based on the authentication performed by the authorization server (Azure). It removes the responsibility of setting, storing, and managing passwords which is frequently associated with credential-based data breaches. 

## **The Frontend part 🖼️**<a name="Frontend"></a>


<img width="1106" alt="image" src="https://github.com/Technyen/StoriesAppFront/assets/111035289/fce264e1-06f7-442d-b58d-d7de77f6fd31">

The webpage consists of a header, a carrousel, and dedicated components. All the front-end logic was based on the end-user experience and the flow is divided into two available modes, creator and reader. When the creator logs in, the app calls the backend services, for example, the get method to retrieve all stories (getStoryAsync) and show them as a list. The creator can manage the story, such as creating, modifying, or deleting it. The reader only has access to view the stories created by the creator. Each story is shown using the StoryContent component with the story and an image to illustrate.

<img width="1018" alt="image" src="https://github.com/Technyen/StoriesAppFront/assets/111035289/e535397a-66ec-44a9-ae58-f26926d50a0e">

I used the **`create-react-app`** framework which allowed me to initallize the **`React`** project rapidly. Something nice to point out is the modularity of components as I didn’t have to write similar code multiple times for similar parts or if in the future I need to change any particular part, it should not affect other parts of my application. Also, this framework wraps all of the required dependencies needed. One of the dependencies that was very useful was the included linter that helped me scan my code and flag any code errors. For debugging errors, I often started by thinking out all possible causes and used breakpoints here and there to test each of these hypotheses, until the ultimate root cause was found. 


<img width="1004" alt="image" src="https://github.com/Technyen/StoriesAppFront/assets/111035289/db62ccd7-3937-4544-bcac-a54e174f3b20">


For the aesthetics of the components, I utilized the **`React-Bootstrap`** library because creates React components for me, I just needed to specify properties and hooks in the component, and the library did the rest of the abstraction.  Some components work with backend service, so I used Axios which simplified the communication with the API backend to get our payloads. For components such as LoginModal, RegisterModal, and CreateStory modal I employed **`React Hook Form`** tool to validate forms. With this library,  I was able to handle all the input states and their changes, ensuring that input was validated when the form was submitted.


<img width="1013" alt="image" src="https://github.com/Technyen/StoriesAppFront/assets/111035289/73270453-28bf-4778-8409-0631ca48f692">

I successfully deployed my React application with **`Netlify`** UI. To connect my Netflify account with my GitHub account, I authorized the connection and gave Netlify access to my frontend repository. Next, I added the repository as a new project and specified the necessary build settings for deployment. Since my project is divided into 2 repositories, I chose the StoriesFront directory for deployment. Upon completion of the building phase, Netlify automatically generated a unique URL for my project site.  
