(function () {
    var graph = d3.select(".graph");
    var data = [
      {
        name: "Jose",
        score: 5
      },
      {
        name: "M.J",
        score: 20
      },
      {
        name: "Gabi",
        score: 5
      },
      {
        name: "Loki",
        score: 13
      }
    ];
    var containerBars = graph.selectAll("div").data(data).enter().append("div");
  
    var xScale = d3.scale.linear().range([100, 0]);
  
    var xMin = 0;
    var xMax =
      d3.max(data, function (data) {
        return data.score;
      }) * 1.1;
  
    xScale.domain([xMin, xMax]);
  
    containerBars
      .append("p")
      .attr("class", "name")
      .text(function (data) {
        return data.name;
      })
      .append("span")
      .attr("class", "score")
      .text(function (data) {
        return " (" + data.score + ")";
      });
  
    var bars = containerBars.append("div").attr({
      class: "bar"
    });
  
    var infoBar = bars
      .append("div")
      .attr({
        class: "infoBar"
      })
      .style("left", function (data) {
        return "-100%";
      });
  
    infoBar
      .transition()
      .duration(1500)
      .ease("cubic-out")
      .style({
        left: function (data) {
          return -xScale(data.score) + "%";
        }
      });
  })();
  