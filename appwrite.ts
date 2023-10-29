import { Client, Account, ID, Databases, Storage } from 'appwrite';

const client = new Client()
client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!)
    // .setProject('650ab2ebc6d2a8ff1ad2');

const account = new Account(client)
const databases = new Databases(client)
const storage = new Storage(client)

export {client, account, databases, storage, ID}