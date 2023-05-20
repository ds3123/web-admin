
import { FC } from 'react' ;
import { FormWrapper , Section_Title , Form_Bar } from '@layout/index' ;
import { useForm_Provider_Create_Pet } from '@/hooks/form/userForm_Provider';
import { FaUser  } from "react-icons/fa" ;
import { MdPets } from "react-icons/md" ;
import { FormProvider } from "react-hook-form" ;
import { Customer_Form , Pet_Form , Customer_Field_QueryResult } from '@service/index' ;



// 表單 _ 新增寵物
const Create_Pet_Form : FC = () => {


     const { methods , onSubmit } = useForm_Provider_Create_Pet() ;
     const { handleSubmit , formState , watch , setValue } = methods ;

   
     // 監聽 _ 欄位的變化並取得其值
     const customer_name   = watch( 'customer_name' ) ;   // 客人姓名
     const customer_sex    = watch( 'customer_sex' ) ;    // 客人性別
     const customer_mobile = watch( 'customer_mobile' ) ; // 客人手機


     // 是否顯示 _ 寵物欄位
     const is_Show_PetColumns = customer_name && ( customer_sex !== '請選擇' ) && customer_mobile ;




     return <form onSubmit = { handleSubmit( onSubmit ) } >

               <FormWrapper title = '新增資料' isValid = { formState.isValid } >

                  <FormProvider { ...methods } >

                     { /*  客人欄位  */ }
                     <Section_Title icon = { <FaUser size = { 25 } /> }  title = '客戶資料'  >
                           <Customer_Field_QueryResult  />
                     </Section_Title>

                     <Customer_Form />

                     <div className="col-span-4"> <hr className="mt-10 mb-10"/> </div>
               
                     { /* 寵物欄位  */ }
                     <Section_Title icon = { <MdPets size = { 25 } /> } title = '寵物資料' > </Section_Title>

                     { is_Show_PetColumns ?  <Pet_Form />: <Form_Bar text = "尚未填寫完整 _ 客戶欄位資料" />  }

                  </FormProvider>

               </FormWrapper>

            </form>  

} ;


export default Create_Pet_Form
        