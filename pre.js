/**
 * Created by SasankaMouli on 2/26/2017.
 */
(function () {
    var preload = document.getElementById("preload");
    var loading = 0;
    var id = setInterval(frame, 64);

    function frame() {
        if (loading == 70){
            clearInterval(id);
        window.open("main.html", "_self");
    }

    else
    {
        loading = loading + 1;
        if (loading == 60)
            preload.style.animation = "fadeout 1s ease"

    }
}
}


)();