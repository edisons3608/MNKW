var iframeobj2 = document.getElementById("iframe2");
var count = 0;
async function checkPKexists(timeout = Infinity) {
  let startTime = Date.now();
  return new Promise((resolve) => {
      const intervalId = setInterval(() => {
      if (iframeobj2.contentDocument.getElementsByClassName("pinBlack")[0] && count != 0) {
          clearInterval(intervalId);
          resolve(true);
      } else if (Date.now() - startTime >= timeout * 1000) {
          clearInterval(intervalId);
          resolve(false);
          count += 1;
      }
      }, 100);
  });
  }
checkPKexists().then((result) =>{
if(result){
    /*
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
    */
    var PK = iframeobj2.contentDocument.getElementsByClassName("dwpEntryLink");

    for(var x = PK.length-1;x>=0;x=x-2){
        
        PK[x].parentNode.parentNode.childNodes[15].remove()
        PK[x].parentNode.parentNode.childNodes[10].remove()
        PK[x].parentNode.parentNode.childNodes[9].remove()
    }
}
})


checkPKexists().then((result) =>{
    if(result){
        /*
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
        */
        var PK = iframeobj2.contentDocument.getElementsByClassName("dwpEntryLink");
    
        for(var x = PK.length-1;x>=0;x=x-2){
            
            PK[x].parentNode.parentNode.childNodes[15].remove()
            PK[x].parentNode.parentNode.childNodes[10].remove()
            PK[x].parentNode.parentNode.childNodes[9].remove()
        }
    }
    })