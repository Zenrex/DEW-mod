// ==UserScript==
// @name         Dew
// @namespace    https://practiseenglishonline.com/
// @version      2024-01-18
// @description  DEW
// @author       You
// @run-at       document-end
// @match        https://practiseenglishonline.com/*
// @match        https://practiseenglishonline.com/assignments.php
// @icon         https://www.google.com/s2/favicons?sz=64&domain=practiseenglishonline.com
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/Zenrex/DEW-mod/main/DEW.mod.js
// @updateURL    https://raw.githubusercontent.com/Zenrex/DEW-mod/main/DEW.mod.js
// ==/UserScript==

(function() {
    'use strict';

    // Your custom CSS styles
    var customStyles = `

    body {
        background-image: url('https://images.pling.com/img/00/00/61/26/90/1572780/6402aa69d949d3e0d2acc536db770c91361691c2d9987dcdd27ca4b3535dcbe06c97.jpg') !important;
        background-size: cover !important; /* Optional: Adjust background size */
        font-family: 'Roboto';
    }

    #hello_2, #how_total_list_button, #closing_div_total, #helloUser, #total_points_score_list_title, #total_english_ranking, #show_total_list_button, #davidSatler {
        display: none;
    }

    #total_english_points, #total_points, #selectedAssignment {
        background-image: linear-gradient(rgba(30, 30, 46, 0), rgba(30, 30, 46, 0));
        border: none;
        color: rgb(0, 0, 0) !important;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        border-radius: 27px;
        height: 3vh;
        font-family: 'Roboto';
    }

    #total_english_points:hover, #total_points:hover {
        background-image: linear-gradient(rgba(30, 30, 46, 0), rgba(30, 30, 46, 0));
        backdrop-filter : blur(5px);
        box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    }

    #total_english_points, #total_english_ranking .total {
        /* Styles for the total value, if needed */
    }

    #new_logo {
        display: none;
        position: absolute;
        top: 0;
        left: 0;
        margin-top: 0px;
    }

    #how_points_work_btn {
        display: none;
        background-image: rgb(30, 30, 46);
        position: absolute;
        top: 15;
        left: 150;
        font-family: 'Roboto';
    }

    #username {
        background-image: solid rgb(30, 30, 46);
    }
    #total_points_score_list_container {
        max-width: 405px;
        padding: 1vh;
        overflow: hidden;
        display: flex;
        position: absolute;
        top: 15;
        right: 10;
        background-color: rgba(0, 0, 0, 0);
        border-color: rgba(0, 0, 0, 0);
        backdrop-filter: blur(5px);
        corner-radius: 27px;
        font-family: 'Roboto';
    }

    #royalty_image {
        display: flex;
        position: absolute;
        bottom: 15;
        left: 10;
    }

    #royalty_image:hover {
        display: flex;
        transform: scale(1.05);
        position: absolute;
        bottom: 15;
        left: 10;
        filter: drop-shadow(13px 15px 16px #000000);
    }

    .adverbs, #jewellery_store_button {
        filter: text-shadow(1px);
        background-image: linear-gradient(rgba(2, 18, 83, 0), rgba(181, 177, 246, 0), rgba(2, 18, 83, 0));
        border-color: rgba(0, 0, 0, 0);
        transition: transform 0.3s ease-out;
        backkdrop-filter: blur(10px);
    }

    .adverbs:hover, #jewellery_store_button:hover {
        background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0));
        border-color: rgba(0, 0, 0, 0);
        backkdrop-filter: blur(10px);
        expand: 1.1;
        box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    }

    .glow-on-hover:after, .glow-on-hover:before {
        filter: text-shadow(1px);
        background: rgba(168, 0, 0, 0);
        border-color: rgba(0, 0, 0, 0);
        transition: transform 0.3s ease-out;
        backkdrop-filter: blur(10px);
    }

    .glow-on-hover {
        background-color: rgba(228, 0, 0, 0) !important;
        border-color: rgba(0, 0, 0, 0) !important;
        transition: transform 0.3s ease-out !important;
    }
    .glow-on-hover:hover {
        background-color: rgba(228, 0, 0, 0);
        border-color: rgba(0, 0, 0, 0);
        backkdrop-filter: blur(10px) !important;
        box-shadow: 0 3px 10px rgb(0 0 0 / 0.2) !important;
    }

    #box {
        background-image: linear-gradient(rgba(2, 18, 83, 0), rgba(181, 177, 246, 0), rgba(2, 18, 83, 0));
        border-color: rgba(0, 0, 0, 0);
    }

    #current_user {
        color: rgb(137, 180, 250);
        font-size: 3vh;
    }

    .list_item_total, .list_item_first, .list_item_second, .list_item_third {
        position: relative;
        transition: transform 0.3s ease-out;
        background-image: linear-gradient(rgba(109, 109, 104, 0), rgba(0, 0, 0, 0));
        font-size: 3vh;
    }

    .list_item_total:hover, .list_item_first:hover, .list_item_second:hover, .list_item_third:hover {
        position: relative;
        z-index: 6000;
        transform: scale(1.1);
        filter: blur(1px);
    }
    #total_grammar_points_div {
        top: 15;
        background-image: linear-gradient(rgba(109, 109, 104, 0), rgba(0, 0, 0, 0)));
        border-color: rgba(0, 0, 0, 0);
        font-family: 'Roboto';
        backdrop-filter : blur(5px);
    }
    `;

    if (window.location.href !== 'https://practiseenglishonline.com/starting_page.php') {
        // Select the element to hide
        var elementToHide = document.querySelector('#total_points_score_list_container');

        // Check if the element exists on the page
        if (elementToHide) {
            // Hide the element
            elementToHide.style.display = 'none';
        }
    }

    document.body.innerHTML = document.body.innerHTML.replace('TOTAL POINTS: ', '');
    document.body.innerHTML = document.body.innerHTML.replace(`
    TOTAL ASSIGNMENT POINTS: `, "");

    var styleElement = document.createElement('style');
    styleElement.type = 'text/css';
    styleElement.innerHTML = customStyles;
    document.head.appendChild(styleElement);

    var currentURL = window.location.href;
})();