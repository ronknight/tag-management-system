function translateRequest(text) {
    const regex = /<[^>]+>/g;
    const tags = text.match(regex) || [];
    const content = text.split(regex).filter(part => part !== "");
  
    const data = {
      tags: tags,
      content: content
    };
  
    fetch('/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(translatedData => {
      const translatedText = translatedData.translatedContent;
      const paragraph = document.getElementById("text");
      paragraph.innerHTML = translatedText; // Update DOM with translated content
    })
    .catch(error => console.error("Error:", error));
  }
  