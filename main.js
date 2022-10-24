"use strict";
exports.__esModule = true;
var seriesTBody = document.getElementById('series');
function renderCoursesInTable(series) {
    series.forEach(function (c) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(c.id, "</td>\n                           <td>").concat(c.nombre, "</td>\n                           <td>").concat(c.seasons, "</td>");
        seriesTBody.appendChild(trElement);
    });
}
