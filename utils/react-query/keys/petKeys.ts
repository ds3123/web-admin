



// # 查詢 _ 寵物相關 Query Key
export const petKeys = {

    // 所有寵物
    "all_pets" : () => [ "all_pets" ] , 

    // 特定店家， 所有寵物
    "account_all_pets"  : ( page : number ) =>  [ "account_all_pets"  , page  ] , 


    // 特定店家， 所有寵物種類
    "account_all_pet_classes" : () => [ "account_all_pet_classes" ] , 


    // 所有寵物 : 種類
    "all_pet_classes" : ( account_id : string ) =>  [ "all_pet_classes" , account_id ] , 

    // 特定種類
    "pet_class_by_id" : ( pet_class_id : string ) =>  [ "pet_class_by_id"  , pet_class_id ] , 


    // 所有寵物 : 品種
    "all_pet_species" : ( account_id : string  ) =>  [ "all_pet_species" , account_id ] , 


    // 特定寵物 ( by 資料表 id )
    "pet_by_id"       : ( account_id : string , pet_id : string ) =>  [ "pet_by_id" , account_id , pet_id  ] , 


}