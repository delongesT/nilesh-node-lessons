try {
    var t = 90;
    var t5 = 89;

    ///
    if(t5 > 80){
        throw Error("T5 is more than 80")
    }
} catch (failureException){
    console.log(">> failureException ", failureException.message)
}