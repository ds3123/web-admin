
import { FC } from 'react' ;
import { Input , DateInput , Select , TextArea } from '@layout/index' ;
import { useFormContext } from 'react-hook-form';
import { useForm_Pet_Form } from '@/utils/custom_types/form';
import { useEffect_Account_PetClass , useEffect_Account_PetSpecies } from '@/components/service/type/pet/hooks/useEffect_Pet_ClassSpecies';
import { useEffect_Set_PetSerial } from '@/components/service/type/pet/hooks/useEffect_Set_PetSerial';



const Customer_Form : FC = () => {


    // 取得 _ RHF 的 Context 
    const { control , register , watch , setValue } = useFormContext< useForm_Pet_Form >() ;

    const pet_class = watch( 'pet_class' ) ; // 寵物種類      


    // 取得 _ 店家所有 : 寵物種類
    const { data , account_PetClasses } = useEffect_Account_PetClass() ;

   
    // 依照所選擇的 _ 寵物種類，取得其相對應的 _ 寵物品種 
    const account_PetSpecies = useEffect_Account_PetSpecies( data , pet_class ) ;


    // 設定 _ 寵物 : 隨機序號
    useEffect_Set_PetSerial( setValue ) ;


    return <>

                { /* 隱藏欄位 */ }
                <input type = "hidden" { ...register( 'pet_id' ) } />           { /* 寵物於 pets 資料表 id  */ }
                <input type = "hidden" { ...register( 'pet_customer_id' ) } />  { /* 寵物所屬主人於 customers 資料表 id  */ }
                
                <Input type = "text" control = { control } label = '名 字' name = 'pet_name' required = { true } />

                <Select control = { control } label = '種 類' name = 'pet_class'  select_options = { account_PetClasses } default_value = '請選擇'  required = { true } />

                <Select control = { control } label = '品 種' name = 'pet_species' select_options = { account_PetSpecies } default_value = '請選擇'  required = { true } />

                <Input type = "text" control = { control } label = '編 號' name = 'pet_serial' required = { true } />

                <Select control = { control } label = '性 別' name = 'pet_sex' select_options = { [ '請選擇' , '公' , '母' , '不確定' ] } default_value = '請選擇'  required = { true } />

                <Input type = "text" control = { control } label = '毛 色' name = 'pet_color' required = { false } />

                <DateInput control = { control } label = "出生日期" name = 'pet_birthday'  required = { false }  />

                <Input type = "text" control = { control } label = '體 重( kg )' name = 'pet_weight' required = { false } />

                <Input type = "text" control = { control } label = '晶片號碼' name = 'pet_chip' required = { false } />

                <TextArea control = { control } label = '寵物備註' name = 'pet_note'  required = { false } />
               
           </>

} ;

export default Customer_Form
       

