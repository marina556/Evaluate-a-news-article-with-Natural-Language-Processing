function checkForName(inputText) {
    // console.log("::: Running checkForName :::", inputText);
    // let names = [
    //     "Picard",
    //     "Janeway",
    //     "Kirk",
    //     "Archer",
    //     "Georgiou"
    // ]

    // if(names.includes(inputText)) {
    //     alert("Welcome, Captain!")
    // }

    var req = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/
    return req.test(inputText);
}

export { checkForName }
