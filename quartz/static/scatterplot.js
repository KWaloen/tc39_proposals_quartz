document.addEventListener("DOMContentLoaded", function () {

  // Sample Data
  const data = [
    { x: 10, y: 20 },
    { x: 20, y: 30 },
    { x: 30, y: 10 },
    { x: 40, y: 50 },
    { x: 50, y: 40 },
    { x: 60, y: 80 },
    { x: 70, y: 60 }
  ];

  const width = 600, height = 400, margin = 50;

  // Create SVG container
  const svg = d3.select("#scatterplot")
    .append("svg")
    .attr("width", width + margin * 2)
    .attr("height", height + margin * 2)
    .call(d3.zoom().scaleExtent([0.5, 5]).on("zoom", zoomed)) // Enable zoom
    .append("g")
    .attr("transform", `translate(${margin}, ${margin})`);

  // Scales
  const xScale = d3.scaleLinear().domain([0, 80]).range([0, width]);
  const yScale = d3.scaleLinear().domain([0, 100]).range([height, 0]);

  // Axes
  const xAxis = svg.append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(d3.axisBottom(xScale));

  const yAxis = svg.append("g").call(d3.axisLeft(yScale));

  // Tooltip
  const tooltip = d3.select("body")
    .append("div")
    .attr("id", "tooltip")
    .style("position", "absolute")
    .style("background", "white")
    .style("color", "black")
    .style("padding", "8px")
    .style("border", "1px solid black")
    .style("border-radius", "4px")
    .style("box-shadow", "2px 2px 6px rgba(0,0,0,0.2)")
    .style("visibility", "hidden")
    .style("font-size", "14px")
    .style("pointer-events", "none");

  // Scatterplot points
  const points = svg.selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    .attr("cx", d => xScale(d.x))
    .attr("cy", d => yScale(d.y))
    .attr("r", 6)
    .attr("fill", "steelblue")
    .attr("cursor", "pointer")
    .on("mouseover", function (event, d) {
      tooltip.style("visibility", "visible")
        .html(`<strong>x:</strong> ${Math.round(d.x)}, <strong>y:</strong> ${Math.round(d.y)}`);
    })
    .on("mousemove", function (event) {
      tooltip
        .style("top", (event.pageY - 30) + "px")
        .style("left", (event.pageX + 10) + "px");
    })
    .on("mouseout", function () {
      tooltip.style("visibility", "hidden");
    });

  // Zoom function
  function zoomed(event) {
    svg.attr("transform", event.transform);
  }
});
