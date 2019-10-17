

        function lagHyppighetKart(data) {

                var mapOptions = {
                zoom: 12,
                center: new google.maps.LatLng(58.94419, 5.66171),
                styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]
            };

            var mapElement = document.getElementById('hyppighetMap');

            var map = new google.maps.Map(mapElement, mapOptions);

            var iconbase = 'https://maps.google.com/mapfiles/ms/micons/';




          for(var i = 0; i < data.length; i++){



let iconImage = 'icon/rotteIconOransj.png'
if(data[i].Adresse != null || data[i].Adresse != ""){

              let dato = data[i]["Dato for flytting"];

              let substr1 = dato.substr(0,2);
              let substr2 = dato.substr(3,2);
              let substr3 = dato.substr(6,8);


              let dagensDato = new Date();
              let plasseringsDato = new Date(substr2 + "/" + substr1 + "/20" +substr3);


            console.log("dagensDato" + dagensDato)
            console.log("plasseringsDato" + plasseringsDato)


            let diffTid = dagensDato.getTime() - plasseringsDato.getTime();
            console.log("dagensDato.getTime" + dagensDato.getTime())
            console.log("plasseringsDato.getTime" + plasseringsDato.getTime())


            let diffDager = diffTid / (1000 * 3600 * 24);


            console.log(diffDager);


let hyppighet = data[i]["Skudd siden plassering"] / diffDager;

if(hyppighet > 1){
  iconImage = 'icon/rotteIconRaud.png'
}else if(hyppighet > 0.5){
  iconImage = 'icon/rotteIconOransj.png'
}else{
    iconImage = 'icon/rotteIconGul.png'
}
}

            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(data[i].Latitude, data[i].Longitude),
                map: map,
                title: data[i].Adresse,
                icon: iconImage,
            });
            }

        };


        function lagNyligKart(data) {


  var mapOptions = {
                zoom: 12,
                center: new google.maps.LatLng(58.94419, 5.66171),
                styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]
            };

            var mapElement = document.getElementById('nyligMap');

            var map = new google.maps.Map(mapElement, mapOptions);

            var iconbase = 'https://maps.google.com/mapfiles/ms/micons/';




          for(var i = 0; i < data.length; i++){



let iconImage = 'icon/rotteIconOransj.png'

if(data[i].Adresse != null || data[i].Adresse != ""){

              let dato = data[i]["Siste skudd"];

              let substr1 = dato.substr(0,2);
              let substr2 = dato.substr(3,2);
              let substr3 = dato.substr(6,8);


              let dagensDato = new Date();
              let plasseringsDato = new Date(substr2 + "/" + substr1 + "/20" +substr3);


            console.log("dagensDato" + dagensDato)
            console.log("plasseringsDato" + plasseringsDato)


            let diffTid = dagensDato.getTime() - plasseringsDato.getTime();
            console.log("dagensDato.getTime" + dagensDato.getTime())
            console.log("plasseringsDato.getTime" + plasseringsDato.getTime())


            let diffDager = diffTid / (1000 * 3600 * 24);


            console.log(diffDager);


if(diffDager > 120){
  iconImage = 'icon/rotteIconMorkBlaa.png'
}else if(diffDager > 60){
  iconImage = 'icon/rotteIconBlaa.png'
}else{
    iconImage = 'icon/rotteIconLysBlaa.png'
}
}

            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(data[i].Latitude, data[i].Longitude),
                map: map,
                title: data[i].Adresse,
                icon: iconImage,
            });
            }

        };


        function lagModellerKart(data) {

            var mapOptions = {
                zoom: 12,
                center: new google.maps.LatLng(58.94419, 5.66171),
                styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]
            };

            var mapElement = document.getElementById('modellerMap');

            var map = new google.maps.Map(mapElement, mapOptions);

            var iconbase = 'https://maps.google.com/mapfiles/ms/micons/';




          for(var i = 0; i < data.length; i++){

    let modell = data[i].Type;

let iconImage = 'icon/rotteIconOransj.png'

if(modell != null || modell != ""){


if(modell == "Smart Pipe 250"){
  iconImage = 'icon/rotteIconLysRosa.png'
}else if(modell == "Smart Pipe 200"){
  iconImage = 'icon/rotteIconRosa.png'
}else if(modell == "Smart Pipe 160"){
    iconImage = 'icon/rotteIconMorkRosa.png'
}

}

            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(data[i].Latitude, data[i].Longitude),
                map: map,
                title: data[i].Adresse,
                icon: iconImage,
            });
            }

        };


        function lagAlderKart(data) {

            var mapOptions = {
                zoom: 12,
                center: new google.maps.LatLng(58.94419, 5.66171),
                styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]
            };

            var mapElement = document.getElementById('alderMap');

            var map = new google.maps.Map(mapElement, mapOptions);

            var iconbase = 'https://maps.google.com/mapfiles/ms/micons/';




          for(var i = 0; i < data.length; i++){



let iconImage = 'icon/rotteIconOransj.png'

if(data[i]["Dato for flytting"] != null || data[i]["Dato for flytting"] != ""){

              let dato = data[i]["Dato for flytting"];

              let substr1 = dato.substr(0,2);
              let substr2 = dato.substr(3,2);
              let substr3 = dato.substr(6,8);


              let dagensDato = new Date();
              let plasseringsDato = new Date(substr2 + "/" + substr1 + "/20" +substr3);


            console.log("dagensDato" + dagensDato)
            console.log("plasseringsDato" + plasseringsDato)


            let diffTid = dagensDato.getTime() - plasseringsDato.getTime();
            console.log("dagensDato.getTime" + dagensDato.getTime())
            console.log("plasseringsDato.getTime" + plasseringsDato.getTime())


            let diffDager = diffTid / (1000 * 3600 * 24);


            console.log(diffDager);



if(diffDager > 730){
  iconImage = 'icon/rotteIconMorkGronn.png'
}else if(diffDager > 365){
  iconImage = 'icon/rotteIconGronn.png'
}else{
    iconImage = 'icon/rotteIconLysGronn.png'
}
}

            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(data[i].Latitude, data[i].Longitude),
                map: map,
                title: data[i].Adresse,
                icon: iconImage,
            });
            }

        };

 $(document).ready(function() {
$.ajax({
            type: "GET",
            url: "rottefeller.json",
            dataType: "JSON",
            success: function (data) {

              lagHyppighetKart(data)
              lagNyligKart(data)
              lagModellerKart(data)
              lagAlderKart(data)
              console.log("success")
             },
             error: function(){
               console.log("error")
               document.getElementById('diverse').innerHTML = "Noe gikk galt!";

             }
        });


});


 function hyppighetSide(){
      document.getElementById("info").innerHTML = "Viser hvilke feller som har fanget flest rotter i snitt.";
        document.getElementById("hyppighetMap").style.display = "block";
        document.getElementById("nyligMap").style.display = "none";
        document.getElementById("modellerMap").style.display = "none";
        document.getElementById("alderMap").style.display = "none";
 }

 function nyligSide(){
   document.getElementById("info").innerHTML = "Viser hvor det nylig har vert fanget rotter.";
   document.getElementById("hyppighetMap").style.display = "none";
   document.getElementById("nyligMap").style.display = "block";
   document.getElementById("modellerMap").style.display = "none";
   document.getElementById("alderMap").style.display = "none";
 }

 function modellerSide(){
 document.getElementById("info").innerHTML = "Viser hvilke modell fellene er.";
   document.getElementById("hyppighetMap").style.display = "none";
   document.getElementById("nyligMap").style.display = "none";
   document.getElementById("modellerMap").style.display = "block";
   document.getElementById("alderMap").style.display = "none";
 }

 function alderSide(){
   document.getElementById("info").innerHTML = "Vise hvor lenge fellene har staatt paa sin plass.";
   document.getElementById("hyppighetMap").style.display = "none";
   document.getElementById("nyligMap").style.display = "none";
   document.getElementById("modellerMap").style.display = "none";
   document.getElementById("alderMap").style.display = "block";
 }
