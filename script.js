const url = "https://api.openbrewerydb.org/breweries";

const Container = document.createElement("div");
Container.setAttribute("class","container-fluid")
const h1 = document.createElement("h1");
h1.setAttribute("class","text-center text-info my-3 p-3")
h1.innerText = "Breweries";
Container.appendChild(h1)
const row = document.createElement("div");
Container.append(row);
row.setAttribute("class","row d-flex flex-wrap justify-content-center mb-5")



const breweryData = async ()=>{
    try
    {
    const response = await fetch(url);
    const datas = await response.json();
    datas.forEach(element => {
        const div = document.createElement('div');
        div.setAttribute("class","col-sm-3 col-md-4  border border-secondary m-2 p-3 rounded")
        let website = '';
        if(element.website_url !== null){
            website = element.website_url
        }
        div.innerHTML =  `
        <h2 class="text-warning text-underline">${element.name}</h2>
        <h4 class="my-3">Type : <span class="text-capitalize  text-secondary">${element.brewery_type}</span></h4>
        <address class="text-monospace"><strong>Address :</strong> 
        ${element.street}
        ${element.state}
        ${element.country}<br>
       <strong> Zip Code : </strong> ${element.postal_code}</address>
        <h6>Tel : <a href="#">${element.phone}</a></h6>
        <h6>Website : <a href='${website}'>${website}</a></h6>
        `;
        row.appendChild(div);
    });
}catch(err){
    console.log(err);
}
}
document.body.append(Container);

breweryData();  