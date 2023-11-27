import swaggerAutogen from "swagger-autogen";

const doc = {
  info: {
    version: "v1.0.0",
    title: "Article Project",
    description: "Introduction with Swagger",
  },
  servers: [
    {
      url: "http://localhost:3000",
      description: "",
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
  },
  security: [
    {
      bearerAuth: [],
    },
  ],
  definitions: {
    User: {
      username: "danit1",
      email: "danit1@gmail.com",
      password: "2023",
    },
    NewsPost: {
      title: "When did human start waging wars?",
      text: "Organized warfare appears to have started in the Neolithic Age and then ramped up during the Bronze Age.",
    },
  },
};

const outputFile = "./swagger_output.json";
const endpointsFiles = ["./index.ts"];

swaggerAutogen({ openapi: "3.0.0" })(outputFile, endpointsFiles, doc);
