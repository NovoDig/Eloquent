import express from 'express';
let app = express();

// Initialize ejs;
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Index Page;
app.get('/', (req : any, res : any) => {
  // render view index.ejs
    res.render('index', { title: 'Eloquent', about: "Eloquent is a programming tutorial service that provides tutorials for various programming languages. We are a small team of developers that are passionate about programming and want to share our knowledge with the world. We are currently working on a new version of Eloquent that will be more interactive and will provide a better learning experience. We hope you enjoy our tutorials and find them helpful!" });
});

app.get('/courses', (req : any, res :any) => {
    res.render('courses', {title: 'Eloquent', courses: [
         ['HTML', "Learn how to write websites in this markup language."],
         ['CSS', "Learn how to style websites."],
         ['JavaScript', "Learn how to make your websites dynamic"], 
         ['CSharp', "The base langauge of .NET, a fairly new and powerful language."],
         ['Java', "The most popular language in the world, used for Android and Web Development."],
        // ['Ruby', "A language that is used for web development, and is quite popular."],
        // ['Swift', "The new language for iOS development, and is quite powerful."], 
         ['C++', "An Old and still Popular language, basically C with Classes"] , 
         ['Python', "The Most Popular Programming Language in the World!"] , 
         ['LUA', "An easy language that is used mainly for scripting games."] , 
        // ['Perl', "The original web scripting language, quite an old one at that!"], 
         ['PHP', "The most popular web scripting language. Also quite powerful at that!"]
        ]});
});

app.get('/courses/:course', (req : any, res : any) => {
    let course = req.params.course;
    let courseDesc = "";
    switch (course) {
        case 'HTML':
            res.render('HTML', {title: 'Eloquent'});
            //courseDesc = "HTML is a markup language that is used to create websites. It is the standard markup language for creating web pages. HTML stands for Hyper Text Markup Language. It is used to describe the structure of web pages using markup. HTML elements are the building blocks of HTML pages. HTML elements are represented by tags. Tags are used to mark up the start and end of an element.";
            break;
        case 'CSS':
            res.render('CSS', {title: 'Eloquent'});
            //courseDesc = "CSS is a style sheet language used for describing the presentation of a document written in HTML or XML. CSS describes how elements should be rendered on screen, paper, or in other media. CSS can control the layout of multiple web pages all at once. External stylesheets are stored in CSS files.";
            break;
        case 'JavaScript':
            res.render('JS', {title: 'Eloquent'});
            //courseDesc = "JavaScript is a programming language that is used to make web pages interactive. It is the third layer of the standard web technologies, HTML and CSS are the first two layers. JavaScript is a client-side scripting language, which means that it is executed on the user's computer rather than on the server.";
            break;
        case 'CSharp':
            res.render('CS', {title: 'Eloquent'});
            //courseDesc = "C# is a modern, object-oriented programming language developed by Microsoft. It is used for building a variety of applications, including web, mobile, desktop, and games. C# is part of the .NET framework and is designed to be simple, powerful, and easy to learn.";
            break;
        case 'Java':
            res.render('Java', {title: 'Eloquent'});
            //courseDesc = "Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language that is intended to let application developers write once, run anywhere (WORA), meaning that code that runs on one platform does not need to be recompiled to run on another.";
            break;
        case 'C++':
            res.render('CPP', {title: 'Eloquent'}); 
            //courseDesc = "C++ is a general-purpose programming language created by Bjarne Stroustrup at Bell Labs in Murray Hill, New Jersey, United States. It has imperative, object-oriented and generic programming features, while also providing facilities for low-level memory manipulation. C++ is a middle-level language, as it comprises a combination of both high-level and low-level language features.";
            break;
        case 'Python': 
            res.render('Python', {title: 'Eloquent'});
            //courseDesc = "Python is a high-level, interpreted, general-purpose programming language. It was created by Guido van Rossum and first released in 1991. Python is designed to be easy to read and simple to implement. It is a language that is used for web development, data analysis, artificial intelligence, scientific computing, and more.";
            break;
        case 'LUA':
            res.render('LUA', {title: 'Eloquent'});
            //courseDesc = "Lua is a lightweight, high-level, multi-paradigm programming language designed primarily for embedded use in applications. Lua is cross-platform, since the interpreter is written in ANSI C, and has a simple C API. Lua is often used as a scripting language by game developers.";
            break;
        case 'PHP':
            res.render('PHP', {title: 'Eloquent'});
            //courseDesc = "PHP is a popular general-purpose scripting language that is especially suited to web development. Fast, flexible and pragmatic, PHP powers everything from your blog to the most popular websites in the world.";
            break;
    }
});
app.get('/about', (req : any, res : any) => {
    res.render('about', {title: 'Eloquent', about: "Eloquent is a programming tutorial service that provides tutorials for various programming languages. We are a small team of developers that are passionate about programming and want to share our knowledge with the world. We are currently working on a new version of Eloquent that will be more interactive and will provide a better learning experience. We hope you enjoy our tutorials and find them helpful!"});
});

// Start the server
app.listen(8080, () => {
  console.log('Server is running...');
});