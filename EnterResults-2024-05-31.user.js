// ==UserScript==
// @name         EnterResults
// @namespace    http://tampermonkey.net/
// @version      2024-05-31
// @description  try to take over the world!
// @author       You
// @match        https://radius.mathnasium.com/Answer/Index/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=mathnasium.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    const header = document.getElementsByClassName("m-t-md")[1];
    const btn = document.createElement("button")
    btn.innerHTML = "AutoFill";
    btn.onclick = function(){
        const labelzero = document.createElement("label");
        labelzero.innerHTML = "0%";
        const text0 = document.createElement("input");
        const label25 = document.createElement("label");
        label25.innerHTML = "25%";
        const text25 = document.createElement("input");
        const label50 = document.createElement("label");
        label50.innerHTML = "50%";
        const text50 = document.createElement("input");
        const label75 = document.createElement("label");
        label75.innerHTML = "75%";
        const text75 = document.createElement("input");

        const sub = document.createElement("button");
        sub.innerHTML = "Sub";
        header.appendChild(labelzero);
        header.appendChild(text0);
        header.appendChild(label25);
        header.appendChild(text25);
        header.appendChild(label50);
        header.appendChild(text50);
        header.appendChild(label75);
        header.appendChild(text75);
        header.appendChild(sub);
        sub.onclick = function(){
            var fill0 = text0.value.split(",");
            var fill25 = text25.value.split(",");
            var fill50 = text50.value.split(",");
            var fill75 = text75.value.split(",");




            for(let x = 0;x<100;x++){
                //alert("["+x+"].Score")
                var element = document.getElementsByName("Questions["+x.toString()+"].AutoId");
                if(element.length != 0){

                    element[4].checked=true;
                    //alert(x)
                }
            }

            if(fill0.length != 0){


                for(let x = 0;x<fill0.length;x++){
                    //alert("["+x+"].Score")
                    element = document.getElementsByName("Questions["+(parseInt(fill0[x])-1).toString()+"].AutoId");
                    if(element.length != 0){

                        element[0].checked=true;
                        //alert(x)
                    }
                }

            }
            if(fill25.length != 0){


                for(let x = 0;x<fill25.length;x++){
                    //alert("["+x+"].Score")
                    element = document.getElementsByName("Questions["+(parseInt(fill25[x])-1).toString()+"].AutoId");
                    if(element.length != 0){

                        element[1].checked=true;
                        //alert(x)
                    }
                }

            }
            if(fill50.length != 0){


                for(let x = 0;x<fill50.length;x++){
                    //alert("["+x+"].Score")
                    element = document.getElementsByName("Questions["+(parseInt(fill50[x])-1).toString()+"].AutoId");
                    if(element.length != 0){

                        element[2].checked=true;
                        //alert(x)
                    }
                }

            }
            if(fill75.length != 0){


                for(let x = 0;x<fill0.length;x++){
                    //alert("["+x+"].Score")
                    element = document.getElementsByName("Questions["+(parseInt(fill75[x])-1).toString()+"].AutoId");
                    if(element.length != 0){

                        element[3].checked=true;
                        //alert(x)
                    }
                }

            }
        }


    }
    header.appendChild(btn);
})();