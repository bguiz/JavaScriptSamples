
let id = 0;

export function call(url, method, cb) {
    const request = {
        id: ++id,
        jsonrpc: "2.0",
        method: method,
        params: []
    };

    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },        
        body: JSON.stringify(request)
    })
    .then(response => response.json())
    .then(data => cb(null, data))
    .catch(err => cb(err, null));    
}

