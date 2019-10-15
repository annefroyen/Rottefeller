

        function initmaps(data) {
          console.log("wassup")
          console.log(data)

            // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
            var mapOptions = {
                zoom: 11,
                center: new google.maps.LatLng(58.97258, 5.72526),
                styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]
            };

            var mapElement = document.getElementById('map');

            var map = new google.maps.Map(mapElement, mapOptions);

            var iconbase = 'https://maps.google.com/mapfiles/ms/micons/';


            

          for(var i = 0; i < data.length; i++){

let iconImage = 'icon/rotteIconOransj.png'
if(data[i].Adresse != null || data[i].Adresse != ""){

              let dato = data[i]["Dato for flytting"];

              let substr1 = dato.substr(0,2);
              let substr2 = dato.substr(3,2);
              let substr3 = dato.substr(6,8);

              // To set two dates to two variables
              let dagensDato = new Date();
              let plasseringsDato = new Date(substr2 + "/" + substr1 + "/20" +substr3);


            console.log("dagensDato" + dagensDato)
            console.log("plasseringsDato" + plasseringsDato)

            // To calculate the time difference of two dates
            let diffTid = dagensDato.getTime() - plasseringsDato.getTime();
            console.log("dagensDato.getTime" + dagensDato.getTime())
            console.log("plasseringsDato.getTime" + plasseringsDato.getTime())

            // To calculate the no. of days between two dates
            let diffDager = diffTid / (1000 * 3600 * 24);

            //To display the final no. of days (result)
            console.log("Total number of days between dates: " + diffDager);


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




function finnSkuddHyppighet(data){


let dato = data["Dato for flytting"]

  let substr1 = dato.substr(0,2);
  let substr2 = dato.substr(3,2);
  let substr3 = dato.substr(6,8);

  // To set two dates to two variables
  let dagensDato = new Date();
  let plasseringsDato = new Date(substr2 + "/" + substr1 + "/20" +substr3);


console.log("dagensDato" + dagensDato)
console.log("plasseringsDato" + plasseringsDato)

// To calculate the time difference of two dates
let diffTid = dagensDato.getTime() - plasseringsDato.getTime();
console.log("dagensDato.getTime" + dagensDato.getTime())
console.log("plasseringsDato.getTime" + plasseringsDato.getTime())

// To calculate the no. of days between two dates
let diffDager = diffTid / (1000 * 3600 * 24);

//To display the final no. of days (result)
console.log("Total number of days between dates: " + diffDager);

}


 $(document).ready(function() {
$.ajax({
            type: "GET",
            url: "rottefeller.json",
            dataType: "JSON",
            success: function (data) {
              initmaps(data)
              finnSkuddHyppighet(data),
              console.log("success")
             },
             error: function(){
               console.log("error")
               document.getElementById('diverse').innerHTML = "Noe gikk galt!";

             }
        });


});
