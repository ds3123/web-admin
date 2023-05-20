
import { useState , useEffect } from 'react' ;
import { useFetch_Account_All_Pet_Classes } from '@/utils/react-query/hooks/pet/useFetchPets';



// 取得 _ 店家所有 : 寵物種類 ( 加上 '請選擇' )
export const useEffect_Account_PetClass = () => {

     // 取得 _ 店家所有 : 寵物種類
    const { data } = useFetch_Account_All_Pet_Classes() ;
    let account_PetClasses = data.map( x => x?.pet_class ) ;
    account_PetClasses.unshift( '請選擇' ) ;

    return { data , account_PetClasses } ;

} ;




// 依照所選擇的 _ 寵物種類，取得其相對應的 _ 寵物品種 
export const useEffect_Account_PetSpecies = ( data : any[] , pet_class : string ) => {


    const [ account_PetSpecies , set_Account_PetSpecies ] = useState( [ '請選擇' ] ) ;

    useEffect( () => {

        if( pet_class !== '請選擇' && data.length > 0 ){

            data.forEach( x => {

               if( x?.pet_class === pet_class ){

                     const p_Species = x?.pet_species ;

                     let petSpecies = p_Species.map( ( x : any ) => x?.pet_species ) ;

                     petSpecies.unshift( '請選擇' ) ;

                     set_Account_PetSpecies( petSpecies ) ;

               }

            } )

        }else{

            set_Account_PetSpecies( [ '請選擇' ] ) ;

        }
    
     } , [ pet_class , data ] ) ;


     return account_PetSpecies ;

} ;

