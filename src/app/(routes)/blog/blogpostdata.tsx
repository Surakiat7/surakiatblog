const posts = [
  {
    id: 1,
    imgUrl:
      "https://inexture.com/wp-content/uploads/2023/04/Top-7-JavaScript-Frameworks-for-Web-App-Development-1100-x-600.png",
    author: "Author: Surakiat",
    title: "Exploring Modern JavaScript Frameworks",
    view: 86,
    createdAt: "2023-04-20",
    description:
      "An in-depth look at popular JavaScript frameworks like React, Angular, and Vue.js. Learn which framework might be best for your next project.",
    content: [
      {
        imagesrc: "https://via.placeholder.com/150",
        subtitle: "Introduction to JavaScript Frameworks",
        paragraph:
          "JavaScript frameworks provide developers with pre-written JavaScript code to build and manage complex web applications. Popular frameworks like React, Angular, and Vue.js each offer unique features and benefits. React is known for its component-based architecture, Angular for its robust framework with two-way data binding, and Vue.js for its simplicity and flexibility.",
      },
      {
        imagesrc: "https://via.placeholder.com/150",
        subtitle: "Choosing the Right Framework",
        paragraph:
          "When selecting a JavaScript framework for your project, consider factors such as the complexity of the application, team expertise, and project requirements. React is great for building user interfaces with reusable components, Angular is suited for enterprise-level applications with its comprehensive suite of tools, and Vue.js is ideal for projects requiring a progressive approach and ease of integration.",
      },
    ],
  },
  {
    id: 2,
    imgUrl:
      "https://pbs.twimg.com/media/Fqwt91aWYAAbOah?format=jpg&name=4096x4096",
    author: "Author: Surakiat",
    title: "CSS Grid vs Flexbox: Which One to Use?",
    view: 125,
    createdAt: "2023-05-10",
    description:
      "A comprehensive comparison of CSS Grid and Flexbox. Understand the strengths and weaknesses of each layout system and when to use them.",
    content: [
      {
        imagesrc: "https://via.placeholder.com/150",
        subtitle: "CSS Grid: Layout Made Simple",
        paragraph:
          "CSS Grid Layout is a two-dimensional layout system for the web. It allows for the creation of complex grid-based layouts with rows and columns. Grid is particularly useful for designing larger, more complex layouts where precise control over both dimensions is needed. It simplifies the process of creating intricate layouts that adapt well to different screen sizes.",
      },
      {
        imagesrc: "https://via.placeholder.com/150",
        subtitle: "Flexbox: Perfect for One-Dimensional Layouts",
        paragraph:
          "Flexbox, or the Flexible Box Layout, is a one-dimensional layout system that excels in distributing space along a single axis. It is ideal for building responsive layouts that need to align and distribute items horizontally or vertically. Flexbox provides a more straightforward approach to creating flexible and adaptive designs compared to traditional float-based layouts.",
      },
    ],
  },
  {
    id: 3,
    imgUrl: "https://arnapana.com/assets/images/blog/article_1597821616.jpg",
    author: "Author: Surakiat",
    title: "Mastering Responsive Design for Web",
    view: 210,
    createdAt: "2023-06-15",
    description:
      "Tips and techniques for creating responsive web designs that look great on any device. Explore media queries, flexible grids, and more.",
    content: [
      {
        imagesrc: "https://via.placeholder.com/150",
        subtitle: "Understanding Responsive Design",
        paragraph:
          "Responsive design is a web design approach aimed at creating websites that provide an optimal viewing experience across a wide range of devices. This approach involves using flexible grid layouts, images, and media queries to ensure that content adapts to different screen sizes and resolutions. Responsive design improves user experience by making websites accessible and functional on desktops, tablets, and smartphones.",
      },
      {
        imagesrc: "https://via.placeholder.com/150",
        subtitle: "Implementing Media Queries",
        paragraph:
          "Media queries are a key component of responsive design, allowing developers to apply different styles based on the device's characteristics, such as screen width or resolution. By using media queries, you can create custom styles for various devices, ensuring that your website looks and functions well on all screen sizes. For example, you can adjust font sizes, layout configurations, and element visibility to match the device's requirements.",
      },
    ],
  },
  {
    id: 4,
    imgUrl: "https://www.xenonstack.com/hubfs/web-performance-optimization.png",
    author: "Author: Surakiat",
    title: "Understanding Web Performance Optimization",
    view: 175,
    createdAt: "2023-07-05",
    description:
      "Learn about techniques to improve web performance, including optimizing images, minifying CSS and JavaScript, and leveraging browser caching.",
    content: [
      {
        imagesrc: "https://via.placeholder.com/150",
        subtitle: "Image Optimization Techniques",
        paragraph:
          "Optimizing images is crucial for improving web performance. Techniques such as compressing images, using appropriate file formats, and implementing responsive images can significantly reduce page load times. Tools like ImageOptim and TinyPNG can help with image compression, while the `srcset` attribute allows you to serve different image sizes based on the device's resolution.",
      },
      {
        imagesrc: "https://via.placeholder.com/150",
        subtitle: "Minifying CSS and JavaScript",
        paragraph:
          "Minification is the process of removing unnecessary characters from CSS and JavaScript files without changing their functionality. This includes removing whitespace, comments, and unused code. Minifying these files reduces their size, leading to faster loading times and improved performance. Tools like UglifyJS and CSSNano can automate the minification process for you.",
      },
    ],
  },
  {
    id: 5,
    imgUrl: "https://cdn.presslabs.com/wp-content/uploads/2019/03/pwas.png",
    author: "Author: Surakiat",
    title: "Introduction to Progressive Web Apps",
    view: 95,
    createdAt: "2023-08-22",
    description:
      "Discover the benefits of Progressive Web Apps (PWAs) and how they provide a native app-like experience on the web.",
    content: [
      {
        imagesrc: "https://via.placeholder.com/150",
        subtitle: "What Are Progressive Web Apps?",
        paragraph:
          "Progressive Web Apps (PWAs) are web applications that offer a native app-like experience through modern web capabilities. They can be installed on a user's device and work offline or with poor network conditions. PWAs use service workers to cache resources, ensuring fast and reliable performance, and provide features such as push notifications and background sync to enhance user engagement.",
      },
      {
        imagesrc: "https://via.placeholder.com/150",
        subtitle: "Advantages of PWAs",
        paragraph:
          "PWAs offer several advantages over traditional web applications and native apps. They provide a seamless user experience across different devices and platforms, reducing the need for separate mobile and desktop versions. PWAs also improve performance and reliability by utilizing caching and offline capabilities. Additionally, they can be added to the home screen, allowing users to access them quickly and conveniently.",
      },
    ],
  },
  {
    id: 6,
    imgUrl:
      "https://media.licdn.com/dms/image/D5612AQF1X3R7A10-GA/article-cover_image-shrink_720_1280/0/1696269587807?e=2147483647&v=beta&t=RezCmM0hMmBFdllWBKTmYA7hpmvTbBKjP8DSmV8cnUQ",
    author: "Author: Surakiat",
    title: "Getting Started with TypeScript",
    view: 134,
    createdAt: "2023-09-12",
    description:
      "A beginner's guide to TypeScript, including installation, basic syntax, and how it enhances JavaScript with static types.",
    content: [
      {
        imagesrc: "https://via.placeholder.com/150",
        subtitle: "Introduction to TypeScript",
        paragraph:
          "TypeScript is a superset of JavaScript that adds static typing to the language. It provides type annotations and type checking, helping developers catch errors at compile time rather than runtime. TypeScript enhances JavaScript by offering features such as interfaces, enums, and type inference, making it easier to manage complex codebases and improve code quality.",
      },
      {
        imagesrc: "https://via.placeholder.com/150",
        subtitle: "Getting Started with TypeScript",
        paragraph:
          "To get started with TypeScript, you need to install it using npm or yarn. Once installed, you can use the `tsc` command to compile TypeScript code into JavaScript. TypeScript files use the `.ts` extension, and you can gradually introduce TypeScript into existing JavaScript projects. The TypeScript compiler will help you identify type errors and ensure that your code adheres to the specified type definitions.",
      },
    ],
  },
  {
    id: 7,
    imgUrl:
      "https://www.hongkiat.com/blog/wp-content/uploads/2016/03/javascript-libraries-3.jpg",
    author: "Author: Surakiat",
    title: "Top JavaScript Libraries for Developers",
    view: 162,
    createdAt: "2023-10-03",
    description:
      "Explore some of the top JavaScript libraries that can enhance your development process, including libraries for UI, data manipulation, and more.",
    content: [
      {
        imagesrc: "https://via.placeholder.com/150",
        subtitle: "React: A Library for Building User Interfaces",
        paragraph:
          "React is a popular JavaScript library for building user interfaces, developed and maintained by Facebook. It allows developers to create reusable UI components and manage the state of applications efficiently. React's component-based architecture and virtual DOM make it a powerful tool for creating interactive and dynamic web applications.",
      },
      {
        imagesrc: "https://via.placeholder.com/150",
        subtitle: "Lodash: A Utility Library for JavaScript",
        paragraph:
          "Lodash is a utility library that provides a wide range of functions for common programming tasks, such as manipulating arrays, objects, and strings. It simplifies tasks like data transformation and object manipulation, making it easier to work with JavaScript's built-in data structures. Lodash is known for its performance and ease of use, and it helps reduce the amount of boilerplate code needed in your projects.",
      },
    ],
  },
];

export default posts;
