/******************************************************************************
 *                          Fetch and display users
 ******************************************************************************/

 displayInfo();


function displayInfo() {
    httpGet('/api/toolbox/info')
        .then(response => response.json())
        .then((response) => {
            // Empty the anchor
            var infoAnchor = document.getElementById('info-anchor');
            infoAnchor.innerHTML = '';
            // Set info
            infoAnchor.innerHTML = getInfoEle(response);
        });
};

function getInfoEle(info) {
    return `<div class="info-data"> 
        <div>Hostname: ${info.hostname}</div>
    </div>`
}


/******************************************************************************
 *                        Add, Edit, and Delete Users
 ******************************************************************************/

document.addEventListener('click', function (event) {
    event.preventDefault();
    var ele = event.target;

    if (ele.matches('#crash-app')) {
        crashApp();
    } else if (ele.matches('#use-mem')) {
        useMemory();
    } else if (ele.matches('#use-cpu')) {
        useCpu();
    }

}, false)

function crashApp() {
    httpPost('/api/toolbox/crash').then(() => {
        displayInfo();
    });
}

function useMemory() {
    httpPost('/api/toolbox/usememory').then(() => {
        displayInfo();
    });
}

function useCpu() {
    httpPost('/api/toolbox/usecpu').then(() => {
        displayInfo();
    });
}

function httpGet(path) {
    return fetch(path, getOptions('GET'))
}


function httpPost(path, data) {
    return fetch(path, getOptions('POST', data));
}


function httpPut(path, data) {
    return fetch(path, getOptions('PUT', data));
}


function httpDelete(path) {
    return fetch(path, getOptions('DELETE'));
}


function getOptions(verb, data) {
    var options = {
        dataType: 'json',
        method: verb,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    };
    if (data) {
        options.body = JSON.stringify(data);
    }
    return options;
}

