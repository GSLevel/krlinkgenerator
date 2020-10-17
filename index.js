var inputThing = document.getElementById('?input')

var inputClan = document.getElementById('clanInput')

var inputIGN = document.getElementById('ignInput')

var getClan = document.getElementById('getClan')

var getIGN = document.getElementById('getIGN')

var animPfps = ["GSLevelYT", "HeroeConKappa", "StremZ", "(っ◔◡◔)っYourMom"]

var clans = ["+1UP", "WYVN", "CSSM"]

var clanImg = document.getElementById('clanImg')

var animspfp = document.createElement('style')

document.head.appendChild(animspfp);
animspfp.innerHTML = `@keyframes level {
  0% {
    background-color: orangered;
  }
  
  50% {
    background-color: yellow;
  }
  
  100% {
    background-color: orangered;
  }
}

@keyframes wyvn {
  0% {
    background-color: red;
  }
  
  50% {
    background-color: black;
  }
  
  100% {
    background-color: red;
  }
}

@keyframes cssm {
  0% {
    background-color: blue;
  }
  
  50% {
    background-color: lightblue;
  }
  
  100% {
    background-color: blue;
  }
}`

inputThing.oninput = () => {
  if(inputThing.value == "Clan" || inputThing.value == "clan") {
    inputClan.style.display = "unset";
    getClan.style.display = "unset";
  } else {
    inputClan.style.display = "none";
    getClan.style.display = "none";
  } 
  
  if(inputThing.value == "IGN" || inputThing.value == "ign") {
    inputIGN.style.display = "unset"
    getIGN.style.display = "unset"
  } else if(inputThing.value == "Profile" || inputThing.value == "profile") {
    inputIGN.style.display = "unset";
    getIGN.style.display = "unset";
  } else {
    inputIGN.style.display = "none";
    getIGN.style.display = "none"
  }
  
    if(inputThing.value == "") {
        var link = document.getElementById('link')
   
     link.style.display = "none"
      inputClan.value = "";
      inputIGN.value = "";
  }
  
}

inputIGN.oninput = () => {
    var link = document.getElementById('link')
    link.style.display = "unset"
  link.href = `https://krunker.io/social.html?p=profile&q=${inputIGN.value}`
  link.innerHTML = `${inputIGN.value}`
  localStorage.setItem('IGN', inputIGN.value)
  
        if(link.innerHTML == animPfps[1]) {
    document.body.style.animation = "lup 2s ease-in-out infinite";    
  } else if(link.innerHTML == animPfps[0]) {
    document.body.style.animation = "level 2s ease-in-out infinite";    
  } else if(link.innerHTML == animPfps[2] || link.innerHTML == animPfps[3]) {
    document.body.style.animation = "wyvn 2s ease-in-out infinite"
  } else {
    document.body.style.animation = ""
  }
  
}

inputClan.oninput = () => {
  var link = document.getElementById('link')
  var clanImg = document.querySelector('#clanImg')
  
 var dislink = document.getElementById('Dlink')
  link.style.display = "unset";
  link.href = `https://krunker.io/social.html?p=clan&q=${inputClan.value}`
  link.innerHTML = `${inputClan.value}`
  localStorage.setItem('Clan', inputClan.value)
  
  if(link.innerHTML == clans[0]) {
    document.body.style.animation = "lup 2s ease-in-out infinite";
    dislink.innerHTML = "Join the discord"
    dislink.href = "https://discord.gg/pkemSfB"
  } else if(link.innerHTML == clans[1]) {
    document.body.style.animation = "wyvn 2s ease-in-out infinite";
    dislink.innerHTML = "Join the discord!"
    dislink.href = "https://discord.gg/xC3cuek"
  } else if(link.innerHTML == clans[2]) {
        document.body.style.animation = "cssm 2s ease-in-out infinite"
    dislink.innerHTML = "Join the discord!"
    dislink.href = "https://discord.gg/jJM9BDp"
  } else {
    document.body.style.animation = "";
    dislink.href = "";
    dislink.innerHTML = "";
  } 
}

getIGN.onclick = () => {
  inputIGN.value = localStorage.getItem('IGN');
  link.style.display = "unset"
  
  if(inputIGN.value.length == 1) {
      getIGN.innerHTML = `get rid of the ${inputIGN.value.length}st bit of the ign, and then type it back in`
  } else if(inputIGN.value.length == 2) {
          getIGN.innerHTML = `get rid of the ${inputIGN.value.length}nd bit of the ign, and then type it back in`
  } else if(inputIGN.value.length == 3) {
              getIGN.innerHTML = `get rid of the ${inputIGN.value.length}rd bit of the ign, and then type it back in`
  }
  
                getIGN.innerHTML = `get rid of the ${inputIGN.value.length}th bit of the ign, and then type it back in`

setTimeout(() => {
  getIGN.innerHTML = "Get IGN From before"
}, 4000)
}
  

getClan.onclick = () => {
  inputClan.value = localStorage.getItem('Clan');
  link.style.display = "unset"
  if(inputClan.value.length == 1) {
      getClan.innerHTML = `get rid of the ${inputClan.value.length}st bit of the ign, and then type it back in`
  } else if(inputClan.value.length == 2) {
          getClan.innerHTML = `get rid of the ${inputClan.value.length}nd bit of the ign, and then type it back in`
  } else if(inputClan.value.length == 3) {
              getClan.innerHTML = `get rid of the ${inputClan.value.length}rd bit of the ign, and then type it back in`
  }
  
                getClan.innerHTML = `get rid of the ${inputClan.value.length}th bit of the ign, and then type it back in`

setTimeout(() => {
  getClan.innerHTML = "Get Clan From before"
}, 4000)
  
}

var infoBtn = document.getElementById('moreInfo')

var infoBtnT = document.getElementById('moreInfoT')

infoBtn.onclick = () => {
  var info = document.getElementById('info')
  info.style.display = "block";
  infoBtn.style.display = "none"
  infoBtnT.style.display = "inline-block"
}

infoBtnT.onclick = () => {
  info.style.display = "none"
  infoBtn.style.display = "inline-block"
  infoBtnT.style.display = "none"
}
