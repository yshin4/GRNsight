/*http://bl.ocks.org/mbostock/4062045 used as reference
 *As well as http://bl.ocks.org/mbostock/3750558
*/
var nodes = [
  {name: 'ACE2'},
  {name: 'AFT2'},
  {name: 'CIN5'},
  {name: 'FHL1'},
  {name: 'FKH2'},
  {name: 'GLN3'},
  {name: 'HAP5'}];

var links = [
  {'source':1,'target':0},
  {'source':4,'target':2}
];
  
var width = 960,
    height = 700;
  
var color = d3.scale.category20();

var force = d3.layout.force()
    .size([width, height])
    .on("tick", tick)
    .linkDistance(80)
    .charge(-200);

var drag = force.drag()
    .on("dragstart", dragstart);
  
var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);
  
var link = svg.selectAll(".link"),
    node = svg.selectAll(".node");

force.nodes(nodes)
     .links(links)
     .start();
   
link = link.data(links)
           .enter().append("line")
           .attr("class", "link");
         
node = node.data(nodes)
           .enter().append("g")
           .attr("class", "node")
           .call(force.drag);
           
node.append("rect")
   .attr("width", 40)
   .attr("height", 30)
   .on("dblclick", dblclick);
           
node.append("text")
  .attr("dx", 0)
  .attr("dy", 15)
  .style("font-size", "12px")
  .text(function(d) {return d.name;});
           
$('.node').css({
  'cursor': 'move',
  'fill': 'white',
  'stroke': '#000',
  'stroke-width': '1.5px'
});

$('.link').css({
  'stroke': '#000',
  'stroke-width': '1.5px'
});

function tick() {
  link.attr("x1", function(d) { return d.source.x;})
      .attr("y1", function(d) { return d.source.y;})
      .attr("x2", function(d) { return d.target.x;})
      .attr("y2", function(d) { return d.target.y;});

  node.attr("transform", function(d) {return "translate(" + d.x + "," + d.y + ")";});
}

function dblclick(d) {
  d3.select(this).classed("fixed", d.fixed = false);
}

function dragstart(d) {
  d3.select(this).classed("fixed", d.fixed = true);
}