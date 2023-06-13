
// # 函式 _ 新增 / 更新
import { useCreate_Employee } from '@rq_hooks/employee/useCreateEmployee'
import { useUpdate_Employee } from '@rq_hooks/employee/useUpdateEmployee'


// # 資料類型
import { useForm_Employee_Form ,
         db_Employee_Columns
   } from '@/utils/custom_types/form';


// # 欄位轉換
import { columns_Covert_Employee } from '@utils/convert/column_Convert_Database' ;



// --------------------



// 新增 _ 員工
export const useForm_OnSubmit_Create_Empolyee = () => {

     // 新增函式
     const create_Employee = useCreate_Employee() ; 

     // 提交新增函式
     const submit_Create = ( data : useForm_Employee_Form ) => {

        // 轉換欄位 
        const obj_Employee = columns_Covert_Employee( data ) ;

        // 新增帳戶
        create_Employee( obj_Employee ) ;

     } ;

     return submit_Create


} ;



// 更新 _ 員工
export const useForm_OnSubmit_Update_Empolyee = ( employee : db_Employee_Columns ) => {

    // 修改函式 
    const update_Employee = useUpdate_Employee() ;  

    // 提交新增函式
    const submit_Update = ( data : useForm_Employee_Form ) => {

      // 轉換欄位 
      const obj_Employee = columns_Covert_Employee( data ) as any ;

      // 新增 _ 員工資料表 id 
      obj_Employee.id = employee.id  ; 

      // 新增客戶
      update_Employee( obj_Employee ) ;

    } ;

    return submit_Update


}