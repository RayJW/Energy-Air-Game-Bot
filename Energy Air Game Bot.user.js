// ==UserScript==
// @name         Energy Air Game Bot
// @version      1
// @description  Simulate the Energy Air Game.
// @author       RayJW
// @match        *game.energy.ch/*
// @run-at       document-end
// @grant        none
// @require      https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js
// ==/UserScript==

(function($) {
    $.fn.isBgColor = function(color) {
        var thisBgColor = this.eq(0).css('backgroundColor');
        var computedColor = $('<div/>').css({
            backgroundColor: color
        }).css('backgroundColor');
        return thisBgColor === computedColor;
    }
})(jQuery);

(function() {
    'use strict';

    var phone = "XXX";
    var questions = [
        {solution:"La Cintura", question:"Wie heisst der aktuelle Sommerhit von Energy Air Act Alvaro Soler?"},
        {solution:"E-Mail", question:"Auf welchem Weg kann man KEINE Energy Air Tickets gewinnen?"},
        {solution:"Pegasus", question:"Wer eröffnete das erste Energy Air?"},
        {solution:"6. September 2018", question:"Wann ist der offizielle Filmstart von DAS SCHÖNSTE MÄDCHEN DER WELT in den Schweizer Kinos?"},
        {solution:"Pink", question:"Welche Farbe haben die Haare des Social Media Stars Julia Beautx im Film?"},
        {solution:"15", question:"Wie viele Acts waren beim letzten Energy Air dabei?"},
        {solution:"Aloe Blacc", question:"Welcher dieser Acts hatte einen Auftritt am Energy Air 2017?"},
        {solution:"Die fünfte", question:"Die wievielte Energy Air Ausgabe findet dieses Jahr statt?"},
        {solution:"Shootingstar Berlinale 2018", question:"Mit welchem Preis wurde der Nachwuchsstar Luna Wedler dieses Jahr ausgezeichnet?"},
        {solution:"…für den man Tickets nur gewinnen kann.", question:"Energy Air ist der einzige Energy Event, …"},
        {solution:"Berlin", question:"Wohin führt die Klassenfahrt?"},
        {solution:"8. September 2018", question:"Wann findet das Energy Air 2018 statt?"},
        {solution:"Cyril", question:"Welcher Schauspieler/Rapper trägt im Film eine goldene Maske?"},
        {solution:"BSC Young Boys", question:"Welche Fussballmannschaft ist im Stade de Suisse zuhause?"},
        {solution:"Texte schreiben und rappen", question:"Was ist Cyrils besondere Begabung?"},
        {solution:"2014", question:"Wann fand Energy Air zum ersten Mal statt?"},
        {solution:"Bastian Baker", question:"Wer stand am letzten Energy Air als Überraschungsgast auf der Bühne?"},
        {solution:"40’000", question:"Wie viele Energy Air Tickets werden verlost?"},
        {solution:"Seine grosse Nase", question:"Was ist Cyrils (Aaron Hilmer) Markenzeichen im Film?"},
        {solution:"Um 16 Uhr", question:"Wann beginnt das Energy Air 2018?"},
        {solution:"Tuk Tuk", question:"Das NRJ-Gefährt ist ein…"},
        {solution:"1", question:"Was passiert, wenn es am Eventtag regnet?"},
        {solution:"im Radio, auf der Website und über Social Media", question:"Wo erfährst du immer die neusten Infos rund um Energy Air?"},
        {solution:"gewinnen", question:"Energy Air Tickets kann man…"},
        {solution:"450 Tonnen", question:"Wie schwer ist die Energy Air Bühne?"},
        {solution:"Luna Wedler", question:"Welcher Schweizer Shootingstar spielt in DAS SCHÖNSTE MÄDCHEN DER WELT die Hauptrolle?"},
        {solution:"XTRA-Circle", question:"Mit welchem dieser Tickets geniesst du die beste Sicht zur Energy Air Bühne?"},
        {solution:"Kodaline", question:"Wer war der letzte Act beim Energy Air 2017?"},
        {solution:"Anke Engelke", question:"Wer spielt die Mutter von Cyril?"},
        {solution:"Stade de Suisse (Bern)", question:"Wo findet das Energy Air statt?"},
    ];

    if ($('h1').html() == 'GEWINNE JETZT TICKETS MIT DEM ENERGY AIR GAME') {
        // Game start
        $('input#mobile').val(phone);
        $('button:submit').click();
    } else if ($('#gameover h2').html() == 'GAME OVER') {
        // Game over
        window.location = "https://game.energy.ch/";
    } else if ($('#decision h2').html() == 'Glückwunsch!') {
        // Quiz done
        $('button:submit').click();
    } else if ($('#wingame h1').html() == 'Hinter welchem Energy Air Logo versteckt sich das Ticket?') {
        // Pick EAir Logo
        //var rnd = Math.floor((Math.random() * 12));
        var forwardUrl = document.URL + '?ticket=' + 0;
        window.location = forwardUrl;
    } else if ($('#wingame h1').html() == 'Das war das falsche Logo, knapp daneben! Versuche es erneut!') {
        // Restart
        window.location = "https://game.energy.ch/";
    } else if ($('button[type="submit"]').html() == "WEITER") {
        // Quiz
        var question = $('.question > h1').html();

        for (var x = 0; x < questions.length; x++) {
            if (questions[x].question == question) {
                $('#option' + questions[x].solution).attr('checked', 'checked');
                $('button:submit').click();
            }
        }
    } else {
        // Anything else (i.e. Error-Page) --> Refresh
        window.location = "https://game.energy.ch/";
    }
})();