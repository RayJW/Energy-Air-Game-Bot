// ==UserScript==
// @name         Energy Air Game Bot
// @namespace    https://github.com/RayJW/Energy-Air-Game-Bot
// @version      0.1
// @description  Automate the Energy Air Game
// @author       RayJW, Svenwas3f
// @match        https://game.energy.ch/
// @grant        none
// ==/UserScript==

window.addEventListener("load", initial);

function initial(){
    for (var i = 0; i < 10; i++) {
        answer();
    }
}

function answer() {

    var answers = [
        "La Cintura", "E-Mail", "Bastian Baker", "6. September 2018", "Pink", "15", "Aloe Blacc", "Die fünfte", "Shootingstar Berlinale 2018", "für den man Tickets nur gewinnen kann.",
        "Berlin", "8. September 2018", "Cyril", "BSC Young Boys", "Texte schreiben und rappen", "2014", "Bastian Baker", "40’000", "Seine grosse Nase", "Um 17 Uhr", "Tuk Tuk",
        "Energy Air findet trotzdem statt", "im Radio, auf der Website und über Social Media", "gewinnen", "450 Tonnen", "Luna Wedler", "XTRA-Circle", "Kodaline", "Anke Engelke",
        "Stade de Suisse (Bern)"
    ];
    var x = question();
    document.getElementById(answers[x]).click();
    document.getElementById("next-question").click();
}

function question(){
    var questionEls = document.getElementsByClassName("mobile-padding-question")
    var question = questionEls[1].innerText;
    var x = 0;
    var questions = [
        "Wie heisst der aktuelle Sommerhit von Energy Air Act Alvaro Soler?", "Auf welchem Weg kann man KEINE Energy Air Tickets gewinnen?", "Wer eröffnete das erste Energy Air?", "Wann ist der offizielle Filmstart von DAS SCHÖNSTE MÄDCHEN DER WELT in den Schweizer Kinos?",
        "Welche Farbe haben die Haare des Social Media Stars Julia Beautx im Film?", "Wie viele Acts waren beim letzten Energy Air dabei?", "Welcher dieser Acts hatte einen Auftritt am Energy Air 2017?", "Die wievielte Energy Air Ausgabe findet dieses Jahr statt?",
        "Mit welchem Preis wurde der Nachwuchsstar Luna Wedler dieses Jahr ausgezeichnet?", "Energy Air ist der einzige Energy Event,...", "Wohin führt die Klassenfahrt?", "Wann findet das Energy Air 2018 statt?", "Welcher Schauspieler/Rapper trägt im Film eine goldene Maske?",
        "Welche Fussballmannschaft ist im Stade de Suisse zuhause?", "Was ist Cyrils besondere Begabung?", "Wann fand Energy Air zum ersten Mal statt?", "Wer stand am letzten Energy Air als Überraschungsgast auf der Bühne?", "Wie viele Energy Air Tickets werden verlost?",
        "Was ist Cyrils (Aaron Hilmer) Markenzeichen im Film?", "Wann beginnt das Energy Air 2018?", "Das NRJ-Gefährt ist ein…", "Was passiert, wenn es am Eventtag regnet?", "Wo erfährst du immer die neusten Infos rund um Energy Air?", "Energy Air Tickets kann man...",
        "Wie schwer ist die Energy Air Bühne?", "Welcher Schweizer Shootingstar spielt in DAS SCHÖNSTE MÄDCHEN DER WELT die Hauptrolle?",
        "Mit welchem dieser Tickets geniesst du die beste Sicht zur Energy Air Bühne?", "Wer war der letzte Act beim Energy Air 2017?", "Wer spielt die Mutter von Cyril?", "Wo findet das Energy Air statt?",
    ];
    while (x < 30) {
        if (question == questions[x]) {
            return x;
            break;
        } else {
            x++;

        }
    }
}
