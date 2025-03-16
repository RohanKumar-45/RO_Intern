import { databases } from "@/lib/appwrite.config"; // Adjust based on how you set up Appwrite

export const getPatientDetails = async (userId: string) => {
  try {
    const response = await databases.getDocument(
      "databaseId",    // Replace with your Appwrite database ID
      "collectionId",   // Replace with your collection ID
      userId            // The document ID, which is likely the same as the userId
    );
    return response;
  } catch (error) {
    throw new Error("Failed to fetch patient details");
  }
};
