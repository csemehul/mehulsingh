const data = [30, 86, 168, 281, 303, 365];

const svg = d3.select("svg");
const width = svg.attr("width");
const height = svg.attr("height");

// X scale
const x = d3.scaleBand()
  .domain(d3.range(data.length))
  .range([0, width])
  .padding(0.1);

// Y scale
const y = d3.scaleLinear()
  .domain([0, d3.max(data)])
  .nice()
  .range([height, 0]);

// Draw bars
svg.append("g")
  .selectAll("rect")
  .data(data)
  .join("rect")
    .attr("class", "bar")
    .attr("x", (d, i) => x(i))
    .attr("y", d => y(d))
    .attr("height", d => y(0) - y(d))
    .attr("width", x.bandwidth());

// Draw x-axis
svg.append("g")
  .call(d3.axisBottom(x).tickFormat(i => i + 1).tickSizeOuter(0))
  .attr("transform", `translate(0,${height})`);

// Draw y-axis
svg.append("g")
  .call(d3.axisLeft(y));
