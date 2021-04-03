
import { call } from './post.js';

function doPost() {
    const url = document.getElementById('url').value;
    const method = document.getElementById('method').value;
    
    call(url, method, function (err, data) {
        if (err)
            alert(err);
        else
            alert(JSON.stringify(data));
    });
}

window.doPost = doPost;