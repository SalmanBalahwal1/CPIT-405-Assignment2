function searchUniversities() {
    const query = document.getElementById('searchInput').value;
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = "Loading...";
  
    fetch(`http://universities.hipolabs.com/search?name=${query}`)
      .then(response => response.json())
      .then(data => {
        if (data.length === 0) {
          resultsDiv.innerHTML = "<p>No universities found.</p>";
          return;
        }
  
        const html = data.map(univ => `
          <div class="university">
            <h3>${univ.name}</h3>
            <p><strong>Country:</strong> ${univ.country}</p>
            <p><a href="${univ.web_pages[0]}" target="_blank">${univ.web_pages[0]}</a></p>
          </div>
        `).join('');
        resultsDiv.innerHTML = html;
      })
      .catch(error => {
        console.error("Fetch error:", error);
        resultsDiv.innerHTML = "<p>Error fetching data.</p>";
      });
  }
  