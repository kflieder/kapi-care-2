import config from '@/config/config';
import { Client, Account, ID, Databases, Teams, Permission } from 'appwrite';

type CreateUserAccount = {
    email: string;
    password: string;
    name: string;
};

type LoginUserAccount = {
    email: string;
    password: string;
};

const appwriteClient = new Client();

appwriteClient
    .setEndpoint(config.appwriteUrl)
    .setProject(config.appwriteProjectId)
    // .setKey(config.appwriteEmplyeeAPIKey)

export const account = new Account(appwriteClient);
export const database = new Databases(appwriteClient);
export const teams = new Teams(appwriteClient);

export class AppwriteService {
    //create a new record of user inside appwrite
    async createUserAccount({ email, password, name }:
        CreateUserAccount) {
        try {
            const userAccount = await account.create(ID.unique(), email, password, name);
            if (userAccount) {
                return this.login({ email, password })
            } else {
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }
    async createEmployeeAccount({ email, password, name }:
        CreateUserAccount) {
        try {
            const employeeAccount = await account.create(ID.unique(), email, password, name);
            if(!employeeAccount) {
                throw new Error("Employee account not created");
            }
            
            const team = await teams.createMembership(
                config.appwriteTeamId,
                ['Employees'],
                 employeeAccount.$id);
            if(!team) {
                throw new Error("Team not created");
            }
            return {employeeAccount, team};
        } catch (error) {
            throw error;
        }
    }
    async login({ email, password }: LoginUserAccount) {
        try {
           return await account.createEmailPasswordSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    async isLoggedIn(): Promise<boolean> {
        try {
            const data = await this.getCurrentUser();
            return Boolean(data);
        } catch (error) {
            return false
        }

    }

    async getCurrentUser() {
        try {
          return account.get(); 
        } catch (error) {
            console.log("getCurrentUser error" + error)
        }
        return null;
    }

    async logout() {
        try {
            return await account.deleteSession('current');
        } catch (error) {
            console.log("logout error" + error) 
        }
    }

    async applicationsDatabase({name, email, phone, experience}: {name: string, email: string, phone: string, experience: string}) {
        try {
            const application = await database.createDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                ID.unique(),
                {
                    name: name,
                    email: email,
                    phone: phone,
                    experience: experience,
                }
            );
            return application;  
        } catch (error) {
            console.log("applicationsDatabase error" + error)
        }
    }
    // async getApplications() {
    //     try {
    //         return await database.listDocuments(
    //             config.appwriteDatabaseId,
    //             config.appwriteCollectionId
    //         );
    //     } catch (error) {
    //         console.log("getApplications error" + error)
    //     }
    // }
        async getApplications() {
        const response = await database.listDocuments(
            config.appwriteDatabaseId,
            config.appwriteCollectionId
        );
        return response.documents;
        }
}

const appwriteService = new AppwriteService();

export default appwriteService;