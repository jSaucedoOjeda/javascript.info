# What is JavaScript?
JavaScript was initially created to “make web pages alive”.

The programs in this language are called scripts.

They can be written right in a web page’s HTML and run automatically as the page loads.

Today, JavaScript can execute not only in the browser, but also on the server,
or actually on any device that has a special program called the JavaScript engine.

The browser has an embedded engine sometimes called a “JavaScript virtual machine”.

Modern JavaScript is a "safe" programming language, It does not provide low-level access to
memory or CPU.

# Things that we can do with Javascript: 
- Add new HTML to the page. change the existing content, modify styles.
- React to user actions, run on mouse clicks, pointer movements, key presses.
- Send requests over the network to remote servers, download, upload files (so- called AJAX).
- Get and set cookies, ask questions to the visitor, show messages.
- Remember the data on the client-side.
- And more (Depends of the environment) .. 

# Things that we CANT' do with Javascript for the sake of the user's safety:
- Javascript on a webpage may not read/write arbitrary files on hard disk, copy them or
execute programs. I has no direct access to OS functions. It can work with files but them
access is limited and only provided if the user does certain actions like dropping files on a input of html.
- There are ways to interact with camera/microphone and other devices, but they require a user's explicit permission.
- Different tabs/windows generally do not know about each other, except for example when 
one window uses JavaScript to open the other one but even in this case, JavaScript from one page
may not access the other if they come from different sites (This is called the Same Origin Policy). 
 
# What makes Javascript unique?
- Full integration with HTML/CSS.
- Simple things are done simply.
- Support by all major browsers and enabled by default.

# Languages "over" JavaScript
The syntax of JavaScript does not sui everyone's needs. Different people want different features.
So recently there are so many options of new languages wich are transpiled to Javascript before they run in the browser.

## Examples of such languages:
- CoffeScript
- TypeScript
- Flow
- Dart

There are more. 

Even if we use one of transpiled languages, we should also know Javascript to really understand what we're doing.
