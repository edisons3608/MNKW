async function checkElementExists(timeout = Infinity) {
    let startTime = Date.now();
    return new Promise((resolve) => {
      const intervalId = setInterval(() => {
        if (iframeobj2.contentDocument.getElementsByClassName("pinBlack")[0]) {
          clearInterval(intervalId);
          resolve(true);
        } else if (Date.now() - startTime >= timeout * 1000) {
          clearInterval(intervalId);
          resolve(false);
        }
      }, 100);
    });
  }	
	


if (window.self === window.top) {
    document.body.innerHTML = ""

    var iframeobj = document.createElement('iframe');
    iframeobj.name = 'iframe_splitview';
    iframeobj.src = "";
    iframeobj.style = 'top:0;left:51%;width:49%;height:100%;border:0;position:fixed';
    iframeobj.sandbox = "allow-downloads allow-presentation allow-modals allow-same-origin allow-scripts allow-popups allow-forms allow-pointer-lock allow-top-navigation-by-user-activation"
    document.body.style.width = '49%';
    document.body.style.marginRight = '51%';
    document.body.appendChild(iframeobj);

    iframeobj.src = "";

    var iframeobj2 = document.createElement('iframe');
    iframeobj2.name = 'iframe_splitview2';
    iframeobj2.id = "iframe2"
    iframeobj2.src = "";
    iframeobj2.style = 'top:0;right:51%;width:49%;height:100%;border:0;position:fixed';
    iframeobj2.sandbox = "allow-downloads allow-presentation allow-modals allow-same-origin allow-scripts allow-popups allow-forms allow-pointer-lock allow-top-navigation-by-user-activation"
    document.body.style.width = '49%';
    document.body.style.marginLeft = '51%';
    document.body.appendChild(iframeobj2);

    iframeobj2.src = "https://radius.mathnasium.com/AnswerKey/AnswerkeyCheckin";
    
    checkElementExists(10)
    .then((result) => {
        if (result) {
            
            var names = iframeobj2.contentDocument.getElementById("divAlpha")
            var namesSpace = iframeobj2.contentDocument.getElementById("divAlphaClr")
            names.remove()
            namesSpace.remove()
            var elem = iframeobj2.contentDocument.querySelector("[data-field='StudentPkFoAnswerKeys']")

            elem.remove()

            elem = iframeobj2.contentDocument.querySelector("[data-field='StudentWOBAnswerKeys']")
            elem.remove()

            elem = iframeobj2.contentDocument.querySelector("[data-title='Start/End <br ></th>Schoolwork']")
            elem.remove()
            
            var PK = iframeobj2.contentDocument.getElementsByClassName("dwpEntryLink");

            for(var x = PK.length-1;x>=0;x=x-2){
                
                var studentId1 = PK[x].parentNode.parentNode.childNodes[0].innerHTML
                var attendanceId1 = PK[x].parentNode.parentNode.childNodes[2].innerHTML
                var dwpEntryId1 = PK[x].parentNode.parentNode.childNodes[3].innerHTML
                //alert(studentId1+" "+attendanceId1+" "+dwpEntryId1)
                
                var newDWP = iframeobj2.contentDocument.createElement("button")

                newDWP.innerHTML = "DWP";
                newDWP.id = studentId1+" "+attendanceId1+" "+dwpEntryId1;
                function func(studentId,attendanceId,dwpEntryId){
                    //alert(studentId+" "+attendanceId+" "+dwpEntryId)
        
                    var getLocal = localStorage.getItem(`student_` + studentId);
                    var studentDetails = {};
                    //alert(studentId+" "+attendanceId+" "+dwpEntryId)
                    if (getLocal != undefined && getLocal != null && getLocal != ``) {
                        studentDetails = JSON.parse(getLocal);
                        
                        
                
                        if (window.screen.width >= 700){
                            
                            //const observer = new MutationObserver(modlink);
                            //observer.observe(document.body, {childList: true, attributes: true, subtree: true});
                
                            // Your code here...
                            if (window.self === window.top) {
                                //alert(`/DWP/Index?studentId=` + studentId + `&attendanceId=` + attendanceId + `&dwpEntryId=` + dwpEntryId, `` + studentDetails.StudentName)
                                iframeobj.src = `/DWP/Index?studentId=` + studentId + `&attendanceId=` + attendanceId + `&dwpEntryId=` + dwpEntryId, `` + studentDetails.StudentName
                                //alert(iframeobj.src)
                            }
                
                        }
                    }
                }
                //alert(studentId1+" "+attendanceId1+" "+dwpEntryId1)
                newDWP.addEventListener("click",(event) =>{
                    //alert(studentId+" "+attendanceId+" "+dwpEntryId)
                    var splitstring = event.target.id.split(" ");
                    //alert(splitstring[0]+" "+splitstring[1]+" "+splitstring[2])
                    func(splitstring[0],splitstring[1],splitstring[2])
                    
                })
                PK[x].parentNode.parentNode.childNodes[15].remove()
                PK[x].parentNode.parentNode.childNodes[10].remove()
                PK[x].parentNode.parentNode.childNodes[9].remove()
                PK[x].replaceWith(newDWP);
            }
            

        }else{
            alert('bypass')
        }
    });

        
    

    
}

