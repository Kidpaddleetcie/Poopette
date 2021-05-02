let gen = " ";
let visu_table = ["Pas d'incrustation", "Très peu d'incrustation", "Beaucoup d'incrustation", "Effets Bordéliques"];
let sm_table = ["Aucun Sentence-Mixing", "Très peu de Sentence-Mixing", "Beaucoup de Sentence-Mixing"];

for (let ii = 0; ii < poopeurs.length; ii++) {
    YTPmakers = poopeurs[ii];
    idytp = YTPmakers.url
    gen += '<a href="' + YTPmakers.url + '"><div class="boite">';
    gen += '<h1 class="nom">' + YTPmakers.Nom + '</h1>'
    gen += '<img class="pp" src="' + YTPmakers.img + '"/>'
    gen += '<p class="visu"> ' + visu_table[YTPmakers.Visu - 1] + '</p>'
    gen += '<p class="sm"> ' + sm_table[YTPmakers.SM - 1] + '</p>'
    gen += '<div class="g-ytsubscribe" '
    if (idytp.split('/')[3] != "channel") {
        gen += 'data-channel="' + idytp.split('/')[4];
    } else {
        gen += 'data-channelid="' + idytp.split('/')[4];
    }


    gen += '" data-layout="default" data-theme="dark" data-count="default"></div>'
    gen += '</div></a>';
}
document.getElementById("poopeurs").innerHTML = gen;