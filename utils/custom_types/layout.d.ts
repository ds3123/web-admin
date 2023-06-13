
import type { ReactNode } from 'react';



// @ 版面相關

// 擴充新增 .getLayout
type NextPageWithLayout = NextPage & {

    getLayout?: ( page: ReactElement) => ReactNode
}
  
type AppPropsWithLayout = AppProps & {

    Component: NextPageWithLayout

}

// ---------------------

type T_Section = {

    children : ReactNode ;
  
}

type T_Header = {

    placeholder : string ;
  
}


type T_Submit_Button = {


    is_valid : boolean ;

    btn_name : string ; 
 
 }


// 各類別 ( Ex. 客人、寵物、服務 ) 表單
interface I_Table {


    title_Columns   : string[] ;  // 標題欄位

   
    query_Key       : any ;       // 查詢 key ( React Query )
    query_Api       : any ;       // 查詢 api ( React Query )
     

}

// 加上 children 
interface I_Table_Children extends I_Table {

    children : ( value : any ) => JSX.Element ; 

 }




interface I_Img{

    img_Title     : string ;  // 圖片標題
    img_Subtitle? : string ;  // 圖片副標題
    img_Alt?      : string ;
    img_Url       : string ; 

}

// -----------------------

// 可左右滾動圖片卡
interface I_Scroll_Card extends I_Img {

    // 以下是為了配合教學 API 回傳的屬性( 之後自己做的 API 再刪掉 )
    img   : string ;
    title : string ;

}

// 小圖卡
interface I_Small_Card extends I_Img {

    // 以下是為了配合教學 API 回傳的屬性( 之後自己做的 API 再刪掉 )
    img      : string ;
    title    : string ;
    distance : string ;
    location : string ;

}

// 大圖卡( 左側有文字、按鈕 )
interface I_Large_Card extends I_Img {

    button_Text : string ;  // 按鈕上的文字

}

//  商品圖卡 ( 上圖、下方文字資訊 )
interface I_Bottom_Info_Card extends I_Img {

     // 以下是為了配合教學 API 回傳的屬性( 之後自己做的 API 再刪掉 )
    img   : string ;
    title : string ;

}



// Banner ( 左邊文字，右邊圖片 )
interface I_Banner_Right_Image extends I_Img {

    img_Subtitle : string ;
    
 }


// Banner ( 中間有文字、按鈕 )
interface I_Banner_Center_Info extends I_Img {

    button_Text : string ;  // 按鈕上的文字
    
    
    
 }

 
 // Banner ( 重用 _ 父元件 )
 interface I_Parent_Banner {

    img_Url   : string ; 
    img_Alt?  : string ;

    children? : any ;

 }


 // Banner ( 左邊圖片，右邊文字 )
 interface I_Parent_Left_Image extends I_Img  {

    children? : any ;

 }


 // Banner ( 右邊圖片，左邊文字 )
 interface I_Parent_Right_Image extends I_Img  {

    children? : any ;

 }




 


