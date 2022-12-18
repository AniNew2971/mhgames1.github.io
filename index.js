
  var color = "blue";
  var score1 = 78.60;
  var score2 = 88.80;
  var val1 = 440 - (440 * score1) / 100;
  var val2 = 440 - (440 * score2) / 100;
  if (score1 >= 15 & score2>=15) color = "green";
  else if (score1 <= 10 & score2<=10) color = "red";
  var stroke = "#" + color + "grad";
  var text_color = color + "-grad-text";
  $(".number1").addClass(text_color);
  $(".number1").html(score1);
  
  $("#circle-stroke1").css("stroke", `url(${stroke})`);
  $("#circle-stroke1").animate(
    {
      "stroke-dashoffset": val1
    },
    1000
  );
  $(".number2").addClass(text_color);
  $(".number2").html(score2);
  
  $("#circle-stroke2").css("stroke", `url(${stroke})`);
  $("#circle-stroke2").animate(
    {
      "stroke-dashoffset": val2
    },
    1000
  );


 
    var graph = d3.select(".graph");
    var data = [
      {
        name: "Concept Development",
        score: 18
      },
      {
        name: "Drafting & 3D Modelling",
        score: 18.5
      },
      {
        name: "Sketching & Painting",
        score: 19.5
      },
      {
        name: "Model Making",
        score: 19
      },{
        name: "Graphic designing",
        score: 19
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

  
  "use strict";
var speed = {
    'trigger': '#speed-compare',
    'target': '.modal_content .speedometer'
};
$(function () {
    $(speed.trigger).on('click', function () {
        setTimeout(function () {
            $(speed.target).each(function () {
                $(this).addClass('play');
            });
        }, 1000);
    });
});
