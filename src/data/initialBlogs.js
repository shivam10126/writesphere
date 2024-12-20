export const initialBlogs = [
  {
    id: "1",
    title: "Introduction to React Hooks",
    content: `React Hooks are a revolutionary feature introduced in React 16.8 that transformed the way developers build React applications. Before hooks, stateful logic and side effects were typically handled using class components. However, hooks bring the same functionality into functional components, making code simpler and more reusable.

### Why Use React Hooks?
Hooks solve many problems developers face when writing React components. They allow you to extract stateful logic, making it easier to test and reuse across components. This eliminates the need for complex lifecycle methods in class components.

### The useState Hook
The \`useState\` hook lets you add state to functional components. For example:

\`\`\`javascript
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
\`\`\`

This hook is perfect for managing simple state like counters, toggles, or form inputs.

### The useEffect Hook
The \`useEffect\` hook enables you to perform side effects in functional components, such as data fetching, subscriptions, or DOM updates. Here's a basic example:

\`\`\`javascript
import React, { useState, useEffect } from 'react';

function DocumentTitleUpdater() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = \`You clicked ${count} times\`;
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
\`\`\`

### Conclusion
By mastering hooks like \`useState\` and \`useEffect\`, you can write cleaner, more maintainable React code. Hooks encourage functional programming principles, making your codebase more predictable and easier to understand.`,
    author: "Jane Doe",
    description: "An introduction to React Hooks and how they can simplify your React components.",
    tags: ["React", "JavaScript", "Web Development"],
    createdAt: "2023-06-15T10:30:00Z",
    likes: 45,
    dislikes: 2,
    comments: [
      {
        id: "1a",
        name: "Emily Roberts",
        email: "emily@example.com",
        content: "Thanks for explaining Hooks so clearly! I found the examples very helpful.",
        createdAt: "2023-06-16T08:30:00Z",
        likes: 10,
        dislikes: 0,
      },
      {
        id: "1b",
        name: "Michael Johnson",
        email: "michael@example.com",
        content: "Great article! It really helped me understand useState and useEffect better.",
        createdAt: "2023-06-16T12:45:00Z",
        likes: 8,
        dislikes: 1,
      },
      {
        id: "1c",
        name: "Sophia Lee",
        email: "sophia@example.com",
        content: "Could you also cover useContext in a future post? I’d love to learn more about it.",
        createdAt: "2023-06-17T10:00:00Z",
        likes: 6,
        dislikes: 0,
      },
    ],
  },      
    {
      "id": "2",
      "title": "The Power of CSS Grid",
      "content": "CSS Grid is a game-changing layout system that provides a two-dimensional way to create responsive and robust web layouts. Unlike traditional layout techniques like Flexbox or floats, CSS Grid lets you design complex layouts directly in CSS without relying on additional HTML structures or hacks.\n\n### What Makes CSS Grid Special?\nCSS Grid is unique because it is designed for both columns and rows, making it a true two-dimensional layout system. It simplifies the process of creating grid-based layouts that were previously cumbersome and required a mix of techniques.\n\n### Creating a Simple Grid\nHere's how to create a basic grid layout:\n\n```css\n.container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n}\n.item {\n  background-color: #f0f0f0;\n  padding: 20px;\n  text-align: center;\n}\n```\n\nThis code creates a container with three equal-width columns and a 20px gap between the items. It's perfect for simple grids.\n\n### Advanced Layouts with Grid Areas\nCSS Grid also supports named grid areas for more structured layouts:\n\n```css\n.container {\n  display: grid;\n  grid-template-areas:\n    \"header header header\"\n    \"sidebar main main\"\n    \"footer footer footer\";\n  grid-template-rows: auto 1fr auto;\n  gap: 10px;\n}\n.header { grid-area: header; }\n.sidebar { grid-area: sidebar; }\n.main { grid-area: main; }\n.footer { grid-area: footer; }\n```\n\nWith this approach, you can define the layout structure in CSS and apply specific styles to each section using named areas.\n\n### Responsive Design with CSS Grid\nCSS Grid integrates seamlessly with media queries, enabling you to create responsive designs easily. For example:\n\n```css\n@media (max-width: 768px) {\n  .container {\n    grid-template-columns: 1fr;\n  }\n}\n```\n\n### Conclusion\nCSS Grid is a powerful tool every web developer should master. It reduces the complexity of building layouts, improves readability, and enables designs that adapt beautifully to different screen sizes. Start using CSS Grid today to take your layouts to the next level!",
      "author": "Alex Johnson",
      "description": "A comprehensive guide to CSS Grid, showcasing its capabilities and why it's a must-know tool for modern web development.",
      "tags": ["CSS", "Web Design", "Frontend"],
      "createdAt": "2023-06-20T14:45:00Z",
      "likes": 62,
      "dislikes": 3,
      "comments": [
        {
          "id": "2a",
          "name": "John Smith",
          "email": "john@example.com",
          "content": "This is such a great explanation of CSS Grid! The examples are very clear.",
          "createdAt": "2023-06-21T09:15:00Z",
          "likes": 15,
          "dislikes": 0
        },
        {
          "id": "2b",
          "name": "Lucy Brown",
          "email": "lucy@example.com",
          "content": "I’ve always struggled with layouts, but CSS Grid makes it so much easier. Thanks for the insights!",
          "createdAt": "2023-06-21T11:30:00Z",
          "likes": 12,
          "dislikes": 0
        },
        {
          "id": "2c",
          "name": "Mark Wilson",
          "email": "mark@example.com",
          "content": "Great post! Could you also explain the difference between CSS Grid and Flexbox?",
          "createdAt": "2023-06-22T14:00:00Z",
          "likes": 9,
          "dislikes": 1
        }
      ]    
    },
    {
      "id": "3",
      "title": "Getting Started with Next.js",
      "content": "Next.js has quickly become one of the most popular frameworks for building React applications. With features like server-side rendering (SSR), static site generation (SSG), and automatic code splitting, Next.js empowers developers to build high-performance, scalable applications.\n\n### Why Choose Next.js?\nNext.js offers a range of features that make React development faster and more efficient. It abstracts many complexities, allowing you to focus on building great user experiences.\n\n### Key Features of Next.js\n1. **File-Based Routing:**\n   Next.js uses a file-system-based routing mechanism. For instance, if you create a file at `pages/about.js`, it becomes accessible at `/about`. No additional configuration is required.\n\n2. **API Routes:**\n   With API routes, you can build a fully-fledged backend within your Next.js application. Here's an example:\n\n   ```javascript\n   export default function handler(req, res) {\n     res.status(200).json({ message: 'Hello from Next.js API!' });\n   }\n   ```\n\n3. **Server-Side Rendering (SSR):**\n   With SSR, pages are rendered on the server at runtime, providing better SEO and faster initial load times.\n\n4. **Static Site Generation (SSG):**\n   You can pre-render pages at build time using `getStaticProps`. This is perfect for content-heavy sites:\n\n   ```javascript\n   export async function getStaticProps() {\n     const res = await fetch('https://api.example.com/data');\n     const data = await res.json();\n\n     return {\n       props: {\n         data,\n       },\n     };\n   }\n   ```\n\n5. **Dynamic Routing:**\n   Create dynamic pages by using brackets in your filenames, such as `pages/[id].js`. You can then access these parameters through the `useRouter` hook.\n\n### Deployment Made Easy\nNext.js works seamlessly with platforms like Vercel, making deployment fast and hassle-free. Simply push your code to a Git repository, and your site is live within minutes.\n\n### Conclusion\nNext.js streamlines the React development process, offering unparalleled performance and flexibility. Whether you're building a blog, an e-commerce site, or a large-scale application, Next.js has the tools to make your project a success.",
      "author": "Emily Chen",
      "description": "A detailed guide to Next.js, highlighting its features, advantages, and why it's an essential tool for React developers.",
      "tags": ["Next.js", "React", "Web Development"],
      "createdAt": "2023-06-25T09:15:00Z",
      "likes": 55,
      "dislikes": 1,
      "comments": [
        {
          "id": "3a",
          "name": "David Wilson",
          "email": "david@example.com",
          "content": "I've been using Next.js for a while now, and it's truly amazing. Great article!",
          "createdAt": "2023-06-26T11:00:00Z",
          "likes": 18,
          "dislikes": 0
        },
        {
          "id": "3b",
          "name": "Sarah Thompson",
          "email": "sarah@example.com",
          "content": "How does Next.js handle state management? Do I still need to use Redux?",
          "createdAt": "2023-06-27T13:45:00Z",
          "likes": 7,
          "dislikes": 1
        },
        {
          "id": "3c",
          "name": "Liam Harris",
          "email": "liam@example.com",
          "content": "This blog gave me a great overview of Next.js. Would love to see a follow-up on API routes.",
          "createdAt": "2023-06-28T10:20:00Z",
          "likes": 11,
          "dislikes": 0
        }
      ]
    },
    {
      "id": "4",
      "title": "Mastering JavaScript Asynchronous Programming",
      "content": "Asynchronous programming in JavaScript is essential for handling tasks like API calls, timeouts, and user interactions that may take time to complete. Understanding the fundamentals of asynchronous programming will make you a more effective JavaScript developer.\n\n### Callbacks\nOne of the first ways JavaScript handles asynchrony is through callbacks. A callback is a function passed as an argument to another function, which is then executed when a certain event occurs.\n\n```javascript\nfunction fetchData(callback) {\n  setTimeout(() => {\n    callback('Data fetched successfully');\n  }, 2000);\n}\n\nfetchData((message) => {\n  console.log(message);\n});\n```\n\n### Promises\nPromises offer a more powerful and flexible approach to asynchronous programming. A promise represents the eventual completion (or failure) of an asynchronous operation.\n\n```javascript\nfunction fetchData() {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      resolve('Data fetched successfully');\n    }, 2000);\n  });\n}\n\nfetchData().then((message) => {\n  console.log(message);\n});\n```\n\n### Async/Await\nAsync/await, introduced in ES2017, provides an even more intuitive way to write asynchronous code.\n\n```javascript\nasync function fetchData() {\n  return 'Data fetched successfully';\n}\n\nasync function main() {\n  const result = await fetchData();\n  console.log(result);\n}\n\nmain();\n```\n\n### Conclusion\nMastering asynchronous programming is a must for JavaScript developers. Whether using callbacks, promises, or async/await, understanding these concepts is key to writing efficient and non-blocking code.",
      "author": "David Smith",
      "description": "A beginner-friendly guide to JavaScript's asynchronous programming, with practical examples of callbacks, promises, and async/await.",
      "tags": ["JavaScript", "Asynchronous", "Web Development"],
      "createdAt": "2023-07-05T13:30:00Z",
      "likes": 70,
      "dislikes": 2,
      "comments": [
        {
          "id": "4a",
          "name": "Chris Adams",
          "email": "chris@example.com",
          "content": "This article made ES6+ features so much easier to understand. Thanks!",
          "createdAt": "2023-07-01T09:45:00Z",
          "likes": 14,
          "dislikes": 0
        },
        {
          "id": "4b",
          "name": "Ella Johnson",
          "email": "ella@example.com",
          "content": "Arrow functions and destructuring are my favorite ES6 features. Great post!",
          "createdAt": "2023-07-01T12:30:00Z",
          "likes": 10,
          "dislikes": 0
        },
        {
          "id": "4c",
          "name": "Ryan Scott",
          "email": "ryan@example.com",
          "content": "Could you write a follow-up on async/await and Promises? That would be really helpful.",
          "createdAt": "2023-07-02T10:00:00Z",
          "likes": 8,
          "dislikes": 1
        }
      ]
    },
    {
      "id": "5",
      "title": "Introduction to TypeScript for React Developers",
      "content": "TypeScript adds static typing to JavaScript, making it easier to catch errors early and improving the maintainability of your codebase. As a React developer, adopting TypeScript can significantly enhance your productivity and help you write cleaner, more reliable code.\n\n### Benefits of TypeScript\n1. **Type Safety:** TypeScript ensures that the types of your variables are checked during compile-time, reducing the chances of runtime errors.\n2. **Enhanced IDE Support:** Most IDEs have excellent TypeScript support, providing features like autocompletion, type checking, and intelligent refactoring.\n3. **Easier Debugging:** With static typing, debugging becomes more straightforward, as TypeScript helps catch bugs before they occur.\n\n### Using TypeScript with React\nHere's an example of how to use TypeScript with React functional components:\n\n```tsx\nimport React from 'react';\n\ninterface Props {\n  message: string;\n}\n\nconst Hello: React.FC<Props> = ({ message }) => {\n  return <h1>{message}</h1>;\n};\n\nexport default Hello;\n```\n\n### TypeScript with State\nTypeScript also works seamlessly with React's `useState` hook. Here's how to type the state:\n\n```tsx\nimport React, { useState } from 'react';\n\nconst Counter: React.FC = () => {\n  const [count, setCount] = useState<number>(0);\n\n  return (\n    <div>\n      <p>{count}</p>\n      <button onClick={() => setCount(count + 1)}>Increment</button>\n    </div>\n  );\n};\n\nexport default Counter;\n```\n\n### Conclusion\nIntegrating TypeScript with React helps catch errors early and leads to more predictable, easier-to-maintain applications. As you work with larger applications, TypeScript's advantages become even more apparent, especially in ensuring type safety and improving code readability.",
      "author": "Sarah Lee",
      "description": "An introduction to using TypeScript with React, covering key benefits, practical examples, and tips for enhancing your React applications with TypeScript.",
      "tags": ["TypeScript", "React", "JavaScript"],
      "createdAt": "2023-07-10T11:00:00Z",
      "likes": 88,
      "dislikes": 3,
      "comments": [
        {
          "id": "5a",
          "name": "Anna Taylor",
          "email": "anna@example.com",
          "content": "This guide helped me understand RESTful APIs much better. Thank you!",
          "createdAt": "2023-07-06T14:00:00Z",
          "likes": 20,
          "dislikes": 0
        },
        {
          "id": "5b",
          "name": "Jack Miller",
          "email": "jack@example.com",
          "content": "Could you explain more about how to handle authentication in RESTful APIs?",
          "createdAt": "2023-07-06T15:30:00Z",
          "likes": 12,
          "dislikes": 0
        },
        {
          "id": "5c",
          "name": "Emily Davis",
          "email": "emily@example.com",
          "content": "The section on REST principles was especially helpful. Keep up the great work!",
          "createdAt": "2023-07-07T11:45:00Z",
          "likes": 18,
          "dislikes": 1
        }
      ]
    },
    {
      "id": "6",
      "title": "Deep Dive into Node.js Streams",
      "content": "Node.js Streams are a powerful feature that allows developers to work with data in chunks, rather than loading everything into memory at once. This is particularly useful when working with large files or real-time data processing.\n\n### Types of Streams\nThere are four main types of streams in Node.js:\n1. **Readable Streams:** Streams from which data can be read (e.g., `fs.createReadStream()`).\n2. **Writable Streams:** Streams to which data can be written (e.g., `fs.createWriteStream()`).\n3. **Duplex Streams:** Streams that are both readable and writable (e.g., `net.Socket`).\n4. **Transform Streams:** A type of duplex stream that can modify the data as it is written and read (e.g., `zlib.createGzip()`).\n\n### Using Readable Streams\nHere's how to use a readable stream in Node.js to read a file:\n\n```javascript\nconst fs = require('fs');\nconst readStream = fs.createReadStream('largeFile.txt');\n\nreadStream.on('data', (chunk) => {\n  console.log('Received chunk:', chunk);\n});\n\nreadStream.on('end', () => {\n  console.log('End of file');\n});\n```\n\n### Using Writable Streams\nWritable streams allow you to write data to files or other destinations:\n\n```javascript\nconst fs = require('fs');\nconst writeStream = fs.createWriteStream('output.txt');\n\nwriteStream.write('Hello, world!');\nwriteStream.end();\n```\n\n### Conclusion\nStreams are essential when working with large datasets or when you need to process data in real-time. By using streams effectively, you can optimize performance and memory usage in your Node.js applications.",
      "author": "James Brown",
      "description": "An in-depth look at Node.js Streams, exploring their types and how to use them effectively for handling large datasets and real-time data.",
      "tags": ["Node.js", "Streams", "Backend"],
      "createdAt": "2023-07-12T08:00:00Z",
      "likes": 95,
      "dislikes": 1,
      "comments": [
        {
          "id": "6a",
          "name": "James Walker",
          "email": "james@example.com",
          "content": "This article is an eye-opener! Accessibility should be a priority in every project.",
          "createdAt": "2023-07-11T09:00:00Z",
          "likes": 22,
          "dislikes": 0
        },
        {
          "id": "6b",
          "name": "Sophia Roberts",
          "email": "sophia@example.com",
          "content": "Could you share more tools or libraries for accessibility testing?",
          "createdAt": "2023-07-11T10:30:00Z",
          "likes": 15,
          "dislikes": 1
        },
        {
          "id": "6c",
          "name": "Liam King",
          "email": "liam@example.com",
          "content": "Great read! The section on ARIA roles was very informative.",
          "createdAt": "2023-07-12T14:15:00Z",
          "likes": 19,
          "dislikes": 0
        }
      ]
    }
  ]
  
  