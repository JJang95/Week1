function openCity(event, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    event.currentTarget.className += "active";
    document.cookie = "cityName="+cityName+"1; expires=Thu, 18 Dec 2090 12:00:00 UTC; path=/";
}


document.addEventListener("DOMContentLoaded", function(){
    var selectedCity = getCookie("cityName");
    if (selectedCity != ""){
        document.getElementById(selectedCity).click();
}
});