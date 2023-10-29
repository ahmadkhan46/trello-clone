import { storage } from "@/appwrite"

const getUrl = async (image: Image) => {
    const url = storage.getFilePreview(image.bucketID, image.fieldID)
    console.log(url);
    return url;
}

export default getUrl