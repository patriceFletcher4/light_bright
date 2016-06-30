$(document).ready(function(){
var container = $('.container');
var numOfRows = $('#num-rows');
var numOfCols = $('#num-cols');

initGrid();
addClickHanderlers();
addClickHandlersV2();

function addClickHandlersV2(){
  var cells = $('.cell');
  cells.on('click', changeColor);
  $('.plus').on('click', increment);
  $('.minus').on('click', decrement);
}
function increment(){
  var sib = $(this).siblings()[0];
  var val = +$(sib).text();
  $(sib).text(val+1);
  initGrid();
}
function decrement(){
  var sib = $(this).siblings()[0];
  var val = +$(sib).text();
  $(sib).text(val-1);
  initGrid();
}

function changeColor(){
  var colorClasses = ['white', 'purple', 'green', 'blue'];
  var colorCycle = Math.round(Math.random() * (colorClasses.length));
  var color = colorClasses[colorCycle];
  $(this).removeClass(colorClasses.join(' '));
  $(this).addClass(color);

}

function addClickHanderlers(){

  var cells = $('.cell');
  for(var counter = 0; counter < cells.length; counter += 1){
    var cell = cells[counter];
    $(cell).on('mouseenter', changeColor); //Gotcha
  }
}
  function initGrid(){
    container.html('');
    for(var i = 0; i< +numOfRows.text(); i += 1){
      var row = $('<div></div>');
      row.addClass('row');
      for(var j = 0; j < +numOfCols.text(); j += 1){
        var cell = $('<div></div>');
        cell.addClass('cell border');
        row.append(cell);
      }
      container.append(row);
    }
  }
});
