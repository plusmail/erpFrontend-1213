const swaggerAutogen = require("swagger-autogen")();

const doc = {
    info: {
        title: "ERP-CRM 첫 프로젝트",
        description: "Description",
    },
    host: "13.232.237.69:8888",
    schemes: ["https"],

};

const outputFile = "./swagger-output.json";
const endpointsFiles = [
    "./app.js"
];

swaggerAutogen(outputFile, endpointsFiles, doc).then(r => console.log("생성 성공", r));
