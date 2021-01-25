var num = 0;

function add(){
    num++;
    console.log("GLOBAL NUM", num)
}

function localScope() {

    num = num + 4;
    console.log("LOCAL_NUM", num)
}

add()
localScope()

const pi = 3.14;
pi = 4.15