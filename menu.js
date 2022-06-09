//creation variables
let menu = document.createElement("ul")
let title = document.getElementsByClassName("title")[0]
let enTete = document.getElementById("entete")
let titleH = document.getElementById("titleH")
let total = []
//style du menu fixe
titleH.style.backgroundColor = "blue"
titleH.style.color = "white"
titleH.style.padding = "10px"
enTete.appendChild(menu)
title.innerHTML = "Javascript DOM"
title.style.textAlign = "center"
menu.style.listStyleType = "none"
menu.style.display = "flex"
menu.style.flexWrap = "wrap"

//fonction pour créer le nombre de li qu'on veut
function createElementLi(x) {
    let i = 0
    for (i; i < x; i++) {
        let menuItem = document.createElement("li")
        menuItem.innerHTML = "Exercice " + i
        menuItem.style.display = "inline-block"
        menuItem.style.margin = "10px 20px 20px 20px"
        menuItem.style.padding = "10px 0px 0px 10px"
        menuItem.style.minWidth = "320px"
        menuItem.style.minHeight = "30px"
        menuItem.style.color = "blue"
        menuItem.setAttribute("id", "li" + i)
        menu.appendChild(menuItem)
        total.push(menuItem)
        menuItem.onclick = function () {
            let i = 0
            for (i; i < total.length; i++) {
                total[i].style.backgroundColor = "white"
                total[i].style.color = "blue"
            }
            menuItem.style.backgroundColor = "blue"
            menuItem.style.color = "white"
            if (total.indexOf(this) == 0) {
                let PrincipalSect = document.getElementById("sect1")
                PrincipalSect.style.display = "flex"
                PrincipalSect.style.justifyContent = "center"
                let divTotal = document.createElement("div")
                PrincipalSect.replaceChildren(divTotal)
                divTotal.style.backgroundColor = "grey"
                divTotal.style.height = "100%"
                divTotal.style.padding = "30px"
                divTotal.style.width = "100%"

                let divTitle = document.createElement("div")
                divTitle.setAttribute("class", "bg-success")
                let divTitleH = document.createElement("h1")
                divTitleH.innerHTML = "le titre modifié"
                divTitleH.style.color = "red"
                divTitle.style.backgroundColor = "white"
                divTitle.appendChild(divTitleH)
                divTotal.appendChild(divTitle)

                let textP = document.createElement("p")
                textP.innerHTML = "list de propriété et méthode à retrouver dans la documentation:"
                divTotal.appendChild(textP)
                let ulTxt = document.createElement("ul")
                let liTxt1 = document.createElement("li")
                let liTxt2 = document.createElement("li")
                let liTxt3 = document.createElement("li")
                let liTxt4 = document.createElement("li")
                let liTxt5 = document.createElement("li")
                let liTxt6 = document.createElement("li")
                liTxt1.innerText = "innerTxt"
                liTxt2.innerHTML = "innerHTML"
                liTxt3.innerHTML = "queryselector"
                liTxt4.innerHTML = "queryselecorall"
                liTxt5.innerHTML = "style"
                liTxt6.innerHTML = "classlist"
                divTotal.appendChild(ulTxt)
                ulTxt.appendChild(liTxt1)
                ulTxt.appendChild(liTxt2)
                ulTxt.appendChild(liTxt3)
                ulTxt.appendChild(liTxt4)
                ulTxt.appendChild(liTxt5)
                ulTxt.appendChild(liTxt6)

                let textp2 = document.createElement("p")
                let textp3 = document.createElement("p")
                let textp4 = document.createElement("p")
                textp2.innerText = "changer le contenu H2"
                textp3.innerText = "changer la couleur H2"
                textp4.innerText = "ajout d'une classe"
                divTotal.appendChild(textp2)
                divTotal.appendChild(textp3)
                divTotal.appendChild(textp4)


            }
            else if (total.indexOf(this) == 1) {
                let PrincipalSect = document.getElementById("sect1")
                PrincipalSect.style.display = "flex"
                PrincipalSect.style.justifyContent = "center"
                let divTotal = document.createElement("div")
                PrincipalSect.replaceChildren(divTotal)
                divTotal.style.backgroundColor = "grey"
                divTotal.style.height = "100%"
                divTotal.style.padding = "30px"
                divTotal.style.width = "100%"
                let txt = document.createElement("p")
                txt.innerHTML = "Mettre un écouteur  dévénement sur les boutons nav et changer le panel en conséquence"
                divTotal.appendChild(txt)
            }
            else if (total.indexOf(this) == 2) {
                let PrincipalSect = document.getElementById("sect1")
                PrincipalSect.style.display = "flex"
                PrincipalSect.style.justifyContent = "center"
                let divTotal = document.createElement("div")
                PrincipalSect.replaceChildren(divTotal)
                divTotal.style.backgroundColor = "grey"
                divTotal.style.height = "100%"
                divTotal.style.padding = "30px"
                divTotal.style.width = "100%"
                let title = document.createElement("h1")
                divTotal.appendChild(title)
                title.innerHTML = "welcome inconnu"
                let txt = document.createElement("p")
                txt.innerHTML = "écriver dans l'input ci-dessous le nom de la personne que vous voulez accueillir lorsque vous cliquez sur le bouton go le nom s'affiche"
                divTotal.appendChild(txt)
                let inputN = document.createElement("input")
                let btnN = document.createElement("button")
                divTotal.appendChild(inputN)
                btnN.innerHTML = 'GO'
                divTotal.appendChild(btnN)
                btnN.addEventListener("click", () => {
                    title.innerHTML = "welcome " + inputN.value
                })
            }
            else if (total.indexOf(this) == 3) {
                let PrincipalSect = document.getElementById("sect1")
                PrincipalSect.style.display = "flex"
                PrincipalSect.style.justifyContent = "center"
                let divTotal = document.createElement("div")
                PrincipalSect.replaceChildren(divTotal)
                divTotal.style.backgroundColor = "grey"
                divTotal.style.height = "100%"
                divTotal.style.padding = "30px"
                divTotal.style.width = "100%"
                let title = document.createElement("h1")
                title.innerHTML = "Déplacer les éléments"
                divTotal.appendChild(title)
                let boxGD = document.createElement("div")
                let boxG = document.createElement("div")
                let boxD = document.createElement("div")

                let boxChange = document.createElement("div")
                boxChange.style.backgroundColor = "red"
                boxChange.style.height = "100px"
                boxChange.style.width = "100px"
                boxG.appendChild(boxChange)

                let divBtn = document.createElement("div")
                divBtn.style.display = "flex"
                divBtn.style.justifyContent = "center"
                divBtn.style.flexDirection = "column"
                divBtn.style.alignItems = "center"
                let affichage = document.createElement("div")
                let total = 0
                affichage.innerHTML = total
                let btnChange = document.createElement("button")
                btnChange.innerHTML = "Change"
                boxGD.style.display = "flex"
                boxGD.style.justifyContent = "center"

                boxG.style.height = "350px"
                boxG.style.display = "flex"
                boxG.style.justifyContent = "center"
                boxG.style.alignItems = "center"
                boxG.style.width = "700px"
                boxG.style.margin = "20px"
                boxG.style.backgroundColor = "blue"

                boxD.style.display = "flex"
                boxD.style.justifyContent = "center"
                boxD.style.alignItems = "center"
                boxD.style.height = "350px"
                boxD.style.margin = "20px"
                boxD.style.width = "700px"
                boxD.style.backgroundColor = "blue"

                divTotal.appendChild(boxGD)
                boxGD.appendChild(boxG)
                boxGD.appendChild(boxD)
                divTotal.appendChild(divBtn)
                divBtn.appendChild(btnChange)
                divBtn.appendChild(affichage)
                btnChange.addEventListener("click", () => {
                    total++
                    affichage.innerHTML = total
                    if(boxG.children[0] != undefined){
                        boxG.removeChild(boxChange)
                        boxD.appendChild(boxChange)
                    }
                    else{
                        boxD.removeChild(boxChange)
                        boxG.appendChild(boxChange)

                    }
                })

            }
            else if (total.indexOf(this) == 4) {
                let PrincipalSect = document.getElementById("sect1")
                PrincipalSect.style.display = "flex"
                PrincipalSect.style.justifyContent = "center"
                let divTotal = document.createElement("div")
                PrincipalSect.replaceChildren(divTotal)
                divTotal.style.backgroundColor = "grey"
                divTotal.style.height = "100%"
                divTotal.style.padding = "30px"
                divTotal.style.width = "100%"
                let title = document.createElement("h1")
                title.innerHTML = "Générer des éléments du DOM"
                divTotal.appendChild(title)
                let txt = document.createElement("p")
                txt.innerText = "Cliquer sur le bouton ci-dessous pour générer des oeufs"
                let btn = document.createElement("button")
                divTotal.appendChild(btn)
                btn.innerHTML = "ajouter un oeuf"
                let divcentrage = document.createElement("div")
                divTotal.appendChild(divcentrage)
                divcentrage.style.display = "flex"
                divcentrage.style.flexWrap = "wrap"
                btn.addEventListener("click", ()=>{
                    let x = document.createElement("img")
                    divcentrage.appendChild(x)
                    x.setAttribute("src", "egg.ico")
                })
            }
            else if (total.indexOf(this) == 5) {
                let PrincipalSect = document.getElementById("sect1")
                PrincipalSect.style.display = "flex"
                PrincipalSect.style.justifyContent = "center"
                let divTotal = document.createElement("div")
                PrincipalSect.replaceChildren(divTotal)
                divTotal.style.backgroundColor = "grey"
                divTotal.style.height = "100%"
                divTotal.style.padding = "30px"
                divTotal.style.width = "100%"
                let title = document.createElement("h1")
                title.innerHTML = "Création calculatrice"
                let sectitle = document.createElement("h2")
                let secttitle2 = document.createElement("h2")
                sectitle.innerHTML = "Niveau 1"
                secttitle2.innerHTML = "Niveau 2"
                let label1 = document.createElement("input")
                let label2 = document.createElement("input")
                let btn = document.createElement("button")
                let label = document.createElement("label")
                btn.innerHTML = "="
                label1.style.margin = "10px"
                label2.style.margin = "10px"
                divTotal.appendChild(title)
                divTotal.appendChild(sectitle)
                divTotal.appendChild(label1)
                divTotal.appendChild(label2)
                divTotal.appendChild(btn)
                divTotal.appendChild(label)
                divTotal.appendChild(secttitle2)
                btn.addEventListener("click",()=>{
                    label.innerHTML= parseInt(label1.value) + parseInt(label2.value)
                })




                //-----------------------------------------------------------------------------------------CALCULETTE -------------------------------------------------------------------------------------------------

                let divCalculette = document.createElement("div")
                let labelCalculette = document.createElement("label")
                let divtop = document.createElement("div")
                labelCalculette.innerHTML = ""
                let input = document.createElement("input")
                divtop.appendChild(labelCalculette)
                divtop.appendChild(input)
                input.style.height = "40px"
                input.style.width = "300px"
                divCalculette.style.backgroundColor = "#272727"
                divCalculette.style.width = "300px"
                divCalculette.style.height = "400px"
                divCalculette.style.display = "flex"
                divCalculette.style.flexWrap = "wrap"
                divTotal.appendChild(divCalculette)
                divCalculette.appendChild(divtop)
                labelCalculette.style.color = "white"
                
                let btn0 = document.createElement("button")
                let btn1 = document.createElement("button")
                let btn2 = document.createElement("button")
                let btn3 = document.createElement("button")
                let btn4 = document.createElement("button")
                let btn5 = document.createElement("button")
                let btn6 = document.createElement("button")
                let btn7 = document.createElement("button")
                let btn8 = document.createElement("button")
                let btn9 = document.createElement("button")
                let plus = document.createElement("button")
                let moins = document.createElement("button")
                let fois = document.createElement("button")
                let divise = document.createElement("button")
                let toucheC = document.createElement("button")
                let egal = document.createElement("button")
                btn0.innerHTML = "0"
                btn1.innerHTML = "1"
                btn2.innerHTML = "2"
                btn3.innerHTML = "3"
                btn4.innerHTML = "4"
                btn5.innerHTML = "5"
                btn6.innerHTML = "6"
                btn7.innerHTML = "7"
                btn8.innerHTML = "8"
                btn9.innerHTML = "9"
                plus.innerHTML = "+"
                moins.innerHTML = "-"
                fois.innerHTML = "*"
                divise.innerHTML = "/"
                toucheC.innerHTML = "C"
                egal.innerHTML = "="
                                
                btn1.style.height = "50px"
                btn1.style.margin = "10px"
                btn1.style.width = "50px"
                divCalculette.appendChild(btn1)
                btn2.style.height = "50px"
                btn2.style.margin = "10px"
                btn2.style.width = "50px"
                divCalculette.appendChild(btn2)
                btn3.style.height = "50px"
                btn3.style.margin = "10px"
                btn3.style.width = "50px"
                divCalculette.appendChild(btn3)
                plus.style.height = "50px"
                plus.style.margin = "10px"
                plus.style.width = "50px"
                divCalculette.appendChild(plus)
                btn4.style.height = "50px"
                btn4.style.margin = "10px"
                btn4.style.width = "50px"
                divCalculette.appendChild(btn4)
                btn5.style.height = "50px"
                btn5.style.margin = "10px"
                btn5.style.width = "50px"
                divCalculette.appendChild(btn5)
                btn6.style.height = "50px"
                btn6.style.margin = "10px"
                btn6.style.width = "50px"
                divCalculette.appendChild(btn6)
                moins.style.height = "50px"
                moins.style.margin = "10px"
                moins.style.width = "50px"
                divCalculette.appendChild(moins)
                btn7.style.height = "50px"
                btn7.style.margin = "10px"
                btn7.style.width = "50px"
                divCalculette.appendChild(btn7)
                btn8.style.height = "50px"
                btn8.style.margin = "10px"
                btn8.style.width = "50px"
                divCalculette.appendChild(btn8)
                btn9.style.height = "50px"
                btn9.style.margin = "10px"
                btn9.style.width = "50px"
                divCalculette.appendChild(btn9)
                fois.style.height = "50px"
                fois.style.margin = "10px"
                fois.style.width = "50px"
                divCalculette.appendChild(fois)
                toucheC.style.height = "50px"
                toucheC.style.margin = "10px"
                toucheC.style.width = "50px"
                divCalculette.appendChild(toucheC)
                btn0.style.height = "50px"
                btn0.style.margin = "10px"
                btn0.style.width = "50px"
                divCalculette.appendChild(btn0)
                egal.style.height = "50px"
                egal.style.margin = "10px"
                egal.style.width = "50px"
                divCalculette.appendChild(egal)
                divise.style.height = "50px"
                divise.style.margin = "10px"
                divise.style.width = "50px"
                divCalculette.appendChild(divise)

                btn0.addEventListener("click",()=>{
                    input.value += 0
                    labelCalculette.innerHTML += "0"

                })
                btn1.addEventListener("click",()=>{
                    input.value += 1
                    labelCalculette.innerHTML += "1"
                })
                btn2.addEventListener("click",()=>{
                    input.value += 2
                    labelCalculette.innerHTML += "2"
                })
                btn3.addEventListener("click",()=>{
                    input.value += 3
                    labelCalculette.innerHTML += "3"
                })
                btn4.addEventListener("click",()=>{
                    input.value += 4
                    labelCalculette.innerHTML += "4"
                })
                btn5.addEventListener("click",()=>{
                    input.value += 5
                    labelCalculette.innerHTML += "5"
                })
                btn6.addEventListener("click",()=>{
                    input.value += 6
                    labelCalculette.innerHTML += "6"
                })
                btn7.addEventListener("click",()=>{
                    input.value += 7
                    labelCalculette.innerHTML += "7"
                })
                btn8.addEventListener("click",()=>{
                    input.value += 8
                    labelCalculette.innerHTML += "8"
                })
                btn9.addEventListener("click",()=>{
                    input.value += 9
                    labelCalculette.innerHTML += "9"
                })
                toucheC.addEventListener("click",()=>{
                    input.value = ""
                    labelCalculette.innerHTML = ""
                })
                plus.addEventListener("click",()=>{
                    labelCalculette.innerHTML += "+"
                    input.value = ""
                })
                moins.addEventListener("click",()=>{
                    labelCalculette.innerHTML += "-"
                    input.value = ""
                })
                fois.addEventListener("click",()=>{
                    labelCalculette.innerHTML += "*"
                    input.value = ""
                })
                divise.addEventListener("click",()=>{
                    labelCalculette.innerHTML += "/"
                    input.value = ""
                })
                egal.addEventListener("click",()=>{
                    console.log(eval(labelCalculette.textContent));           
                })                
            }
        }
    }
}
createElementLi(6)
//export pour le main.js
export {
    menu,
    title,
    enTete,
    titleH,
}