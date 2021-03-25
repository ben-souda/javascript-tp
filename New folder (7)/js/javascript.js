
function calcSalaire() {
    var nbrPoint = document.getElementById("ggg").value;

    var valeur_du_point = 4.83;

    var salaire_brut = valeur_du_point * nbrPoint;

    var prime_de_residence = salaire_brut * 0.13;

    var retenue_de_la_retraite = (salaire_brut + prime_de_residence) * 6 / 100;

    var retenue_mutuelle = (salaire_brut + prime_de_residence) * 2.5 / 100;


    document.getElementById("brut").innerHTML = salaire_brut;
    document.getElementById("prime").innerHTML = prime_de_residence;
    document.getElementById("retraite").innerHTML = retenue_de_la_retraite;
    document.getElementById("mutuelle").innerHTML = retenue_mutuelle;


    var impot_sur_le_revenu = (salaire_brut + prime_de_residence) * 12;
    var ir = document.getElementById("ir").innerHTML;

    if (impot_sur_le_revenu <= 28000) {

        document.getElementById("ir").innerHTML = 0;
    }

    else if (impot_sur_le_revenu >= 28001 && impot_sur_le_revenu <= 40000) {

        document.getElementById("ir").innerHTML = ((impot_sur_le_revenu * 12 / 100) - 3360) / 12;

    }

    else if (impot_sur_le_revenu >= 40001 && impot_sur_le_revenu <= 50000) {

        document.getElementById("ir").innerHTML = ((impot_sur_le_revenu * 24 / 100) - 8160) / 12;

    }

    else if (impot_sur_le_revenu >= 50001 && impot_sur_le_revenu <= 60000) {

        document.getElementById("ir").innerHTML = ((impot_sur_le_revenu * 34 / 100) - 13160) / 12;

    }

    else if (impot_sur_le_revenu >= 60001 && impot_sur_le_revenu <= 150000) {

        document.getElementById("ir").innerHTML = ((impot_sur_le_revenu * 38 / 100) - 15560) / 12;

    }

    else if (impot_sur_le_revenu > 150000) {

        document.getElementById("ir").innerHTML = ((impot_sur_le_revenu * 40 / 100) - 18560) / 12;

    }


    var salaire_net = salaire_brut + prime_de_residence - retenue_de_la_retraite - retenue_mutuelle - ir;

    document.getElementById("net").innerHTML = salaire_net;

}


