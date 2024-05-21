import { Client, Account, Databases } from "appwrite";

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('65c83300718bba77eed6');

export const account = new Account(client);
export { ID } from 'appwrite';

//Database
export const database = new Databases(client , "65c837720142bd1cae8d")