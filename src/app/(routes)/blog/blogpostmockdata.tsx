export interface Post {
  id: number;
  imgUrl: string;
  author: string;
  title: string;
  description: string;
  content: Array<{
    imagesrc?: string;
    subtitle: string;
    snippet: string;
    paragraph: string;
  }>;
  views: number;
  createdAt: string;
}

export function getPostDataById(id: number): Post | undefined {
  return PostData.find((post) => post.id === id);
}

export const PostData: Post[] = [
  {
    id: 1,
    imgUrl: `${process.env.NEXT_PUBLIC_IMGIX_DOMAIN}/Banner-Cover-1.avif`,
    author: "Author: Surakiat",
    views: 56,
    createdAt: "30/07/2024 08:00 AM.",
    title: "5 Tips for Using Tailwind CSS in Your Project",
    description:
      "Learn tips for using Tailwind CSS to enhance your frontend development, making it faster and more efficient.",
    content: [
      {
        imagesrc: `${process.env.NEXT_PUBLIC_IMGIX_DOMAIN}/Banner-Content1.1.avif`,
        subtitle: "1. Using the Utility-First Approach",
        snippet:
          '<div class="bg-blue-500 text-white p-4">\n  Hello, Tailwind CSS!\n</div>\n',
        paragraph:
          "Tailwind CSS employs a utility-first approach that allows you to write CSS quickly and with high flexibility without creating new classes for each style you need. You can use pre-existing classes in Tailwind CSS to instantly customize the appearance. For instance, using `bg-blue-500` changes the background color to blue, and `text-white` changes the text color to white.",
      },
      {
        imagesrc: `${process.env.NEXT_PUBLIC_IMGIX_DOMAIN}/Banner-Content1.2.avif`,
        subtitle: "2. Easy Responsive Design with Tailwind CSS",
        snippet:
          '<div class="p-4 md:p-8 lg:p-12">\n  Responsive Padding\n</div>\n',
        paragraph:
          "Responsive design is made easy with Tailwind CSS by using existing responsive modifiers like `md:` and `lg:` to adjust the appearance on different screen sizes. For example, using `p-4 md:p-8 lg:p-12` changes the padding for medium and large screens.",
      },
      {
        imagesrc: `${process.env.NEXT_PUBLIC_IMGIX_DOMAIN}/Banner-Content1.3.avif`,
        subtitle: "3. Using Hover and Focus States",
        snippet:
          '<button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">\n  Hover Me\n</button>\n',
        paragraph:
          "Tailwind CSS provides utility classes for managing hover and focus states, allowing you to easily customize the appearance of elements during interactions. For example, using `hover:bg-green-700` changes the background color when hovered.",
      },
      {
        imagesrc: `${process.env.NEXT_PUBLIC_IMGIX_DOMAIN}/Banner-Content1.4.avif`,
        subtitle: "4. Supporting Dark Mode",
        snippet:
          '<div class="bg-white dark:bg-gray-800 text-black dark:text-white p-4">\n  Dark Mode Ready\n</div>\n',
        paragraph:
          "Supporting dark mode in Tailwind CSS is straightforward using the `dark:` modifier. For instance, using `dark:bg-gray-800` changes the background color to dark gray when dark mode is enabled.",
      },
      {
        imagesrc: `${process.env.NEXT_PUBLIC_IMGIX_DOMAIN}/Banner-Content1.5.avif`,
        subtitle: "5. Creating Custom Styles",
        snippet:
          '<style>\n@layer utilities {\n  .btn-primary {\n    @apply bg-blue-500 text-white font-bold py-2 px-4 rounded;\n  }\n}\n</style>\n<button class="btn-primary">\n  Custom Button\n</button>\n',
        paragraph:
          "While Tailwind CSS offers a plethora of utility classes, you can also create your own custom styles using the `@apply` directive to combine multiple utility classes into a single class. For example, creating `.btn-primary` uses `@apply` to combine several styles.",
      },
    ],
  },
  {
    id: 2,
    imgUrl: `${process.env.NEXT_PUBLIC_IMGIX_DOMAIN}/Banner-Cover-2.avif`,
    author: "Author: Surakiat",
    views: 47,
    createdAt: "30/07/2024 08:00 AM.",
    title: "Getting Started with Ant Design in Your Project",
    description:
      "A tutorial on how to start using Ant Design (Antd) in your project, with code snippets and examples.",
    content: [
      {
        imagesrc: `${process.env.NEXT_PUBLIC_IMGIX_DOMAIN}/Banner-Content2.1.avif`,
        subtitle: "1. Installing Ant Design",
        snippet: "npm install antd or yarn add antd",
        paragraph:
          "To get started with Ant Design in your project, you first need to install the library. You can use either npm or yarn to do this. Run the following command in your project directory to install Ant Design:",
      },
      {
        imagesrc: `${process.env.NEXT_PUBLIC_IMGIX_DOMAIN}/Banner-Content2.2.avif`,
        subtitle: "2. Importing and Using Ant Design Components",
        snippet:
          "import React from 'react';\nimport { Button } from 'antd';\n\nconst App = () => (\n  <div>\n    <Button type=\"primary\">Primary Button</Button>\n  </div>\n);\n\nexport default App;\n",
        paragraph:
          "Once Ant Design is installed, you can start using its components in your project. Import the components you need from 'antd' and use them in your React components. Here's an example of how to import and use the `Button` component:",
      },
      {
        imagesrc: `${process.env.NEXT_PUBLIC_IMGIX_DOMAIN}/Banner-Content2.3.avif`,
        subtitle: "3. Creating a Form with Validation",
        snippet:
          'import React from \'react\';\nimport { Form, Input, Button } from \'antd\';\n\nconst App = () => {\n  const onFinish = (values) => {\n    console.log(\'Success:\', values);\n  };\n\n  const onFinishFailed = (errorInfo) => {\n    console.log(\'Failed:\', errorInfo);\n  };\n\n  return (\n    <Form\n      name="basic"\n      labelCol={{ span: 8 }}\n      wrapperCol={{ span: 16 }}\n      initialValues={{ remember: true }}\n      onFinish={onFinish}\n      onFinishFailed={onFinishFailed}\n      autoComplete="off"\n    >\n      <Form.Item\n        label="Username"\n        name="username"\n        rules={[{ required: true, message: \'Please input your username!\' }]}\n      >\n        <Input />\n      </Form.Item>\n\n      <Form.Item\n        label="Password"\n        name="password"\n        rules={[{ required: true, message: \'Please input your password!\' }]}\n      >\n        <Input.Password />\n      </Form.Item>\n\n      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>\n        <Button type="primary" htmlType="submit">\n          Submit\n        </Button>\n      </Form.Item>\n    </Form>\n  );\n};\n\nexport default App;\n',
        paragraph:
          "Creating forms with Ant Design is simple and straightforward. The `Form` component provides a flexible and extensible way to create and validate forms. Here's an example of a form with username and password fields, along with validation rules:",
      },
      {
        imagesrc: `${process.env.NEXT_PUBLIC_IMGIX_DOMAIN}/Banner-Content2.4.avif`,
        subtitle: "4. Building Layouts with Ant Design",
        snippet:
          'import React from \'react\';\nimport { Layout, Menu, Breadcrumb } from \'antd\';\n\nconst { Header, Content, Footer } = Layout;\n\nconst App = () => (\n  <Layout className="layout">\n    <Header>\n      <div className="logo" />\n      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[\'1\']}>\n        <Menu.Item key="1">Home</Menu.Item>\n        <Menu.Item key="2">About</Menu.Item>\n        <Menu.Item key="3">Contact</Menu.Item>\n      </Menu>\n    </Header>\n    <Content style={{ padding: \'0 50px\' }}>\n      <Breadcrumb style={{ margin: \'16px 0\' }}>\n        <Breadcrumb.Item>Home</Breadcrumb.Item>\n        <Breadcrumb.Item>About</Breadcrumb.Item>\n      </Breadcrumb>\n      <div className="site-layout-content">Content</div>\n    </Content>\n    <Footer style={{ textAlign: \'center\' }}>Ant Design ©2024 Created by Ant UED</Footer>\n  </Layout>\n);\n\nexport default App;\n',
        paragraph:
          "Ant Design's `Layout` component helps you to build complex and responsive layouts effortlessly. The `Layout`, `Header`, `Content`, and `Footer` components provide a structured way to organize your application's main sections. Here's an example of how to build a basic layout with a header, content area, and footer:",
      },
      {
        imagesrc: `${process.env.NEXT_PUBLIC_IMGIX_DOMAIN}/Banner-Content2.5.avif`,
        subtitle: "5. Displaying Data with Ant Design Table",
        snippet:
          "import React from 'react';\nimport { Table } from 'antd';\n\nconst columns = [\n  {\n    title: 'Name',\n    dataIndex: 'name',\n    key: 'name',\n  },\n  {\n    title: 'Age',\n    dataIndex: 'age',\n    key: 'age',\n  },\n  {\n    title: 'Address',\n    dataIndex: 'address',\n    key: 'address',\n  },\n];\n\nconst data = [\n  {\n    key: '1',\n    name: 'John Brown',\n    age: 32,\n    address: 'New York No. 1 Lake Park',\n  },\n  {\n    key: '2',\n    name: 'Jim Green',\n    age: 42,\n    address: 'London No. 1 Lake Park',\n  },\n  {\n    key: '3',\n    name: 'Joe Black',\n    age: 32,\n    address: 'Sydney No. 1 Lake Park',\n  },\n];\n\nconst App = () => <Table columns={columns} dataSource={data} />;\n\nexport default App;\n",
        paragraph:
          "Ant Design's `Table` component is powerful and easy to use, allowing you to display data in a structured format. You can define the columns and provide data to the table. Here's an example of a simple table displaying a list of users:",
      },
    ],
  },
  {
    id: 3,
    imgUrl: `${process.env.NEXT_PUBLIC_IMGIX_DOMAIN}/Banner-Cover-3.avif`,
    author: "Author: Surakiat",
    views: 68,
    createdAt: "30/07/2024 08:00 AM.",
    title: "Getting Started with React Icons in Your Project",
    description:
      "A guide on how to integrate and use React Icons in your React project, complete with installation commands and usage examples.",
    content: [
      {
        imagesrc: undefined,
        subtitle: "1. Installing React Icons",
        snippet: "npm install react-icons",
        paragraph:
          "To use React Icons in your project, you first need to install the library. You can use either npm or yarn to do this. Run the following command in your project directory to install React Icons:",
      },
      {
        imagesrc: "https://react-icons.github.io/react-icons/img/usage.svg",
        subtitle: "2. Importing and Using React Icons",
        snippet: "import { FaBeer } from 'react-icons/fa'",
        paragraph:
          "Once React Icons is installed, you can start using the icons in your project. Import the icons you need from 'react-icons' and use them in your React components. Here's an example of how to import and use the `FaBeer` icon from Font Awesome:",
      },
      {
        imagesrc: undefined,
        subtitle: "3. Customizing Icons",
        snippet: '<FaCoffee size={50} color="brown" />',
        paragraph:
          "React Icons can be customized using props such as `size` and `color`. This allows you to easily adjust the appearance of the icons to fit your design. Here's an example of how to customize the `FaCoffee` icon:",
      },
      {
        imagesrc: undefined,
        subtitle: "4. Using Icons from Different Libraries",
        snippet:
          "import { FaApple } from 'react-icons/fa';\nimport { MdAlarm } from 'react-icons/md';",
        paragraph:
          "React Icons provides icons from various popular icon libraries such as Font Awesome, Material Design, Typicons, and more. You can import icons from different libraries and use them in your project. Here's an example of using icons from Font Awesome, Material Design, and Typicons:",
      },
      {
        imagesrc:
          "",
        subtitle: "5. Enhancing Accessibility with Icons",
        snippet:
          '<FaAccessibleIcon title="Accessible Icon" aria-label="Accessible Icon" />',
        paragraph:
          "Icons can play a crucial role in enhancing the accessibility of your application. By providing `title` and `aria-label` attributes, you can make sure that screen readers can interpret the icons correctly. Here's an example of how to enhance accessibility using the `FaAccessibleIcon`:",
      },
    ],
  },
  {
    id: 4,
    imgUrl: `${process.env.NEXT_PUBLIC_IMGIX_DOMAIN}/Banner-Cover-4.avif`,
    author: "Author: Surakiat",
    views: 26,
    createdAt: "30/07/2024 08:00 AM.",
    title: "Using Swagger for Frontend Development",
    description:
      "A guide on how to use Swagger to integrate API documentation and testing into your frontend application, complete with setup instructions and code examples.",
    content: [
      {
        imagesrc: undefined,
        subtitle: "1. Setting Up Swagger in Your Project",
        snippet: "npm install swagger-ui-react or yarn add swagger-ui-react",
        paragraph:
          "To integrate Swagger into your frontend application, you first need to install the Swagger UI React component. This component allows you to embed Swagger API documentation directly into your React application. You can install it using npm or yarn with the following command:",
      },
      {
        imagesrc: undefined,
        subtitle: "2. Adding Swagger UI to Your React Component",
        snippet:
          "import React from 'react';\nimport SwaggerUI from 'swagger-ui-react';\nimport 'swagger-ui-react/swagger-ui.css';\n\nconst ApiDocs = () => (\n  <div>\n    <SwaggerUI url=\"https://petstore.swagger.io/v2/swagger.json\" />\n  </div>\n);\n\nexport default ApiDocs;\n",
        paragraph:
          "After installing the package, you can use the `SwaggerUI` component to display your API documentation. In the example above, replace `url` with the URL of your Swagger JSON file. This will render the Swagger UI within your React component, providing interactive API documentation for your frontend.",
      },
      {
        imagesrc: undefined,
        subtitle: "3. Testing API Endpoints with Swagger UI",
        snippet:
          "import React from 'react';\nimport SwaggerUI from 'swagger-ui-react';\nimport 'swagger-ui-react/swagger-ui.css';\n\nconst TestApi = () => (\n  <div>\n    <SwaggerUI url=\"https://your-api-url.com/swagger.json\" />\n  </div>\n);\n\nexport default TestApi;\n",
        paragraph:
          "Swagger UI not only provides documentation but also allows you to interact with and test your API endpoints directly from the UI. Ensure that the `url` prop points to the Swagger JSON file for your API. This will enable you to explore the API, test endpoints, and view responses directly from the documentation.",
      },
      {
        imagesrc: undefined,
        subtitle: "4. Customizing Swagger UI Appearance",
        snippet:
          "import React from 'react';\nimport SwaggerUI from 'swagger-ui-react';\nimport 'swagger-ui-react/swagger-ui.css';\nimport { createTheme } from 'swagger-ui-react';\n\nconst customTheme = createTheme({\n  primaryColor: '#1D4ED8',\n  backgroundColor: '#F3F4F6',\n});\n\nconst CustomApiDocs = () => (\n  <div>\n    <SwaggerUI url=\"https://your-api-url.com/swagger.json\" theme={customTheme} />\n  </div>\n);\n\nexport default CustomApiDocs;\n",
        paragraph:
          "Swagger UI allows for customization of its appearance to match your application's branding. You can create a custom theme by defining colors and other styles. In the example above, the `createTheme` function is used to create a custom theme, which is then applied to the Swagger UI component via the `theme` prop.",
      },
      {
        imagesrc: undefined,
        subtitle: "5. Integrating Swagger UI with Your Developer Portal",
        snippet:
          "<title>My API Documentation</title>\n</head>\n<body>\n  <div id=\"swagger-ui\"></div>\n  <script src=\"https://unpkg.com/swagger-ui-dist/swagger-ui-bundle.js\"></script>\n  <script>\n    SwaggerUIBundle({\n      url: 'https://your-api-url.com/swagger.json',\n      dom_id: '#swagger-ui',\n    });\n  </script>",
        paragraph:
          "If you're using Swagger UI in a static site or a developer portal outside of a React application, you can include Swagger UI directly in your HTML. The example above shows how to embed Swagger UI into a webpage by including the Swagger UI Bundle script and initializing it with the API URL. This approach allows you to use Swagger UI on any web page.",
      },
    ],
  },
  {
    id: 5,
    imgUrl: `${process.env.NEXT_PUBLIC_IMGIX_DOMAIN}/Banner-Cover-5.avif`,
    author: "Author: Surakiat",
    views: 92,
    createdAt: "30/07/2024 08:00 AM.",
    title: "Using Figma DevTools for Developers",
    description:
      "A guide on how to use Figma DevTools to streamline the design-to-development process, including setup instructions and tips for extracting design assets.",
    content: [
      {
        imagesrc: undefined,
        subtitle: "1. Installing Figma DevTools",
        snippet: "npm install figma-devtools or yarn add figma-devtools",
        paragraph:
          "To start using Figma DevTools, you need to install it as a development dependency in your project. You can do this using npm or yarn with the following commands:",
      },
      {
        imagesrc: undefined,
        subtitle: "2. Setting Up Figma DevTools Plugin",
        snippet:
          "import React from 'react';\nimport { FigmaDevTools } from 'figma-devtools';\n\nconst App = () => (\n  <div>\n    <FigmaDevTools\n      figmaUrl=\"https://www.figma.com/file/your-figma-file-id\"\n      apiKey=\"YOUR_FIGMA_API_KEY\"\n    />\n  </div>\n);\n\nexport default App;\n",
        paragraph:
          "After installing the Figma DevTools package, you need to set up the Figma DevTools component in your React application. Replace `figmaUrl` with the URL of your Figma file and `apiKey` with your Figma API key. This will integrate Figma DevTools into your project and allow you to access design assets and inspect designs.",
      },
      {
        imagesrc: undefined,
        subtitle: "3. Extracting Design Assets",
        snippet:
          "import React from 'react';\nimport { FigmaAssets } from 'figma-devtools';\n\nconst DesignAssets = () => (\n  <div>\n    <FigmaAssets\n      figmaUrl=\"https://www.figma.com/file/your-figma-file-id\"\n      apiKey=\"YOUR_FIGMA_API_KEY\"\n    />\n  </div>\n);\n\nexport default DesignAssets;\n",
        paragraph:
          "Figma DevTools allows you to extract design assets directly from your Figma file. By using the `FigmaAssets` component, you can pull in images, colors, and other assets into your React project. This simplifies the process of keeping your frontend in sync with your design.",
      },
      {
        imagesrc: undefined,
        subtitle: "4. Inspecting and Synchronizing Designs",
        snippet:
          "import React from 'react';\nimport { FigmaInspector } from 'figma-devtools';\n\nconst DesignInspector = () => (\n  <div>\n    <FigmaInspector\n      figmaUrl=\"https://www.figma.com/file/your-figma-file-id\"\n      apiKey=\"YOUR_FIGMA_API_KEY\"\n    />\n  </div>\n);\n\nexport default DesignInspector;\n",
        paragraph:
          "With the `FigmaInspector` component, you can inspect the design elements and synchronize them with your code. This feature helps you ensure that your implementation matches the design specifications accurately, making the development process more efficient.",
      },
      {
        imagesrc: undefined,
        subtitle: "5. Collaborating with Designers",
        snippet:
          "import React from 'react';\nimport { FigmaCollaboration } from 'figma-devtools';\n\nconst Collaboration = () => (\n  <div>\n    <FigmaCollaboration\n      figmaUrl=\"https://www.figma.com/file/your-figma-file-id\"\n      apiKey=\"YOUR_FIGMA_API_KEY\"\n    />\n  </div>\n);\n\nexport default Collaboration;\n",
        paragraph:
          "Figma DevTools also supports collaboration features, allowing developers and designers to work together more seamlessly. The `FigmaCollaboration` component helps integrate real-time design updates and feedback into your development workflow, enhancing communication and productivity.",
      },
    ],
  },
  {
    id: 6,
    imgUrl: `${process.env.NEXT_PUBLIC_IMGIX_DOMAIN}/Banner-Cover-6.avif`,
    author: "Author: Surakiat",
    views: 53,
    createdAt: "30/07/2024 08:00 AM.",
    title: "Getting Started with MUI for Frontend Developers",
    description:
      "A guide to getting started with MUI (Material-UI), including installation instructions, basic usage, and customization tips for frontend developers.",
    content: [
      {
        imagesrc: undefined,
        subtitle: "1. Installing MUI in Your Project",
        snippet:
          "npm install @mui/material @emotion/react @emotion/styled\n\nnyarn add @mui/material @emotion/react @emotion/styled\n",
        paragraph:
          "To start using MUI in your React project, you need to install the core MUI package along with `@emotion/react` and `@emotion/styled` for styling. You can install these dependencies using npm or yarn with the following commands:",
      },
      {
        imagesrc: undefined,
        subtitle: "2. Basic Usage of MUI Components",
        snippet:
          "import React from 'react';\nimport Button from '@mui/material/Button';\n\nconst App = () => (\n  <div>\n    <Button variant=\"contained\" color=\"primary\">\n      Hello MUI\n    </Button>\n  </div>\n);\n\nexport default App;\n",
        paragraph:
          "Once you have installed MUI, you can start using its components in your React application. In the example above, we import the `Button` component from `@mui/material` and use it to render a styled button with the `contained` variant and `primary` color.",
      },
      {
        imagesrc: undefined,
        subtitle: "3. Customizing MUI Components",
        snippet:
          "import React from 'react';\nimport { createTheme, ThemeProvider } from '@mui/material/styles';\nimport Button from '@mui/material/Button';\n\nconst theme = createTheme({\n  palette: {\n    primary: {\n      main: '#1976d2',\n    },\n  },\n});\n\nconst App = () => (\n  <ThemeProvider theme={theme}>\n    <Button variant=\"contained\" color=\"primary\">\n      Customized Button\n    </Button>\n  </ThemeProvider>\n);\n\nexport default App;\n",
        paragraph:
          "MUI allows for extensive customization through its theming system. By using the `createTheme` and `ThemeProvider` components, you can define a custom theme and apply it throughout your application. In the example above, we create a theme with a custom primary color and wrap the `Button` component in a `ThemeProvider` to apply this theme.",
      },
      {
        imagesrc: undefined,
        subtitle: "4. Using MUI Icons",
        snippet:
          "npm install @mui/icons-material\n\nnyarn add @mui/icons-material\n\n\njavascript\nimport React from 'react';\nimport IconButton from '@mui/material/IconButton';\nimport DeleteIcon from '@mui/icons-material/Delete';\n\nconst App = () => (\n  <div>\n    <IconButton color=\"primary\">\n      <DeleteIcon />\n    </IconButton>\n  </div>\n);\n\nexport default App;\n",
        paragraph:
          "MUI also provides a set of Material Design icons that you can use in your application. To use MUI icons, install the `@mui/icons-material` package and import the desired icon component. In the example above, we use the `IconButton` component along with the `DeleteIcon` from `@mui/icons-material` to render a button with an icon.",
      },
      {
        imagesrc: undefined,
        subtitle: "5. Responsive Layout with MUI Grid",
        snippet:
          "import React from 'react';\nimport Grid from '@mui/material/Grid';\nimport Paper from '@mui/material/Paper';\n\nconst App = () => (\n  <Grid container spacing={2}>\n    <Grid item xs={12} sm={6} md={4}>\n      <Paper style={{ padding: 16 }}>Item 1</Paper>\n    </Grid>\n    <Grid item xs={12} sm={6} md={4}>\n      <Paper style={{ padding: 16 }}>Item 2</Paper>\n    </Grid>\n    <Grid item xs={12} sm={6} md={4}>\n      <Paper style={{ padding: 16 }}>Item 3</Paper>\n    </Grid>\n  </Grid>\n);\n\nexport default App;\n",
        paragraph:
          "The MUI `Grid` component provides a powerful layout system for building responsive designs. You can specify different grid item sizes for various screen sizes using the `xs`, `sm`, and `md` props. In the example above, we use the `Grid` container and items to create a responsive layout with three items, each occupying different proportions of the screen on different device sizes.",
      },
    ],
  },
  {
    id: 7,
    imgUrl: `${process.env.NEXT_PUBLIC_IMGIX_DOMAIN}/Banner-Cover-7.avif`,
    author: "Author: Surakiat",
    views: 71,
    createdAt: "30/07/2024 08:00 AM.",
    title:
      "Getting Started with Create Next.js Project and Basic Frontend Setup",
    description:
      "A guide to starting a new Next.js project using Create Next App, including setup instructions and basic configuration for frontend development.",
    content: [
      {
        imagesrc: undefined,
        subtitle: "1. Creating a New Next.js Project",
        snippet:
          "nnpx create-next-app@latest my-nextjs-app\n\nnyarn create next-app my-nextjs-app\n",
        paragraph:
          "To create a new Next.js project, you can use the `create-next-app` command. This sets up a new project with a default configuration. Replace `my-nextjs-app` with your desired project name. You can use `npx` or `yarn` to run the command:",
      },
      {
        imagesrc: undefined,
        subtitle: "2. Navigating to Your Project Directory",
        snippet: "cd my-nextjs-app",
        paragraph:
          "After creating the project, navigate into the project directory using the `cd` command. This will change your working directory to the newly created Next.js project folder.",
      },
      {
        imagesrc: undefined,
        subtitle: "3. Starting the Development Server",
        snippet: "npm run dev or yarn dev",
        paragraph:
          "To start the development server and see your project in action, run the `dev` script. This will start the server and open your application in the browser. You can use `npm` or `yarn` to run the command:",
      },
      {
        imagesrc: undefined,
        subtitle: "4. Basic Folder Structure",
        snippet:
          "plaintext\nmy-nextjs-app/\n  ├── public/\n  ├── src/\n  ├── pages/\n  ├── components/\n  ├── styles/\n  ├── .gitignore\n  ├── package.json\n  └── README.md\n",
        paragraph:
          "The default folder structure for a Next.js project includes several key directories and files. `pages/` contains your route components, `components/` is where you can place your reusable components, and `styles/` is for your global CSS files. The `public/` folder is used for static assets.",
      },
      {
        imagesrc: undefined,
        subtitle: "5. Adding a Custom Component",
        snippet:
          "/ src/components/HelloWorld.js import React from 'react';\n\nconst HelloWorld = () => (\n  <div>\n    <h1>Hello, Next.js!</h1>\n  </div>\n);\n\nexport default HelloWorld;\n\n// src/pages/index.js\nimport HelloWorld from '../components/HelloWorld';\n\nconst Home = () => (\n  <div>\n    <HelloWorld />\n  </div>\n);\n\nexport default Home;\n",
        paragraph:
          "You can create custom components in the `src/components/` directory. In the example above, we create a simple `HelloWorld` component and use it in the `index.js` page. This demonstrates how to organize and use components within your Next.js application.",
      },
      {
        imagesrc: undefined,
        subtitle: "6. Configuring Global Styles",
        snippet:
          "/ src/styles/globals.css\nbody {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\n}\n\n// src/pages/_app.js\nimport '../styles/globals.css';\n\nfunction MyApp({ Component, pageProps }) {\n  return <Component {...pageProps} />;\n}\n\nexport default MyApp;\n",
        paragraph:
          "To apply global styles across your application, add CSS rules to the `globals.css` file in the `src/styles/` directory. Import this CSS file in the `_app.js` file to ensure that the styles are applied globally.",
      },
    ],
  },
];

export function getPostById(id: number): Post | undefined {
  return PostData.find((post) => post.id === id);
}
