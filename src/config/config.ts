const config = {
    appwriteUrl: String(process.env.NEXT_PUBLIC_KAPI_CARE_URL),
    appwriteProjectId: String(process.env.NEXT_PUBLIC_KAPI_CARE_PROJECT_ID),
    appwriteCollectionId: String(process.env.NEXT_PUBLIC_COLLECTION_ID),
    appwriteDatabaseId: String(process.env.NEXT_PUBLIC_DATABASE_ID),
    appwriteTeamId: String(process.env.NEXT_PUBLIC_TEAM_ID),
    appwriteEmplyeeAPIKey: String(process.env.NEXT_PUBLIC_EMPLOYEE_API_KEY),
}

export default config