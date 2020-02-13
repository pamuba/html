self.addEventListener('message', function(e){
    var files = e.data;
    var buffers = [];

    [].forEach.call(files, function(file){
        var reader = new FileReaderSync();
        buffers.push(reader.readAsArrayBuffer(file));
    });
    postMessage(buffers);
},false);