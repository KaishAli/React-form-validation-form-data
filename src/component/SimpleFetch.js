export async function SimpleFetch(page = 1, itemsPerPage = 10) {
    // try {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const apiData = await fetch(`https://jsonplaceholder.typicode.com/photos?_start=${start}&_end=${end}`);
    if (!apiData.ok) {
        throw new Error('Invalid response');
    }
    const response = await apiData.json();
    return response;
}

// export default SimpleFetch;
