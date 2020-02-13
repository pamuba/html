console.log("Started");
for (let i = 0; i < 2000000000; i++) {
    var j = i;
}
postMessage("Completed "+j+" iterations");
console.log("Ended");
