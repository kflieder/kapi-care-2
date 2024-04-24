import appwriteService from '@/appwrite/config';
import React from 'react'
import { useRouter } from 'next/navigation';

export default function LogOutBtn() {
    const router = useRouter();

    async function handleLogOut() {
        
        // const logOut = async () => await appwriteService.logout();
        // const logOutUser = await logOut();
        // router.push('/');
        // console.log(logOutUser);
        try {
            await appwriteService.logout()
            .then(() =>{
                if (window.location.pathname === '/') {
                    window.location.reload();
                } else {
                    router.push('/');
                
                }
              })
        
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div className='cursor-pointer' onClick={handleLogOut}>LogOutBtn</div>
  )
}
