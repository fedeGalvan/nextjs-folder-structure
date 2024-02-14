# Next.js Folder Structure
![NextJS](https://img.shields.io/badge/-NextJS-000000?style=flat&logo=nextdotjs)
#### A clear, clean and scalable folder structure for Next.js projects

Creating a clean and scalable folder structure is important in project management and development, whatever the technology. After several works carried out in Next.js, I present the structure that best suits my work style, which allows projects to grow and stay organized. It could be modified and/or adjusted in the future.

> “Good architecture makes the system easy to understand, easy to develop,   easy to maintain, and easy to deploy. The ultimate goal is to minimize the  lifetime cost of the system and to maximize programmer productivity.” 

― Robert C. Martin, Clean Architecture 


### Architecture 

    ├── api
    ├── app            
    ├── assets            
    ├── components             
    ├── constants                
    ├── context
    ├── hooks
    ├── pages
    ├── routes
    ├── translations
    ├── utils


### One-by-one folder description and usage
#### Inside the folders in this repository you can find an example of each usage

#### 📁 Api
  Inside this folder, we store functions and modules related to API interactions, including methods such as GET, POST, PUT, or DELETE for       handling data operations. This directory serves as a dedicated space for managing API-related logic and operations, ensuring clear organization and separation of concerns within the project structure. It facilitates efficient development, maintenance, and scalability of API functionalities throughout the software development lifecycle.

#### 📁 App
  Next.js default's folder. Configure your initializations here.

#### 📁 Assets
  A safe place to save images or videos, or everything that is design-related. This directory serves as a repository for all digital media files essential for the project, including graphics, multimedia elements, icons, and other design assets.

#### 📁 Components
  This directory typically houses reusable UI components used throughout the application. These components can range from simple elements like buttons and input fields to more complex components like navigation bars, cards, modals, etc.

#### 📁 Constants
  This folder is intended to contain a file(s) that define constant values used throughout the application. These constants can include configuration settings, API endpoints, status codes, error messages, or any other values that are reused across different parts of the project.

#### 📁 Context
  Here is where context providers and related logic are stored. Context provides a way to pass data through the component tree without having to pass props down manually at every level. It's particularly useful for providing global state or data that needs to be accessible by many components at different levels of the application hierarchy.

#### 📁 Hooks
  This folder contains custom React hooks that encapsulate reusable logic across components. React hooks are functions that let you use React state and lifecycle features from functional components.

#### 📁 Pages
  Next.js default's folder. Here's where pages (Routing) works. For example, if you create a "test.js" file it will create automatically the route ".com/test". [More info](https://nextjs.org/docs/pages/building-your-application/routing/pages-and-layouts)

#### 📁 Routes
  This directory contains constants defining various routes within your application. These constants serve as a centralized way to manage and reference different routes throughout the application.

#### 📁 Translations
The "Translations" directory stores files related to internationalization (i18n) and localization (l10n) of the application's content. 

#### 📁 Utils
This folder serves as a container for utility functions and helper modules that are used across different parts of the application. These utility functions typically provide common functionalities, reusable logic, or perform specific tasks that are needed in multiple areas of the codebase.  





# Happy Coding!