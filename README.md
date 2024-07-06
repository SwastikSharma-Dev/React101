## Introduction


### PreRequisite
* HTML
* CSS
* JAVASCRIPT

### What is React?
> React is the **library** for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript. It was developed by *Meta (formely Facebook)*. Now, it is an open-source library. One of the biggest problems of inserting elements into the DOM with JavaScript is that the code is not reusable. For example, if you want to insert the same button into the page, but with different background colors, you have to create the element twice in JavaScript.React was developed to solve this problem by making the process of creating web apps much more organized and intuitive. **React is used to make Complex Front-End.**

### Difference between a Library and a Framework
> Both Library and Framework are pre-written codes that can be used by another developer in their project for their ease.
> Developers oftenly use these terms interchangeably, but there is a difference.
> When you use a library, you are in charge of the flow of the application. You are choosing when and where to call the library. When you use a framework, the framework is in charge of the flow. It provides some places for you to plug in your code, but it calls the code you plugged in as needed. </br> </br>
>In Simple Terms, Framework, is Strict, i.e. you can only call its code in specific location only; it have set of rules like: *name of file, location of file, files should be arranged in prescribed folders only* </br>
> On other hand, Library, is Lenient, i.e. it do not have such harsh rules and one can call its code wherever required.</br></br>
> **React is a Library**

### Difference between React and React-Native
> * React JS is used to build the user interface of web applications (that is, apps that run on a web browser).
> * React Native is used to build applications that run on both iOS and Android devices (that is, cross-platform mobile applications). 
> * React uses HTML, CSS and JavaScript to create interactive user interfaces. React Native, on the other hand, uses native UI components and APIs to create mobile apps.

### Why was React created?
> There is very famous tech problem called *"Phantom Problem"* of Facebook. In old facebook site, there was a problem that the notifictaion badge does not disappear even if we have read all the messages. And since there was inbox/chat option at multiple places, even if it disappears from one place, it continously appears on the other place. That was very irritating for the users.</br>
> The Reason: Since you know, how many notifications/messages you have unread, its number must be stored in a variable. But even if you have seen the notification, the varibale does not updtaes, or get updated but shows result only on one place not others, due to the "*Inconsistency in UI*". Variable was not reflecting back properly on UI. So to overcome this, they developed REACT, a core library, used in both React.js (React DOM) and React Native (Mobile), since this was the same issue int he mobile app as well. This was how the React started. </br>
> *Khan Academy* and *Unsplash* were the first to adopt this technology.

### Roadmap to Learn React
* Important
    - Core of React (State or UI Manipulation, JSX)
    - Component Reusability
    - Resuing of Components (Props)
    - How to Propagate Changes (Hooks)
* Additional Addons
    - Router (React don't have Router; It is a new library "React Router Library")
    - State Management (React don't have Satte Management by default; Redux, Redux Toolkit, Zustand, Context API (these all are JS Library))
    - Class Based Components
    - BAAS Apps (Backend As A Service; example- Firebase)
* After React (due to problem like: no SEO, no Routing, browser rendering of JS)
    - Frameworks (Next.js, Gatsby, Remix)

## Getting Started

### Building Project
1. Create a folder
2. Go to this folder in Terminal and run:
    ```sh
    npx create-react-app 01_basic_react
    ```
     Here *"01_basic_react"* is the name of the Project you want. **"npx"** stands for **"Node Package Executer"**.
3. It will contain **"package.json"** file, whre we can see various scripts like: *start, build, test*.
4. To get a live priew of project in browser i.e. to start it, first navigate to your project directory in terminal and run:
    ```sh
    npm run start
    ```
    >   OR
    ```sh
    npm start
    ```
    Above one is preffered. The difference and reason will be stated later.
    This will start your project on a laocalhost.
5.  ```sh
    npm run build
    ```
    On running this in Terminal, will create a **Build** folder in the Project Directory, which will contain all the static assets, javascript written by React. In Production, this build folder is actually used.

## Creating Project with Vite

### What is Vite?
> Vite is a Bundler. Vite is a local development server written by Evan You, the creator of Vue.js, and used by default by Vue and for React project templates. It has support for TypeScript and JSX. It uses Rollup and esbuild internally for bundling. Simply, it is used to create React Projects.

### Creating React Project with Vite

1. Navigate to the Folder in which yopu want the project to be created in terminal and run:
    ```sh
    npm create vite@latest
    ```
    The Terminal will now become interactive and will ask for Project Name, Framework, Variant.
    Type in the Project Name as you need, Select *"React"* as Framework and *"JavaScript"* as Variant.
2. Now run:
    ```sh
    cd 01_vite_react
    npm install     
    npm run dev
    ```
    This will navigate you to the Project Folder. Since **"node_modules"** folder, that was present in 01_basic_react will not be present here. So we install node modeules by second command. If we open **"package.json"** of this folder, we will see we have less dependencies (tests is not there, etc.). It will have different Scripts too. The third command is to run *"dev"* script only which is basically to start the project on a localhost.

## Understanding Flow and Structure

### Cleaning Files

> **NOTE :** (R) means 01_basic_react folder context and (V) means 01_vite_react folder context

1. (R) Firstly, delete every file except **"App.js"** and **"index.js"** in "**src**" folder.
2. (R) Clear every comments and "reportWebVitals();" from "index.js" file. Remove unnecessary imports form both files.
1. (V) Firstly, delete every file except **"App.jsx"** and **"main.jsx"** in "**src**" folder.
2. (V) Remove unnecessary imports form both files.

### 
