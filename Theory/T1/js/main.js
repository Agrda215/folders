var c1 = new Decimal(1)
var c2 = new Decimal(1)
var c3 = new Decimal(1)
var c4 = new Decimal(1)
let version = "1.0.0"
var rho = new Decimal(0)
let tau = new Decimal(0)
var cost1 = new Decimal(15)
let expo = new Decimal(1);

function Tick() {
    rho = rho.add(c1.pow(expo).times(c2))
    tau = rho;
}

/**
 * - A define function.
 * 
 * costs than subtract this game.
 * 
 * ## Subtracting
 * when do specting for expample:
 * ```js
 * CostsDefine(new Decimal(10))
 * ```
 * 
 * ## Select Upgrade
 * ```js
 * CostsDefine(cost1)
 * ```
 * 
 * ### Need to active
 * ```html
 * <button id="cost1" class="upgrade">Cost:20</button>
 * ```
 * 
 * ## Create Styles
 * ```css
 * button.myupgrade {
 *   background-color: yellow;
 *   display:block;
 * }
 * ```
 * @param {any} number a define function.
 */
function CostsDefine(number) {
    rho = rho.sub(number)
}

document.getElementById("cost1").onclick = () => {
    if (rho.gte(cost1)) {
        CostsDefine(cost1)
        cost1 = cost1.mul(2)
        c1 = c1.add(1)
        document.getElementById("cn1").innerText = cost1;
    }
}

document.getElementById("mc1").onclick = () =>{
    if (rho.gte(1e25)) {
        CostsDefine(new Decimal(1e25))
        expo = expo.add(0.05)
        document.getElementById("c1expo").style.display = "block";
        document.getElementById("c1expo").innerHTML = expo;
    }
}

document.getElementById("mc2").onclick = () =>{
    if (rho.gte(1e50)) {
        CostsDefine(new Decimal(1e50))
        expo = expo.add(0.05)
        document.getElementById("c1expo").style.display = "block";
        document.getElementById("c1expo").innerHTML = expo;
    }
}

document.getElementById("mc3").onclick = () =>{
    if (rho.gte(1e75)) {
        CostsDefine(new Decimal(1e75))
        expo = expo.add(0.05)
        document.getElementById("c1expo").style.display = "block";
        document.getElementById("c1expo").innerHTML = expo;
    }
}

setInterval(() => {
    document.getElementById("title").innerHTML = "Theory 1:" + rho + " &rho;"
    Tick();
    document.getElementById("rhotau").innerHTML = rho + " &rho;, "  + tau + " &tau;"
}, 1000);

