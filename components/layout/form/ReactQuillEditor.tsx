/* eslint-disable react-hooks/exhaustive-deps */

import { FC , useState , useEffect  , useRef , useMemo , forwardRef } from 'react' ;

import Compressor from 'compressorjs';
import { v4 as uuidv4 } from 'uuid' ;

import Quill ,  { ReactQuillProps } from "react-quill";
import dynamic from 'next/dynamic' ;




/*

    動態導入 react-quill --> 解決 document is not defined
 
*/
const ReactQuill = typeof window === "object" ? require( 'react-quill' ) : () => false ;  // 沒有作用 ？
// const Component = dynamic(import( 'react-quill' ));

// const ReactQuill = forwardRef(( props : any , ref : any )  => (
   
//      <Component {...props} forwardedRef = { ref } />

//   )) ;

// ReactQuill.displayName = 'react-quill' ;


type TQuill = {

  onContentChange : ( value : string ) => void ;  // 回傳父元件資料方法
  editData?       : string ;                      // 編輯模式下，所要預設的資料

}



// @ React
const ReactQuillEditor : FC< TQuill > = ( { onContentChange , editData }  ) => {
  
      // 編輯器內容
      const [ edit_Content , set_Edit_Content ] = useState( '' ) ;

      // 參考 Ｑuill 物件
      const quillRef = useRef< ReactQuillProps | null >( null ) ;


      // 設定資料
      const handle_Content = ( value : string ) => {

         set_Edit_Content( value ) ;  // 設定 state 
         onContentChange( value ) ;   // 回傳資料給父元件

      } 

    

      const handleImageUpload = async (file:any) => {

        try {
          // 檢查圖片大小和格式
          const fileSize = file.size / 1024 / 1024; // 將檔案大小轉換成 MB
          const allowedFileTypes = ['image/jpeg', 'image/png', 'image/gif']; // 允許的檔案類型
          const allowedFileSize = 5; // 允許的最大檔案大小 (MB)
    
          if (fileSize > allowedFileSize) {
            alert(`File size exceeds ${allowedFileSize} MB.`);
            return;
          }
    
          if (!allowedFileTypes.includes(file.type)) {
            alert(`File type not allowed. Allowed types: ${allowedFileTypes.join(', ')}`);
            return;
          }
    
          // 使用 FormData 構造表單數據
          const formData = new FormData();
          formData.append('image', file );
    
          // 發送 post 請求到 API
          const response = await fetch('/api/upload-image', {
            method: 'POST',
            body: formData,
          });
    
          if (!response.ok) {
            alert('Image upload failed.');
            return;
          }
    
          // 取得圖片的 URL
          const imageUrl = await response.json();
          return imageUrl;

        } catch (error) {

          console.error('Error uploading image:', error);

        }

      };
    
      const handleImageInserted = async(file : any ) => {
    
        // 處理圖片上傳
          const imageUrl = await handleImageUpload(file);

    
    
        // 將圖片 URL 插入編輯器
        // const editor = quillRef.current.getEditor?.();
        // const range = editor.getSelection(true);
        // editor.insertEmbed(range.index, 'image', imageUrl);
    
      } ;

      // 壓縮圖片
      const fileComress = ( file : any ) => {
      
          return new Promise( ( resolve , reject ) => {

                        // 調用 Compressor 壓縮圖片 
                        new Compressor( file , { 
                                                    file      : 'File' ,  
                                                    quality   : 0.5 ,  // 原有圖片一半大小
                                                    maxWidth  : 640 ,  // 最大寬度
                                                    maxHeight : 640 ,  // 最大高度
                                                    success( file : any ){
                                                        
                                                      return resolve({ 
                                                                        success : true ,
                                                                        file    : file
                                                                      })

                                                    } ,
                                                    error( err : any ){

                                                      return resolve({ 
                                                                        success : false ,
                                                                        message : err.message
                                                                      })

                                                    }
                                                } as any ) ;  

                  }) 
      
      } ;
      

      // 上傳圖片至 Imgur
      const upload_To_Imgur = ( file : any ) => {

        return new Promise(

                    ( resolve , reject ) => {

                        const xhr = new XMLHttpRequest() ;

                        xhr.open( 'POST' , 'https://api.imgur.com/3/image' );
                        xhr.setRequestHeader( 'Authorization' , 'Client-ID cd1171acdc9d048' ) ; // 驗證 Imgurl 的 Clinet ID

                        const data = new FormData() ;
                        data.append( 'image' , file ) ;

                        xhr.send( data ) ;

                        // 成功
                        xhr.addEventListener( 'load' , () => {

                            const response = JSON.parse( xhr.responseText ) ;
                            resolve( response ) ;

                        }) ;

                        // 錯誤
                        xhr.addEventListener( 'error' , () => {

                            const error = JSON.parse( xhr.responseText ) ;
                            console.log( error )
                            reject( error ) ;

                        });

                    }

              ) ;

      }


      // 上傳圖片
      const quiiImageCallback = () => {
      
          // 建立一個 <input type = 'file' accept = 'image/*' />
          const input = document.createElement( 'input' ) ;
          input.setAttribute( 'type' , 'file' ) ;      // 為 file 類型 
          input.setAttribute( 'accept' , 'image/*' ) ; // 僅接收圖片
          input.click() ;                              // 自動點選 ?
          
          input.onchange = async()=>{

              if( input.files ){

                const file = input.files[0] ;

                // 壓縮圖片  
                // const compressState = await fileComress( file ) as any ;
                
                // 上傳圖片至 Imgur 並取得回傳的 url
                const imgurData     = await upload_To_Imgur( file ) as any ;
                const uploadImgUrl  = imgurData?.data?.link  ; // 新增圖片後，所回傳 URL

                // 將圖片( url ) 插入 Quill 編輯器中 
                if( quillRef.current ){

                  const quillInstance = quillRef.current.getEditor?.() ; 

                    if( quillInstance && uploadImgUrl ){

                      // 轉換 url _ 解決 Imgur ( 在本機 127.0.0.1 ) 回傳時，狀態碼為 403 ( https://blog.csdn.net/tiantang_1986/article/details/83748782  )
                      const newUrl = uploadImgUrl.replace( /^(http)[s]*(\:\/\/)/ , 'https://images.weserv.nl/?url=' )

                      const range  = quillInstance.getSelection( true ) ;
                      quillInstance.insertEmbed( range.index , 'image' , newUrl ) ;  // 圖片插入位置為 cursor 處

                    }

                }
                    

              }
              

          }  


      } ;

      
      const modules = useMemo(

          () => ({

          toolbar: 
          
              {
                  container : [

                      [{ font: [] }],
                      [{ size: ["small", false, "large", "huge"] }], // custom dropdown
                      ["bold", "italic", "underline", "strike"], // toggled buttons
                  
                      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
                      [{ script: "sub" }, { script: "super" }], // superscript/subscript
                      [{ header: 1 }, { header: 2 }], // custom button values
                      ["blockquote", "code-block"],
                      [{ list: "ordered" }, { list: "bullet" }],
                  
                      [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
                      [{ direction: "rtl" }], // text direction
                  
                      [{ align: [] }],
                      ["link", "image"],
                      ["clean"], // remove formatting button

                  ],
                  
                  // 自訂處理函式
                  handlers : { 
                                image : quiiImageCallback  // 圖片處理 ( Ex. 上傳圖片 )
                              } , 
              },

          }) , 

      [] ) ;
      

      // Quill 設定屬性
      const quill_Props = {

        value    : edit_Content ,
        modules  : modules ,
        onChange : handle_Content

      }

    
      // 編輯模式下，設定預設資料 
      useEffect( () => {
        
        if( editData ) set_Edit_Content( editData ) ;
         
      } , [ editData ] ) ;


  
    return <>
    
              <ReactQuill ref = { quillRef } { ...quill_Props } className = "h-80 mb-10" />

           </>


} ;


export default ReactQuillEditor
       




