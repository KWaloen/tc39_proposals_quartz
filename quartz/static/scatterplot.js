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
  
    // Set dimensions
    const width = 500, height = 400, margin = 50;
  
    // Create SVG container
    const svg = d3.select("#scatterplot")
      .append("svg")
      .attr("width", width + margin * 2)
      .attr("height", height + margin * 2)
      .append("g")
      .attr("transform", `translate(${margin}, ${margin})`);
  
    // Scales
    const xScale = d3.scaleLinear().domain([0, 80]).range([0, width]);
    const yScale = d3.scaleLinear().domain([0, 100]).range([height, 0]);
  
    // Axes
    svg.append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(d3.axisBottom(xScale));
    svg.append("g").call(d3.axisLeft(yScale));
  
    // Scatterplot points
    svg.selectAll("circle")
      .data(data)
      .enter()
      .append("circle")
      .attr("cx", d => xScale(d.x))
      .attr("cy", d => yScale(d.y))
      .attr("r", 5)
      .attr("fill", "steelblue");
  
    // Labels
    svg.append("text")
      .attr("x", width / 2)
      .attr("y", height + margin - 10)
      .style("text-anchor", "middle")
      .text("X Axis");
  
    svg.append("text")
      .attr("x", -height / 2)
      .attr("y", -margin + 10)
      .attr("transform", "rotate(-90)")
      .style("text-anchor", "middle")
      .text("Y Axis");
  });
  