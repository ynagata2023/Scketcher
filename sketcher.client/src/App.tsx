import { Layout, Model, TabNode } from 'flexlayout-react';
var json = {
  global: {},
  borders: [],
  layout: {
    type: "row",
    weight: 100,
    children: [
      {
        type: "tabset",
        weight: 50,
        children: [
          {
            type: "tab",
            name: "One",
            component: "placeholder",
          }
        ]
      },
      {
        type: "tabset",
        weight: 50,
        children: [
          {
            type: "tab",
            name: "Two",
            component: "placeholder",
          }
        ]
      }
    ]
  }
};

const model = Model.fromJson(json);

const App = () => {

  const factory = (node: TabNode) => {
    var component = node.getComponent();

    if (component === "placeholder") {
      return <div>{node.getName()}</div>;
    }
  }

  return (
    <Layout
      model={model}
      factory={factory} />
  );

};

export default App;
