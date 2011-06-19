  var map;

  $(document).ready(function(){
    map = new L.Map('map'); 
    var mapnik = new L.TileLayer('http://{s}.tile.cloudmade.com/BC9A493B41014CAABB98F0471D759707/22677/256/{z}/{x}/{y}.png', {maxZoom: 18, attribution: ""});
    var earth = new L.LatLng(37.77, -122.44);
    map.setView(earth, 13).addLayer(mapnik);

    var dotter = new Dotter(2);

    // http://sanfrancisco.crimespotting.org/
    var group1 = 'rgba(255, 0, 0, .3)';
    var group2 = 'rgba(255, 255, 60, .3)';
    var group3 = 'rgba(60, 255, 60, .3)';

    var colors = {
      'AGGRAVATED ASSAULT': group1,
      'SIMPLE ASSAULT': group1,
      'ROBBERY': group1,
      'NARCOTICS': group2,
      'ALCOHOL': group2,
      'PROSTITUTION': group2,
      'THEFT': group3,
      'VEHICLE THEFT': group3,
      'VANDALISM': group3,
      'BURGLARY': group3,
      'ARSON': group3
    }
    


    for (var i = 0, crime; crime = incidents[i]; ++i) {
      var latlng = new L.LatLng(crime.lnglat[1],crime.lnglat[0]);
      //var color = colors[crime.type];
      // var CrimeIcon = L.Icon.extend({
      //     iconUrl: dotter.getDot(color),
      //     shadowUrl: '',
      //     shadowSize: new L.Point(0,0),
      //     iconSize: new L.Point(4, 4),
      //     iconAnchor: new L.Point(1, 1),
      //     popupAnchor: new L.Point(1, 1)
      // });
      //var marker = new L.Marker(latlng,{icon:new CrimeIcon()});
      //map.addLayer(marker);
      
      var image = dotter.getDot(colors[crime.type]);
      var marker = new L.CrimeDot(latlng,image,map,null);
    }

    // Create legend
    var legendDot = new Dotter(8);
    var legend = document.getElementById('legend');
    var legendHTML = [];
    legendHTML.push('<div><img src="',legendDot.getDot('#f00'),'">Assault/Robbery</div>');
    legendHTML.push('<div><img src="',legendDot.getDot('#ff0'),'">Narcotics/Alcohol/Prostitution</div>');
    legendHTML.push('<div><img src="',legendDot.getDot('#0f0'),'">Theft/Vandalism/Burglary/Arson</div>');
    legend.innerHTML = legendHTML.join('');
  });
  
  
  function drawDot() {
    
  }
