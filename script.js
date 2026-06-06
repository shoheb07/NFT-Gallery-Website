const nfts = [

{
name:"Crypto Punk #101",
image:"https://via.placeholder.com/300"
},

{
name:"Bored Ape #202",
image:"https://via.placeholder.com/300"
},

{
name:"Pixel NFT #303",
image:"https://via.placeholder.com/300"
}

];

const gallery =
document.getElementById(
"gallery"
);

function displayNFTs(data){

gallery.innerHTML = "";

data.forEach(nft => {

gallery.innerHTML += `

<div class="card">

<img src="${nft.image}">

<h3>${nft.name}</h3>

</div>

`;

});
}

displayNFTs(nfts);

document.getElementById(
"search"
).addEventListener(
"input",
function(){

const value =
this.value.toLowerCase();

const filtered =
nfts.filter(nft =>
nft.name
.toLowerCase()
.includes(value)
);

displayNFTs(filtered);

});
