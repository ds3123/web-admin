
import * as yup from "yup"



// 新增 _ 帳戶
export const schema_CreateAccount = yup.object().shape({


   account_shop_name  : yup.string().required( "須填寫 : 店名" ),
   account_shop_owner : yup.string().required( "須填寫 : 負責人姓名" ),

});




// 更新 _ 帳戶
export const schema_UpdateAccount = yup.object().shape({


   account_shop_name  : yup.string().required( "須填寫 : 店名" ),
   account_shop_owner : yup.string().required( "須填寫 : 負責人姓名" ),

});
