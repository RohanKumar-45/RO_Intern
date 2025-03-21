import * as sdk from "node-appwrite";

// Destructure environment variables with default values if necessary
const {
  NEXT_PUBLIC_ENDPOINT: ENDPOINT = "",
  PROJECT_ID = "",
  API_KEY = "",
  DATABASE_ID = "",
  PATIENT_COLLECTION_ID = "",
  DOCTOR_COLLECTION_ID = "",
  APPOINTMENT_COLLECTION_ID = "",
  NEXT_PUBLIC_BUCKET_ID: BUCKET_ID = "",
} = process.env;

// Create and configure the Appwrite client
const client = new sdk.Client();
client
  .setEndpoint(ENDPOINT)
  .setProject(PROJECT_ID)
  .setKey(API_KEY);

// Export Appwrite services
export const databases = new sdk.Databases(client);
export const users = new sdk.Users(client);
export const messaging = new sdk.Messaging(client);
export const storage = new sdk.Storage(client);

// Export constants
export {
  DATABASE_ID,
  PATIENT_COLLECTION_ID,
  DOCTOR_COLLECTION_ID,
  APPOINTMENT_COLLECTION_ID,
  BUCKET_ID
};
