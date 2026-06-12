
  // The width and height of the captured photo. We will set the
  // width to the value defined here, but the height will be
  // calculated based on the aspect ratio of the input stream.
  
  const width = 600; // We will scale the photo width to this
  let height = 0; // This will be computed based on the input stream

  // |streaming| indicates whether or not we're currently streaming
  // video from the camera. Obviously, we start at false.

  let streaming = false;

  // The various HTML elements we need to configure or control. These
  // will be set by the startup() function.


  function photoBtn(){
    var wHash = window.location.hash;
    if (wHash.indexOf('#/persons/person/') === 0 ) {
        photoAppStart({id:'CLX_Root',class: 'photo', token: sessionStorage.getItem('CLX.LoginToken').replaceAll('"','') , idPerson: wHash.split('/')[3] });
        
    } else {
        var photoAppBt = document.getElementById('personPhotoAppBtn');
        if(photoAppBt !== null) {
            document.getElementById('personPhotoAppBtn').remove();
        }
        
    }
  }

  function getString(key) {
    var lang = localStorage.getItem('uiCulture');
    lang = lang.indexOf('fr') >= 0 ? 'fr' : 'de';

    return window.personPhoto.locale[key][lang];
  }


  let video = null;
  let canvas = null;
  let photo = null;
  let startbutton = null;
  let cancelbutton = document.getElementById('cancel');;
  var savePhoto = document.getElementById("savePhoto");
  let moduleDir = window.personPhoto.settings.moduleDir;
  window.personPhoto.cache = [];

  function showViewLiveResultButton() {
    if (window.self !== window.top) {
      // Ensure that if our document is in a frame, we get the user
      // to first open it in its own tab or window. Otherwise, it
      // won't be able to request permission for camera access.
      document.querySelector(".contentarea").remove();
      const button = document.createElement("button");
      button.textContent = "View live result of the example code above";
      document.body.append(button);
      button.addEventListener("click", () => window.open(location.href));
      return true;
    }
    return false;
  }

  function startup() {
    //if (showViewLiveResultButton()) {
      //return;
    //}
    video = document.getElementById("video");
    canvas = document.getElementById("canvas");
    photo = document.getElementById("photo");
    startbutton = document.getElementById("startbutton");
    startbutton.innerHTML = getString('fotoAufnehmen');
    savePhoto.innerHTML = getString('uebernehmen');
    savePhoto.disabled = true;

    document.getElementById('neu').innerHTML = getString('neu');
    document.getElementById('aktuell').innerHTML = getString('aktuell');
    document.getElementById('cancel').innerHTML = getString('abbrechen');

    navigator.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then((stream) => {
        video.srcObject = stream;
        video.play();
      })
      .catch((err) => {
        document.getElementById('error').innerHTML = getString('noWebcam');
        startbutton.classList.add('disabled');
        console.error(`An error occurred: ${err}`);
      });

    video.addEventListener(
      "canplay",
      (ev) => {
        if (!streaming) {
          height = video.videoHeight / (video.videoWidth / width);

          // Firefox currently has a bug where the height can't be read from
          // the video, so we will make assumptions if this happens.

          if (isNaN(height)) {
            height = width / (4 / 3);
          }

          video.setAttribute("width", width);
          video.setAttribute("height", height);
          canvas.setAttribute("width", width);
          canvas.setAttribute("height", height);
          streaming = true;

          
          //var frameBorder = width-(height/4*3)/2
          //console.log(frameBorder);
          //document.getElementsByClassName('frame-left')[0].style.borderLeftWidth = frameBorder;
          //document.getElementsByClassName('frame-right')[0].style.borderLeftWidth = frameBorder;
        }
      },
      false
    );

    startbutton.addEventListener(
      "click",
      (ev) => {
        takepicture();
        ev.preventDefault();
      },
      false
    );

    clearphoto();
  }

  // Fill the photo with an indication that none has been
  // captured.

  function clearphoto() {
    const context = canvas.getContext("2d");
    context.fillStyle = "#AAA";
    context.fillRect(0, 0, canvas.width, canvas.height);

    const data = canvas.toDataURL("image/jpeg");
    photo.setAttribute("src", data);
  }

  // Capture a photo by fetching the current contents of the video
  // and drawing it into a canvas, then converting that to a PNG
  // format data URL. By drawing it on an offscreen canvas and then
  // drawing that to the screen, we can change its size and/or apply
  // other changes before drawing it.

  function takepicture() {
    const context = canvas.getContext("2d");
    if (width && height) {


    var sW = height/4*3;
    var sx = (width-sW)/2;
    canvas.width = sW;
    canvas.height = height;

    context.drawImage(video, sx, 0, sW, height, 0, 0, sW, height);

    //context.drawImage(video, x, y, width, height, 0, 0, 180,240);
    const data = canvas.toDataURL("image/jpeg");
    photo.setAttribute("src", data);
    
    savePhoto.disabled = false;
  
    } else {
      clearphoto();
    }
  }

function close(){
  document.getElementById('personPhotoApp').classList.add('d-none');
}

function photoAppStart(options){

  startup();
  let id = 'personPhotoAppBtn'
  var element = document.getElementById(options.id);
  let btn = document.createElement('button');
  btn.id = id;
  btn.innerHTML = getString('fotoAufnehmen');
  btn.type = 'button';
  btn.name = "formBtn";
  btn.classList.add(options.class);
  btn.classList.add('btn');
  btn.classList.add('btn-primary');
  btn.addEventListener("click", function () {
    startPerson(options.idPerson,options.token);
  });
  if (document.getElementById(id) === null ) {
    element.appendChild(btn);
  }
  document.getElementById(id).addEventListener("click", function () {
    startPerson(options.idPerson,options.token);
  });
     
}

function startPerson(idperson,token){
  window.personPhoto.currentToken = token;
  
  var currentPhotoUrl = document.getElementById('currentPhoto');

  var url = 'url('+window.personPhoto.settings.apiUrl+'/Files/personPictures/'+idperson+'?token='+token+'&v='+Math.floor(Math.random() * 100)+'),url('+moduleDir+'/avatar-placeholder.png)';
  currentPhotoUrl.style.background = url;
  //console.log(window.personPhoto.cache);
  
  if(window.personPhoto.currentIdPerson !== idperson && window.personPhoto.cache.filter(p => p.id == idperson).length === 0) {

    getData(window.personPhoto.settings.apiUrl+'/Persons/'+idperson+'?fields=FullName', token)
    .then((data) => {
      document.getElementById('fullnamePerson').innerHTML = data.FullName;
      window.personPhoto.cache.push({id: data.Id, fullname: data.FullName }) 
      //console.log(data);
    });
  } else {
    var cachePerson = window.personPhoto.cache.filter(p => p.id == idperson)[0];
    document.getElementById('fullnamePerson').innerHTML = cachePerson === undefined ? null : cachePerson.fullname;
    }
 
    window.personPhoto.currentIdPerson = idperson;
    document.getElementById('personPhotoApp').classList.remove('d-none');
  }


  savePhoto.addEventListener(
    "click",
    (ev) => {
      savePhotoToAddInfo();
      ev.preventDefault();
    },
    false
  );

  function savePhotoToAddInfo(){
    var idPerson = window.personPhoto.currentIdPerson;
    var token = window.personPhoto.currentToken;
    var filename = idPerson+'.jpg'
    var raw = {
      "AdditionalInformation": {
        "ObjectId": idPerson,
        "ObjectTypeId": 3,
        "Designation": "Photo"
      },
      "FileStreamInfo": {
        "Filename": filename
      }
    };
    postPhoto(window.personPhoto.settings.apiUrl+'/AdditionalInformations/files',token,raw, photo.src);

  }

  function base64ToArrayBuffer(base64) {
      var binaryString = atob(base64);
      var bytes = new Uint8Array(binaryString.length);
      for (var i = 0; i < binaryString.length; i++) {
          bytes[i] = binaryString.charCodeAt(i);
      }
      return bytes.buffer;
  }


  async function getData(url, token) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'CLX-Authorization': 'token_type=urn:ietf:params:oauth:token-type:jwt-bearer, access_token='+token
      }
      //body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

  async function postPhoto(url, token, data, fileUrl) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'CLX-Authorization': 'token_type=urn:ietf:params:oauth:token-type:jwt-bearer, access_token='+token

      },
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });

    if (response.status === 201){
      var location = response.headers.get('location');
      var urlPut = window.personPhoto.settings.apiUrl.split('/');
      urlPut = urlPut[0] + '//' + urlPut[2];
      var arraybuffer = base64ToArrayBuffer(fileUrl.substring(fileUrl.indexOf('base64,')+7,fileUrl.length));
      var putResponse = await fetch(urlPut+location, {
        method: 'PUT', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'CLX-Authorization': 'token_type=urn:ietf:params:oauth:token-type:jwt-bearer, access_token='+token
        },
        body: arraybuffer // body data type must match "Content-Type" header
      });

      if(putResponse.status >= 400){
        window.alert(getString('errorZusatzInfoRecht'));
      }

    } else {
      window.alert(response.json())
    }

    savePhoto.disabled = true;

    //update personPictures...
    for (var item of document.getElementsByTagName('img')) {

			if(item.src.includes('personPictures') > 0){
					var ps = item.src;
					item.src = "";
					item.src = ps;
      }
    } 

    startPerson(window.personPhoto.currentIdPerson,token);

  }

  function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}

  cancelbutton.addEventListener(
    "click",(ev) => close());

    onhashchange = (event) => {
      photoBtn();
   }
   onload = (event) => {
       setTimeout( function(){
           photoBtn(); 
       } , 4000);
       
   }

