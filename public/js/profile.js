
const newFormHandler = async (event) => {
    event.preventDefault();


const image = document


if (image) {
    const response = await fetch(`/api/images/upload`, {
      method: 'POST',
      body: JSON.stringify({ image }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create project');
    }
  }
};

async function uploadFile() {
    let formData = new FormData();           
    formData.append("image", fileupload.files[0]);
    await fetch('/api/images/upload', {
      method: "POST", 
      body: formData
    });    
    alert('The file has been uploaded successfully.');
}

