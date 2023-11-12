

function prepareFile(file){
    let base64File = "";

    const reader = new FileReader()

    reader.readAsDataURL(file)

   reader.onload  = ()=>{
        base64File += reader.result
        // console.log(reader.result)
    }

    reader.onerror = () =>{
        alert()
    }
// console.log(base64File, "ddkl")
    return base64File
}
export const uploadToCloud = async (file)=>{
    // console.log(file)
    // const image = prepareFile(file)
  // console.log(image)
    const data = new FormData();
    data.append("file", file);
    data.append(
      "upload_preset",
      import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET
    );

    data.append("cloud_name", import.meta.env.VITE_CLOUDINARY_CLOUD_NAME);
    data.append("folder", "media");
      // console.log(data)
    try {
        const response = await fetch(
          `${import.meta.env.VITE_CLOUDINARY_URL}`,
          {
            method: "POST",
            body: data,
          }
        );
        const res = await response.json();
        return res
      } catch (error) {
        console.log(error)
      }
}