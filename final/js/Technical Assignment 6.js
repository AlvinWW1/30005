document.addEventListener('DOMContentLoaded', () => {
    const uuid = document.getElementById('ochreContainer').getAttribute('data-uuid');
    const baseUrl = "https://ochre.lib.uchicago.edu/ochre?uuid=";
    const apiUrl = `${baseUrl}${uuid}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(data, 'application/xml');
            return xmlDoc;
        })
        .then(xml => updatePageContent(xml))
        .catch(error => {
            console.error('Failed to fetch XML:', error);
            document.getElementById('title').textContent = 'Failed to load data';
        });

    function updatePageContent(xml) {
        const titleElement = xml.querySelector('identification');
        if (titleElement) {
            document.getElementById('title').textContent = titleElement.textContent;
        } else {
            document.getElementById('title').textContent = 'Title not available';
        }

        const properties = xml.getElementsByTagName('property');
        const tableBody = document.getElementById('ochreTableBody');
        tableBody.innerHTML = ''; // Clear previous entries

        Array.from(properties).forEach(prop => {
            const tr = document.createElement('tr');
            const property = document.createElement('td');
            property.textContent = prop.children[0].textContent;
            tr.appendChild(property);

            const value = document.createElement('td');
            value.textContent = prop.children[1].textContent;
            tr.appendChild(value);

            tableBody.appendChild(tr);
        });

        const resource = xml.querySelector('resource[format="image/jpeg"]');
        if (resource) {
            const imgSrc = apiUrl + "&preview";
            const img = document.createElement('img');
            img.src = imgSrc;
            const previewDiv = document.getElementById('preview');
            previewDiv.innerHTML = ''; // Clear previous entries
            previewDiv.appendChild(img);
        }
    }
});
