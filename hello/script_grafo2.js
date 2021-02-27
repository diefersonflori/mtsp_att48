sigma.utils.pkg('sigma.canvas.nodes');


var s = new sigma({
  graph: g,
  renderer: {
    container: document.getElementById('graph-container'),
    type: 'canvas'
  },
  settings: {
    minNodeSize: 10,
    maxNodeSize: 10,
    minArrowSize:10
  }
});

// generate a random graph
var i, nfam,node = [],type2,
    img,nId,
   // N = 50,
   // E = 50,
   
    urls = [
      'img/mito.PNG',
      'img/matheus.PNG',
      'img/fornaza.PNG',
      'img/Claudio.png',
      'img/img1.png',
      'img/img2.png',
      'img/img3.png',
      'img/img4.png',
      'img/img5.png',
      'img/img6.png',
      'img/img7.png',
      'img/img8.png',
      'img/img9.png',
      'img/img1.png',
      'img/img2.png',
      'img/img3.png',
      'img/img4.png',
      'img/img5.png',
      'img/img6.png',
      'img/img7.png',
      'img/img8.png',
      
      'img/img9.png'
    ],
    colors = [
      '#008000',
      '#4B0082',
      '#F08080',
      '#FF00FF',
      '#800000',
      '#617db4',
      '#668f3c',
      '#c6583e',
      '#b956af',
      '#00FFFF',
      '#00008B',
      '#FFD700',
      '#c6583e',
      '#b956af',
      '#00FFFF',
      '#00008B',
      '#FFD700',
      
      '#c6583e',
      '#b956af',
      '#00FFFF',
      '#00008B',
      '#FFD700',
      '#c6583e',
      '#b956af',
      '#00FFFF',
      '#00008B',
      '#008000',
      '#4B0082',
      '#F08080',
      '#FF00FF',
      '#800000',
      '#617db4',
      '#668f3c',
      '#c6583e',
      '#b956af',
      '#00FFFF',
      '#00008B',
      '#FFD700',
      '#c6583e',
      '#b956af',
      '#00FFFF',
      '#00008B',
      '#FFD700',
      
      '#c6583e',
      '#b956af',
      '#00FFFF',
      '#00008B',
      '#FFD700',
      '#c6583e',
      '#b956af',
      '#00FFFF',
      '#00008B',
      '#FFD700',
      '#00FF7F'
      
    ];
    nId=100;
var nfam =0;
for (i = 0; i < N; i++) {
  

// node_aux[i][0];
if (i>0) {
if  (node_aux[i-1][0] != nfam ){
 var famcol ='#FF00FF',// colors[Math.floor(Math.random() * colors.length)],
 nfam= node_aux[i][0],
  fambcol= '#00FF7F',// colors[Math.floor(Math.random()* colors.length*4)],
sizefam=1;//Math.random();

type2:ShapeLibrary.enumerate().map(function(s){return s.name;})[1],//Math.round(Math.random()*5)],

node.image = {
     // url: urls[Math.floor(Math.random() * urls.length)],
    // ***tirei para deixar limpo  url:urls[ node_aux[i][0]],
      // scale/clip are ratio values applied on top of 'size'
      scale: 1,
      clip: 100
      
    };
    
}  } else { //primeiro elemento
  
 var famcol ='#FF00FF',//FF00FF colors[node_aux[i][1]],
 nfam= node_aux[i][0],
  fambcol= '#FF00FF',//colors[node_aux[i][1]],
sizefam=1;//Math.random();
type2:ShapeLibrary.enumerate().map(function(s){return s.name;})[1],//Math.round(Math.random()*4)],

node.image = {
      // ** tirei para deixar limpo url:urls[ node_aux[i][0]],// urls[node_aux[i][0]],//[Math.floor(Math.random() * urls.length)],
      // scale/clip are ratio values applied on top of 'size'
      scale: 1,
      clip: 100
      
} }

   node = {
    //type : type2, 
   type: ShapeLibrary.enumerate().map(function(s){return s.name;})[node_aux[i][0]%20],
    //ShapeLibrary.enumerate().map(function(s){return s.name;})[node_aux[i][0]%4)],
    id: 'n' + i,
    label: 'nó ' + i + '('+node_aux[i][0] +')' ,
  
    x: node_aux[i][1],
    y: node_aux[i][2],
    size:10, // Math.random(),
    color: colors[node_aux[i][0]], 
    borderColor:  '#FFD700'  //fambcol
  };
  node.image = {
    scale: 1,
    clip: 100
    
} ;


  switch(node.type) {
    case "equilateral":
      node.equilateral = {
        //rotate: Math.random()*45, // random rotate up to 45 deg
        //numPoints: Math.round(5 + Math.random()*3)
      }
      break;
    case "star":
      node.star = {
       // innerRatio: 0.4 + Math.random()*0.2,
        //numPoints: Math.round(4 + Math.random()*3)
      }
      if(node.image) {
        // note clip/scale are ratio values. So we fit them to the inner ratio of the star shape
        //node.image.clip = node.star.innerRatio *0.95;
        //node.image.scale = node.star.innerRatio *1.2;
      }
      break;
    case "square":
    case "diamond":
      if(node.image) {
        // note clip/scale are ratio values. So we fit them to the borders of the square shape
        node.image.clip = 0.7;
      }
      break;
    case "circle":
      break;
    case "cross":
      node.cross = {
   //     lineWeight: Math.round(Math.random() * 5)
      }
      break;
  } 


  g.nodes.push(node);
}
var cl=0;
var cored;

for (j = 0; j < 1; j++)
for (i = 0; i < E; i++)
{
  if((caminho[j][i]|0) == 0){
    cored=colors[cl];
    cl++;}
  g.edges.push({
    id: 'e' + i+j,
   
    source:'n' + (caminho[j][i]|0), //'n' + (Math.random() * N | 0),
    target:'n' + (caminho[j][(i+1)]|0), //'n' + (Math.random() * N | 0),
    color:cored,
    label: 'Edge' + i,
    size: 0.001, //Math.random()
    //type: 'curvedArrow'
    type: 'arrow'
  });
}
s.graph.read(g);

s.refresh();

var camino=0;
setInterval("animado()",4000) ;

async function animado(){
  s.graph.clear();
  
 // s.refresh();
  //s.graph.read(g);

  leia();
 
}
var inter=0;
function leia(){
  
  //lernos();
  leredges3();
  s.graph.clear();
  s.graph.read(g);
  s.refresh();
}
function leredges2(){
  for (i = 0; i < E; i++)
  {
  a= g.edges[i].target;
  g.edges[i].target=g.edges[i].source;
  g.edges[i].source=a;
  }
}

var graphh = {
  nodes: [],
  edges: []
};

function leredges(){
  //for (j = 0; j < 3; j++)
  j=camino;
  camino++;
  for (i = 0; i < E; i++)
  {
    if((caminho[j][i]|0) == 0){
      cored=colors[cl];
      cl++;}
    graphh.edges.push({
      id: 'e'+i+j,
     
      
      source:'n' + (caminho[j][i]|0), //'n' + (Math.random() * N | 0),
      target:'n' + (caminho[j][(i+1)]|0), //'n' + (Math.random() * N | 0),
      label: 'Edge' + i,
      size: 0.001, //Math.random()
      //type: 'curvedArrow'
      type: 'arrow'
    });
    /*
    
    if((caminho[i]|0) == 0){
      cored=colors[cl];
      cl++;}
      g.edges.push({
        id: 'e' + i,
        
        source:'n' + (caminho[i]|0), //'n' + (Math.random() * N | 0),
        target:'n' + (caminho[(i+1)]|0), //'n' + (Math.random() * N | 0),
        color:cored,
        label: 'Edge' + i,
        size: 0.001, //Math.random()
        type: 'curvedArrow'
      });
 */
  }
   
}
function leredges3(){
  //for (j = 0; j < 3; j++)
  j=camino;
  if (j>interac) j=interac;
  camino++;
  for (i = 0; i < E; i++)
  {
    if((caminho[j][i]|0) == 0){
      cored=colors[cl];
      cl++;}
      g.edges[i].source='n' + (caminho[j][i]|0); //'n' + (Math.random() * N | 0),
      g.edges[i].target='n' + (caminho[j][(i+1)]|0); //'n' + (Math.random() * N | 0),

  }
  
   
}

  for (i = 0; i < N; i++)
  {
    graphh.nodes.push(g.nodes[i]);
  }


function lernos(){
  
  for (i = 0; i < N; i++) {
  

    // node_aux[i][0];
    if (i>0) {
    if  (node_aux[i-1][0] != nfam ){
     var famcol ='#FF00FF',// colors[Math.floor(Math.random() * colors.length)],
     nfam= node_aux[i][0],
      fambcol= '#00FF7F',// colors[Math.floor(Math.random()* colors.length*4)],
    sizefam=1;//Math.random();
    
    type2:ShapeLibrary.enumerate().map(function(s){return s.name;}),
    
    node.image = {
         // url: urls[Math.floor(Math.random() * urls.length)],
        // ***tirei para deixar limpo  url:urls[ node_aux[i][0]],
          // scale/clip are ratio values applied on top of 'size'
          scale: 1,
          clip: 100
          
        };
        
    }  } else { //primeiro elemento
      
     var famcol ='#FF00FF',// colors[node_aux[i][1]],
     nfam= node_aux[i][0],
      fambcol= '#FF00FF',//colors[node_aux[i][1]],
    sizefam=1;//Math.random();
    //type2:ShapeLibrary.enumerate().map(function(s){return s.name;})[Math.round(Math.random()*1)],
    type2:ShapeLibrary.enumerate().map(function(s){return s.name;})[1],
    
    node.image = {
          // ** tirei para deixar limpo url:urls[ node_aux[i][0]],// urls[node_aux[i][0]],//[Math.floor(Math.random() * urls.length)],
          // scale/clip are ratio values applied on top of 'size'
          scale: 1,
          clip: 100
          
    } }
    
       node = {
        //type : type2, 
       type: ShapeLibrary.enumerate().map(function(s){return s.name;})[node_aux[i][0]%20],
        //ShapeLibrary.enumerate().map(function(s){return s.name;})[node_aux[i][0]%4)],
        id: 'n' + i,
        label: 'nó ' + i + '('+node_aux[i][0] +')' ,
      
        x: node_aux[i][1],
        y: node_aux[i][2],
        size:10, // Math.random(),
        color:'#FF00FF',// colors[node_aux[i][0]], 
        borderColor:  '#FFD700'  //fambcol
      };
      node.image = {
        scale: 1,
        clip: 100
        
    } ;
    
    
      switch(node.type) {
        case "equilateral":
          node.equilateral = {
            //rotate: Math.random()*45, // random rotate up to 45 deg
            //numPoints: Math.round(5 + Math.random()*3)
          }
          break;
        case "star":
          node.star = {
           // innerRatio: 0.4 + Math.random()*0.2,
            //numPoints: Math.round(4 + Math.random()*3)
          }
          if(node.image) {
            // note clip/scale are ratio values. So we fit them to the inner ratio of the star shape
            //node.image.clip = node.star.innerRatio *0.95;
            //node.image.scale = node.star.innerRatio *1.2;
          }
          break;
        case "square":
        case "diamond":
          if(node.image) {
            // note clip/scale are ratio values. So we fit them to the borders of the square shape
            node.image.clip = 0.7;
          }
          break;
        case "circle":
          break;
        case "cross":
          node.cross = {
       //     lineWeight: Math.round(Math.random() * 5)
          }
          break;
      } 
    
    
      g.nodes.push(node);
    }
}

//s.refresh();

// ligacoes
