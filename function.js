//const profilePictureInput = document.getElementById('profile-picture-input');
//profilePictureInput.addEventListener('change', handleProfilePictureUpload);

function handleProfilePictureUpload(event) {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.addEventListener('load', () => {
    const profilePicturePreview = document.getElementById('profile-picture-preview');
    profilePicturePreview.src = reader.result;
  });
  reader.readAsDataURL(file);
}

