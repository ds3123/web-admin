

import { FC } from 'react' ;
import { FormWrapper  } from '@layout/index' ;
import { useForm_Provider_Update_Pet } from '@/hooks/form/userForm_Provider';
import { useEffect_Account_PetClass , useEffect_Account_PetSpecies } from '@/components/service/type/pet/hooks/useEffect_Pet_ClassSpecies';
import { db_Pets_Columns } from '@/utils/custom_types/form';
import { useDelete_Pet } from '@/utils/react-query/hooks/pet/useDeletePet';
import { Delete_Button } from '@/components/layout';
import { FormProvider } from "react-hook-form" ;

import { Pet_Form } from '@service/index' ;


type Update = {

   pet : db_Pets_Columns ; // 客戶資料

}


// 表單 _ 更新寵物
const Update_Pet_Form : FC< Update > = ( { pet } ) => {

     
     const { methods , onSubmit } = useForm_Provider_Update_Pet( pet ) ;
     const { handleSubmit , formState } = methods ;

 
     // 刪除寵物函式
     const delete_Pet = useDelete_Pet() ;


     return <form onSubmit = { handleSubmit( onSubmit ) } >

                { /* 刪除寵物按鈕 */ }
                <Delete_Button delete_Func = { delete_Pet } data_Id = { pet?.id } />

                <FormWrapper title = '修改資料' isValid = { formState.isValid } >
                    
                    <FormProvider { ...methods }>

                        <Pet_Form />

                    </FormProvider>

                </FormWrapper>

            </form>  


} ;


export default Update_Pet_Form
       