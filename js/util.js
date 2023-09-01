
google.charts.load('current', { 'packages': ['corechart'] });

llamada1();

function MydrawChart(hombres, mujres) {

    var data = google.visualization.arrayToDataTable([
        ['Poblacion', 'Total'],
        ['Hombre', hombres],
        ['Mujer', mujres]
    ]);

    var options = {
        title: 'Estadisticas'
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
}

function MydrawCharttt(Edad14, Edad15, Edad65) {

    var data = google.visualization.arrayToDataTable([
        ['Poblacion', 'Total'],
        ['Edad 0-14', Edad14],
        ['Edad 15-64', Edad15],
        ['Edad 65', Edad65]
    ]);

    var options = {
        title: 'Estadisticas'
    };

    var chart = new google.visualization.PieChart(document.getElementById('piecharttt'));

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

function MydrawChar(Maya, Garifuna, Xinca, Afrodecendiente, Ladino, Extranjero ) {

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

function llamada1() {
    //alert('llamada1');
    var txtDepa = document.getElementById('txtDepa');
    var cmbDepa = document.getElementById('cmbDepa');

    //alert(txtDepa.value);
    //alert(cmbDepa.value);
    var url = "";
    if (txtDepa != null) {
        //url = "https://censopoblacion.gt/indicadores/" + txtDepa.value + "/999";
        url = "https://censopoblacion.gt/indicadores/" + cmbDepa.value + "/999";
    }
    else {
        url = ""
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

                google.charts.setOnLoadCallback(MydrawChartt(data[0].total_sector_urbano, data[0].total_sector_rural));


                google.charts.setOnLoadCallback(MydrawCharttt(data[0].pob_edad_014, data[0].pob_edad_1564, data[0].pob_edad_65));

                google.charts.setOnLoadCallback(MydrawChar(data[0].pob_pueblo_maya, data[0].pob_pueblo_garifuna, 
                    data[0].pob_pueblo_xinca, data[0].pob_pueblo_afrodescendiente, data[0].pob_pueblo_ladino, 
                    data[0].pob_pueblo_extranjero ));

                var NumHombres = document.getElementById('NumHombres');
                NumHombres.textContent = data[0].total_sexo_hombre;

                //Sexo
                document.getElementById('PorHombres').innerText = data[0].porc_sexo_hombre.toFixed(2);
                document.getElementById('NombreD').innerText = data[0].nombre;
                document.getElementById('NumMujeres').innerText = data[0].total_sexo_mujeres;
                document.getElementById('PorMujres').innerText = data[0].porc_sexo_mujeres.toFixed(2);

                //Area
                document.getElementById('NumUrb').innerText = data[0].total_sector_urbano;
                document.getElementById('PorUrb').innerText = data[0].porc_sector_urbano.toFixed(2);
                document.getElementById('NombreM').innerText = data[0].nombre;
                document.getElementById('NumRur').innerText = data[0].total_sector_rural;
                document.getElementById('PorRur').innerText = data[0].porc_sector_rural.toFixed(2);

                //Edades
                document.getElementById('Num014').innerText = data[0].pob_edad_014;
                document.getElementById('Por014').innerText = data[0].porc_edad_014.toFixed(2);
                document.getElementById('NombreE').innerText = data[0].nombre;
                document.getElementById('Num1564').innerText = data[0].pob_edad_1564;
                document.getElementById('Por1564').innerText = data[0].porc_edad_1564.toFixed(2);
                document.getElementById('Num65').innerText = data[0].pob_edad_65;
                document.getElementById('Por65').innerText = data[0].porc_edad_65.toFixed(2);

                //Pueblos
                document.getElementById('NombreP').innerText = data[0].nombre;
                document.getElementById('NumMaya').innerText = data[0].pob_pueblo_maya;
                document.getElementById('PorMaya').innerText = data[0].porc_pueblo_maya.toFixed(2);
                document.getElementById('NumGar').innerText = data[0].pob_pueblo_garifuna;
                document.getElementById('PorGar').innerText = data[0].porc_pueblo_garifuna.toFixed(2);
                document.getElementById('NumXin').innerText = data[0].pob_pueblo_xinca;
                document.getElementById('PorXin').innerText = data[0].porc_pueblo_xinca.toFixed(2);
                document.getElementById('NumAfro').innerText = data[0].pob_pueblo_afrodescendiente;
                document.getElementById('PorAfro').innerText = data[0].porc_pueblo_afrodescendiente.toFixed(2);
                document.getElementById('NumLad').innerText = data[0].pob_pueblo_ladino;
                document.getElementById('PorLad').innerText = data[0].porc_pueblo_ladino.toFixed(2);
                document.getElementById('NumExtra').innerText = data[0].pob_pueblo_extranjero;
                document.getElementById('PorExtra').innerText = data[0].porc_pueblo_extranjero.toFixed(2);



            }

        });
}
