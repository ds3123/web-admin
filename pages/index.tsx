/* eslint-disable @next/next/no-img-element */
import { useForm , SubmitHandler } from 'react-hook-form'
import { useEffect , useReducer } from 'react' ;
import { signIn , signOut, useSession } from "next-auth/react";
import { MdError } from 'react-icons/md';
import { useRouter } from 'next/router' ;
import { Toast } from '@layout/index' ;

import Cookies from "js-cookie" ;


interface I_State {

  account    : string ;
  password   : string ;

  is_success : boolean ;
  error      : string ;

}

interface I_Action {

    type     : 'clean' | 'error' ;
    payload? : any ;

}


const initialState = { 
   
           account    : '' ,  // 帳號
           password   : '' ,  // 密碼

           is_success : false ,  // 已登入

           error      : ''       // 錯誤
        
      } ;


const loginReducer = ( state : I_State , action : I_Action ) => {

  switch( action.type ){

      case 'clean'   : return { ...state , error : '' }
      case 'error'   : {

                          // 清空 _ 帳號密碼
                          const setValue = action.payload.setValue ; 
                          setValue( 'account' , '' ) ; 
                          setValue( 'password' , '' ) ; 

                          return { ...state , is_success : false , error : action.payload.error  }

                       } 
      
      default        : return state ;
   
  }

} ;



// @ 登入頁面

// 檔案 : pages/index.tsx
const LoginPage = () => {


  const router = useRouter() ;

  const [ state , dispatch ] = useReducer( loginReducer , initialState ) ;

  // Next-Auth
  const { data : session } = useSession() as any ;
 
  // RHF
  const { register , handleSubmit , setValue  , formState : { errors } } = useForm< I_State >() ;

 
  // 提交鈕
  const onSubmit : SubmitHandler< I_State > = async( data ) => {

     const { account , password } = data ;

     const result = await signIn( "credentials" , {
                                                    account ,
                                                    password ,
                                                    redirect : false 
                                                  }) ;

                                                
     if( result?.error) {

        dispatch( { type : 'error' , payload: { error: '帳號或密碼錯誤，請重新輸入' , setValue : setValue } } ) ;
        
     }else{

        Toast( '登入成功' ) ;
        router.push( '/index_page/dashboard' ) ;

     }

  }



  /*
      # 設定 _ < Cookie >
      
        1. JWT       : 供後續前端發出請求時，夾帶裝有 JWT 的 Cookie 供後端驗證 
        2. 所屬店家 id : 供輸入資料時用
  
  */ 
  useEffect( () => {
    
    if( session ){

       Cookies.set( "jwt_token" , session?.accessToken , { expires: 30 } ) ;
       Cookies.set( "account_id" , session?.userInfo?.account_id , { expires: 30 } ) ;

    } 
     
     
  } , [ session ] ) ;




  return <div className="flex items-center justify-center min-h-screen relative -top-10" >

            <form onSubmit = { handleSubmit( onSubmit ) } className = "bg-white rounded px-8 pt-6 pb-8 mb-4" >

                <div className = "mb-12" >
                    <img loading = "lazy" className = "w-full" src = "https://i.imgur.com/8bvjeDJ.png" alt = "" />
                </div>
  
                { /* 帳號或密碼錯誤 */ }
                { state.error &&
                    <p className = "flex justify-center p-2 bg-red-500 text-white text-xl rounded-lg mb-5" >
                        <MdError size = { 30 } className = "mr-2" /> { state.error }
                    </p>
                }

                { /* 帳號 */ } 
                <div className = "mb-7" >
                
                  <input { ...register( 'account' , { required: '請輸入 : 帳號' }) } 
                          className   = { `${ errors.account ? 'border-red-600' : '' } shadow appearance-none border rounded w-full p-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline` }
                          type        = "text"
                          placeholder = "請輸入：帳號" />
                        
                  { errors.account && <p className = "ml-5 mt-3 text-red-600"> { errors.account.message  } </p>  } 
                
                </div>

                { /* 密碼 */ }
                <div className = "mb-10" >
                  
                  <input { ...register('password', { required: '請輸入 : 密碼' }) }
                          className   = { `${ errors.password ? 'border-red-600' : '' }  shadow appearance-none border rounded w-full p-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline` }
                          type        = "password"
                          placeholder = "請輸入 : 密碼" />

                  { errors.password && <p className = "ml-5 mt-3 text-red-600"> { errors.password.message  }  </p>  } 
                
                
                </div>

                <div className="flex items-center justify-between">

                    <button className="w-full text-xl tracking-widest bg-green-300 hover:bg-green-500 text-white font-bold p-5 rounded focus:outline-none focus:shadow-outline" type = "submit" >
                        登 入 系 統
                    </button>

                </div>

            </form>

         </div>
         
}
              
export default LoginPage
