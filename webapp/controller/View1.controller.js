// Se define un módulo SAPUI5
sap.ui.define([
    // Se importa la clase base Controller
    "sap/ui/core/mvc/Controller"
], (Controller) => {

    // Activa modo estricto de JavaScript (mejor práctica)
    "use strict";

    // Se crea un nuevo controller que hereda de sap.ui.core.mvc.Controller
    return Controller.extend("testfilter.controller.View1", {

        // Método que se ejecuta automáticamente
        // cuando la vista se carga por primera vez
        onInit: function() {

            // Aquí se coloca la lógica inicial
            // Por ejemplo:
            // - Crear modelos
            // - Hacer llamadas OData
            // - Inicializar variables
            // - Aplicar filtros

        }

    });

});