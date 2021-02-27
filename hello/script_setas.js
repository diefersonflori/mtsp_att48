
// Initialise sigma:
var s = new sigma(
  {
    renderer: {
      container: document.getElementById('graph-container'),
      type: 'canvas'
    },
    settings: {
      minArrowSize: 10
    }
  }
);

// Generate a random graph:
var nbNode = 50;
var nbEdge = 100;
var graph = {
  nodes: [],
  edges: []
};
for (i = 0; i < nbNode; i++)
  graph.nodes.push({ 
    id:  i,
    label: 'Node ' + i,
    x: Math.random(),
    y: Math.random(),
    size: 1,
    color: '#EE651D'
  });

for (i = 0; i < nbEdge; i++)
  graph.edges.push({ 
    id: i, 
    source: '' + (Math.random() * nbNode | 0), 
    target: '' + (Math.random() * nbNode | 0),
    color: '#202020',
    type: 'curvedArrow'
  });


// load the graph
s.graph.read(graph);
// draw the graph
s.refresh();
// launch force-atlas for 5sec
s.startForceAtlas2();
window.setTimeout(function() {s.killForceAtlas2()}, 10000);


dom.addEventListener('click', function(e) {
    // Find neighbors:
    var x,
        y,
        p,
        id,
        neighbors;

    x = sigma.utils.getX(e) - dom.offsetWidth / 2;
    y = sigma.utils.getY(e) - dom.offsetHeight / 2;

    p = c.cameraPosition(x, y);
    x = p.x;
    y = p.y;

    neighbors = s.graph.nodes().filter(function(n) {
      return (Math.sqrt(
        Math.pow(n.x - x, 2) +
        Math.pow(n.y - y, 2)
      ) - n.size) < radius;
    });

    if (!spaceMode)
      s.graph.addNode({
        id: (id = (++nId) + ''),
        size: nodeRadius,
        x: x + Math.random() / 10,
        y: y + Math.random() / 10,
        dX: 0,
        dY: 0,
        type: 'goo'
      });

    neighbors.forEach(function(n) {
      if (!spaceMode)
        s.graph.addEdge({
          id: (++eId) + '',
          source: id,
          target: n.id,
          type: 'goo'
        });
      else
        s.graph.dropNode(n.id);
    });
  }, false);
 