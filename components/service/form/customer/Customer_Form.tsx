
import { FC } from 'react' ;
import { Input , DateInput , Select } from '@layout/index' ;
import { useFormContext } from 'react-hook-form';
import { useForm_Customer_Form } from '@/utils/custom_types/form';



const Customer_Form : FC = () => {


    // 取得 _ RHF 的 Context 
    const { control } = useFormContext< useForm_Customer_Form >() ;


    return <>

                <Input type = "text" control = { control } label = '姓名' name = 'customer_name' required = { true } />
            
                <Input type = "text" control = { control } label = '身分證字號' name = 'customer_id' required = { false } />
                
                <Input type = "text" control = { control } label = '手機號碼' name = 'customer_mobile' required = { true }    />
            
                <Input type = "text" control = { control } label = '家用電話' name = 'customer_telphone' required = { false } />
                
                <Select control = { control } label = '性別' name = 'customer_sex'  select_options = { [ '請選擇' , '男' , '女' ] } default_value = '請選擇' required = { true } />
                
                <Input type = "text" control = { control } label = 'Line ID' name = 'customer_line' required = { false } />
                
                <Input type = "text" control = { control } label = 'Email' name = 'customer_email' required = { false } />

                <DateInput control = { control } label = "生日" name = "customer_birthday"  required = { false }  />

                <div className = "md:col-span-2">
                    <Input type = "text" control = { control } label = '通訊地址' name = 'customer_address' required = { false } />
                </div>

                <div className="md:col-span-2">
                     <Input type = "text" control = { control } label = '備 註' name = 'customer_note' required = { false } />
                </div>

            </>

} ;

export default Customer_Form
       
