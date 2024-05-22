getxml(fetch_id)
    .then(xml)
    .then(add_uuid => {
        if(add_uuid) {
            return getXml(add_uuid)
                .then(xml)
        }
    })
    .catch(error => {
        console.error("Another problem:", error);
        display.innerHTML = 'Error!' + error.message;
});

document.addEventListener('DOMContentLoaded', function() {
    const fetch_id = document.body.getAttribute('data-uuid');
    const ochre_url = 'https://ochre.lib.uchicago.edu/ochre?uuid=';
    var display = document.getElementById('called-container');
    var table = null;

    function getXml(uuid) {
        return fetch(ochre_url + uuid, {redirect:'follow'})
        .then(output => {
            if(!output.ok) throw new Error(`Request Invalid ${error}`);
            return output.text();
        })
        .then(text_output => {
            const parser = new DOMParser();
            return parser.parseFromString(text_output, 'text/xml');
        });
    }

    function xml(data) {
        const property = data.querySelectorAll('property');
        let add_uuid = '';
    
        if(!table) {
            table = document.createElement('table');
            table.setAttribute('class', 'table table-hover');
            tbody = document.createElement('tbody');
            table.appendChild(tbody);
            display.appendChild(table);
        }
        property.forEach(p => {
            const string = p.querySelector('string');
            const value = p.querySelector('value');
            
            if(string && value) {
                var row = document.createElement('tr');
                var strCell = document.createElement('td');
                var valCell = document.createElement('td');
                strCell.innerHTML = `<strong>${string.textContent}</strong>`;
                valCell.innerHTML = `<strong>${value.textContent}</strong>`;
                row.appendChild(strCell);
                row.appendChild(valCell);
                tbody.appendChild(row);

                if(string.textContent == 'Associated text') {
                    const titlelocation = document.getElementById('api-fetch-title');
                    titlelocation.innerHTML = `<u><strong>~ ${value.textContent} ~</strong></u><br><br>`;
                    add_uuid = value.getAttribute('uuid');
                }
            }
        });
        
        display.appendChild(table);
        return add_uuid;
    }
})

function requestXML(link) {
    var connect = new XMLHttpRequest();
    connect.onreadystatechange = function() {
        if (this.onreadyState == 4 && this.status == 200) {
            parseXML(this.responseXML);
        }
    };
    connect.open('GET', link, true);
    connect.send();
    console.log('requestXML -- OK');
};

function parseXML(sourceXML) {
    var textTitle = sourceXML.getElementsByTagName('identification');
    var title_string = document.createTextNode(textTitle[1].textContent);
    document.getElementById('title').appendChild(title_string);
    
    if ( sourceXML.getElementsByTagName('resource')[0].getAttribute('format') == 'image/jpeg') {
        var img= document.createElement('img');
        var src = link + '&preview';
        img.src = src;
        document.getElementById('preview').appendChild(img);
    }
};