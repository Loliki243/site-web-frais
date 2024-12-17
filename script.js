{\rtf1\ansi\ansicpg1252\paperw11900\paperh16840\margl1440\margr1440\margt1440\margb1440\vieww18540\viewh17280\viewscale100\lin0\rin0
{\papercolor16777215}
{\fonttbl\f0\fnil\fcharset0 HelveticaNeue;}
{\colortbl\red0\green0\blue0;\red255\green255\blue255;}
\pard
{\*\pageHeader Helvetica::12px::right::black::0.5::NO::Header Author: Zoe Appleseed [date] - Page [pagenumber] of [totalpages]}
{\*\pageFooter Helvetica::12px::right::black::0.5::NO::Footer Author: Zoe Appleseed [title] - Page [pagenumber] of [totalpages]}
{\*\background {\shp{\*\shpinst\shpleft0\shptop0\shpright0\shpbottom0\shpfhdr0\shpbxmargin\shpbymargin\shpwr0\shpwrk0\shpfblwtxt1\shpz0\shplid1025{\sp{\sn shapeType}{\sv 1}}{\sp{\sn fFlipH}{\sv 0}}{\sp{\sn fFlipV}{\sv 0}}{\sp{\sn fillColor}{\sv 16777215}}{\sp{\sn fFilled}{\sv 1}}{\sp{\sn lineWidth}{\sv 0}}{\sp{\sn fLine}{\sv 0}}{\sp{\sn bWMode}{\sv 9}}{\sp{\sn fBackground}{\sv 1}}}}}
\fi357\sl288\slmult1\ql
\f0\fs28 \cf0 let panier = [];\
const fraisPaiementPourcentage = 0.13;\
\
function ajouterAuPanier() \{\
    const prixProduit = parseFloat(document.getElementById("product-price").textContent);\
    panier.push(prixProduit);\
\
    mettreAJourPanier();\
\}\
\
function mettreAJourPanier() \{\
    // Calcul du total des produits dans le panier\
    const totalPanier = panier.reduce((acc, prix) => acc + prix, 0);\
\
    // Calcul des frais de paiement\
    const fraisPaiement = totalPanier * fraisPaiementPourcentage;\
\
    // Calcul du total \'e0 payer\
    const totalPayer = totalPanier + fraisPaiement;\
\
    // Mise \'e0 jour de l'interface\
    document.getElementById("prix-total").textContent = totalPanier.toFixed(2);\
    document.getElementById("frais-paiement").textContent = fraisPaiement.toFixed(2);\
    document.getElementById("total-payer").textContent = totalPayer.toFixed(2);\
\}\
\
function finaliserAchat() \{\
    alert("Votre commande a \'e9t\'e9 finalis\'e9e. Total \'e0 payer : " + document.getElementById("total-payer").textContent + " \u8364?.");\
\}\
\
}