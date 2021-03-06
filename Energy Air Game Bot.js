// ==UserScript==
// @name         Energy Air Game Bot
// @namespace    https://github.com/RayJW/Energy-Air-Game-Bot
// @version      1.4
// @description  Automate the Energy Air Game
// @author       RayJW, Svenwas3f
// @match        https://game.energy.ch/
// @grant        none
// ==/UserScript==

window.addEventListener("load", total);

setTimeout(total, 5000);

function next(){
    var buttonEls = document.getElementsByClassName("btn btn-primary game-button game-button-slot")
    var button = buttonEls[0].setAttribute("id", "next-step");
    document.getElementById("next-step").click();
}

function random(){
    var x = Math.floor(Math.random() * 13)
    var buttonEls = document.getElementsByTagName("img");
    var button = buttonEls[x].setAttribute("id", "next-step");
    document.getElementById("next-step").click();
}

function reload(){
    location.reload();
}

function answer() {
    var answers = [
        "La Cintura",
        "E-Mail",
        "Bastian Baker",
        "15",
        "Aloe Blacc",
        "Die fünfte",
        "…für den man Tickets nur gewinnen kann.",
        "8. September 2018",
        "BSC Young Boys",
        "2014",
        "Bastian Baker",
        "40’000",
        "Um 17 Uhr",
        "Tuk Tuk",
        "Energy Air findet trotzdem statt",
        "im Radio, auf der Website und über Social Media",
        "gewinnen",
        "450 Tonnen",
        "XTRA-Circle",
        "Kodaline",
        "Stade de Suisse, Bern",
        "70 Meter",
        "Ab 30. August 2018",
        "60",
        "Dimitri Vegas & Like Mike",
        "Deutschland",
        "Bern",
        "Pegasus",
        "Der Ex von Audrey (Mila Kunis)",
        "Privatjet",
        "Mila Kunis und Kate McKinnon",
        "1300",
        "Eine komplett weisse Garderobe",
        "In der Körperöffnung",
        "One Republic",
        "Baba Shrimps",
        "Bad Moms",
        "Twitter",
        "60",
        "Energy Air – The Game",
        "Einen USB-Stick mit vertraulichen Informationen",
        "Sein Mami",
        "Für Ingwer & Ewig",
        "Ashton Kutcher",
        "250",
        "2014",
        "Kodaline",
        "Gamen",
        "Luna Wedler",
        "6. September 2018",
        "Seine grosse Nase",
        "Berlin",
        "Texte schreiben und rappen",
        "Anke Engelke",
        "Shootingstar Berlinale 2018",
        "Pink",
        "Cyril"
    ];
    var x = question();
    document.getElementById(answers[x]).click();
    document.getElementById("next-question").click();
}

function question(){
    var questionEls = document.getElementsByClassName("mobile-padding-question");
    var question = questionEls[1].innerText;
    var x = 0;
    var questions = [
        "Wie heisst der aktuelle Sommerhit von Energy Air Act Alvaro Soler?",
        "Auf welchem Weg kann man KEINE Energy Air Tickets gewinnen?",
        "Wer eröffnete das erste Energy Air?",
        "Wie viele Acts waren beim letzten Energy Air dabei?",
        "Welcher dieser Acts hatte einen Auftritt am Energy Air 2017?",
        "Die wievielte Energy Air Ausgabe findet dieses Jahr statt?",
        "Energy Air ist der einzige Energy Event, …",
        "Wann findet das Energy Air 2018 statt?",
        "Welche Fussballmannschaft ist im Stade de Suisse zuhause?",
        "Wann fand Energy Air zum ersten Mal statt?",
        "Wer stand am letzten Energy Air als Überraschungsgast auf der Bühne?",
        "Wie viele Energy Air Tickets werden verlost?",
        "Wann beginnt das Energy Air 2018?",
        "Das NRJ-Gefährt ist ein…",
       "Was passiert, wenn es am Eventtag regnet?",
        "Wo erfährst du immer die neusten Infos rund um das Energy Air?",
        "Energy Air Tickets kann man…",
        "Wie schwer ist die Energy Air Bühne?",
        "Mit welchem dieser Tickets geniesst du die beste Sicht zur Energy Air Bühne?",
        "Wer war der letzte Act beim Energy Air 2017?",
        "Wo findet das Energy Air statt?",
        "Wie breit ist die Energy Air Bühne?",
        "Ab wann ist der Film BAD SPIES in den Schweizer Kinos zu sehen?",
        "Wie viele Konfetti-Kanonen gibt es am Energy Air?",
        "Welcher berühmte DJ-Act stand 2017 auf der Bühne des Energy Air?",
        "Woher kommt Energy Air Act Max Giesinger?",
        "In welcher Hauptstadt Europas machen die BAD SPIES keinen Halt?",
        "Welcher Act stand beim ersten Energy Air 2014 und auch im letzten Jahr auf der Bühne?",
        "Wessen Ex-Freund ist ein internationaler Spion?",
        "Wie reiste Kygo im Jahr 2015 ans Energy Air?",
        "Welches Agentenduo gibt ab dem 30. August so richtig Gas?",
        "Wie viele Mitarbeiter sind am Energy Air im Einsatz?",
        "Was verlangte Nena am Energy Air 2016?",
        "Wo hat Audrey den USB-Stick versteckt?",
        "Welche amerikanische Band trat am Energy Air 2016 auf?",
        "Welcher Act interviewte vor dem letzten Energy Air das Publikum?",
        "Aus welchem Film ist Mila Kunis bekannt?",
        "Auf welcher Social-Media-Plattform kann man keine Energy Air Tickets gewinnen?",
        "Wie viele Konfetti-Kanonen gibt es am Energy Air?",
        "Auf welchem Portal kann ich zwei Kinotickets für den Film BAD SPIES gewinnen?",
        "Was verstecken Audrey und Morgan vor der CIA?",
        "Wen nahm Knackeboul am Energy Air 2014 mit backstage?",
        "Welchen Song performte Dodo am Energy Air mit den Überraschungsgästen Lo & Leduc?",
        "Mit welchem Hollywoodstar ist Mila Kunis verheiratet?",
        "Wie viele Spotlights gibt es am Energy Air?",
        "Wann fand das Energy Air zum ersten Mal statt?",
        "Wer war der letzte Act am Energy Air 2017?",
        "Was ist Audreys Lieblingsbeschäftigung?",
        "Welcher Schweizer Shootingstar spielt in DAS SCHÖNSTE MÄDCHEN DER WELT die Hauptrolle?" ,
        "Wann ist der offizielle Filmstart von DAS SCHÖNSTE MÄDCHEN DER WELT in den Schweizer Kinos?",
        "Was ist Cyrils (Aaron Hilmer) Markenzeichen im Film?",
        "Wohin führt die Klassenfahrt?",
        "Was ist Cyrils besondere Begabung?",
        "Wer spielt die Mutter von Cyril?",
        "Mit welchem Preis wurde der Nachwuchsstar Luna Wedler dieses Jahr ausgezeichnet?",
        "Welche Farbe haben die Haare des Social Media Stars Julia Beautx im Film?",
        "Welcher Schauspieler/Rapper trägt im Film eine goldene Maske?"
    ];
    while (x < 60) {
        if (question == questions[x]) {
            return x;
            break;
        } else {
            x++;

        }
    }
}

function total() {
    if(!document.getElementsByClassName("mobile-padding-question")[0]){
        if(!document.getElementsByClassName("circle col-xs-4 col-sm-3 col-md-4 col-lg-3")){
            reload();
        }else{
            setTimeout(next, 2000);
            setTimeout(random, 2000);
            setTimeout(reload, 3500);
        }
    }else{
        var questionEls = document.getElementsByClassName("mobile-padding-question");
        if (questionEls[0].innerText == "10 / 10"){
            answer();
            setTimeout(next, 2000);
            setTimeout(random, 2000);
            setTimeout(reload, 3500);
        }else{
            answer();
            reload();
        }
    }
}
