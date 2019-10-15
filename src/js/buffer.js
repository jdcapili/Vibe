class Buffer {

    constructor(context, urls) {
        this.context = context; // audio context
        this.urls = urls; // path for each audio file stored in an array
        this.buffer = []; // will contain loaded files
    }

    loadSound(url, index) {
        let request = new XMLHttpRequest(); // request for certain file
        request.open('get', url, true); // url is path of file to be loaded
        request.responseType = 'arraybuffer'; // sets response to binary data
        let thisBuffer = this;
        request.onload = function () {
            thisBuffer.context.decodeAudioData(request.response, function (buffer) {  //request.response is the ArrayBuffer
                thisBuffer.buffer[index] = buffer; // store data to buffer array.
                // updateProgress(thisBuffer.urls.length);
                if (index == thisBuffer.urls.length - 1) {
                    thisBuffer.loaded();
                }
            });
        };
        request.send();
    }

    loadAll() {
        this.urls.forEach((url, index) => {
            this.loadSound(url, index);
        })
    }

    loaded() {
        debugger
        // what happens when all the files are loaded
    }

    getSoundByIndex(index) {
        return this.buffer[index];
    }

}

export default Buffer;