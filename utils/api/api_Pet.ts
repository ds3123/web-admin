
import axios from '@utils/axios' ;
import Cookies from "js-cookie" ;


// @ 寵物 相關 API ( 資料表 : pets , pet_classes , pet_species )

// [ GET ] ---------------

// 取得 _ 所有寵物
export const fetch_All_Pets = ( page : number = 1  ) => 
             axios.get< any[] >( `/pets?page=${ page }` ).then( res => res.data ) ;


// 取得 _ 特定店家，所有寵物
export const fetch_Account_All_Pets = ( page : number = 1 , search : string ) => {

    const account_id = Cookies.get( "account_id" ) ;  // 使用者 : 所屬商店 id

    return axios.get< any[] >( `/pets/account/${ account_id }?page=${ page }&search=${ search }` ).then( res => res.data ) ;
 
}
            

// 取得 _ 所有寵物 : 種類
export const fetch_All_Pet_Classes = ( ) => 
             axios.get< any[] >( `/pet_classes` ).then( res => res.data ) ;


// 取得 _ 特定店家，所有寵物 : 種類
export const fetch_Account_All_Pet_Classes = () => {

    const account_id = Cookies.get( "account_id" ) ;  // 使用者 : 所屬商店 id

    return axios.get< any[] >( `/pet_classes/account/${ account_id }` ).then( res => res.data ) ;

} 
            

// 取得 _ 特定寵物 : 種類
export const fetch_Pet_Class_By_Id = ( pet_class_id : string  ) => 
             axios.get< { pet_species : [] } >( `/pet_classes/${ pet_class_id }` ).then( res => res.data ) ;




// 取得 _ 所有寵物 : 品種
export const fetch_All_Pet_Species = ( ) => 
             axios.get< any[] >( `/pet_species` ).then( res => res.data ) ;
     


// [ POST ] ---------------


// 新增 _ 寵物
export const create_Pet = ( obj : any ) => axios.post( "/pets" , obj ) ;


// 新增 _ 寵物 : 種類
export const create_Pet_Class = ( obj : any ) => axios.post( "/pet_classes" , obj ) ;


// 新增 _ 寵物 : 品種
export const create_Pet_Species = ( obj : any ) => axios.post( "/pet_species" , obj ) ;



// [ PUT ] ---------------

// 修改 _ 寵物
export const update_Pet_By_Id = ( obj : any ) => axios.put( `/pets/${ obj.id }` , obj ) ;




// [ DELETE ] ---------------


// 刪除 _ 寵物
export const delete_Pet_By_Id = async( id : string ) => await axios.delete( `/pets/${ id }` ) ;


// 刪除 _ 寵物 : 種類
export const delete_Pet_Class_By_Id = async( id : string ) => await axios.delete( `/pet_classes/${ id }` ) ;


// 刪除 _ 寵物 : 品種
export const delete_Pet_Species_By_Id = async( id : string ) => await axios.delete( `/pet_species/${ id }` ) ;

