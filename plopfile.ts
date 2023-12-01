import { NodePlopAPI } from "plop";

export default (plop: NodePlopAPI): void => {
  plop.setGenerator("component", {
    description: "Create a reusable component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your component name?",
      },
      {
        type: "confirm",
        name: "hasFolder",
        message: "Does your component reside in a subfolder?",
      },
      {
        type: "input",
        name: "folder",
        message: "What is your component's subfolder name?",
        when: (answers) => !!answers.hasFolder,
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/components{{#if folder}}/{{folder}}{{/if}}/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: "dev/templates/component/Component.tsx.hbs",
      },
      {
        type: "add",
        path: "src/components{{#if folder}}/{{folder}}{{/if}}/{{pascalCase name}}/index.ts",
        templateFile: "dev/templates/component/index.ts.hbs",
      },
    ],
  });

  plop.setGenerator("element", {
    description: "Create a reusable UI element",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your element name?",
      },
      {
        type: "confirm",
        name: "hasFolder",
        message: "Does your element reside in a subfolder?",
      },
      {
        type: "input",
        name: "folder",
        message: "What is your element's subfolder name?",
        when: (answers) => !!answers.hasFolder,
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/elements{{#if folder}}/{{folder}}{{/if}}/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: "dev/templates/element/Element.tsx.hbs",
      },
    ],
  });

  plop.setGenerator("screen", {
    description: "Create a screen",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your screen's name?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/app/{{lowerCase name}}/index.tsx",
        templateFile: "dev/templates/screen/index.tsx.hbs",
      },
    ],
  });

  plop.setGenerator("hook", {
    description: "Create a React hook",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your hook's name?",
        filter: (value) =>
          value.startsWith("use")
            ? value
            : `use${value.charAt(0).toUpperCase()}${value.slice(1)}`,
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/hooks/{{camelCase name}}.ts",
        templateFile: "dev/templates/hook/hook.ts.hbs",
      },
      {
        type: "add",
        path: "src/hooks/{{camelCase name}}.test.ts",
        templateFile: "dev/templates/hook/hook.test.ts.hbs",
      },
    ],
  });
};
