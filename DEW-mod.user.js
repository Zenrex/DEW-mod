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

    // Create a new div element
    var newDivElement = document.createElement('div');

    // Set class attribute for the new div element
    newDivElement.setAttribute('class', 'image_icon');

    // Create a new img element
    var newImgElement = document.createElement('img');

    // Set the source attribute of the img element
    newImgElement.src = 'https://github.com/Zenrex/DEW-mod/blob/main/jewshop.png?raw=true';
    newImgElement.style.maxWidth = '64px';
    newImgElement.style.maxHeight = '64px';

    // Append the img element as a child to the new div
    newDivElement.appendChild(newImgElement);

    // Find the parent element where you want to append the new div
    var parentElement = document.getElementById('jewellery_store_button');

    // Check if the parent element exists
    if (parentElement) {
        // Append the new div as a child to the parent element
        parentElement.appendChild(newDivElement);

        // Add the class "adverbs" to the "jewellery_store_button" element
        parentElement.classList.add("adverbs");
    } else {
        // Handle the case where the parent element is not found
        console.error("Parent element not found.");
    }


    // Your custom CSS styles
    var customStyles = `

    body {
        background-image: url('https://images.pling.com/img/00/00/61/26/90/1572780/6402aa69d949d3e0d2acc536db770c91361691c2d9987dcdd27ca4b3535dcbe06c97.jpg') !important;
        background-size: cover !important; /* Optional: Adjust background size */
        font-family: 'Roboto';
    }

    #hello_2, #how_total_list_button, #closing_div_total, #helloUser, #total_points_score_list_title, #total_english_ranking, #show_total_list_button, #davidSatler, #coins_image, #coins_explanation_button, #coin_container {
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

    #adverbs, #jewellery_store_button, #coins_title {
        filter: text-shadow(1px);
        background-image: linear-gradient(rgba(2, 18, 83, 0), rgba(181, 177, 246, 0), rgba(2, 18, 83, 0));
        border-color: rgba(0, 0, 0, 0);
        transition: transform 0.3s ease-out;
        backdrop-filter: blur(10px);
    }
    
    #adverbs:hover, #jewellery_store_button:hover, #coins_title:hover {
        background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0));
        border-color: rgba(0, 0, 0, 0);
        backdrop-filter: blur(10px);
        expand: 1.1;
        box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    }
    
    #jewellery_store_button {
        border-radius: 27px; /* Corrected property name */
        font-family: 'Fredoka One', cursive; /* Added missing semicolon */
        color: rgba(0, 0, 0, 1);
        font-size: 20px;
    }

    #coins_title {
        font-family: 'Fredoka One', cursive;
        position: absolute;
        display: flex;
        left: 10px;
        top: 10px;
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
    TOTAL ASSIGNMENT POINTS: `, "Points: ");

        // Find the elements with the IDs "coins_title" and "box"
    var jewElement = document.getElementById("jewellery_store_button");
    var boxElement = document.getElementById("box");

    // Check if both elements exist
    if (jewElement && boxElement) {
        // Append the custom styles to the box element
        boxElement.appendChild(jewElement);
    } else {
        // Handle the case where one or both of the elements are not found
        console.error("jew or box not found.");
    }

        // Find the element with the ID "coins_title"
    var jew2Element = document.getElementById("jewellery_store_button");

    // Check if the element exists
    if (jew2Element) {
        // Add the class "glow-on-hover" to the element
        jew2Element.classList.add("adverbs");
    } else {
        // Handle the case where the element is not found
        console.error("Element with ID 'jewellery_store_button' not found.");
    }

    var styleElement = document.createElement('style');
    styleElement.type = 'text/css';
    styleElement.innerHTML = customStyles;
    document.head.appendChild(styleElement);

    var currentURL = window.location.href;
})();