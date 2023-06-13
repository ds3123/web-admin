
// # 函式 _ 取得

// # 函式 _ 新增
import { useCreate_Customer , useCreate_Customer_With_Id } from '@rq_hooks/customer/useCreateCustomer' ;
import { useCreate_Pet , useCreate_Pet_Class , useCreate_Pet_Species , useCreate_Pet_With_Id } from '@rq_hooks/pet/useCreatePet' ;
import { useCreate_Service , useCreate_Service_With_Id , useCreate_Service_Content , useCreate_Service_Content_With_Id , useCreate_Service_Price , useCreate_Service_Order } from '@rq_hooks/service/useCreateService' ;
import { useCreate_Plan , useCreate_Plan_Content } from '@rq_hooks/plan/useCreatePlan' ;
import { useCreate_Account } from '@rq_hooks/account/useCreateAccount' ;
import { useCreate_Employee } from '@rq_hooks/employee/useCreateEmployee'

// # 函式 _ 修改
import { useUpdate_Customer } from '@rq_hooks/customer/useUpdateCustomer' ;
import { useUpdate_Pet } from '@rq_hooks/pet/useUpdatePet' ;
import { useUpdate_Service_Price , useUpdate_Service_Order } from '@rq_hooks/service/useUpdateService' ;
import { useUpdate_Account } from '@rq_hooks/account/useUpdateAccount' ;



// # 資料類型
import { db_Customers_Columns , 
         db_Pets_Columns , 
         db_Services_Columns ,
         db_Service_Order_Columns ,
         db_Service_Contents_Columns ,
         useForm_Customer_Form, 
         useForm_Pet_Form, 
         useForm_PetForm_With_CustomerForm , 
         useForm_Service_Form ,
         useForm_Service_Content_Form ,
         useForm_Service_Order_Form ,
         useForm_ServiceOrder_With_Customer_Pet_Form ,
         useForm_Product_Form ,
         useForm_Management_Pet_Class ,
         useForm_Management_Pet_Species,
         useForm_ServicePrice_FristClass_Form,
         useForm_ServicePrice_SecondClass_Form,
         useForm_Plan_Form,
         useForm_Plan_Content_Form,
         useForm_PlanPrice_FristClass_Form,
         useForm_Account_Form,
         db_Account_Columns
        } from '@/utils/custom_types/form';


// # 欄位轉換
import { columns_Covert_Customer , 
         columns_Covert_Pet , 
         columns_Covert_Pet_Class , 
         columns_Covert_Service_Order ,
         columns_Covert_Service ,
         columns_Covert_Plan ,
         columns_Covert_Account
       } from '@utils/convert/column_Convert_Database' ;

// # 封裝 _ useForm() / noSubmit 事件
import { useForm_Edit } from '@/hooks/form/useForm_Edit';
import { useOnSubmit_Edit } from '@/hooks/form/useOnSubmit_Edit';


// # Yup Schema
import { schema_CreateCustomer , schema_UpdateCustomer } from "@/utils/schemas/schema_customer" ;
import { schema_CreatePet , schema_UpdatePet , schema_Management_PetClass , schema_Management_PetSpeices } from "@/utils/schemas/schema_pet" ;
import { schema_Management_Plan_First_Class , 
         schema_Management_Plan_Second_Class ,
         schema_Management_Plan_Price_First_Class ,
         schema_Management_Plan_Price_Second_Class
        } from "@/utils/schemas/schema_plan" ;
import { 
         schema_Management_Service_First_Class , 
         schema_Management_Service_Second_Class , 
         schema_Management_Service_Price_First_Class , 
         schema_Management_Service_Price_Second_Class , 
         schema_CreateServiceOrder , 
         schema_UpdateServiceOrder 
        } from "@/utils/schemas/schema_service" ;
import { schema_CreateProduct } from "@/utils/schemas/schema_product" ;
import { schema_CreateAccount , schema_UpdateAccount } from "@/utils/schemas/schema_account" ;


// # API
import { fetch_Account_Customer_By_Mobile } from '@/utils/api/api_Customer';
import { fetch_Service_Price_By_Class_Id } from '@/utils/api/api_Service';



// ----------------------


// 新增 _ 客戶
export const useForm_Provider_Create_Customer = () => {


     // 新增函式
     const create_Customer = useCreate_Customer() ; 


     // 提交新增函式
     const submit_Create = ( data : useForm_Customer_Form ) => {

         // 轉換欄位 
         const obj_Customer = columns_Covert_Customer( data ) ;

         // 新增客戶
         create_Customer( obj_Customer )

     } ;


     // ---------------------


     // 封裝 _ useForm() 
     const methods  = useForm_Edit< useForm_Customer_Form >( schema_CreateCustomer ) ;
    

     // 封裝 _ onSubmit 
     const onSubmit = useOnSubmit_Edit< useForm_Customer_Form >( submit_Create ) ; 
     
    
     return {  methods , onSubmit  }
    

} ;


// 更新 _ 客戶
export const useForm_Provider_Update_Customer = ( customer : db_Customers_Columns )  => {


     // 客戶表單 _ 預設值
     const default_Customer_Values : useForm_Customer_Form =  {

                                        customer_name     : customer.name ,
                                        customer_id       : customer.serial_id ? customer.serial_id : ''  ,
                                        customer_mobile   : customer.mobile_phone ,
                                        customer_telphone : customer.tel_phone ? customer.tel_phone : '' ,
                                        customer_sex      : customer.sex ,
                                        customer_birthday : new Date( customer.birthday ) as any ,
                                        customer_line     : customer.line ? customer.line : '' ,
                                        customer_email    : customer.email ? customer.email : '' ,
                                        customer_address  : customer.address ? customer.address : '' ,
                                        customer_note     : customer.note ? customer.note : ''

                                    } ;


     // 修改函式 
     const update_Customer = useUpdate_Customer() ;                                  


     // 提交新增函式
     const submit_Update = ( data : useForm_Customer_Form ) => {

        // 轉換欄位 
        const obj_Customer = columns_Covert_Customer( data ) as any ;

        // 新增 _ 客戶資料表 id 
        obj_Customer.id = customer.id  ; 

        // 新增客戶
        update_Customer( obj_Customer ) ;

     } ;

     // 封裝 _ useForm() 
     const methods  = useForm_Edit< useForm_Customer_Form >( schema_UpdateCustomer , default_Customer_Values ) ;

     // 封裝 _ onSubmit 
     const onSubmit = useOnSubmit_Edit< useForm_Customer_Form >( submit_Update )  ;  


     return { methods , onSubmit }

}


// 新增 _ 寵物
export const useForm_Provider_Create_Pet = () => {

    // 新增函式 
    const create_Pet              = useCreate_Pet() ;            // 寵物
    const create_Customer_With_Id = useCreate_Customer_With_Id() // 客人 ( 回傳新增客戶 id )

    // 提交新增函式
    const submit_Create = async( data : useForm_PetForm_With_CustomerForm ) => {


        // 轉換欄位 
        const obj_Customer = columns_Covert_Customer( data ) ; // 客戶
        let obj_Pet        = columns_Covert_Pet( data ) ;      // 寵物 


        // 以客戶 "手機號碼"，檢查 _ 客戶是否已經存在 
        const customer_Mobile = data.customer_mobile ;  // 客戶手機號碼

        if( !customer_Mobile ){ alert( '未填寫手機號碼' ) ; return false ; }
        const query_Mobile = await fetch_Account_Customer_By_Mobile( customer_Mobile ) ;
        

        // ----------------------
       
        if( query_Mobile.length === 0 ){  // * 客戶不存在 --> 新增 _ 寵物 ＋ 客戶

           // 新增客戶 ( 並取得其於資料表 customers 的 id )
           const created_Customer_Id = await create_Customer_With_Id( obj_Customer ) ;

           // 新增寵物
           obj_Pet.customer_id = created_Customer_Id ; // 設定 _ 寵物所屬主人 id
           create_Pet( obj_Pet ) ; 

        }else{                           // * 客戶存在 --> 新增 _ 寵物
 
           // 新增寵物 
           obj_Pet.customer_id = data.pet_customer_id ; // 設定 _ 寵物所屬主人 id
           create_Pet( obj_Pet ) ; 

        }
       

    } ;

    // ---------------------


    // 封裝 _ useForm() 
    const methods  = useForm_Edit< useForm_PetForm_With_CustomerForm >( schema_CreatePet ) ;
   

    // 封裝 _ onSubmit 
    const onSubmit = useOnSubmit_Edit< useForm_PetForm_With_CustomerForm >( submit_Create ) ;  

    
    return { methods , onSubmit }


} 


// 更新 _ 寵物
export const useForm_Provider_Update_Pet = ( pet : db_Pets_Columns ) => {

    // 客戶表單 _ 預設值
    const default_Pet_Values : useForm_Pet_Form =  {
                                                       
                                                        pet_name        : pet.name ,  
                                                        pet_serial      : pet.serial ,  
                                                        pet_chip        : pet.chip ,   

                                                        pet_class       : pet.pet_class ,  
                                                        pet_species     : pet.pet_species ,  
                                                        
                                                        pet_sex         : pet.sex ,  
                                                        pet_weight      : pet.weight,  
                                                        pet_color       : pet.color ,  
                                                        pet_birthday    : new Date( pet.birthday ) as any ,  
                                                    
                                                        pet_note        : pet.note ,  

                                                   } ;


    // 修改函式 
    const update_Pet = useUpdate_Pet() ;    
    

    // 提交新增函式
    const submit_Update = ( data : useForm_Pet_Form ) => {

        // 轉換欄位 
        const obj_Pet = columns_Covert_Pet( data ) as any ;

        // 新增 _ 屬性值
        obj_Pet.id          = pet.id  ;          // 寵物資料表 id 
        obj_Pet.customer_id = pet.customer_id ;  // 寵物所屬主人 id 


        // 新增客戶
        update_Pet( obj_Pet ) ;

    } ;


     // 封裝 _ useForm() 
     const methods  = useForm_Edit< useForm_Pet_Form >( schema_UpdatePet , default_Pet_Values ) ;

     // 封裝 _ onSubmit 
     const onSubmit = useOnSubmit_Edit< useForm_Pet_Form >( submit_Update )  ; 
     

     return { methods , onSubmit }


} 



// 新增 _ 寵物：種類 ( pet class )
export const useForm_Provider_Create_Pet_Class = ( current_Pet_Classes : any[] ) => {


     // 封裝 _ useForm() 
     const methods = useForm_Edit< useForm_Management_Pet_Class >( schema_Management_PetClass ) ;
    
     // 新增函式
     const create_Func = useCreate_Pet_Class() ; 

     // 提交新增函式
     const submit_Create = ( data : useForm_Management_Pet_Class ) => { 

        // 轉換欄位 
        const obj_Pet_Class = columns_Covert_Pet_Class( data ) ;

        
        // 驗證是否重複
        const pet_Class = data.management_pet_class ;  // 所輸入寵物種類
        let isDuplicate = false ;
        
        current_Pet_Classes.forEach( x => {

            if( x.pet_class === pet_Class ){

                alert( '已經存在此寵物種類，請改用其他名稱' ) ;
                methods.setValue(  'management_pet_class' , '' ) ;
                isDuplicate = true;
                return ; // 跳出循環，不繼續執行後續循環

            }

        }) ;

        // 沒有重複，才新增
        if( !isDuplicate ){

            // 新增種類
            create_Func( obj_Pet_Class ) ;

            // 清空輸入框
            methods.setValue(  'management_pet_class' , '' ) ;

        }

     }


     // 封裝 _ onSubmit 
     const onSubmit = useOnSubmit_Edit< useForm_Management_Pet_Class >( submit_Create ) ; 
     
     return {  methods , onSubmit  }


}


// 新增 _ 寵物：品種 ( pet species )
export const useForm_Provider_Create_Pet_Species = ( current_Pet_Class_Id : string , current_Pet_Species : any[] ) => {


    // 封裝 _ useForm() 
    const methods  = useForm_Edit< useForm_Management_Pet_Species >( schema_Management_PetSpeices ) ;

    // 新增函式
    const create_Func = useCreate_Pet_Species() ; 

    // 提交新增函式
    const submit_Create = ( data : useForm_Management_Pet_Species ) => { 


        // 所輸入寵物品種
        const pet_Species = data.management_pet_species ;

        let isDuplicate   = false ;

        // 驗證是否重複
        current_Pet_Species.forEach( x => {

            if( x.pet_species === pet_Species ){

                alert( '已經存在此寵物品種，請改用其他名稱' ) ;
                methods.setValue(  'management_pet_species' , '' ) ;
                isDuplicate = true ;
                return ; // 跳出循環，不繼續執行後續循環

            }

        }) ;

          // 沒有重複，才新增
        if( !isDuplicate ){

            // 新增客戶
            create_Func( { pet_class_id : current_Pet_Class_Id , pet_species : pet_Species  } )

            // 清空輸入框
            methods.setValue(  'management_pet_species' , '' ) ;


        }


    }
    

    // 封裝 _ onSubmit 
    const onSubmit = useOnSubmit_Edit< useForm_Management_Pet_Species >( submit_Create ) ; 
     
    return {  methods , onSubmit  }

}


// 新增 _ 服務：訂單
export const useForm_Provider_Create_Service_Order = () => {

    // 新增函式 
    const create_Customer_With_Id = useCreate_Customer_With_Id() // 客人 ( 回傳新增客戶 id )
    const create_Pet_With_Id      = useCreate_Pet_With_Id() ;    // 寵物 ( 回傳新增寵物 id )
    const create_Service_Order    = useCreate_Service_Order() ;  // 服務訂單  



    // 提交新增函式
    const submit_Create = async( data : useForm_ServiceOrder_With_Customer_Pet_Form ) => {

 
        /*
             以下 service_price , amount_paid 欄位，若用 yup 驗證，會導致驗證通過後，須再點選畫面，提交鈕
             才會觸發生效 ( 不直覺 )  
             --> 改為在此驗證是否有填寫 ( 2023.05.08 )
        */ 
        const service_price = methods.watch( 'service_price' ) ; // 服務價格
        const amount_paid   = methods.watch( 'amount_paid' ) ;   // 實付金額
        
        if( !service_price ){ alert( '未填寫：服務價格' ) ; return false ; }
        if( !amount_paid ){   alert( '未填寫：實付金額' ) ; return false ; }
         

        // -------------------


        // 轉換欄位 
        const obj_Customer    = columns_Covert_Customer( data ) ;      // 客戶
        let obj_Pet           = columns_Covert_Pet( data ) ;           // 寵物 
        let obj_Service_Order = columns_Covert_Service_Order( data ) ; // 服務 : 訂單

        
        // 以客戶 "手機號碼"，檢查 _ 客戶 : 是否已經存在 
        const customer_Mobile = data.customer_mobile ;  // 客戶手機號碼

        if( !customer_Mobile ){ alert( '未填寫手機號碼' ) ; return false ; }
        const query_Mobile = await fetch_Account_Customer_By_Mobile( customer_Mobile ) ;
        
        // 以寵物 pets 資料表 id ( 點選寵物標籤時注入 )，檢查 _ 寵物 : 是否已經存在 
        const pet_Id = data?.pet_id  ;



        // # 新增資料 ----------- 
        
        if( query_Mobile.length === 0 && !pet_Id  ){   // * 1.客戶 _ 不存在 & 寵物 _ 不存在 --> 新增 _ 客戶 + 寵物 + 服務

            
            // 新增客戶 ( 並取得其於資料表 customers 的 id )
            const created_Customer_Id = await create_Customer_With_Id( obj_Customer ) ;
 
            // 新增寵物
            obj_Pet.customer_id  = created_Customer_Id ;
            const created_Pet_Id = await create_Pet_With_Id( obj_Pet ) ; 


            // 新增服務
            obj_Service_Order.customer_id = created_Customer_Id ; // 設定 _ 寵物主人 id
            obj_Service_Order.pet_id      = created_Pet_Id ;      // 設定 _ 寵物 id

            create_Service_Order( obj_Service_Order ) ;


        }else if( query_Mobile.length > 0 && !pet_Id ){ // * 2.客戶 _ 存在 & 寵物 _ 不存在 ( 為客人追加寵物 ) -->  新增 _ 寵物 + 服務


            // 客戶 id
            const customer_id = data.pet_customer_id  ; 

            // 新增寵物
            obj_Pet.customer_id           = customer_id ; 
            const created_Pet_Id          = await create_Pet_With_Id( obj_Pet ) ; 

            // 新增服務
            obj_Service_Order.customer_id = customer_id ;
            obj_Service_Order.pet_id      = created_Pet_Id ;

            create_Service_Order( obj_Service_Order ) ;


        }else{                                        // * 3.客戶 & 寵物 皆存在 --> 新增 _ 服務


            // 新增服務
            obj_Service_Order.customer_id = data.pet_customer_id ;
            obj_Service_Order.pet_id      = data.pet_id ;

            create_Service_Order( obj_Service_Order ) ;

        }

      
    } ;



    // 封裝 _ useForm() 
    const methods  = useForm_Edit< useForm_ServiceOrder_With_Customer_Pet_Form >( schema_CreateServiceOrder ) ;


    // 封裝 _ onSubmit 
    const onSubmit = useOnSubmit_Edit< useForm_ServiceOrder_With_Customer_Pet_Form >( submit_Create ) ;  


    return { methods , onSubmit }


}


// 更新 _ 服務：訂單
export const useForm_Provider_Update_Service_Order = ( service : db_Service_Order_Columns ) => {


    // 服務訂單 _ 預設值
    const default_Service_Order_Values : useForm_Service_Order_Form =  {
 
                                                account_id     : service.account_id ,
                                                customer_id    : service.customer_id ,
                                                pet_id         : service.pet_id ,
                                                service_id     : service.service_id ,
         
     
                                                service_type   : service.service_type ,
                                                service_date   : new Date( service.service_date ) as any ,
                                                arrival_time   : service.arrival_time ,
                                                service_price  : service.service_price ,
                                                service_note   : service.service_note ,
                                                
                                                adjust_amount  : service.adjust_amount ,    
                                                adjust_reason  : service.adjust_reason ,
                                                
                                                payment_method : service.payment_method ,
                                                payment_date   : new Date( service.payment_date ) as any ,
                                                
                                                amount_paid    : service.amount_paid , 

                                                shop_status    : service.shop_status

                                         } ;

    // 修改函式 
    const update_Service_Order = useUpdate_Service_Order() ;                                  


    // 提交新增函式
    const submit_Update = ( data : useForm_Service_Order_Form ) => {


         /*
             以下 service_price , amount_paid 欄位，若用 yup 驗證，會導致驗證通過後，須再點選畫面，提交鈕
             才會觸發生效 ( 不直覺 )  
             --> 改為在此驗證是否有填寫 ( 2023.05.08 )
        */ 
             const service_price = methods.watch( 'service_price' ) ; // 服務價格
             const amount_paid   = methods.watch( 'amount_paid' ) ;   // 實付金額
             
             if( !service_price ){ alert( '未填寫：服務價格' ) ; return false ; }
             if( !amount_paid ){   alert( '未填寫：實付金額' ) ; return false ; }


       // 轉換欄位 
       const obj_Service_Order = columns_Covert_Service_Order( data ) as any ;

       obj_Service_Order.id          = service.id  ; 
       obj_Service_Order.customer_id = service.customer_id ;
       obj_Service_Order.pet_id      = service.pet_id ;


       // 修改客戶
       update_Service_Order( obj_Service_Order ) ;

    } ;


    // 封裝 _ useForm() 
    const methods  = useForm_Edit< useForm_Service_Order_Form >( schema_UpdateServiceOrder , default_Service_Order_Values ) ;

    // 封裝 _ onSubmit 
    const onSubmit = useOnSubmit_Edit< useForm_Service_Order_Form >( submit_Update )  ;  


    return { methods , onSubmit }


}


// 新增 _ 服務 : 項目
export const useForm_Provider_Create_Service = ( current_Services : any[] ) => {


    // 封裝 _ useForm() 
    const methods = useForm_Edit< useForm_Service_Form >( schema_Management_Service_First_Class ) ;


    // 新增函式 
    const create_Service_With_Id = useCreate_Service_With_Id() ; // 新增 _ 服務 ( 第一層 )
    const create_Price           = useCreate_Service_Price() ;   // 新增 _ 服務價格  


    // 提交新增函式
    const submit_Create = async( data : useForm_Service_Form ) => { 

        

        // 轉換欄位 
        const obj_Service = columns_Covert_Service( data ) ;

        
        // 驗證是否重複
        const service   = data.management_service_first_class ;  // 所輸入第一層分類
        let isDuplicate = false ;


        current_Services.forEach( x => {

            if( x?.name === service ){

                alert( '已經存在此類別，請改用其他名稱' ) ;
                methods.setValue( 'management_service_first_class' , '' ) ;
                isDuplicate = true;
                return ; // 跳出循環，不繼續執行後續循環

            }

        }) ;


        // 沒有重複，才新增
        if( !isDuplicate ){

            // 新增服務 ( 並取得資料表 services 的 id )
            const created_Service_Id = await create_Service_With_Id( obj_Service ) ;

            // 新增服務價格
            create_Price({ 
                           service_id : created_Service_Id ,
                           price      : data.management_service_first_class_price
                         }) ;

            // 清空輸入框
            methods.setValue( 'management_service_first_class' , '' ) ;
            methods.setValue( 'management_service_first_class_price' , '' ) ;

        }

    }

    
    // 封裝 _ onSubmit 
    const onSubmit = useOnSubmit_Edit< useForm_Service_Form >( submit_Create ) ; 
     
    return { methods , onSubmit }


}


// 新增 _ 服務 : 項目內容
export const useForm_Provider_Create_Service_Content = ( current_Service_Id : string , all_Service_Contents : any[]  ) => {

    
    // 封裝 _ useForm() 
    const methods = useForm_Edit< useForm_Service_Content_Form >( schema_Management_Service_Second_Class ) ;

    // 新增函式
    const create_Service_Content_With_Id = useCreate_Service_Content_With_Id() ; // 新增 _ 服務項目內容
    const create_Price                   = useCreate_Service_Price() ;           // 新增 _ 服務價格  


    // 提交新增函式
    const submit_Create = async( data : useForm_Service_Content_Form ) => { 

        
        // 驗證是否重複
        const service_content = data.management_service_second_class ;  // 所輸入第二層分類
        let isDuplicate = false ;

        
        all_Service_Contents.forEach( x => {

            if( x?.content === service_content ){

                alert( '已經存在此類別，請改用其他名稱' ) ;
                methods.setValue( 'management_service_second_class' , '' ) ;
                isDuplicate = true;
                return ; // 跳出循環，不繼續執行後續循環

            }

        }) ;


        // 沒有重複，才新增
        if( !isDuplicate ){


            // 新增種類 ( 並取得資料表 service_contents 的 id )
            const created_Service_Content_Id = await create_Service_Content_With_Id( { 
                                                        service_id : current_Service_Id , 
                                                        content    : data.management_service_second_class 
                                                     }) ; 


            // 新增服務價格
            create_Price({ 
                            service_id         : current_Service_Id ,
                            service_content_id : created_Service_Content_Id ,
                            price              : data.management_service_second_class_price
                         }) ;


            // 清空輸入框
            methods.setValue( 'management_service_second_class' , '' ) ;
            methods.setValue( 'management_service_second_class_price' , '' ) ;

        }

    }

    // 封裝 _ onSubmit 
    const onSubmit = useOnSubmit_Edit< useForm_Service_Content_Form >( submit_Create ) ; 
     
    return { methods , onSubmit }

}


// 新增 _ 服務項目 : 價格 ( 第一層級 ) 
export const useForm_Provider_Create_FirstClass_ServicePrice = ( first_Class : any ) => {


    // 封裝 _ useForm() 
    const methods = useForm_Edit< useForm_ServicePrice_FristClass_Form >( schema_Management_Service_Price_First_Class ) ;

    // 新增函式
    const create_Price = useCreate_Service_Price() ;

    // 修改函式 
    const update_Price = useUpdate_Service_Price() ;


    // 提交新增函式
    const submit_Create = ( data : useForm_ServicePrice_FristClass_Form ) => { 

        const first_Class_Id     = first_Class?.id ;                 // 服務 id
        const service_Price_Obj  = first_Class?.service_price[ 0 ] ; // 服務價格物件
        const service_Price_Id   = service_Price_Obj?.id ;           // 服務價格 id

        if( !first_Class_Id ){ alert( '請點選 _ 第一層分類項目' ) ; return false ; }


    
        // 價格存在 --> 修改
        if( service_Price_Obj ){


            update_Price( {   
                              id         : service_Price_Id ,
                              service_id : first_Class_Id , 
                              price      : data.management_service_price_first_class 
                          } as any ) ;

            methods.setValue( 'management_service_price_first_class' , '' ) ; 


            return false ;

        }


        // 價格不存在 --> 新增
        create_Price({ 
                        service_id : first_Class_Id , 
                        price      : data.management_service_price_first_class 
                     }) ;

        methods.setValue( 'management_service_price_first_class' , '' ) ;              
       
    }

    // 封裝 _ onSubmit 
    const onSubmit = useOnSubmit_Edit< useForm_ServicePrice_FristClass_Form >( submit_Create ) ; 


    return { methods , onSubmit }


}


// 新增 _ 服務項目 : 價格 ( 第二層級 ) 
export const useForm_Provider_Create_SecondClass_ServicePrice = ( first_Class : any , second_Class : any ) => {


    // 封裝 _ useForm() 
    const methods = useForm_Edit< useForm_ServicePrice_SecondClass_Form >( schema_Management_Service_Price_Second_Class ) ;

    // 新增函式
    const create_Price = useCreate_Service_Price();

    // 修改函式
    const update_Price = useUpdate_Service_Price();


    // 提交新增函式
    const submit_Create = async( data : useForm_ServicePrice_SecondClass_Form ) => { 


        const first_Class_Id  = first_Class?.id ;
        const second_Class_Id = second_Class?.id ;


        if( !first_Class_Id ){ alert( '請點選 _ 第一層分類項目' ) ; return false ; }
        if( !second_Class_Id ){ alert( '請點選 _ 第二層分類項目' ) ; return false ; }


        // 查詢該分類，是否在資料表 : service_prices 已有其價格
        const result = await fetch_Service_Price_By_Class_Id( first_Class_Id , second_Class_Id ) ;


        if( result ){  // 有 -> 修改價格

            update_Price( {
                             id                 : result?.id ,
                             service_id         : first_Class_Id ,  
                             service_content_id : second_Class_Id ,
                             price              : data.management_service_price_second_class
                           } as any )


        }else{         // 沒有 -> 新增價格 

            create_Price({ 
                            service_id         : first_Class_Id ,  
                            service_content_id : second_Class_Id ,
                            price              : data.management_service_price_second_class
                         }) ;



        }
        
        methods.setValue( 'management_service_price_second_class' , '' ) ;
        
    }

    // 封裝 _ onSubmit 
    const onSubmit = useOnSubmit_Edit< useForm_ServicePrice_SecondClass_Form >( submit_Create ) ; 


    return { methods , onSubmit }

}



// 新增 _ 自訂方案 ( 第一層級 ) 
export const useForm_Provider_Create_Plan = ( current_Plans : any[] ) => {

    // 封裝 _ useForm() 
    const methods = useForm_Edit< useForm_Plan_Form >( schema_Management_Plan_First_Class ) ;


    // 新增函式 
    const create_Plan = useCreate_Plan() ;


    // 提交新增函式
    const submit_Create = ( data : useForm_Plan_Form ) => { 

        // 轉換欄位 
        const obj_Plan = columns_Covert_Plan( data ) ;

        
        // 驗證是否重複
        const plan = data.management_plan_name ;  // 所輸入第一層分類
        let isDuplicate = false ;
        
        current_Plans.forEach( x => {

            if( x.name === plan ){

                alert( '已經存在此自訂方案名稱，請改用其他名稱' ) ;
                methods.setValue( 'management_plan_name' , '' ) ;
                isDuplicate = true;
                return ; // 跳出循環，不繼續執行後續循環

            }

        }) ;

        // 沒有重複，才新增
        if( !isDuplicate ){

            // 新增種類
            create_Plan( obj_Plan ) ;

            // 清空輸入框
            methods.setValue(  'management_plan_name'   , '' ) ;
            methods.setValue(  'management_plan_count'  , '' ) ;
            methods.setValue(  'management_plan_period' , '' ) ;
            methods.setValue(  'management_plan_note'   , '' ) ;  

        }

    }

    
    // 封裝 _ onSubmit 
    const onSubmit = useOnSubmit_Edit< useForm_Plan_Form >( submit_Create ) ; 
     
    return {  methods , onSubmit  }





}


// 新增 _ 自訂方案 : 內容 ( 第二層級 ) 
export const useForm_Provider_Create_Plan_Content = ( current_Plan_Id : string , all_Plan_Contents : any[] , plna_Count : number  ) => {


     // 封裝 _ useForm() 
     const methods  = useForm_Edit< useForm_Plan_Content_Form >( schema_Management_Plan_Second_Class ) ;

     // 新增函式
     const create_Plan_Content = useCreate_Plan_Content() ;
     
     // 提交新增函式
     const submit_Create = ( data : useForm_Plan_Content_Form ) => { 
 
         
         // 驗證是否重複
         const plan_content = data.management_plan_content_name ;  // 所輸入第二層分類
         let isDuplicate = false ;
         
         all_Plan_Contents.forEach( x => {
 
             if( x.content === plan_content ){
 
                 alert( '已經存在此類別，請改用其他名稱' ) ;
                 methods.setValue( 'management_plan_content_name' , '' ) ;
                 isDuplicate = true;
                 return ; // 跳出循環，不繼續執行後續循環
 
             }
 
         }) ;


         if( all_Plan_Contents.length >= plna_Count ){

             alert( `此方案使用次數為 : ${ plna_Count } 次，無法再新增方案項目` ) ;
             methods.setValue(  'management_plan_content_name' , '' ) ;
             return false ;

         }


 
         // 沒有重複，才新增
         if( !isDuplicate ){
 
             // 新增種類
             create_Plan_Content( { plan_id : current_Plan_Id , content : data.management_plan_content_name } ) ;
 
             // 清空輸入框
             methods.setValue(  'management_plan_content_name' , '' ) ;
 
         }
 
     }
 
     // 封裝 _ onSubmit 
     const onSubmit = useOnSubmit_Edit< useForm_Plan_Content_Form >( submit_Create ) ; 
      
     return { methods , onSubmit }


}



// 新增 _ 自訂方案 : 價格 ( 第一層級 )
export const useForm_Provider_Create_FirstClass_PlanPrice = ( first_Class : any ) => {




    
    // 封裝 _ useForm() 
    const methods = useForm_Edit< useForm_PlanPrice_FristClass_Form >( schema_Management_Plan_Price_First_Class ) ;

    // 新增函式
    const create_Price = useCreate_Service_Price() ;

    // 修改函式 
    const update_Price = useUpdate_Service_Price() ;


    // // 提交新增函式
    // const submit_Create = ( data : useForm_PlanPrice_FristClass_Form ) => { 

    //     const first_Class_Id     = first_Class?.id ;                 // 服務 id
    //     const service_Price_Obj  = first_Class?.service_price[ 0 ] ; // 服務價格物件
    //     const service_Price_Id   = service_Price_Obj?.id ;           // 服務價格 id

    //     if( !first_Class_Id ){ alert( '請點選 _ 第一層分類項目' ) ; return false ; }

    
    //     // 價格存在 --> 修改
    //     if( service_Price_Obj ){


    //         update_Price( {   
    //                           id         : service_Price_Id ,
    //                           service_id : first_Class_Id , 
    //                           price      : data.management_service_price_first_class 
    //                       } as any ) ;

    //         methods.setValue( 'management_service_price_first_class' , '' ) ; 


    //         return false ;

    //     }


    //     // 價格不存在 --> 新增
    //     create_Price({ 
    //                     service_id : first_Class_Id , 
    //                     price      : data.management_service_price_first_class 
    //                  }) ;

    //     methods.setValue( 'management_service_price_first_class' , '' ) ;              
       
    // }

    // // 封裝 _ onSubmit 
    // const onSubmit = useOnSubmit_Edit< useForm_PlanPrice_FristClass_Form >( submit_Create ) ; 


    // return { methods , onSubmit }





}


// 新增 _ 自訂方案內容 : 價格 ( 第一層級 )
export const useForm_Provider_Create_SecondClass_PlanPrice = ( first_Class : any ) => {





}


// 新增 _ 商品
export const useForm_Provider_Create_Product = () => {

    
     // 提交新增函式
     const submit_Create = ( data : any ) => {
     
        // console.log( 'Quill --- ' , editorContent ) ;

        const formData = new FormData() ;

        // 將上傳的圖片，添加 ( append ) 到 FormData：
        for( const key in data ){
            formData.append( key, data[ key ] );
        }

        // if( uploadedFiles ){

        //     uploadedFiles.forEach(( file , index ) => {
        //         formData.append( `image_${index}`, file );
        //     });

        // } 
        
        // console.log(Array.from(formData.entries()));
  
     } ;


     // --------


     // 封裝 _ useForm() 
     const { control , handleSubmit , formState } = useForm_Edit< useForm_Product_Form >( schema_CreateProduct ) ;


     // 封裝 _ onSubmit 
     const onSubmit = useOnSubmit_Edit< useForm_Product_Form >( submit_Create ) ;  

     const isValid = formState.isValid ;

     return { control , handleSubmit , isValid , onSubmit }

 }


// 新增 _ 帳戶
export const useForm_Provider_Create_Account = () => {


    // 新增函式
    const create_Account = useCreate_Account() ; 


    // 提交新增函式
    const submit_Create = ( data : useForm_Account_Form ) => {

        // 轉換欄位 
        const obj_Account = columns_Covert_Account( data ) ;

        // 新增帳戶
        create_Account( obj_Account ) ;

    } ;


    // ---------------------


    // 封裝 _ useForm() 
    const methods  = useForm_Edit< useForm_Account_Form >( schema_CreateAccount ) ;
   

    // 封裝 _ onSubmit 
    const onSubmit = useOnSubmit_Edit< useForm_Account_Form >( submit_Create ) ; 
    
   
    return {  methods , onSubmit  }
   

} ;



// 更新 _ 帳戶
export const useForm_Provider_Update_Account = ( account : db_Account_Columns ) => {


    // 服務訂單 _ 預設值
    const default_Account_Values : useForm_Account_Form =  {
 
                                        account_county     : account.county ,
                                        account_district   : account.district ,
                                        account_zipcode    : account.zipcode ,

                                        account_serial     : account.serial , 

                                        account_shop_brand : account.shop_brand ,
                                        account_shop_name  : account.shop_name ,
                                        account_shop_owner : account.shop_owner 

                                   } ;

    // 修改函式 
    const update_Account = useUpdate_Account() ;                                  


    // 提交新增函式
    const submit_Update = ( data : useForm_Account_Form ) => {

       // 轉換欄位 
       const obj_Account = columns_Covert_Account( data ) as any ;
       obj_Account.id    = account.id  ; 
      
       // 修改帳戶
       update_Account( obj_Account ) ;

    } ;


    // 封裝 _ useForm() 
    const methods  = useForm_Edit< useForm_Account_Form >( schema_UpdateAccount , default_Account_Values ) ;

    // 封裝 _ onSubmit 
    const onSubmit = useOnSubmit_Edit< useForm_Account_Form >( submit_Update )  ;  


    return { methods , onSubmit }


}


// 新增 _ 員工 




// 更新 _ 員工


// 新增 _ 

// 更新 _


// 新增 _ 

// 更新 _


// 新增 _ 

// 更新 _