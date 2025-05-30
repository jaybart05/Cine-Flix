// For Responsive Header & Navigation bar
function myFunction(x) {
  let navbar = document.querySelector('.navbars');
  navbar.classList.toggle('active');
  x.classList.toggle("change");
}

const cat = {
    Action: " ",
  Comedy: " ",
  Horror: " ",
  Romance: " ",
  Science_Fiction: " "
}

// For Searching Categories and movie titles
const items = {
  //Action
  Ascendants: "CFliximg/action/ASCENDANTS.png",
  Bad_Hit: "CFliximg/action/BAD HIT.png",
  Black_Market_Brawl: "CFliximg/action/BLACK MARKET BRAWL.png",
  Payload: "CFliximg/action/PAYLOAD.png",
  The_Gunfighter: "CFliximg/action/THE GUNFIGHTER.png",
  //Comedy
  Crooks: "CFliximg/comedy/CROOKS.png",
  Pizza_Time: "CFliximg/comedy/PIZZA TIME.png",
  Prego: "CFliximg/comedy/PREGO.png",
  The_Milk_Man: "CFliximg/comedy/THE MILK MAN.png",
  The_Ride: "CFliximg/comedy/THE RIDE.png",
  //Horror
  Catch_Your_Breath: "CFliximg/horror/CATCH YOUR BREATH.png",
  Curve: "CFliximg/horror/CURVE.png",
  Disguise: "CFliximg/horror/DISGUISE.png",
  I_Heard_It_Too: "CFliximg/horror/I HEARD IT TOO.png",
  Skin_Deep: "CFliximg/horror/SKIN DEEP.png",
  //Romance
  Another_Day: "CFliximg/romance/ANOTHER DAY.png",
  Locker_Room: "CFliximg/romance/LOCKER ROOM.png",
  Reappear: "CFliximg/romance/REAPPEAR.png",
  Situationship: "CFliximg/romance/SITUATIONSHIP.png",
  Twin_Flames: "CFliximg/romance/TWIN FLAMES.png",
  //Sci-Fi
  Firmware: "CFliximg/sci-fi/FIRMWARE.png",
  Fore_Men: "CFliximg/sci-fi/FORE-MEN.png",
  Oasis: "CFliximg/sci-fi/OASIS.png",
  Sky_Shelter: "CFliximg/sci-fi/SKY SHELTER.png",
  Zib: "CFliximg/sci-fi/ZIB.png",
};

// Array for all images
const category = [
  //Action
  "CFliximg/action/ASCENDANTS.png",
  "CFliximg/action/BAD HIT.png",
  "CFliximg/action/BLACK MARKET BRAWL.png",
  "CFliximg/action/PAYLOAD.png",
  "CFliximg/action/THE GUNFIGHTER.png",
  //Comedy
  "CFliximg/comedy/CROOKS.png",
  "CFliximg/comedy/PIZZA TIME.png",
  "CFliximg/comedy/PREGO.png",
  "CFliximg/comedy/THE MILK MAN.png",
  "CFliximg/comedy/THE RIDE.png",
  //Horror
  "CFliximg/horror/CATCH YOUR BREATH.png",
  "CFliximg/horror/CURVE.png",
  "CFliximg/horror/DISGUISE.png",
  "CFliximg/horror/I HEARD IT TOO.png",
  "CFliximg/horror/SKIN DEEP.png",
  //Romance
  "CFliximg/romance/ANOTHER DAY.png",
  "CFliximg/romance/LOCKER ROOM.png",
  "CFliximg/romance/REAPPEAR.png",
  "CFliximg/romance/SITUATIONSHIP.png",
  "CFliximg/romance/TWIN FLAMES.png",
  //Sci-Fi
  "CFliximg/sci-fi/FIRMWARE.png",
  "CFliximg/sci-fi/FORE-MEN.png",
  "CFliximg/sci-fi/OASIS.png",
  "CFliximg/sci-fi/SKY SHELTER.png",
  "CFliximg/sci-fi/ZIB.png",
];

// Array for all titles of the movies
const movieName = [
  //Action
  "Ascendants", "Bad Hit", "Black Market Brawl", "Payload", "The Gunfighter",
  //Comedy
  "Crooks", " Pizza Time", "Prego", "The Milk Man", "The Ride",
  //Horror
  "Catch Your Breath", "Curve", "Disguise", "I Heard It Too", "Skin Deep",
  //Romance
  "Another_Day", "Locker_Room", "Reappear", "Situationship", "Twin_Flames",
  //Sci-Fi
  "Firmware", "Fore_Men", "Oasis", "Sky_Shelter", "Zib"
];

//Array for URL/links
const MURL = [
  //Action
  "https://www.youtube.com/embed/YakCuBMlQXQ?si=gxMJqbzFNfNJMWKA",
  "https://www.youtube.com/embed/bazSwSbo9rU?si=lUxU1ytprSlZ43gC",
  "https://www.youtube.com/embed/ou4xmq4C7uI?si=Ui3jwTGeAL1G34HT",
  "https://www.youtube.com/embed/sE2vhrUzS8w?si=f9UvTh7H7lS7ccdo",
  "https://www.youtube.com/embed/TXfltmzRG-g?si=ALEoRrtekPr0O6Bt",
  //Comedy
  "https://www.youtube.com/embed/mHMbh6er9uU?si=dFe7p5wgZ-JWHjjM",
  "https://www.youtube.com/embed/ypkAAYRzauM?si=G_PV6lbzonq10xR4",
  "https://www.youtube.com/embed/zsgBkOaxwcE?si=rbciZUzUEGT7r057",
  "https://www.youtube.com/embed/KUjGL1zz3L8?si=mNAZna_JlzC5zYR2",
  "https://www.youtube.com/embed/bYWISU8FP04?si=Q-KWuqEUDGIxUYuz",
  //Horror
  "https://www.youtube.com/embed/hBj4rcs0AiQ?si=wBOyNAoU3g-BxNyB",
  "https://www.youtube.com/embed/2dD3Fawk4y0?si=Y-d9mN2uB1Izx3In",
  "https://www.youtube.com/embed/zlpfcKffgDA?si=lIcYygXWlZ001jYw",
  "https://www.youtube.com/embed/zlpfcKffgDA?si=lIcYygXWlZ001jYw",
  "https://www.youtube.com/embed/OxRIWBoluzs?si=uLzwUmDFSLsjEYFU",
  //Romance
  "https://www.youtube.com/embed/KitwmpvZ2GU?si=VTyFBxRJIjogZ_OQ",
  "https://www.youtube.com/embed/h1PjJ9_Yd2c?si=AiyHvQGazMp6YjSw",
  "https://www.youtube.com/embed/22l6w8n9iCc?si=lL7zEU4sB45el79t",
  "https://www.youtube.com/embed/qPDpS9SlzQ0?si=UD9g9145n2W8eFYQ",
  "https://www.youtube.com/embed/c2iFiaPr5dY?si=gDbvHTeWqzst4nTU",
  //Sci-Fi
  "https://www.youtube.com/embed/v6HGskhFksM?si=YYWEX1maHiReHPw1",
  "https://www.youtube.com/embed/KPLx_9XyG7A?si=uURw7Dl46aybhSTD",
  "https://www.youtube.com/embed/TSSXdetXyEE?si=Kq_W4E76OoiV0V6X",
  "https://www.youtube.com/embed/Q6SlgxHhlNs?si=GVz-tBI5pWEXVoR8",
  "https://www.youtube.com/embed/tTvLoYHImHA?si=u_gwPxhKlQQ3wM4d"
]

const MDetails = [
  //Action
  "Compelled to run. Forced to fight.",
  "A skilled hitman is given a new performance enhancer before his latest assignment. When this drug causes bizarre and unexpected side effects, the hitman must fight his way out of a dark maze filled with a deadly crime syndicate.",
  "A Treasure-Hunting Mercenary and a Black Market Salesman attempt to sell an artifact that gives its barer god-like powers. When the ring is revealed to be missing right as the deal is made, the assassins will do what they do best.",
  "A high value item the payload must be delivered to a buyer. What is supposed to be a routine exchange turns in to a crazy all out hunt from several parties all looking to get the payload for themselves using whatever means they can.",
  "In the tradition of classic westerns, a narrator sets up the story of a lone gunslinger who walks into a saloon. However, the people in this saloon can hear the narrator and the narrator may just be a little bit bloodthirsty.",
  //Comedy
  "When a liquor store heist goes wrong, two amateur thieves must outsmart the professional crook that had just robbed the same store hours earlier.",
  "A pizza delivery driver goes to the right place at the wrong time when he stumbles into the scene of a hitmans contract killing.",
  "Prego is a short comedy film by Usher Morgan that tells the story of Emily played by Katie Vincent, a young woman confronting a one-night stand played by Taso Mikroulis with the revelation that she is pregnant.",
  "The story of a local English milkman.",
  "When Tommy, a timid Pizza boy, is tasked to do deliveries, his night turns into a wild one. Friendships, romance, and crazy encounters are just some of the side effects of going with the flow.",
  //Horror
  "A shy teenager Andrew is peer pressured by his older brother Mike into playing a game that is said to summon the ghost of the town legend, The Lady Beneath. To disprove his brother and impress a girl at school he reluctantly agrees. The rules of the game are simple, as long as Andrew holds his breath, he is safe from The Lady Beneath. But how long can Andrew hold his breath?",
  "Clinging to a smooth, curved surface high above a sentient abyss, a girl tries to cover the few feet back to safety without losing purchase and falling to her death.",
  "A woman discovers a malevolent presence in her house that can disguise itself as anything.",
  "A young girl and her mother face an evil that is frighteningly familiar.",
  "On the last night of summer in a sleepy seaside town, an insecure young woman finally reveals to her crush exactly how she feels - and what she is.",
  //Romance
  "Sam and Sinéad play out their past, but something is different this time round.",
  "After discovering something she was never meant to see, 16-year-old girl begins to examine her close friendship with three boys from the school football team.",
  "A son wants to cheer up his grieving Mother so decides to recreate a photo of his later Father that she is always held close to her heart.",
  "After two years apart, Grace and Joe are reunited over dinner. But the conversation quickly turns when Grace confronts Joe about their tumultuous relationship.",
  "Two strangers meet in a park only to find out they are not strangers. Their connection goes way beyond the stars.",
  //Sci-Fi
  "1990. 20 years have passed since The Incident. Civilization has collapsed and national borders have been forgotten. The walled-off Alcazar Exclusion Zone has emerged as a small functioning society- a melting pot of survivors from around the world. A young woman and her decommissioned military droid struggle to escape, hoping to find a better life on the outside-- free from the oppression of the forces that keep her there.",
  "Weeks after a mysterious time-compression event violently splices environments from the past and future into the present, two survivors encounter the foreboding figures responsible for the event and experience firsthand their sinister nature.",
  "A desperate survivor races after the most valuable resource in a dangerous and desolate wilderness.",
  "Ryan had already resigned himself to his fate as a hiding soldier in the apocalyptic postwar regime when the wandering stranger Ben crosses his borders. Although everything in Ryan resists, a long-forgotten hope to turn their all tide reawakens in him.",
  "Atonin Zib, granted eternal life by three mysterious figures, must in return carry out deadly tasks to ensure their clandestine control over humanity."
]

/* Functionalities of the Search bar where when the user inputs a recognized letter that the object key haved, the suggestion container  of the titles for every movies will appear **/
function showSuggestions() {
  const input = document.getElementById('search-box').value.toLowerCase();
  var carousel = document.getElementById("carouselExampleSlidesOnly");
  var posterGallery = document.getElementById("gallery");
  const suggestionsBox = document.getElementById('suggestions');
  suggestionsBox.innerHTML = '';
  document.getElementById('item-image').innerHTML = '';

  if (input) {
    const filteredSuggestions = Object.keys(cat).filter(item =>
      item.toLowerCase().includes(input)
    );

    filteredSuggestions.forEach(item => {
      const suggestionDiv = document.createElement('div');
      suggestionDiv.className = 'suggestion';
      suggestionDiv.textContent = item;
      suggestionDiv.onclick = () => {
        document.getElementById('search-box').value = item;
        suggestionsBox.style.display = 'none';
        showImage(item);
      };
      suggestionsBox.appendChild(suggestionDiv);
    });

    suggestionsBox.style.display = 'block';
    carousel.style.display = 'none';
    posterGallery.style.display = 'none';
    document.getElementById("MovieWatch").style.display = "none";
  } else {
    suggestionsBox.style.display = 'none';
    carousel.style.display = 'block';
    posterGallery.style.display = 'block';
  }
}

// function that check what's the Movie or Category of that movie is and show it
function showImage(item) {
  var itemImageDiv = document.getElementById('item-image');

  if (item == "Action") { // For Action Category
    for (let i = 0; i < 5; i++) {
      itemImageDiv.innerHTML += `
      <div class="search-content" onclick="Change('${movieName[i]}', '${category[i]}', '${MDetails[i]}', '${MURL[i]}')">
        <div class="content-box">
        <img src="${category[i]}">
          <div>
            <h1>${movieName[i]}</h1>
            <div class="trigger">
                  <lord-icon class="i" src="https://cdn.lordicon.com/qfwgmyhc.json" trigger="in" delay="1500" stroke="bold"
                  state="in-reveal" colors="primary:#ffffff,secondary:#ffffff">
                </lord-icon>
                <div class="watch">Watch now</div>
            </div>
          </div>
        </div>  
      </div>`;
    }
  } else if (item == "Comedy") { // For Comedy Category
    for (let i = 5; i < 10; i++) {
      itemImageDiv.innerHTML += `
      <div class="search-content" onclick="Change('${movieName[i]}', '${category[i]}', '${MDetails[i]}', '${MURL[i]}')">
        <div class="content-box">
        <img src="${category[i]}">
          <div>
            <h1>${movieName[i]}</h1>
            <div class="trigger">
                  <lord-icon class="i" src="https://cdn.lordicon.com/qfwgmyhc.json" trigger="in" delay="1500" stroke="bold"
                  state="in-reveal" colors="primary:#ffffff,secondary:#ffffff">
                </lord-icon>
                <div class="watch">Watch now</div>
            </div>
          </div>
        </div>  
      </div>`;
    }
  } else if (item == "Horror") { // For Horror Category
    for (let i = 10; i < 15; i++) {
      itemImageDiv.innerHTML += `
      <div class="search-content" onclick="Change('${movieName[i]}', '${category[i]}', '${MDetails[i]}', '${MURL[i]}')">
        <div class="content-box">
        <img src="${category[i]}">
          <div>
            <h1>${movieName[i]}</h1>
            <div class="trigger">
                  <lord-icon class="i" src="https://cdn.lordicon.com/qfwgmyhc.json" trigger="in" delay="1500" stroke="bold"
                  state="in-reveal" colors="primary:#ffffff,secondary:#ffffff">
                </lord-icon>
                <div class="watch">Watch now</div>
            </div>
          </div>
        </div>  
      </div>`;
    }
  } else if (item == "Romance") { // For Romance Category
    for (let i = 15; i < 20; i++) {
      itemImageDiv.innerHTML += `
      <div class="search-content" onclick="Change('${movieName[i]}', '${category[i]}', '${MDetails[i]}', '${MURL[i]}')">
        <div class="content-box">
        <img src="${category[i]}">
          <div>
            <h1>${movieName[i]}</h1>
            <div class="trigger">
                  <lord-icon class="i" src="https://cdn.lordicon.com/qfwgmyhc.json" trigger="in" delay="1500" stroke="bold"
                  state="in-reveal" colors="primary:#ffffff,secondary:#ffffff">
                </lord-icon>
                <div class="watch">Watch now</div>
            </div>
          </div>
        </div>  
      </div>`;
    }
  } else if (item == "Science_Fiction") { // For Sci-Fi Category
    for (let i = 20; i < 25; i++) {
      itemImageDiv.innerHTML += `
      <div class="search-content" onclick="Change('${movieName[i]}', '${category[i]}', '${MDetails[i]}', '${MURL[i]}')">
        <div class="content-box">
        <img src="${category[i]}">
          <div>
            <h1>${movieName[i]}</h1>
            <div class="trigger">
                  <lord-icon class="i" src="https://cdn.lordicon.com/qfwgmyhc.json" trigger="in" delay="1500" stroke="bold"
                  state="in-reveal" colors="primary:#ffffff,secondary:#ffffff">
                </lord-icon>
                <div class="watch">Watch now</div>
            </div>
          </div>
        </div>  
      </div>`;
    }
  }
}

function Change(name, poster, about, source) {
  var Name = name;
  var Poster = poster;
  var About = about;
  var Source = source;
  document.getElementById("carouselExampleSlidesOnly").style.display = "none";
  document.getElementById("gallery").style.display = "none";
  document.getElementById("item-image").style.display = "none";
  document.getElementById("MovieWatch").style.display = "flex";
  document.getElementById("Mdetails").textContent = About;
  document.getElementById("Mtitle").textContent = Name;
  document.getElementById("poster").src = Poster;
  document.getElementById("iframebox").src = Source;
}

let fav = [];
let fv = document.getElementById('iden');
if(fav.length == 0){
  fv.style.display = "flex";
}
function Favo(name, poster, cat) {
  let Name = name;
  let Poster = poster;
  let Category = cat;
  fav.push({ Name, Poster, Category});
  displayFav();
}

function displayFav() {
  let favElement = document.getElementById('favcon');
  favElement.innerHTML = '';
  fav.forEach((item, index) => {
    favElement.innerHTML += `<div class= "flex"><img src = "${item.Poster}" alt="" id="img"><div class="Hs"><h6>${item.Category}</h6><h3>${item.Name}</h3></div> <button onclick="removeFromCart()"><lord-icon
    src="https://cdn.lordicon.com/skkahier.json"
    trigger="hover"
    state="morph-trash-full"
    style="width:30px;height:30px">
</lord-icon></button></div>`;
  });

  document.getElementById("Mnum").value = fav.length;

}

function removeFromCart() {
  fav.splice(this, 1);
  displayFav();
}

function Fav() {
  document.getElementById('fov').style.display = "flex";
}
function Close() {
  document.getElementById('fov').style.display = "none";
}

function Appear() {
  document.getElementById("carouselExampleSlidesOnly").style.display = "block";
  document.getElementById("gallery").style.display = "block";
  document.getElementById("MovieWatch").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
  function handleCommentSubmission() {
    const commentInput = document.getElementById('comment');
    const comment = commentInput.value.trim();

    if (comment) {
      const commentDiv = document.createElement('div');
      commentDiv.classList.add('comment');

      const commentPara = document.createElement('p');
      commentPara.textContent = comment;

      commentDiv.appendChild(commentPara);
      document.getElementById('comments').appendChild(commentDiv);

      commentInput.value = ''; 
    }
  }

  document.getElementById('commentForm').addEventListener('submit', function (event) {
    event.preventDefault();
    handleCommentSubmission();
  });

  document.getElementById('comment').addEventListener('keypress', function (event) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleCommentSubmission();
    }
  });

  const stars = document.querySelectorAll('.star');
  stars.forEach(function (star, index) {
    star.addEventListener('click', function () {
      const rating = parseInt(star.getAttribute('data-value'));

      stars.forEach((s, i) => {
        if (i < rating) {
          s.classList.add('selected');
        } else {
          s.classList.remove('selected');
          
        }
      });
    });
  });
});



