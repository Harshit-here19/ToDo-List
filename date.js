exports.getDate = () =>{

    let today = new Date();

    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    return today.toLocaleDateString("en-US", options);
}
exports.getDateH = () =>{

    let today = new Date();

    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    return today.toLocaleDateString("hi-IN", options);
}
exports.getDateJ = () =>{

    let today = new Date();

    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    return today.toLocaleDateString("ja-JP", options);
}
exports.getDay = () =>{

    let today = new Date();

    let options = {
        weekday: "long",
    };

    return today.toLocaleDateString("en-US", options);
}
