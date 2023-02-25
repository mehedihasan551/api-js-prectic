const serachAllData = () => {

const inputvalu = document.getElementById('search-value');
const input = inputvalu.value;

// console.log(input)


    const URL =`https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${input}`
    // console.log(URL)
    fetch(URL)
    .then((res) => res.json())
    .then((data)=> sowPlayerData(data.player ));
};


const sowPlayerData = (players) =>{
    // console.log(players);
    const inputvalu = document.getElementById('search-value').value='';
    const container = document.getElementById('player-info')
    container.innerHTML="";
    players.forEach((player)=>{
        // console.log(player);

    const {strThumb,strPlayer,strNationality,idPlayer} = player
        const div = document.createElement ('div');
        div.classList.add("col")
        div.innerHTML=`
        <div class="card ">
          <img src="${strThumb ? strThumb : "https://picsum.photos/200/300"}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${strPlayer}</h5>
            <p>Natnality: ${strNationality}
            
          </div>
        <div class="my-5"> 
        <button  onclick="singLePlayer('${idPlayer
        }')"  type="button" class="btn btn-info ms-3">Details</button>
        <button type="button" class="btn btn-light ms-3 ">Delete</button>
        </div>
        </div>
        `;
        container.appendChild(div)
    })



   
}

const singLePlayer = (id)=>{
    // console.log(id)
    const URL = `https://www.thesportsdb.com/api/v1/json/3/lookupplayer.php?id=${id}`;
    fetch(URL)
    .then((res)=>res.json())
    .then((data)=>showSinglePlyer (data.players[0]))
}

const showSinglePlyer = (data) => {
  console.log(data);
  const {strThumb,strPlayer,strDescriptionEN
  } =data;
    const container = document.getElementById('single-player-details');
    console.log(container );
    
    const div = document.createElement('div');
    div.innerHTML=`
    <div class="card mb-3" w-100 h-100">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${strThumb ? strThumb : "https://picsum.photos/200/300"}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${strPlayer}</h5>
        <p class="card-text">${strDescriptionEN.slice(0, 100) + ".." }</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
`;
container .appendChild(div)
}   


// serachAllData ();