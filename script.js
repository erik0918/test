document.getElementById('btn').addEventListener('click', () => {
    document.getElementById('greeting').textContent = 'Votați aici!'
    const cheieBazaDateSondaj = "sondaj_securizat_site_v1";

function afiseazaSondaj() {
    document.getElementById("sectiuneVot").style.display = "block";
    
    let voturiCurente = parseInt(localStorage.getItem("contor_global_simulat") || 142);
    
    if (localStorage.getItem(cheieBazaDateSondaj) !== "aVotat") {
        voturiCurente += 1;
        localStorage.setItem("contor_global_simulat", voturiCurente);
        localStorage.setItem(cheieBazaDateSondaj, "aVotat");
    }
    
    document.getElementById("textNumarVoturi").innerText = voturiCurente;
}

});
