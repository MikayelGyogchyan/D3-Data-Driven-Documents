const dataset = [
  {id: 1, value: 34},
  {id: 2, value: 334},
  {id: 3, value: 134},
  {id: 4, value: 324},
  {id: 5, value: 74},
  {id: 6, value: 23},
  {id: 7, value: 51},
  {id: 8, value: 99},
  {id: 9, value: 87},
  {id: 10, value: 134},
  {id: 11, value: 200},
  {id: 12, value: 25}
];

const w = 300;
const h = 350;

const svg = d3.select("#hi")
.append("svg")
.attr("width", w)
.attr("height", h);

function run() {
var rect = svg.selectAll("rect").data(dataset, function(d) {return d.id;});

// update
rect.transition()
  .duration(1000)
  .attr("x", function(d, i) { return i * 25;})
  .attr("y", function(d) { return h - d.value; })
  .attr("width", 20)
  .attr("height", function(d) { return d.value; })
  .attr("fill", "teal");

// enter
rect.enter().append("rect")
  .attr("x", function(d, i) { return (i+1) * 25;})
  .attr("y", function(d) { return h - d.value; })
  .attr("width", 20)
  .attr("height", function(d) { return d.value; })
  .attr("fill", "teal");

// exit
rect.exit().transition().duration(1000).attr('x', -25).remove(); 

window.setTimeout(function() {
  dataset.shift();
  dataset.push({id: Math.random(), value: Math.floor(Math.random()*h)});
  run();
}, 1000);
}

run();