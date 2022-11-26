const URL = "https://dragon-ball-super-api.herokuapp.com/api/characters";

async function getInfo() {
  const res = await fetch(URL);
  const data = await res.json();
  showInfo(data)
}
getInfo();

function showInfo(array) {
  const containerApp = document.getElementById("contenedor");
  array.forEach((personaje) => {
    const div = document.createElement("div");
    div.setAttribute("class" , "col-12 col-md-6 col-lg-4")
    
   

    const imgUrl = personaje.imageUrl;
    const nombre = personaje.name;
    const specie = personaje.specie;
    const universe = personaje.universe;
    div.innerHTML = ` <div class="card p-5 " style="width: 15rem; height: 30rem">
    <img src="${imgUrl}" class="card-img-top" alt="Foto de ${nombre}" style="height: 20rem;">
    <div class="card-body">
      <p class="card-text">Nombre: ${nombre}</p>
      <p class="card-text"> Especie: ${specie}</p>
      <p class="card-text">Universo: ${universe}</p>
    </div>
  </div>     
</div>`;
    containerApp.append(div);
  });
}






