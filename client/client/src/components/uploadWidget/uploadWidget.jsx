const CloudinaryUploadWidget = ({ setAvatar }) => {

    const handleUpload = () => {
  
      const widget = window.cloudinary.createUploadWidget(
        {
          cloudName: "dczwggcc9",
          uploadPreset: "Estate",
          multiple: false,
          maxImageFileSize: 2000000,
          folder: "avatars",
        },
  
        (error, result) => {
          if (!error && result.event === "success") {
            setAvatar(result.info.secure_url);
          }
        }
      );
  
      widget.open();
    };
  
    return (
      <button type="button" onClick={handleUpload}>
        Upload Image
      </button>
    );
  };
  
  export default CloudinaryUploadWidget;