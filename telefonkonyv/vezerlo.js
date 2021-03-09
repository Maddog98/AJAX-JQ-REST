$(function () {
    $("#beolvas").on("click", beolvas);
    $("#kuld").on("click", adBeir);
    $("article").delegate(".torol","click", adTorol);
});

var telefonkonyvem=[];

function kiir() {
    console.log("kiir");
//    var nev = $("#nev").val();
//    var tel = $("#tel").val();
//    var kep = $("#kep").val();

    $("article").empty();
    for (var i = 0; i < telefonkonyvem.length; i++) {
        var ID = telefonkonyvem[i].ID;
        var nev = telefonkonyvem[i].nev;
        var tel = telefonkonyvem[i].tel;
        var kep = telefonkonyvem[i].kep;
        var elem = "<div><h2>" + nev + "</h2><p>" + tel + "</p><p>" + kep + "</p><button class='torol' id='"+ID+"'>Töröl</button></div>";
        $("article").append(elem);
    }
}


function beolvas() {
    $.ajax({
        type:"GET",
        url: "feldolgoz.php",
        success: function (result) {
            console.log(result);
            telefonkonyvem = JSON.parse(result);
            console.log(telefonkonyvem);
            kiir();
        },
        error: function () {
            alert("hiba az adaztok betöltésekor!");
        }
    });
}

function adBeir() {
    var szemely = {
        nev: $("#nev").val(),
        tel: $("#tel").val(),
        kep: $("#kep").val()

    };
    
    $.ajax({
        type: "POST",
        url: "beir.php",
        data: szemely,
        success: function (ujszemely) {

            console.log(ujszemely);
            telefonkonyvem = JSON.parse(ujszemely);
            console.log(telefonkonyvem);
            kiir();
        },
        error: function () {
            alert("Hiba az adatok mentésekor");
        }
    });
}
function adTorol() {
    var aktelem=$(this).closest("div");
    var id = $(this).attr("id");
    console.log("Töröl******************"+id);
    $.ajax({
        type:"DELETE",
        url: "torol.php?ID="+id,
        success: function () {
            console.log("törlés");
            aktelem.remove();
        },
        error: function () {
            alert("hiba az adaztok törlésekor!");
        }
    });
}
