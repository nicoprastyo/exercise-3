var table = document.getElementById('myTable');
var url = "https://swapi.co/api/planets/";
var request = new XMLHttpRequest();
request.open('GET',url);
request.responseType = 'json';
request.send();

request.onload = function(){
    var a = "";
    var data = request.response;
    showData(data);
}	

function myFunction() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
      console.log(tr.length);
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}

function showData(json){
    var results = json.results;
    for(var i=0;i<results.length;i++){
        var tr = "<tr>";
        tr+= "<td>"+results[i].name+"</td>"+"<td>"+results[i].climate+"</td><td>"+results[i].terrain+"</td>";
        var jml_resident = results[i].residents;
        tr+= "<td><ul>";
        if(jml_resident.length>0){
            for(var j=0;j<jml_resident.length;j++){
                tr+= "<li><a href='"+jml_resident[j]+"'>"+jml_resident[j]+"</a></li>";
            }
        }else{
            tr+= "<li> Tidak ada data </li>";
        }
        tr+= "</ul></td>";
        var jml_films = results[i].films;
        tr+= "<td><ul>";
        if(jml_films.length>0){
            for(var j=0;j<jml_films.length;j++){
                tr+= "<li><a href='"+jml_films[j]+"'>"+jml_films[j]+"</a></li>";
            }
        }else{
            tr+= "<li> Tidak ada data </li>";
        }
        tr+= "</ul></td></tr>";
        table.innerHTML += tr;
    }
}