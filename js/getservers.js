const db = firebase.firestore();
db.collection("servers").orderBy("members", "desc").limit(10)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          createcard(doc);
          
        });
    }
)
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
    db.collection("servers").orderBy("time", "desc").limit(10)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          createcardt(doc);
          
        });
    }
)
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
function createcard(doc){
    /*
    <div class="card">
                      <div class="card-header">
                        <img src="https://cdn.discordapp.com/icons/702615054197063722/2df6f7978b73fe179f020981354fa9d9.webp?size=128" alt="rover" />
                      </div>
                      <div class="card-body">
                          <span class="tag">Tets</span>
                        <h4>
                          Serveur de test
                        </h4>
                        <div class="user">
                         <button class="btn btn-primary">Test</button>
                        </div>
                      </div>
                    </div>
    */
   let card = document.createElement('div');
   let cardh = document.createElement('div');
   let img = document.createElement('img');
   let cardb = document.createElement('div');
   let span = document.createElement('span');
   let h4 = document.createElement('h4');
   let user = document.createElement('div');
   let a = document.createElement('a');
   let btn = document.createElement('button');
   card.className = "card";
   cardh.className = "card-header";
   img.src = doc.data().pp;
   cardb.className = "card-body";
   span.className = "tag";
   user.className = "user";
   btn.className = "btn btn-primary spacing";
   span.textContent = doc.data().members;
   h4.textContent = doc.data().name;
   btn.textContent = "Voir";
   a.href = `https://discord.gg/${doc.data().invite}`;
   card.appendChild(cardh);
   cardh.appendChild(img);
   card.appendChild(cardb);
   cardb.appendChild(span);
   cardb.appendChild(h4);
   card.appendChild(user);
   user.appendChild(a);
   a.appendChild(btn);
   document.getElementById('serversco').appendChild(card);
}
function createcardt(doc){
  /*
  <div class="card">
                    <div class="card-header">
                      <img src="https://cdn.discordapp.com/icons/702615054197063722/2df6f7978b73fe179f020981354fa9d9.webp?size=128" alt="rover" />
                    </div>
                    <div class="card-body">
                        <span class="tag">Tets</span>
                      <h4>
                        Serveur de test
                      </h4>
                      <div class="user">
                       <button class="btn btn-primary">Test</button>
                      </div>
                    </div>
                  </div>
  */
 let card = document.createElement('div');
 let cardh = document.createElement('div');
 let img = document.createElement('img');
 let cardb = document.createElement('div');
 let span = document.createElement('span');
 let h4 = document.createElement('h4');
 let user = document.createElement('div');
 let a = document.createElement('a');
 let btn = document.createElement('button');
 card.className = "card";
 cardh.className = "card-header";
 img.src = doc.data().pp;
 cardb.className = "card-body";
 span.className = "tag";
 user.className = "user";
 btn.className = "btn btn-primary spacing";
 span.textContent = doc.data().members;
 h4.textContent = doc.data().name;
 btn.textContent = "Voir";
 a.href = `https://discord.gg/${doc.data().invite}`;
 card.appendChild(cardh);
 cardh.appendChild(img);
 card.appendChild(cardb);
 cardb.appendChild(span);
 cardb.appendChild(h4);
 card.appendChild(user);
 user.appendChild(a);
 a.appendChild(btn);
 document.getElementById('serversti').appendChild(card);
}