const newFormHandler = async (event) => {
  event.preventDefault();

  const image = document;

  if (image) {
    const response = await fetch(`/api/images/upload`, {
      method: "POST",
      body: JSON.stringify({ image }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("Failed to create project");
    }
  }
};

async function uploadFile() {
  let formData = new FormData();
  formData.append("image", fileupload.files[0]);
  const response = await fetch("/api/images/upload", {
    method: "POST",
    body: formData,
  });

  if (response.ok) {
    $("#successModal").modal('show');
  setTimeout(function() {
    window.location.reload()
  },3000);
  } else {
    alert("Please upload an image first");
  }
};

async function deleteImage(event) {
  const id = event.target.getAttribute("data-imageId")
  console.log(id)
  const response = await fetch(`/api/images/${id}`,{
    method: "DELETE",
  });

  if (response.ok) {
    await window.location.reload()
  } else {
    alert("Bad Error")
  }
};