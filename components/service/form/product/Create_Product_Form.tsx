/* eslint-disable react-hooks/exhaustive-deps */
import { FC , useState } from 'react' ;
import { Input , Select , Submit_Button , ImageUploadForm , ReactQuillEditor } from '@layout/index' ;

import { useForm_Provider_Create_Product } from '@/hooks/form/userForm_Provider';


// 表單 _ 新增商品
const Create_Product_Form : FC = () => {


      // 新增的圖片檔案 
      const [ uploadedFiles , setUploadedFiles ] = useState< File[] >( [] ) ;
      
      // Quill 編輯器內容
      const [ editorContent , setEditorContent ] = useState( '' ) ;


      const handleContentChange = ( newContent : string ) => setEditorContent( newContent ) ;


      // --------


      const { control , handleSubmit , isValid , onSubmit } = useForm_Provider_Create_Product();


    
    return <form onSubmit = { handleSubmit( onSubmit ) } >
                    
                <div className = "py-10 md:max-w-5xl m-auto grid grid-cols-1 lg:grid-cols-3 gap-5" >

                    <div className="mt-5 md:col-span-2">

                        <Input type = "text" control = { control } label = '商品名稱' name = 'product_name' required = { true } />
                        
                    </div>

                    <div className="mt-5">

                        <Select control = { control } name = 'product_type'  select_options = { [ '日常' , '3C' ] } default_value = '日常' label = '商品類別' required = { true } />
                        
                    </div>

                    <div className="mt-5">

                        <Input type = 'number'  control = { control } label = '商品單價' name = 'unit_price' required = { true } />

                    </div>

                    <div className="mt-5">

                        <Input type = 'number' control = { control } label = '商品優惠價' name = 'discounted_price' required = { false } />

                    </div>

                    <div className="mt-5">

                        <Input type = 'number' control = { control } label = '庫存數量' name = 'stock_num' required = { true } />

                    </div>
                     
                    <div className = "mt-5 md:col-span-3" >
                   
                         <ImageUploadForm onUpload = { files => setUploadedFiles( prev => [ ...prev , ...files ] ) } />

                    </div>

                    { /* Ｑuill 編輯器 */ }
                    <div className = "mt-5 md:col-span-3" >
                    
                         <ReactQuillEditor onContentChange = { handleContentChange } />

                    </div>

                    <div className="mt-5 md:col-span-3">  
                    
                         <Submit_Button btn_name = '新增商品' is_valid = { isValid } />

                    </div>
                
                </div>

           </form>  

} ;

export default Create_Product_Form
       



