
console.log("============ Random_learn ============")
function Calculate(width, height) {
    value = width * height;
    // console.log(value);
    return value;
};
function alex(a, b) {
    // this.krushna1(c, d);
    let c = 4;
    let e = 7;
    console.log(Calculate(c, e));
    document.getElementById("Results").innerHTML = Calculate(c, e);
    return { c, e };


    // document.innerHTML(sum)
    // this.krushna1(2,3);
}

const k = 12;
var f = 14;
const z = 10;
let b = 89; //global declare


function alex2() {
    let d = 66;
    let f = 45;
    console.log(this)
    var obj = alex(d, f);
    console.log("obj", obj);
    console.log(alex(d, f));
    var str = JSON.stringify(alex(d, f));
    console.log(str);
    //Variables
    let c = "I am krush"
    e = c + " Mahapatra";
    g = e;
    let i = 55;
    let z = i;
    // h;
    console.log("g", g)

    let k = 11;

    //Var can be access inside the function even though it got declared outside the function
    var str = "asdsafirstline\n\t\\Secondline\nThirdline\n\r\n\\fsad"
    console.log(str)
    console.log("str length", str.length)
    console.log("str firstvalue", str[str.length - 1])



    //DataTypes

    document.getElementById("Results_2").innerHTML = "global declare=" + d;

    // document.getElementById("Results_2").textContent = z;

    // document.getElementById("Results_2").textContent = g;

}
// var x = krushna1(4, 5);
// console.log(x)

// document.write(x);
// let x = getRectArea(4,5);
// console.log(alex(4, 5))
// Expected output: 12

var element = document.getElementById("myElement");
element.innerHTML = "This Line is first Priority" + "</br>" + "Body line 1" + "<br>" + "< br >" + "<br>" + "body Line 2" + "<br>" + "body line 3" + "<br>";

var functionName = log_console();

const sadasdsa = 'alexx'
function teachingPromise() {
    let user = true;
    return new Promise((resolve, reject) => {
        if (user) {
            resolve
                (sadasdsa)

        } else {
            reject(console.log("failed"))
        }

    })
}


teachingPromise().then((message) => {
    console.log("message", message);
}).catch((error) => {
    console.log(error.message)
})

