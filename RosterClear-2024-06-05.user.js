// ==UserScript==
// @name         RosterClear
// @namespace    http://tampermonkey.net/
// @version      2024-06-05
// @description  try to take over the world!
// @author       You
// @match        https://radius.mathnasium.com/Attendance/Roster
// @icon         https://www.google.com/s2/favicons?sz=64&domain=mathnasium.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // Your code here...
    const body = document.getElementsByClassName("searchDashInner")[0];

    const btn = document.createElement("button");
    btn.innerHTML = "End Of Day";
    body.appendChild(btn);

    btn.onclick = function(){
        const tpd = document.getElementsByClassName("k-group-cell text-center k-command-cell yellowHighlight");
        if(tpd.length != 0){
            for(var x = 0;x<tpd.length;x++){
                var item = tpd[x].childNodes[2];
                item.click()
                




        }


    }



    }

})();