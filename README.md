# React-101 by Swastik Sharma

## Swastik Sharma

### Github: https://github.com/SwastikSharma-Dev
### LinkedIn: https://www.linkedin.com/in/swastik7sharma
### Replit: https://replit.com/@SwastikSharma-Dev
### HashNode: https://swastiksharma.hashnode.dev/
### Dev.io: https://dev.to/swastiksharma-dev
### Medium: https://medium.com/@swastiksharma.dev




## Introduction


### PreRequisite
* HTML
* CSS
* JAVASCRIPT

### Important Links
1. Github Repo: https://github.com/facebook/react
2. Documentations: https://react.dev/

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

### Understanding Files

1. **.gitignore** contains the files which will not pe pushed to github when we push. Due to Safety Concerns.
2. **package.json** contains *dependencies* and *scripts*
3. **package-lock.json** is used to lock the dependencies for a stable verison. More information later.
4. **README.md** is absic readme file which contains details and other importnat informations about Project and version updates, if any.
5. **build** folder is used for sending project into Production. Will be discussed later.
6. **node_modules** contains important *node* files for project creation and execution.
7. **public** folder contains:
    - static resources like images, videos, etc.
    - **manifest.json** is used for reading Meta tags in case of Mobile Devices. (Not necessary)
    - **robots.txt** is for Search Engines. (Not necessary)
    - **index.html** (Most Important). The Webpages will be load by this HTML file only.
        > React is a Single Page Application.


### Working

1. We will see an "import" statement in "index.js", i.e.,
    ```js
    import ReactDOM from 'react-dom/client';
    ```
    This Statement imports "ReactDOM", i.e. its own personal DOM into the file. Yes, React creates its own DOM.
2. ReactDOM has method "createRoot". You will see following in "index.js"
    ```js
    const root = ReactDOM.createRoot(document.getElementById('root'));
    ```
    By basic "getElementbyId" function we get element which has id=root i.e. the only tag,a < div >, in body of "index.html" and this will be passed as an argument to the createRoot method. And we will store it in a const variable named "root".
3. Next we will see:
    ```js
    root.render
    (
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
    ```
    As normal(browser) DOM, also just renders the page. This is also used to render only. It will render a Tag "< App />". But as we know, HTML do not have any such tag. So what is this? This is actually a custom tag. React gives us ability to create custom tags.
    StrictMode is actually used in Development for Optimisation puroposes. Can be removed as of now.
    Coming to "< App />" Tag; Going to its definition i.e. in "App.js", we come to know that it is merely a function that returns some HTML. And later in the file we export that. And we are rendering that tag only in "index.js". This actually provides programming capabilities to HTML, and used to create complex UI.
    **These Custom Tags are called COMPONENTS**

    **But we have not load any JavaScript files anywhere in the "index.html" so how "index.js" get loaded automatically?**

    Actually, when we see "package.json" we come to know that it has a *dependency* named "Scripts", which actually loads the JavaScript for us. This was the case with normal React Project. But coming to Vite Project, we see that "package.json" do not have any Scripts. In case of Vite, it actually loads javascript i.e. < Script > Tag in "index.html" itself i.e. "src/main.jsx".
    The internal working of Vote is almost same as the normal React but it is comparitively lightweight.
    And there are minor differences we might notice, like, in rendering in normal React, we store the "root" in a variable and then apply render method on that variable. But in case of Vite, it just directly apply method to render without saving it into a variable.
    This is not necesssary to have only "App" as the only custom tag but we can have as many as we want.

    **What is .jsx? How it is different from .js?**

    JSX is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript. More or less, they work same; no major difference but .jsx is basically used for custom tag. In Vite, it has a convention to use .jsx for custom tags, otherwise it won't work and there is no such rule in basic react.
    Since React directly don't understand HTML, it uses a bundler (Vite also uses a bundler) that converts HTML into React-understanadable syntax/format, called parsing, simply a conversion to a tree format. For example:
    ```html
    <a href="https://www.google.com">Click Here to go to Google.</a>
    ```
    > Above is an HTML format which will be converted to below given format by a bundler. This is just an example to make things clear. The syntax, key, value, properties might not be accurate. When we pass this object directly into ".render()" it will not work. But saving above HTML Tag to an object and passing that argument into ".render()" will work completely fine. This is because, we might have given name to keys, etc. wrong. If given correct, it will work. But we need not to remember those structures as BUNDLER is doing this for us.
    ```js
    {
    type: 'a',
    props: {
        href: 'https://www.google.com',
    },
    children: 'Click Here to go to Google.'
    }
    ```

    **Custom Tags Conventions**

    In Vite :
    - **.jsx** must be the File Extension for the Custom Tag File.
    - Function Name and Tag Name must begin with Capital Letters.
    - You can export atmost one element. To export multiple wrap them in a single element. We may use "div" tag, but best practise is to use "Fragment" i.e. " <> </> " Tags.

    In Basic React:
    - File extension can be any **.js** or **.jsx**.
    - Function Name and Tag Name must begin with Capital Letters. Won't show error but won't run too.
    - You can export atmost one element. To export multiple wrap them in a single element. We may use "div" tag, but best practise is to use "Fragment" i.e. " <> </> " Tags.

> **NOTE :** In any file where HTML is exported the file extension must be **.jsx** (Best Practice).

4. We can directly render an element by passing it as an argument in ".render()" method. To create such element, React has a method ".createElement()" that takes arguments in following order:

    1. Tag, say 'a'
    2. An Object for Properties, say {href='https://www.google.com', target='_blank'}
    3. The Text to Display i.e. innerHTML, say 'Click here to Go to Google'

   For Example:
   ```js
   const testElement = React.createElement('a',{href: 'https://www.google.com'}, 'testElement->Google');
   ReactDOM.createRoot(document.getElementById('root')).render(
        testElement
   )
   ```
5. To use varibales in React i.e. ".jsx" files we will enclose variable name, wherever using, inside curly braces "{}". For example:

    ```js
    // In Welocme.jsx
    function Welcome()
    {
        const username = 'Swastik';

        return(
            <h1>Hello {username} !</h1>
        )
    }
    export default Welcome;
    ```
    ```js
    // In Main.jsx
    import React from 'react'
    import ReactDOM from 'react-dom/client'
    import Welcome from "./Welcome"

    ReactDOM.createRoot(document.getElementById('root')).render(
    <Welcome />
    )
    ```
    > **INTERVIEW QUESTION:** Since "{}" curly braces means JavaScript here, can we write ``{if(true) console.log(5)}`` ? <br/>
    >No. "{}" means **Evaluated Expression** but this ``{if(true) console.log(5)}`` is just an **expression**. Means we only write evaluated expressions here, i.e. the final outcome but not the logic. <br/>
    > The reason: at the end of the day, this element get converted into React readable format (with the help of bundler) i.e. in a form of tree-object, as discussed above. So it is not possible to write an expression into an object but we can write an evaluated expression (that is merely a value), into object.





## Creating Own React Library

### How the Rendering Works? <u>***OR***</u> How React Renders the Elements?

1. Create a folder "01_custom_react" for the project. Create "index.html" and "custom_react.js" file in it.
2. Initialze the HTML file with boilerplate. And give the script as "custom_react.js" file.
3. HTML file's body have only one element "< div >" with id of your choice(here, **"imp"**). (Will call it "main container" for reference)
4. In JS file, you may create a custom tag (NOT COMPONENT) or a tag directly, and select this above created element with DOM. For example (a custom anchor tag):
    ```js
    const custom_element = {
    custom_type: 'a', // Will be creating an anchor tag
    custom_props: {
        href: 'https://www.google.com',
        custom_textToDisplay: 'Click This Custom Anchor Tag to go to Google', // Not a good practise to name like this.
        the_link_to_go: 'https://www.google.com',
    },
    random_prop_of_no_use: 'Hello'
    }
    ```
5. (MOST IMPORTANT) Now create a function, say **"custom_render"**, which will take two paramters, one is the Main Container Tag itself and the other is the custom tag or tag created.
6. In the function, we will be creating a DOM element, for instance:
    ```js
    const created_custom_element = document.createElement(element.custom_type);
    ```
7. Now we can update ".innerHTML" or ".setAttributes" to complete the element. Example:
    ```js
    created_custom_element.innerHTML = element.custom_props.custom_textToDisplay;
    for(const current_prop in element.custom_props)
    {
        created_custom_element.setAttribute(current_prop, element.custom_props[current_prop]);
    }
    ```
8. Later we will append this as child to the Main Container Tag.
    ```js
    container.appendChild(created_custom_element)
    ```
9. We can now just create custom HTML and pass it into the function as argument.

> **NOTE :** This is how the React works internally and how we can create custom react library. Just a Basic Example.

> **FACT :** We might directly run the function instead of calling its Tag (the custom tag we created via function and exported). That will also work, but not recommended, because of Optimisation Problem and Code Conventions. For example: using **"MyApp()"** instead of **"< MyApp />"**
