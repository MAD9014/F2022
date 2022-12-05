(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{457:function(e,t,a){"use strict";a.r(t);var s=a(34),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("PageHeader"),e._v(" "),a("h2",{attrs:{id:"multi-page-scripts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#multi-page-scripts"}},[e._v("#")]),e._v(" Multi-Page Scripts")]),e._v(" "),a("p",[e._v("When building websites that are made up of multiple HTML files, you must bear in mind that, every time the browser loads a webpage it is replacing an old one. When the new page loads, it will be parsed by the browser and it will load any attached JS files, CSS files, fonts, and images.")]),e._v(" "),a("p",[e._v("It is likely that these other files will be in the browser's cache (not to be confused with the Cache API which is controlled by the developer). However, to run, they still need to be loaded into memory.")]),e._v(" "),a("p",[e._v("Any variables and functions that you had in your old JS file are being recreated.")]),e._v(" "),a("p",[e._v("Any values that were in your old variables "),a("strong",[e._v("ARE GONE")]),e._v(".")]),e._v(" "),a("p",[e._v("This is why we need to use that "),a("code",[e._v("DOMContentLoaded")]),e._v(" event to call an "),a("code",[e._v("init")]),e._v(" method inside our namespace object. We need to run through the setup and add event listeners on every page load.")]),e._v(" "),a("p",[e._v("So, how does our script know which page has been loaded?")]),e._v(" "),a("h3",{attrs:{id:"page-specific-code"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#page-specific-code"}},[e._v("#")]),e._v(" Page Specific Code")]),e._v(" "),a("p",[e._v("There are many ways that you can figure out which page just loaded our script. You can look at the "),a("code",[e._v("location")]),e._v(" object to get the URL. But the simplest way to do it is to add a unique "),a("code",[e._v("id")]),e._v(" attribute to your "),a("code",[e._v("<body>")]),e._v(" element in each of your webpages.")]),e._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("head")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("</")]),e._v("head")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("body")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')]),e._v("home"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("</")]),e._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("</")]),e._v("html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("p",[e._v("Then you can use that in your code as the identifier for each page.")]),e._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("APP")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[e._v("init")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=>")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//any page has loaded")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("APP")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("addListeners")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("APP")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("pageSpecific")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[e._v("pageSpecific")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=>")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//run code that is specific to each page")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("let")]),e._v(" id "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!")]),e._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("return")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//page is missing an id")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("switch")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("case")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'home'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//on the home page")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("case")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'other'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//some other page")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("case")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'contact'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//on the contact page")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("default")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//page that we don't recognize the id")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//or page with no specific code needed")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[e._v("addListeners")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=>")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//load any event listeners that are common to all pages")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//like hashchange, popstate, main nav clicks, etc")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br"),a("span",{staticClass:"line-number"},[e._v("22")]),a("br"),a("span",{staticClass:"line-number"},[e._v("23")]),a("br"),a("span",{staticClass:"line-number"},[e._v("24")]),a("br"),a("span",{staticClass:"line-number"},[e._v("25")]),a("br"),a("span",{staticClass:"line-number"},[e._v("26")]),a("br"),a("span",{staticClass:"line-number"},[e._v("27")]),a("br"),a("span",{staticClass:"line-number"},[e._v("28")]),a("br"),a("span",{staticClass:"line-number"},[e._v("29")]),a("br"),a("span",{staticClass:"line-number"},[e._v("30")]),a("br")])]),a("h3",{attrs:{id:"css-and-style-implications"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-and-style-implications"}},[e._v("#")]),e._v(" CSS and Style Implications")]),e._v(" "),a("p",[e._v("If you are adding unique ids to each page's "),a("code",[e._v("<body>")]),e._v(" tag then you can leverage that in your CSS.")]),e._v(" "),a("p",[e._v("A common use is to style current links or hide and show page specific elements.")]),e._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[e._v("#home .sidebar")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" none"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/* on the home page hide the sidebar */")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[e._v("#products .footer")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v("position")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" fixed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" 100vw"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v("bottom")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" 6rem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/* make the footer fixed on the products page */")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br")])]),a("h2",{attrs:{id:"spa"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spa"}},[e._v("#")]),e._v(" SPA")]),e._v(" "),a("p",[e._v("A "),a("code",[e._v("Single Page Application (SPA)")]),e._v(" is what the name implies. A single HTML file that gets loaded to the browser and then the JavaScript is the Application logic responsible for showing and hiding and loading new content. We can use the "),a("code",[e._v("History API")]),e._v(" to manage the location bar and history array. We use the "),a("code",[e._v("Fetch API")]),e._v(" to get new content from the server. We can use the "),a("code",[e._v("Cache API")]),e._v(" and the "),a("code",[e._v("Web Storage API")]),e._v(" to save items, like images or JSON files, loaded from the server, which will improve performance in your app.")]),e._v(" "),a("h2",{attrs:{id:"jamstack"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jamstack"}},[e._v("#")]),e._v(" JAMStack")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("JAM")]),e._v(" in "),a("code",[e._v("JAMStack")]),e._v(" refers to JavaScript, APIs, and Markup. Basically what we have been doing since week 5. A "),a("code",[e._v("JAMStack")]),e._v(" application can be a "),a("code",[e._v("SPA")]),e._v(" or it can be a multi-page web app. It uses all the same HTML5 APIs as a SPA site - "),a("code",[e._v("history api")]),e._v(", "),a("code",[e._v("fetch api")]),e._v(", "),a("code",[e._v("cache api")]),e._v(", "),a("code",[e._v("web storage api")]),e._v(" and more.")]),e._v(" "),a("p",[e._v("The defining feature of a "),a("code",[e._v("JAMStack")]),e._v(" site is that all the files used to make the site are static ones. There is no server-side programming required, with the exception of the APIs. Generally, the APIs are built independently from the website. They can be hosted elsewhere and use any kind of server-side programming language.")]),e._v(" "),a("p",[e._v("You can even use "),a("code",[e._v("Github Pages")]),e._v(" to host and run a JAMStack website. The dynamic content will come from one or more APIs and be fed into your static website using client-side JavaScript.")]),e._v(" "),a("h2",{attrs:{id:"server-side-programming-servers-hosting-databases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#server-side-programming-servers-hosting-databases"}},[e._v("#")]),e._v(" Server-Side Programming, Servers, Hosting & Databases")]),e._v(" "),a("p",[e._v("There are so many different programming languages in use today that it is virtually impossible to keep up with all of them. There are also many different kinds of web servers. Some webservers are able to support multiple programming languages, some support only one. On top of all that there are tons of options for different types of databases.")]),e._v(" "),a("p",[e._v("There are many kinds of hosting choices available to you and the one that you pick will be directly connected to which programming language and which kind of database you want to use.")]),e._v(" "),a("h3",{attrs:{id:"languages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#languages"}},[e._v("#")]),e._v(" Languages")]),e._v(" "),a("p",[e._v("Here are a few of the server-side programming languages that you could use to build websites.")]),e._v(" "),a("ul",[a("li",[e._v("NodeJS")]),e._v(" "),a("li",[e._v("PHP")]),e._v(" "),a("li",[e._v("Ruby")]),e._v(" "),a("li",[e._v("ASP.Net C#")]),e._v(" "),a("li",[e._v("Python")]),e._v(" "),a("li",[e._v("Java J2EE")])]),e._v(" "),a("p",[e._v("Most of those come with a variety of frameworks that can be used with the language to make development faster.")]),e._v(" "),a("p",[e._v("Next semester we will be leveraging your knowledge of JavaScript to create websites and APIs with "),a("code",[e._v("NodeJS")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"databases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#databases"}},[e._v("#")]),e._v(" Databases")]),e._v(" "),a("p",[e._v("There are different types of Databases, each with its own strengths and weaknesses. Here are the main categories with a few examples, in brackets, of their implementations.")]),e._v(" "),a("ul",[a("li",[e._v("Text Files ("),a("code",[e._v("txt")]),e._v(", "),a("code",[e._v("csv")]),e._v(", "),a("code",[e._v("xlsx")]),e._v(")")]),e._v(" "),a("li",[e._v("Relational Databases ("),a("code",[e._v("MySQL")]),e._v(", "),a("code",[e._v("MariaDB")]),e._v(", "),a("code",[e._v("PostgreSQL")]),e._v(", "),a("code",[e._v("SQL Server")]),e._v(", "),a("code",[e._v("Oracle")]),e._v(")")]),e._v(" "),a("li",[e._v("Document Databases ("),a("code",[e._v("MongoDB")]),e._v(", "),a("code",[e._v("DynamoDB")]),e._v(", "),a("code",[e._v("DocumentDB")]),e._v(")")]),e._v(" "),a("li",[e._v("Graph Databases ("),a("code",[e._v("Neo4j")]),e._v(")")]),e._v(" "),a("li",[e._v("Hierarchical Databases")])]),e._v(" "),a("p",[e._v("Each type has its own learning curve and mental models that you need to figure out.")]),e._v(" "),a("p",[e._v("In our program we will be focused on Document Databases but will give you a brief introduction to Relational Databases too.")]),e._v(" "),a("p",[e._v("The database is where you save the data that you want to save with multiple users. It is where APIs get the information that they are sharing with webpages.")]),e._v(" "),a("h2",{attrs:{id:"window-open"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#window-open"}},[e._v("#")]),e._v(" Window.open()")]),e._v(" "),a("p",[e._v("If you ever need to open a new window or tab from JavaScript, you can do this with the "),a("code",[e._v("window.open()")]),e._v(" method. The decision to open a new tab or window depends on the settings in the user's browser. It is not something we can control with JS. There is also a "),a("code",[e._v("window.close()")]),e._v(" method.")]),e._v(" "),a("p",[e._v("When you use JavaScript to open a new window/tab you will be returned a reference to the newly created "),a("code",[e._v("window")]),e._v(" object. This means that you can control what is happening in the page that you opened from the creating page script.")]),e._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("let")]),e._v(" url "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'https://www.mydomain.com'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("let")]),e._v(" features "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=no'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("let")]),e._v(" winRef "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" features"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("p",[e._v("The features parameter controls which elements will be visible if you are opening a new window.")]),e._v(" "),a("p",[e._v("If the domain for the page that you are opening is the same as the domain for the page that is running your script, then you will have full control over it. If the domain is different then there will be some security limitations to what you can control.")]),e._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//to close the a window or tab that was opened by JS from within that page")]),e._v("\nwindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("close")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//to close the newly opened window from the script that opened it")]),e._v("\nwinRef"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("close")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//winRef is the variable created in the script above")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("YouTube",{attrs:{title:"window tab iframe open",url:"https://www.youtube.com/embed/cmA-IyD8_BA"}}),e._v(" "),a("h2",{attrs:{id:"window-loading-and-unloading"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#window-loading-and-unloading"}},[e._v("#")]),e._v(" Window Loading and Unloading")]),e._v(" "),a("p",[e._v("When you are loading and unloading pages there are a series of event that take place. They will always take place in the same order.")]),e._v(" "),a("p",[e._v("This concept applies to many of the events that you use in your code. A single user action results in a cascade of events. A user taps on the"),a("code",[e._v("A")]),e._v(" key on their keyboard -> at the very least there will be a "),a("code",[e._v("keydown")]),e._v(", "),a("code",[e._v("keyup")]),e._v(", and "),a("code",[e._v("keypress")]),e._v(" event sequence. However, depending on what element had focus there could also be an "),a("code",[e._v("input")]),e._v(" event or a "),a("code",[e._v("propertychange")]),e._v(" event. These events all have a predefined sequence that they have to follow.")]),e._v(" "),a("p",[e._v("When a page is loading these are the events that could be triggered in the order that they would occur.")]),e._v(" "),a("ol",[a("li",[a("code",[e._v("window.readystatechange")])]),e._v(" "),a("li",[a("code",[e._v("window.DOMContentLoaded")])]),e._v(" "),a("li",[a("code",[e._v("window.load")])]),e._v(" "),a("li",[a("code",[e._v("window.pageshow")])]),e._v(" "),a("li",[a("code",[e._v("window.popstate")])]),e._v(" "),a("li",[a("code",[e._v("window.hashchange")])])]),e._v(" "),a("p",[e._v("When the user clicks on a link to navigate away from the page, these are the events that will be triggered, in the order that they will occur.")]),e._v(" "),a("ol",[a("li",[a("code",[e._v("element.mousedown")])]),e._v(" "),a("li",[a("code",[e._v("element.focus")])]),e._v(" "),a("li",[a("code",[e._v("element.mouseup")])]),e._v(" "),a("li",[a("code",[e._v("element.click")])]),e._v(" "),a("li",[a("code",[e._v("window.pagehide")])]),e._v(" "),a("li",[a("code",[e._v("window.beforeunload")])]),e._v(" "),a("li",[a("code",[e._v("window.unload")])])]),e._v(" "),a("p",[e._v("And, if a page loses focus by a user switching tabs or applications.")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("window.visibilitychange")])])]),e._v(" "),a("p",[e._v("If you switch away from a page by moving to another tab or, on a mobile device, opening another app, then you will trigger the "),a("code",[e._v("window.visibilitychange")]),e._v(" event. Switching back to the tab will also trigger the "),a("code",[e._v("visibilitychange")]),e._v(" event. The "),a("code",[e._v("pagehide")]),e._v(" event will not be triggered by leaving the tab or opening another app. The "),a("code",[e._v("beforeunload")]),e._v(" and "),a("code",[e._v("unload")]),e._v(" events are not as reliable for running code. Usually, by the time those events happen the process of leaving is already underway. If you want to send a "),a("code",[e._v("fetch()")]),e._v(" call to upload recent data then the "),a("code",[e._v("pagehide")]),e._v(" or "),a("code",[e._v("beforeunload")]),e._v(" can be used. The "),a("code",[e._v("unload")]),e._v(" event cannot be used for "),a("code",[e._v("fetch")]),e._v(" because the page will be gone before the message is sent. Even with "),a("code",[e._v("beforeunload")]),e._v(" you can send data but you will not receive a result before the page is unloaded.")]),e._v(" "),a("p",[e._v("Something that might be of use to you at some point is the "),a("code",[e._v("persisted")]),e._v(" property, of the "),a("code",[e._v("pageshow")]),e._v(" and "),a("code",[e._v("pagehide")]),e._v(" events, which has a boolean value indicating whether or not the page was loaded from the browser cache.")]),e._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[e._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'pageshow'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[e._v("ev")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=>")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("ev"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("persisted"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//page was loaded from browser cache")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("else")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//page was NOT loaded from browser cache")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br")])]),a("p",[e._v("This might be useful if you decide you want to check for new versions of files or use your own files from the "),a("code",[e._v("Cache API")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"what-to-do-this-week"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-to-do-this-week"}},[e._v("#")]),e._v(" What to do this week")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("TODO")]),e._v(" "),a("p",[e._v("Things to do before next week.")]),e._v(" "),a("ul",[a("li",[e._v("Read all the content from "),a("code",[e._v("Modules 13.1, 13.2, and 14.1")]),e._v(".")])])])],1)}),[],!1,null,null,null);t.default=n.exports}}]);