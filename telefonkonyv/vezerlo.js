$(function () {
    $("#beolvas").on("click", kiir);
});

function kiir() {
    var nev = $("#nev").val();
    var tel = $("#tel").val();
    var kep = $("#kep").val();

    $("article").empty();
    var elem = "<div><h2> " + nev + "</h2> <p> " + tel + "</p><p> " + kep + "</p> <button class='torol'>Töröl</button></div>";
    $("article").append(elem);
}


function beolvas() {
    $.ajax({
        url: "feldolgoz.php",
        success: function (result) {
            console.log(result);
        }
    });
}
;
