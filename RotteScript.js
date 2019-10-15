

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



            var iconBase =
           'https://developers.google.com/maps/documentation/javascript/examples/full/images/';



          for(var i = 0; i < data.length; i++){
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(data[i].Latitude, data[i].Longitude),
                map: map,
                title: data[i].Adresse
            });




//DATO
            let dato = new Date();
            console.log(dato);
            console.log("getDate:" + dato.getDate()+" getMonth" + dato.getMonth() + " getFullYear" + dato.getFullYear());


///henter ut første char i dato element.

//Nb rett måned må ha +1;

            console.log((data[1]["Dato for flytting"].substr(0,2)) - dato.getDate())


            console.log("Dato for flytting: ")
            console.log("substring 0-2: "(data[0]["Dato for flytting"].substr(0,2)))
            console.log("substring 3-5: "(data[0]["Dato for flytting"].substr(3,5)))
            console.log("substring 6-8: "(data[0]["Dato for flytting"].substr(6,8)))


          //  let dato = new Date("06/30/2019");
          //  console.log("Dagen dato: ");
          //  console.log("getDate:" + dato.getDate()+" getMonth" + dato.getMonth() +" getFullYear" + dato.getFullYear());


}





        };






 $(document).ready(function() {

console.log("yo")

$.ajax({
            type: "GET",
            url: "rottefeller.json",
            dataType: "JSON",
            success: function (data) {
               console.log(data[0])

                initmaps(data)
               document.getElementById('diverse').innerHTML = data[0].Latitude

             },
             error: function(){
               console.log("feilmelding")
               document.getElementById('diverse').innerHTML = "Feilmelding";

             }
        });


});