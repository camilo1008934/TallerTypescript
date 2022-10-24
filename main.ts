import {Serie} from "./Serie.js";

const seriesTBody: HTMLElement = document.getElementById('series')!;

function renderCoursesInTable(series: Serie[]): void {
  series.forEach(c => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${c.id}</td>
                           <td>${c.nombre}</td>
                           <td>${c.seasons}</td>`;
    seriesTBody.appendChild(trElement);
  });
}