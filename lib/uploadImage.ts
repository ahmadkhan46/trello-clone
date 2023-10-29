import { ID, storage } from "@/appwrite"

const uploadImage = async (file: File) => {
    if(!file) return;

    const fileUploaded = await storage.createFile(
        '650ab7848f85bf526652',
        ID.unique(),
        file
    )
    return fileUploaded;
}

export default uploadImage