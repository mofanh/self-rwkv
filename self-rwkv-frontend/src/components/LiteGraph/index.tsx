import { LGraph, LGraphCanvas, LiteGraph } from 'litegraph.js';
import { useEffect } from 'react';
// import './litegraph.css';

export default function Demo() {
  const graph = new LGraph();
  useEffect(() => {
    const createAndAddNodes = () => {
      const node_const = LiteGraph.createNode("basic/const");
      node_const.pos = [200, 200];

      graph.add(node_const);
      node_const.setValue(4.5);

      const node_watch = LiteGraph.createNode("basic/watch");
      node_watch.pos = [700, 200];
      graph.add(node_watch);

      node_const.connect(0, node_watch, 0);
    };

    createAndAddNodes();
    graph.start();
    const canvas = new LGraphCanvas("#mycanvas", graph);
  }, []);


  return (
    <canvas
      id="mycanvas"
      width="1024"
      height="720"
      style={{ border: '1px solid' }}
    ></canvas>
  );
}
