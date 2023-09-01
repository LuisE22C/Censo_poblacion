
google.charts.load('current', { 'packages': ['corechart'] });


llamadaDemo();


function MydrawChart(hombres, mujres) {

    var data = google.visualization.arrayToDataTable([
        ['Poblacion', 'Total'],
        ['Hombres', hombres],
        ['Mujeres', mujres]
    ]);

    var options = {
        title: 'Estadisticas'
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
}

function MydrawChartt(Urbano, Rural) {

    var data = google.visualization.arrayToDataTable([
        ['Poblacion', 'Total'],
        ['Urbano', Urbano],
        ['Rural', Rural]
    ]);

    var options = {
        title: 'Estadisticas'
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechartt'));

    chart.draw(data, options);
}

function MydrawCharttt(Edad14, Edad15, Edad65) {

    var data = google.visualization.arrayToDataTable([
        ['Poblacion', 'Total'],
        ['0-14 años', Edad14],
        ['15-64 años', Edad15],
        ['65 y más años', Edad65]
    ]);

    var options = {
        title: 'Estadisticas'
    };

    var chart = new google.visualization.PieChart(document.getElementById('piecharttt'));

    chart.draw(data, options);
}

function MydrawChar(Maya, Garifuna, Xinca, Afrodecendiente, Ladino, Extranjero) {

    var data = google.visualization.arrayToDataTable([
        ['Poblacion', 'Total'],
        ['Maya', Maya],
        ['Garifuna', Garifuna],
        ['Xinca', Xinca],
        ['Afrodecendiente', Afrodecendiente],
        ['Ladino', Ladino],
        ['Extranjero', Extranjero]

    ]);

    var options = {
        title: 'Estadisticas'
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechar'));

    chart.draw(data, options);
}

function llamadaDemo() {
    //alert("Hola con JavaScript");
    /*Creating an HTML table dynamically
   https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces#creating_an_html_table_dynamically*/
    //uso de Fetch https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch

    var url = "https://www.censopoblacion.gt/indicadores/98/999";


    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            //var divPeli = document.getElementById('divPeli');
            //divPeli.innerHTML = '';

            if (data.length > 0) {
                google.charts.setOnLoadCallback(MydrawChart(data[0].total_sexo_hombre, data[0].total_sexo_mujeres));
                console.log(data[0].total_sexo_hombre);

                google.charts.setOnLoadCallback(MydrawChartt(data[0].total_sector_urbano, data[0].total_sector_rural));

                google.charts.setOnLoadCallback(MydrawCharttt(data[0].pob_edad_014, data[0].pob_edad_1564, data[0].pob_edad_65));

                google.charts.setOnLoadCallback(MydrawChar(data[0].pob_pueblo_maya, data[0].pob_pueblo_garifuna,
                    data[0].pob_pueblo_xinca, data[0].pob_pueblo_afrodescendiente, data[0].pob_pueblo_ladino,
                    data[0].pob_pueblo_extranjero));

                var NumTotal = document.getElementById('NumTotal');
                NumTotal.textContent = data[0].pob_total.toLocaleString();

                var NumHombres = document.getElementById('NumHombres');
                NumHombres.textContent = data[0].total_sexo_hombre.toLocaleString();

                //Sexo
                document.getElementById('PorHombres').innerText = data[0].porc_sexo_hombre.toFixed(2)+" %";
                document.getElementById('NumMujeres').innerText = data[0].total_sexo_mujeres.toLocaleString();
                document.getElementById('PorMujres').innerText = data[0].porc_sexo_mujeres.toFixed(2)+" %";

                //Area
                document.getElementById('NumUrb').innerText = data[0].total_sector_urbano.toLocaleString();
                document.getElementById('PorUrb').innerText = data[0].porc_sector_urbano.toFixed(2)+" %";
                document.getElementById('NumRur').innerText = data[0].total_sector_rural.toLocaleString();
                document.getElementById('PorRur').innerText = data[0].porc_sector_rural.toFixed(2)+" %";

                //Edades
                document.getElementById('Num014').innerText = data[0].pob_edad_014.toLocaleString();
                document.getElementById('Por014').innerText = data[0].porc_edad_014.toFixed(2)+" %";
                document.getElementById('Num1564').innerText = data[0].pob_edad_1564.toLocaleString();
                document.getElementById('Por1564').innerText = data[0].porc_edad_1564.toFixed(2)+" %";
                document.getElementById('Num65').innerText = data[0].pob_edad_65.toLocaleString();
                document.getElementById('Por65').innerText = data[0].porc_edad_65.toFixed(2)+" %";

                //Pueblos
                document.getElementById('NumMaya').innerText = data[0].pob_pueblo_maya.toLocaleString();
                document.getElementById('PorMaya').innerText = data[0].porc_pueblo_maya.toFixed(2)+" %";
                document.getElementById('NumGar').innerText = data[0].pob_pueblo_garifuna.toLocaleString();
                document.getElementById('PorGar').innerText = data[0].porc_pueblo_garifuna.toFixed(2)+" %";
                document.getElementById('NumXin').innerText = data[0].pob_pueblo_xinca.toLocaleString();
                document.getElementById('PorXin').innerText = data[0].porc_pueblo_xinca.toFixed(2)+" %";
                document.getElementById('NumAfro').innerText = data[0].pob_pueblo_afrodescendiente.toLocaleString();
                document.getElementById('PorAfro').innerText = data[0].porc_pueblo_afrodescendiente.toFixed(2)+" %";
                document.getElementById('NumLad').innerText = data[0].pob_pueblo_ladino.toLocaleString();
                document.getElementById('PorLad').innerText = data[0].porc_pueblo_ladino.toFixed(2)+" %";
                document.getElementById('NumExtra').innerText = data[0].pob_pueblo_extranjero.toLocaleString();
                document.getElementById('PorExtra').innerText = data[0].porc_pueblo_extranjero.toFixed(2)+" %";

            }

        });

}

function Llamada1() {
    //alert('llamada1');
    var cmbDepto = document.getElementById('cmbDepto');
    var cmbMunicipio = document.getElementById("cmbMunicipio");

    //alert(txtPeli.value);
    //alert(cmbUbication.value);
    var url = "";
    if (cmbDepto != null) {
        url = "https://www.censopoblacion.gt/indicadores/" + (cmbDepto.value == "Total Nacional" ? "98" : cmbDepto.value) + "/" + (cmbMunicipio.value == "" ? "999" : cmbMunicipio.value);
    }
    else {
        url = "https://www.censopoblacion.gt/indicadores/98/999"
    }

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            //var divPeli = document.getElementById('divPeli');
            //divPeli.innerHTML = '';

            if (data.length > 0) {
                google.charts.setOnLoadCallback(MydrawChart(data[0].total_sexo_hombre, data[0].total_sexo_mujeres));
                console.log(data[0].total_sexo_hombre);

                google.charts.setOnLoadCallback(MydrawChart(data[0].total_sexo_hombre, data[0].total_sexo_mujeres));
                console.log(data[0].total_sexo_hombre);

                google.charts.setOnLoadCallback(MydrawChartt(data[0].total_sector_urbano, data[0].total_sector_rural));

                google.charts.setOnLoadCallback(MydrawCharttt(data[0].pob_edad_014, data[0].pob_edad_1564, data[0].pob_edad_65));

                google.charts.setOnLoadCallback(MydrawChar(data[0].pob_pueblo_maya, data[0].pob_pueblo_garifuna,
                    data[0].pob_pueblo_xinca, data[0].pob_pueblo_afrodescendiente, data[0].pob_pueblo_ladino,
                    data[0].pob_pueblo_extranjero));

                var NumTotal = document.getElementById('NumTotal');
                NumTotal.textContent = data[0].pob_total.toLocaleString();

                var NumHombres = document.getElementById('NumHombres');
                NumHombres.textContent = data[0].total_sexo_hombre.toLocaleString();

                //Sexo
                document.getElementById('PorHombres').innerText = data[0].porc_sexo_hombre.toFixed(2)+" %";
                document.getElementById('NumMujeres').innerText = data[0].total_sexo_mujeres.toLocaleString();
                document.getElementById('PorMujres').innerText = data[0].porc_sexo_mujeres.toFixed(2)+" %";

                //Area
                document.getElementById('NumUrb').innerText = data[0].total_sector_urbano.toLocaleString();
                document.getElementById('PorUrb').innerText = data[0].porc_sector_urbano.toFixed(2)+" %";
                document.getElementById('NumRur').innerText = data[0].total_sector_rural.toLocaleString();
                document.getElementById('PorRur').innerText = data[0].porc_sector_rural.toFixed(2)+" %";

                //Edades
                document.getElementById('Num014').innerText = data[0].pob_edad_014.toLocaleString();
                document.getElementById('Por014').innerText = data[0].porc_edad_014.toFixed(2)+" %";
                document.getElementById('Num1564').innerText = data[0].pob_edad_1564.toLocaleString();
                document.getElementById('Por1564').innerText = data[0].porc_edad_1564.toFixed(2)+" %";
                document.getElementById('Num65').innerText = data[0].pob_edad_65.toLocaleString();
                document.getElementById('Por65').innerText = data[0].porc_edad_65.toFixed(2)+" %";

                //Pueblos
                document.getElementById('NumMaya').innerText = data[0].pob_pueblo_maya.toLocaleString();
                document.getElementById('PorMaya').innerText = data[0].porc_pueblo_maya.toFixed(2)+" %";
                document.getElementById('NumGar').innerText = data[0].pob_pueblo_garifuna.toLocaleString();
                document.getElementById('PorGar').innerText = data[0].porc_pueblo_garifuna.toFixed(2)+" %";
                document.getElementById('NumXin').innerText = data[0].pob_pueblo_xinca.toLocaleString();
                document.getElementById('PorXin').innerText = data[0].porc_pueblo_xinca.toFixed(2)+" %";
                document.getElementById('NumAfro').innerText = data[0].pob_pueblo_afrodescendiente.toLocaleString();
                document.getElementById('PorAfro').innerText = data[0].porc_pueblo_afrodescendiente.toFixed(2)+" %";
                document.getElementById('NumLad').innerText = data[0].pob_pueblo_ladino.toLocaleString();
                document.getElementById('PorLad').innerText = data[0].porc_pueblo_ladino.toFixed(2)+" %";
                document.getElementById('NumExtra').innerText = data[0].pob_pueblo_extranjero.toLocaleString();
                document.getElementById('PorExtra').innerText = data[0].porc_pueblo_extranjero.toFixed(2)+" %";

            }

        });

}

const municipiosPorDepartamento = {
    1: [
        { id: "999", name: "Todos los municipios" },
        { id: "101", name: "Guatemala" },
        { id: "102", name: "Santa Catarina Pinula" },
        { id: "103", name: "San José Pinula" },
        { id: "104", name: "San José del Golfo" },
        { id: "105", name: "Palencia" },
        { id: "106", name: "Chinautla" },
        { id: "107", name: "San Pedro Ayampuc" },
        { id: "108", name: "Mixco" },
        { id: "109", name: "San Pedro Sacatepéquez" },
        { id: "110", name: "San Juan Sacatepéquez" },
        { id: "111", name: "San Raymundo" },
        { id: "112", name: "Chuarrancho" },
        { id: "113", name: "Fraijanes" },
        { id: "114", name: "Amatitlán" },
        { id: "115", name: "Villa Nueva" },
        { id: "116", name: "Villa Canales" },
        { id: "117", name: "Petapa" }
    ],
    2: [
        { id: "999", name: "Todos los municipios" },
        { id: "201", name: "Guastatoya" },
        { id: "202", name: "Morazán" },
        { id: "203", name: "San Agustín Acasaguastlán" },
        { id: "204", name: "San Cristóbal Acasaguastlán" },
        { id: "205", name: "El Jícaro" },
        { id: "206", name: "Sansare" },
        { id: "207", name: "Sanarate" },
        { id: "208", name: "San Antonio la Paz" }
    ],
    3: [
        { id: "999", name: "Todos los municipios" },
        { id: "301", name: "Antigua Guatemala" },
        { id: "302", name: "Jocotenango" },
        { id: "303", name: "Pastores" },
        { id: "304", name: "Sumpango" },
        { id: "305", name: "Santo Domingo Xenacoj" },
        { id: "306", name: "Santiago Sacatepéquez" },
        { id: "307", name: "San Bartolomé Milpas Altas" },
        { id: "308", name: "San Lucas Sacatepéquez" },
        { id: "309", name: "Santa Lucía Milpas Altas" },
        { id: "310", name: "Magdalena Milpas Altas" },
        { id: "311", name: "Santa María de Jesús" },
        { id: "312", name: "Ciudad Vieja" },
        { id: "313", name: "San Miguel Dueñas" },
        { id: "314", name: "Alotenango" },
        { id: "315", name: "San Antonio Aguas Calientes" },
        { id: "316", name: "Santa Catarina Barahona" }
    ],
    4: [
        { id: "999", name: "Todos los municipios" },
        { id: "401", name: "Chimaltenango" },
        { id: "402", name: "San José Poaquil" },
        { id: "403", name: "San Martín Jilotepeque" },
        { id: "404", name: "Comalapa" },
        { id: "405", name: "Santa Apolonia" },
        { id: "406", name: "Tecpán Guatemala" },
        { id: "407", name: "Patzún" },
        { id: "408", name: "Pochuta" },
        { id: "409", name: "Patzicía" },
        { id: "410", name: "Santa Cruz Balanyá" },
        { id: "411", name: "Acatenango" },
        { id: "412", name: "Yepocapa" },
        { id: "413", name: "San Andrés Itzapa" },
        { id: "414", name: "Parramos" },
        { id: "415", name: "Zaragoza" },
        { id: "416", name: "El Tejar" }
    ],
    5: [
        { id: "999", name: "Todos los municipios" },
        { id: "501", name: "Escuintla" },
        { id: "502", name: "Santa Lucía Cotzumalguapa" },
        { id: "503", name: "La Democracia" },
        { id: "504", name: "Siquinalá" },
        { id: "505", name: "Masagua" },
        { id: "506", name: "Tiquisate" },
        { id: "507", name: "La Gomera" },
        { id: "508", name: "Guanagazapa" },
        { id: "509", name: "San José" },
        { id: "510", name: "Iztapa" },
        { id: "511", name: "Palín" },
        { id: "512", name: "San Vicente Pacaya" },
        { id: "513", name: "Nueva Concepción" },
        { id: "514", name: "Sipacate" }
    ],
    6: [
        { id: "999", name: "Todos los municipios" },
        { id: "601", name: "Cuilapa" },
        { id: "602", name: "Barberena" },
        { id: "603", name: "Santa Rosa de Lima" },
        { id: "604", name: "Casillas" },
        { id: "605", name: "San Rafael las Flores" },
        { id: "606", name: "Oratorio" },
        { id: "607", name: "San Juan Tecuaco" },
        { id: "608", name: "Chiquimulilla" },
        { id: "609", name: "Taxisco" },
        { id: "610", name: "Santa María Ixhuatán" },
        { id: "611", name: "Guazacapán" },
        { id: "612", name: "Santa Cruz Naranjo" },
        { id: "613", name: "Pueblo Nuevo Viñas" },
        { id: "614", name: "Nueva Santa Rosa" }
    ],
    7: [
        { id: "999", name: "Todos los municipios" },
        { id: "701", name: "Sololá" },
        { id: "702", name: "San José Chacayá" },
        { id: "703", name: "Santa María Visitación" },
        { id: "704", name: "Santa Lucía Utatlán" },
        { id: "705", name: "Nahualá" },
        { id: "706", name: "Santa Catarina Ixtahuacán" },
        { id: "707", name: "Santa Clara la Laguna" },
        { id: "708", name: "Concepción" },
        { id: "709", name: "San Andrés Semetabaj" },
        { id: "710", name: "Panajachel" },
        { id: "711", name: "Santa Catarina Palopó" },
        { id: "712", name: "San Antonio Palopó" },
        { id: "713", name: "San Lucas Tolimán" },
        { id: "714", name: "Santa Cruz la Laguna" },
        { id: "715", name: "San Pablo la Laguna" },
        { id: "716", name: "San Marcos la Laguna" },
        { id: "717", name: "San Juan la Laguna" },
        { id: "718", name: "San Pedro la Laguna" },
        { id: "719", name: "Santiago Atitlán" }
    ],
    8: [
        { id: "999", name: "Todos los municipios" },
        { id: "801", name: "Totonicapán" },
        { id: "802", name: "San Cristóbal Totonicapán" },
        { id: "803", name: "San Francisco el Alto" },
        { id: "804", name: "San Andrés Xecul" },
        { id: "805", name: "Momostenango" },
        { id: "806", name: "Santa María Chiquimula" },
        { id: "807", name: "Santa Lucía la Reforma" },
        { id: "808", name: "San Bartolo" }
    ],
    9: [
        { id: "999", name: "Todos los municipios" },
        { id: "901", name: "Quetzaltenango" },
        { id: "902", name: "Salcajá" },
        { id: "903", name: "Olintepeque" },
        { id: "904", name: "San Carlos Sija" },
        { id: "905", name: "Sibilia" },
        { id: "906", name: "Cabricán" },
        { id: "907", name: "Cajolá" },
        { id: "908", name: "San Miguel Siguilá" },
        { id: "909", name: "Ostuncalco" },
        { id: "910", name: "San Mateo" },
        { id: "911", name: "Concepción Chiquirichapa" },
        { id: "912", name: "San Martín Sacatepéquez" },
        { id: "913", name: "Almolonga" },
        { id: "914", name: "Cantel" },
        { id: "915", name: "Huitán" },
        { id: "916", name: "Zunil" },
        { id: "917", name: "Colomba" },
        { id: "918", name: "San Francisco la Unión" },
        { id: "919", name: "El Palmar" },
        { id: "920", name: "Coatepeque" },
        { id: "921", name: "Génova" },
        { id: "922", name: "Flores Costa Cuca" },
        { id: "923", name: "La Esperanza" },
        { id: "924", name: "Palestina de los Altos" }
    ],
    10: [
        { id: "999", name: "Todos los municipios" },
        { id: "1001", name: "Mazatenango" },
        { id: "1002", name: "Cuyotenango" },
        { id: "1003", name: "San Francisco Zapotitlán" },
        { id: "1004", name: "San Bernardino" },
        { id: "1005", name: "San José el Idolo" },
        { id: "1006", name: "Santo Domingo Suchitepéquez" },
        { id: "1007", name: "San Lorenzo" },
        { id: "1008", name: "Samayac" },
        { id: "1009", name: "San Pablo Jocopilas" },
        { id: "1010", name: "San Antonio Suchitepéquez" },
        { id: "1011", name: "San Miguel Panán" },
        { id: "1012", name: "San Gabriel" },
        { id: "1013", name: "Chicacao" },
        { id: "1014", name: "Patulul" },
        { id: "1015", name: "Santa Bárbara" },
        { id: "1016", name: "San Juan Bautista" },
        { id: "1017", name: "Santo Tomás la Unión" },
        { id: "1018", name: "Zunilito" },
        { id: "1019", name: "Pueblo Nuevo" },
        { id: "1020", name: "Río Bravo" },
        { id: "1021", name: "San José La Máquina" }
    ],
    11: [
        { id: "999", name: "Todos los municipios" },
        { id: "1101", name: "Retalhuleu" },
        { id: "1102", name: "San Sebastián" },
        { id: "1103", name: "Santa Cruz Muluá" },
        { id: "1104", name: "San Martín Zapotitlán" },
        { id: "1105", name: "San Felipe" },
        { id: "1106", name: "San Andrés Villa Seca" },
        { id: "1107", name: "Champerico" },
        { id: "1108", name: "Nuevo San Carlos" },
        { id: "1109", name: "El Asintal" }
    ],
    12: [
        { id: "999", name: "Todos los municipios" },
        { id: "1201", name: "San Marcos" },
        { id: "1202", name: "San Pedro Sacatepéquez" },
        { id: "1203", name: "San Antonio Sacatepéquez" },
        { id: "1204", name: "Comitancillo" },
        { id: "1205", name: "San Miguel Ixtahuacán" },
        { id: "1206", name: "Concepción Tutuapa" },
        { id: "1207", name: "Tacaná" },
        { id: "1208", name: "Sibinal" },
        { id: "1209", name: "Tajumulco" },
        { id: "1210", name: "Tejutla" },
        { id: "1211", name: "San Rafael Pié de la Cuesta" },
        { id: "1212", name: "Nuevo Progreso" },
        { id: "1213", name: "El Tumbador" },
        { id: "1214", name: "El Rodeo" },
        { id: "1215", name: "Malacatán" },
        { id: "1216", name: "Catarina" },
        { id: "1217", name: "Ayutla" },
        { id: "1218", name: "Ocós" },
        { id: "1219", name: "San Pablo" },
        { id: "1220", name: "El Quetzal" },
        { id: "1221", name: "La Reforma" },
        { id: "1222", name: "Pajapita" },
        { id: "1223", name: "Ixchiguán" },
        { id: "1224", name: "San José Ojetenán" },
        { id: "1225", name: "San Cristóbal Cucho" },
        { id: "1226", name: "Sipacapa" },
        { id: "1227", name: "Esquipulas Palo Gordo" },
        { id: "1228", name: "Río Blanco" },
        { id: "1229", name: "San Lorenzo" },
        { id: "1230", name: "La Blanca" }
    ],
    13: [
        { id: "999", name: "Todos los municipios" },
        { id: "1301", name: "Huehuetenango" },
        { id: "1302", name: "Chiantla" },
        { id: "1303", name: "Malacatancito" },
        { id: "1304", name: "Cuilco" },
        { id: "1305", name: "Nentón" },
        { id: "1306", name: "San Pedro Necta" },
        { id: "1307", name: "Jacaltenango" },
        { id: "1308", name: "Soloma" },
        { id: "1309", name: "Ixtahuacán" },
        { id: "1310", name: "Santa Bárbara" },
        { id: "1311", name: "La Libertad" },
        { id: "1312", name: "La Democracia" },
        { id: "1313", name: "San Miguel Acatán" },
        { id: "1314", name: "San Rafael la Independencia" },
        { id: "1315", name: "Todos Santos Cuchumatán" },
        { id: "1316", name: "San Juan Atitán" },
        { id: "1317", name: "Santa Eulalia" },
        { id: "1318", name: "San Mateo Ixtatán" },
        { id: "1319", name: "Colotenango" },
        { id: "1320", name: "San Sebastián Huehuetenango" },
        { id: "1321", name: "Tectitán" },
        { id: "1322", name: "Concepción Huista" },
        { id: "1323", name: "San Juan Ixcoy" },
        { id: "1324", name: "San Antonio Huista" },
        { id: "1325", name: "San Sebastián Coatán" },
        { id: "1326", name: "Barillas" },
        { id: "1327", name: "Aguacatán" },
        { id: "1328", name: "San Rafael Petzal" },
        { id: "1329", name: "San Gaspar Ixchil" },
        { id: "1330", name: "Santiago Chimaltenango" },
        { id: "1331", name: "Santa Ana Huista" },
        { id: "1332", name: "Unión Cantinil" },
        { id: "1333", name: "Petatan" }
    ],
    14: [
        { id: "999", name: "Todos los municipios" },
        { id: "1301", name: "Huehuetenango" },
        { id: "1302", name: "Chiantla" },
        { id: "1303", name: "Malacatancito" },
        { id: "1304", name: "Cuilco" },
        { id: "1305", name: "Nentón" },
        { id: "1306", name: "San Pedro Necta" },
        { id: "1307", name: "Jacaltenango" },
        { id: "1308", name: "Soloma" },
        { id: "1309", name: "Ixtahuacán" },
        { id: "1310", name: "Santa Bárbara" },
        { id: "1311", name: "La Libertad" },
        { id: "1312", name: "La Democracia" },
        { id: "1313", name: "San Miguel Acatán" },
        { id: "1314", name: "San Rafael la Independencia" },
        { id: "1315", name: "Todos Santos Cuchumatán" },
        { id: "1316", name: "San Juan Atitán" },
        { id: "1317", name: "Santa Eulalia" },
        { id: "1318", name: "San Mateo Ixtatán" },
        { id: "1319", name: "Colotenango" },
        { id: "1320", name: "San Sebastián Huehuetenango" },
        { id: "1321", name: "Tectitán" },
        { id: "1322", name: "Concepción Huista" },
        { id: "1323", name: "San Juan Ixcoy" },
        { id: "1324", name: "San Antonio Huista" },
        { id: "1325", name: "San Sebastián Coatán" },
        { id: "1326", name: "Barillas" },
        { id: "1327", name: "Aguacatán" },
        { id: "1328", name: "San Rafael Petzal" },
        { id: "1329", name: "San Gaspar Ixchil" },
        { id: "1330", name: "Santiago Chimaltenango" },
        { id: "1331", name: "Santa Ana Huista" },
        { id: "1332", name: "Unión Cantinil" },
        { id: "1333", name: "Petatan" }
    ],
    15: [
        { id: "999", name: "Todos los municipios" },
        { id: "1501", name: "Salamá" },
        { id: "1502", name: "San Miguel Chicaj" },
        { id: "1503", name: "Rabinal" },
        { id: "1504", name: "Cubulco" },
        { id: "1505", name: "Granados" },
        { id: "1506", name: "El Chol" },
        { id: "1507", name: "San Jerónimo" },
        { id: "1508", name: "Purulhá" }
    ],
    16: [
        { id: "999", name: "Todos los municipios" },
        { id: "1601", name: "Cobán" },
        { id: "1602", name: "Santa Cruz Verapaz" },
        { id: "1603", name: "San Cristóbal Verapaz" },
        { id: "1604", name: "Tactic" },
        { id: "1605", name: "Tamahú" },
        { id: "1606", name: "Tucurú" },
        { id: "1607", name: "Panzós" },
        { id: "1608", name: "Senahú" },
        { id: "1609", name: "San Pedro Carchá" },
        { id: "1610", name: "San Juan Chamelco" },
        { id: "1611", name: "Lanquín" },
        { id: "1612", name: "Cahabón" },
        { id: "1613", name: "Chisec" },
        { id: "1614", name: "Chahal" },
        { id: "1615", name: "Fray Bartolomé de las Casas" },
        { id: "1616", name: "Santa Catalina la Tinta" },
        { id: "1617", name: "Raxruhá" }
    ],
    17: [
        { id: "999", name: "Todos los municipios" },
        { id: "1701", name: "Flores" },
        { id: "1702", name: "San José" },
        { id: "1703", name: "San Benito" },
        { id: "1704", name: "San Andrés" },
        { id: "1705", name: "La Libertad" },
        { id: "1706", name: "San Francisco" },
        { id: "1707", name: "Santa Ana" },
        { id: "1708", name: "Dolores" },
        { id: "1709", name: "San Luis" },
        { id: "1710", name: "Sayaxché" },
        { id: "1711", name: "Melchor de Mencos" },
        { id: "1712", name: "Poptún" },
        { id: "1713", name: "Las Cruces" },
        { id: "1714", name: "El Chal" }
    ],
    18: [
        { id: "999", name: "Todos los municipios" },
        { id: "1801", name: "Puerto Barrios" },
        { id: "1802", name: "Livingston" },
        { id: "1803", name: "El Estor" },
        { id: "1804", name: "Morales" },
        { id: "1805", name: "Los Amates" }
    ],
    19: [
        { id: "999", name: "Todos los municipios" },
        { id: "1901", name: "Zacapa" },
        { id: "1902", name: "Estanzuela" },
        { id: "1903", name: "Río Hondo" },
        { id: "1904", name: "Gualán" },
        { id: "1905", name: "Teculután" },
        { id: "1906", name: "Usumatlán" },
        { id: "1907", name: "Cabañas" },
        { id: "1908", name: "San Diego" },
        { id: "1909", name: "La Unión" },
        { id: "1910", name: "Huité" },
        { id: "1911", name: "San Jorge" }
    ],
    20: [
        { id: "999", name: "Todos los municipios" },
        { id: "2001", name: "Chiquimula" },
        { id: "2002", name: "San José La Arada" },
        { id: "2003", name: "San Juan Ermita" },
        { id: "2004", name: "Jocotán" },
        { id: "2005", name: "Camotán" },
        { id: "2006", name: "Olopa" },
        { id: "2007", name: "Esquipulas" },
        { id: "2008", name: "Concepción Las Minas" },
        { id: "2009", name: "Quetzaltepeque" },
        { id: "2010", name: "San Jacinto" },
        { id: "2011", name: "Ipala" }
    ],
    21: [
        { id: "999", name: "Todos los municipios" },
        { id: "2101", name: "Jalapa" },
        { id: "2102", name: "San Pedro Pinula" },
        { id: "2103", name: "San Luis Jilotepeque" },
        { id: "2104", name: "San Manuel Chaparrón" },
        { id: "2105", name: "San Carlos Alzatate" },
        { id: "2106", name: "Monjas" },
        { id: "2107", name: "Mataquescuintla" }
    ],
    22: [
        { id: "999", name: "Todos los municipios" },
        { id: "2201", name: "Jutiapa" },
        { id: "2202", name: "El Progreso" },
        { id: "2203", name: "Santa Catarina Mita" },
        { id: "2204", name: "Agua Blanca" },
        { id: "2205", name: "Asunción Mita" },
        { id: "2206", name: "Yupiltepeque" },
        { id: "2207", name: "Atescatempa" },
        { id: "2208", name: "Jerez" },
        { id: "2209", name: "El Adelanto" },
        { id: "2210", name: "Zapotitlán" },
        { id: "2211", name: "Comapa" },
        { id: "2212", name: "Jalpatagua" },
        { id: "2213", name: "Conguaco" },
        { id: "2214", name: "Moyuta" },
        { id: "2215", name: "Pasaco" },
        { id: "2216", name: "San José Acatempa" },
        { id: "2217", name: "Quesada" }
    ]

};

function cargarOpciones() {
    const deptoSeleccionado = document.getElementById("cmbDepto").value;
    const municipSelect = document.getElementById("cmbMunicipio");

    // Limpiar las opciones anteriores
    municipSelect.innerHTML = "";

    // Cargar las opciones basadas en lo seleccionado
    municipiosPorDepartamento[deptoSeleccionado].forEach(municipio => {
        const opcion = document.createElement("option");
        opcion.value = municipio.id; // Usar el ID como valor
        opcion.text = municipio.name;
        municipSelect.appendChild(opcion);
    });
}

// Cargar opciones iniciales
cargarOpciones();