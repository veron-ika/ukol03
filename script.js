// console.log('funguju!');


/* ÚKOL 03
Vytvořte si repozitář ze šablon cviceni-dovednosti . V repozitáři najdete zdrojové soubory stránky se třemi posuvníky. Ty ukazují úroveň dovedností v různých oblastech.

Doplňte do stránek JavaScriptový program, který pomocí funkce prompt požadované uživatele vyjádřil svoji úroveň postupně ve všech zobrazených dovednostech jako číslo 0–100. Program pak nastaví posuvníky na stránce odpovídající délce a hodnoty u posuvníků na uživatelem zadaná čísla.
Na samém začátku vašeho programu funguje funkce updateSkill, která bere dva vstupy: textový řetězec představující id prvek a číslo mezi 0–100. Tato funkce při zavolání nastaví posuvník se zadaným id na správnou hodnotu. Použijte tuto funkci ve vašem kódu, abyste nemuseli při nastavování posuvníků psát třikrát po sobě téměř stejný kód.
*/

const backToIndex = document.querySelector("p")
backToIndex.style.textAlign = "center"
backToIndex.style.fontFamily = "arial"
backToIndex.style.fontSize = "28px"

const updateSkill = (skill, urovenZnalosti) => {
    const idSkill = document.getElementById(skill)
    const progress = idSkill.querySelector(".skill__progress");
    const value = idSkill.querySelector(".skill__value");

    progress.style.width = `${urovenZnalosti}%`;
    value.textContent = `${urovenZnalosti} / 100`;
}

const urovenHTML = Number(prompt("Jak vysoká je úroveň vašich znalostí v HTML od 0-100?"))
const urovenCSS = Number(prompt("Jak vysoká je úroveň vašich znalostí v CSS od 0-100?"))
const urovenJS = Number(prompt("Jak vysoká je úroveň vašich znalostí v Javascriptu od 0-100?"))

updateSkill('skill1', urovenHTML);
updateSkill('skill2', urovenCSS);
updateSkill('skill3', urovenJS);
