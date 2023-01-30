
// get user info by cookie

import { auth } from "$lib/admin.server"

export const getUserUidByCookie= async (cookie:string) => {
    
    return (await auth.verifySessionCookie(cookie)).uid
}

