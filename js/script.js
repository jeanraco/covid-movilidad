
$("input[type='radio']").click(function () {
    
    var status = $(this).data("status");
    var name = $(this).prop("name");

    $("#" + name + "-menu input[type='radio']").each(function (index) {
        $(this).data("status", "unchecked");;
    });

    if (status == undefined || status == "unchecked") {
        $(this).prop("checked", true);
        $(this).data("status", "checked");
    } else {
        $(this).prop("checked", false);
        $(this).data("status", "unchecked");
    }

    updateResult();

});

function updateResult() {
    
    var data, i, index, hora;

    data = {
    
        "fechas":[
    
            {"dia":"Sábado 20", "cedulas":[1,2], "placas":[2,4,6,8,0]},
            {"dia":"Domingo 21", "cedulas":[3,4], "placas":[1,3,5,7,9]},
            {"dia":"Lunes 22", "cedulas":[5,6], "placas":[2,4,6,8,0]},
            {"dia":"Martes 23", "cedulas":[7,8], "placas":[1,3,5,7,9]},
            {"dia":"Miércoles 24", "cedulas":[9,0], "placas":[2,4,6,8,0]},
            {"dia":"Jueves 25", "cedulas":[1,2], "placas":[1,3,5,7,9]},
            {"dia":"Viernes 26", "cedulas":[3,4], "placas":[2,4,6,8,0]},
            {"dia":"Sábado 27", "cedulas":[5,6], "placas":[1,3,5,7,9]},
            {"dia":"Domingo 28", "cedulas":[7,8], "placas":[2,4,6,8,0]},
            {"dia":"Lunes 29", "cedulas":[9,0], "placas":[1,3,5,7,9]},
            {"dia":"Martes 30", "cedulas":[1,2], "placas":[2,4,6,8,0]}
    
        ],
        "horarios":[
            {"digito":1,"horas":"de 6:00am a 12:00m"},
            {"digito":2,"horas":"de 12:00m a 6:00pm"},
            {"digito":3,"horas":"de 6:00am a 12:00m"},
            {"digito":4,"horas":"de 12:00m a 6:00pm"},
            {"digito":5,"horas":"de 6:00am a 12:00m"},
            {"digito":6,"horas":"de 12:00m a 6:00pm"},
            {"digito":7,"horas":"de 6:00am a 12:00m"},
            {"digito":8,"horas":"de 12:00m a 6:00pm"},
            {"digito":9,"horas":"de 6:00am a 12:00m"},
            {"digito":0,"horas":"de 12:00m a 6:00pm"},
        ]
    }

    var cedula = parseInt( $("#cedula-menu input[type='radio']:checked").val(), 10 );
    var placa =  parseInt( $("#placa-menu input[type='radio']:checked").val(), 10 );

    if( !isNaN( cedula ) ){

        index = data.horarios.map(function(o) { return o.digito; }).indexOf( cedula );

        hora = data.horarios[index].horas;

        for( i in data.fechas ){

            if ( data.fechas[i].cedulas.includes( cedula ) ){

                if( data.fechas[i].placas.includes( placa ) ){

                    $(".day #day-" + i).prop("class", "box_yes");
                    $(".day #day-" + i).html('<span><i class="fas fa-motorcycle"> </i> <b>' + data.fechas[i].dia + ':</b> <i><small>Puedes salir con vehículo '+hora+'</small></i>');

                }else{

                    $(".day #day-" + i).prop("class", "box_yes");
                    $(".day #day-" + i).html('<span><i class="fas fa-walking"> </i> <b>' + data.fechas[i].dia + ':</b> <i><small>Puedes salir '+hora+'</mall></i>');

                }

            }else{
                $(".day #day-" + i).prop("class", "box_no");
                $(".day #day-" + i).html('<span><i class="fas fa-ban"> </i> <b>' + data.fechas[i].dia+ ':</b> <i><small>Quédate en casa</span></small></i>');
            }

        }

        $("#dias-menu").show("slow");
    }else
    {

        $("#placa-menu input[type='radio']:checked").prop("checked", false);
        $("#placa-menu input[type='radio']:checked").data("status", "unchecked");
        $("#dias-menu").hide(1500);
    }


}



