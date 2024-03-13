// 'use client'

// import { createContext, useContext, useEffect, useState } from 'react'
// import { usePathname } from 'next/navigation'

// import { AuthenApi } from '@/apis/authen'
// import Loading from '@/components/loading'
// import { useNavigate } from '@/utils/navigation'
// import { SwalCenter } from '@/utils/sweetAlertCenter'
// import {
//    getAccessToken,
//    removeAccessToken,
//    removeRefreshToken,
//    setAccessToken as setAccessCookie,
//    setRefreshToken as setRefreshCookie,
// } from '@/utils/token'

// type UserProfile = {
//    id: number
//    name: string
//    branch: {
//       id: number
//       name: string
//    }
//    email: string
//    departmentName: string
//    tel: string
// }

// type AuthContextValue = {
//    login: (email: string, password: string) => Promise<void>
//    logout: () => Promise<void>
//    changePassword: (oldPassword: string, newPassword: string) => Promise<void>
//    userProfile: UserProfile | undefined
// }

// const AuthContext = createContext<AuthContextValue>({} as AuthContextValue)

// interface Props {
//    children: React.ReactNode
// }

// export const AuthProvider: React.FC<Props> = ({ children }) => {
//    const pathname = usePathname()
//    const navigateTo = useNavigate()

//    const [userExist, setUserExist] = useState<boolean>(true)
//    const [userProfile, setUserProfile] = useState<UserProfile | undefined>()
//    const [accessToken, setAccessToken] = useState<string | undefined>(undefined)

//    const [isLoading, setIsLoading] = useState<boolean>(true)
//    const [loadingLabel, setLoadingLabel] = useState<string>('')

//    const getUser = async () => {
//       setIsLoading(true)
//       setLoadingLabel('กำลังดึงข้อมูลผู้ใช้')
//       try {
//          const userResponse = await AuthenApi.getUser()
//          setUserProfile(userResponse.data.data)
//          setUserExist(true)
//       } catch (error: any) {
//          if (await getAccessToken()) {
//             SwalCenter(
//                error.data.message_th,
//                'error',
//                error.data.message_en,
//                () => navigateTo.Login()
//             )
//          }
//          setUserExist(false)
//       } finally {
//          setTimeout(() => {
//             setIsLoading(false)
//          }, 1000)
//       }
//    }

//    const afterLogInFn = async () => {
//       setAccessToken(await getAccessToken())
//    }

//    const login = async (email: string, password: string) => {
//       setIsLoading(true)
//       setLoadingLabel('กำลังเข้าสู่ระบบ')
//       try {
//          const loginResponse = await AuthenApi.login(email, password)
//          if (loginResponse.status === 200) {
//             const accessToken = loginResponse.data.data.accessToken
//             const refreshToken = loginResponse.data.data.refreshToken
//             await setAccessCookie(accessToken)
//             await setRefreshCookie(refreshToken)
//             initSetAccessToken()
//             SwalCenter('เข้าสู่ระบบสำเร็จ', 'success', '', async () => setAccessToken(await getAccessToken()), 1)
//          }
//       } catch (error: any) {
//          SwalCenter(error.data.message_th, 'error')
//       }
//    }

//    const changePassword = async (oldPassword: string, newPassword: string) => {
//       try {
//          const changeResponse = await AuthenApi.changePassword(oldPassword, newPassword)
//          if (changeResponse.status === 200) {
//             SwalCenter('เปลี่ยนรหัสผ่านสำเร็จ', 'success', '', () => navigateTo.Home(), 1)
//          }
//       } catch (error: any) {
//          SwalCenter(error.data.message_th, 'error')
//       }
//    }

//    const logout = async () => {
//       try {
//          await removeAccessToken()
//          await removeRefreshToken()
//          SwalCenter(
//             'ออกจากระบบสำเร็จ',
//             'success',
//             'ระบบกำลังพาคุณไปที่หน้าเข้าสู่ระบบ',
//             () => setUserExist(false)
//          )
//       } catch (error) {
//          SwalCenter('ออกจากระบบไม่สำเร็จ', 'error')
//       }
//    }

//    const initSetAccessToken = async () => {
//       setAccessToken(await getAccessToken())
//    }

//    useEffect(() => {
//       initSetAccessToken()
//    }, [])

//    useEffect(() => {
//       setIsLoading(false)
//    }, [pathname])

//    // เช็คว่า authen มั้ยทุกครั้งที่ pathname หรือ user เปลี่ยน
//    useEffect(() => {
//       // NOTE: authen test
//       isUserAuthenticated()
//    }, [pathname, userExist, accessToken])

//    // เช็คว่ามี user มั้ยทุกครั้งที่ accesstoken เปลี่ยน
//    useEffect(() => {
//       getUser()
//    }, [accessToken])

//    // เช็ค authen
//    const isUserAuthenticated = async () => {
//       // ถ้ามี token + มี user มั้ย ถ้ามี ทำ fn นี้
//       if (userExist) {
//          if (accessToken) redirectToHome()
//       } else redirectToLogin()
//    }

//    // ถ้าไปหน้าที่ไม่มีคำว่า login จะเด้งไปหน้า login
//    const redirectToLogin = () => {
//       if (!pathname.includes('login')) navigateTo.Login()
//    }

//    // ถ้าไปหน้าที่มีคำว่า login จะไปหน้า home
//    const redirectToHome = () => {
//       if (pathname.includes('login')) navigateTo.Home()
//    }

//    return (
//       <AuthContext.Provider
//          value={{
//             login,
//             logout,
//             changePassword,
//             userProfile,
//          }}
//       >
//          {isLoading ? <Loading label={loadingLabel} /> : children}
//       </AuthContext.Provider>
//    )
// }

// export const useAuth = () => useContext(AuthContext)
