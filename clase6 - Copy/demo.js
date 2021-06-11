const SEMANTIC_TAG_NAMES = ["header", "main", "section", "article", "footer", ]

let all = Array.from(document.querySelectorAll("*"))
let head = document.head;
let headChilds = Array.from(head.childNodes).filter(el => el.nodeName !== "#text")
let cssFiles = document.styleSheets;
let title = Array.from(head.childNodes).filter(el => el.nodeName === "TITLE")[0].innerText;

let body = document.body;
let semanticTags = Array.from(all).filter(el => SEMANTIC_TAG_NAMES.includes(el.nodeName.toLowerCase()))
let navTags = Array.from(all).filter(el => el.nodeName === "NAV");
let flexContainers = Array.from(all).filter(el => window.getComputedStyle(el).display == "flex")

console.groupCollapsed("================= Etiqueta <HTML> =================")
    console.log(`El idioma de la etiqueta HTML es ----> ${document.querySelector("html").getAttribute("lang").toUpperCase()}`)
console.groupEnd()

console.groupCollapsed("================= Etiqueta <HEAD> =================")
    console.log("¿Existe la etiqueta <head>? ---->", head != undefined ? "SI" : "NO")
    console.log("¿Tiene alguna etiqueta anidada? ----> ", headChilds)
    console.log(`Existe/n ${cssFiles.length } archivo CSS linkeado/s dentro del <head>:`)
    for(let file of cssFiles) {
        console.log(`   • Link al CSS: ${file.href}`)
    }
    console.log(`Hay un etiqueta <style> dentro del <head>? ----> ${headChilds.filter(el => el.nodeName === "STYLE").length == 0 ? "NO" : "SI"}`)
    console.log(`El <title> de esta página es ----> ${title}`)
console.groupEnd()

console.groupCollapsed("================= Etiqueta <BODY> =================")
    console.log(`Existe/n ${semanticTags.length} etiqueta/s semántica/s:`)
    semanticTags.forEach((el, index, array) => { console.log(el) } )
    console.log(`Existe/n ${2} etiquetas <nav>. Están compuestas de la siguiente manera`)
    navTags.forEach(el => console.log(el))
console.groupEnd()

console.groupCollapsed("================= Clases =================")
    console.log(`Este es un listado de las etiquetas que tienen clases:`)
    all.forEach(el => { if(el.classList != "") console.log(el) })
console.groupEnd()

console.groupCollapsed("================= Flexbox =================")
    console.log(`Existe/n ${flexContainers.length} elemento/s que tiene/n display: flex:`)
    flexContainers.forEach(el => console.log(el))
console.groupEnd()

console.groupCollapsed("================= Media Queries =================")
    let mediaQueries = Array.from(cssFiles).reduce(function(array, media) {
        Array.from(media.rules).forEach(rule => {
            if(rule.conditionText != undefined) {
                array.push(rule.conditionText)
            }
        })
        return array
    }, [])
    console.log(`Total de media queries ---> ${mediaQueries.length}`)
    console.log("Las mismas son las siguientes:")
    mediaQueries.forEach(el => console.log(`   • ${el}`))
console.groupEnd()