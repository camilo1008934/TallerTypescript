"use strict";
exports.__esModule = true;
exports.Serie = void 0;
var Serie = /** @class */ (function () {
    function Serie(id, nombre, channel, seasons, description, url, image) {
        this.id = id;
        this.nombre = nombre;
        this.channel = channel;
        this.description = description;
        this.seasons = seasons;
        this.url = url;
        this.image = image;
    }
    return Serie;
}());
exports.Serie = Serie;
