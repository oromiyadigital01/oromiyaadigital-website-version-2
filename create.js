/* ==========================================
   OROMIYAA DIGITAL
   CREATE MODULE
   Version 1.0
========================================== */

"use strict";

/* ==========================================
   HELPER FUNCTIONS
========================================== */

const $ = (selector) => document.querySelector(selector);

const $$ = (selector) => document.querySelectorAll(selector);

function showNotification(message){

    const notification=document.createElement("div");

    notification.className="od-notification";

    notification.textContent=message;

    document.body.appendChild(notification);

    setTimeout(()=>{

        notification.classList.add("show");

    },100);

    setTimeout(()=>{

        notification.classList.remove("show");

        setTimeout(()=>notification.remove(),300);

    },3000);

}

/* ==========================================
   BUTTON ACTIONS
========================================== */

$$(".btn-primary").forEach(button=>{

    button.addEventListener("click",()=>{

        if(button.textContent.includes("Upload")){

            showNotification("📤 Upload feature coming soon.");

        }

        if(button.textContent.includes("Generate")){

            showNotification("🤖 AI Generator preparing...");

        }

    });

});

console.log("Create Module Loaded");/* ==========================================
   DRAG & DROP UPLOAD
========================================== */

const dropArea = document.querySelector(".upload-drop-area");
const fileInput = document.querySelector("#videoUpload");

if (dropArea && fileInput) {

    ["dragenter","dragover"].forEach(eventName => {

        dropArea.addEventListener(eventName, e => {

            e.preventDefault();

            dropArea.classList.add("dragging");

        });

    });

    ["dragleave","drop"].forEach(eventName => {

        dropArea.addEventListener(eventName, e => {

            e.preventDefault();

            dropArea.classList.remove("dragging");

        });

    });

    dropArea.addEventListener("click", () => {

        fileInput.click();

    });

}

/* ==========================================
   VIDEO PREVIEW
========================================== */

const preview = document.querySelector("#videoPreview");

if(fileInput && preview){

    fileInput.addEventListener("change",()=>{

        const file=fileInput.files[0];

        if(!file) return;

        preview.src=URL.createObjectURL(file);

        preview.load();

        showNotification("🎥 Video selected successfully.");

    });/* ==========================================
   UPLOAD PROGRESS DEMO
========================================== */

const progressBar = document.querySelector(".upload-progress-fill");
const uploadBtn = document.querySelector(".start-upload");

if(uploadBtn && progressBar){

    uploadBtn.addEventListener("click",()=>{

        let progress = 0;

        const timer = setInterval(()=>{

            progress += 5;

            progressBar.style.width = progress + "%";

            if(progress >= 100){

                clearInterval(timer);

                showNotification("✅ Upload Completed!");

            }

        },150);

    });/* ==========================================
   AUTO SAVE DRAFT
========================================== */

const titleInput = document.querySelector("#videoTitle");
const captionInput = document.querySelector("#videoCaption");

function saveDraft(){

    if(titleInput){

        localStorage.setItem("creator_title",titleInput.value);

    }

    if(captionInput){

        localStorage.setItem("creator_caption",captionInput.value);

    }

}

function loadDraft(){

    if(titleInput){

        titleInput.value = localStorage.getItem("creator_title") || "";

    }

    if(captionInput){

        captionInput.value = localStorage.getItem("creator_caption") || "";

    }

}

loadDraft();

if(titleInput){

    titleInput.addEventListener("input",saveDraft);

}

if(captionInput){

    captionInput.addEventListener("input",saveDraft);

}/* ==========================================
   DARK MODE
========================================== */

const themeBtn = document.querySelector(".theme-toggle");

if(themeBtn){

    themeBtn.addEventListener("click",()=>{

        document.body.classList.toggle("dark-mode");

        localStorage.setItem(

            "theme",

            document.body.classList.contains("dark-mode")

            ? "dark"

            : "light"

        );

    });

}

if(localStorage.getItem("theme")==="dark"){

    document.body.classList.add("dark-mode");

}/* ==========================================
   PAGE READY
========================================== */

window.addEventListener("load",()=>{

    showNotification("🎬 Welcome to Creator Studio");

});/* ==========================================
   AI CAPTION GENERATOR
========================================== */

const captionBtn = document.querySelector("#generateCaption");
const captionBox = document.querySelector("#videoCaption");

const captions = [

"🎥 Welcome to Oromiyaa Digital!",

"🚀 Learn • Create • Earn",

"💚 Inspire the World with Your Talent",

"🌍 Build Your Future Today"

];

if(captionBtn && captionBox){

    captionBtn.addEventListener("click",()=>{

        const random = Math.floor(Math.random()*captions.length);

        captionBox.value = captions[random];

        showNotification("🤖 AI Caption Generated");

    });

}/* ==========================================
   AI HASHTAGS
========================================== */

const hashtagBtn = document.querySelector("#generateHashtags");
const hashtagBox = document.querySelector("#hashtags");

const hashtags = [

"#OromiyaaDigital",

"#Learn",

"#Create",

"#Earn",

"#Technology",

"#AI",

"#Education",

"#Africa"

];

if(hashtagBtn && hashtagBox){

    hashtagBtn.addEventListener("click",()=>{

        hashtagBox.value = hashtags.join(" ");

        showNotification("🏷 Hashtags Ready");

    });

}/* ==========================================
   SCHEDULE PUBLISH
========================================== */

const publishDate = document.querySelector("#publishDate");

if(publishDate){

    publishDate.min = new Date().toISOString().split("T")[0];

}/* ==========================================
   COLLABORATION
========================================== */

const inviteBtn = document.querySelector("#inviteCreator");

if(inviteBtn){

    inviteBtn.addEventListener("click",()=>{

        showNotification("👥 Collaboration invitation sent.");

    });

}/* ==========================================
   DASHBOARD COUNTER
========================================== */

document.querySelectorAll(".counter").forEach(counter=>{

    const target = Number(counter.dataset.target);

    let value = 0;

    const timer = setInterval(()=>{

        value += Math.ceil(target/60);

        if(value>=target){

            value=target;

            clearInterval(timer);

        }

        counter.textContent=value;

    },30);

});
