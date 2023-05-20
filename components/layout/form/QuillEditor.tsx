/* eslint-disable react-hooks/exhaustive-deps */
import 'react-quill/dist/quill.snow.css' ;
import dynamic from 'next/dynamic' ;
import { useState , useEffect , useRef } from 'react' ;


/*

   @ 目前沒用到，確認無用後刪除 2023.04.07

*/


const QuillNoSSRWrapper = dynamic( import('react-quill') , {	

	ssr     : false ,
	loading : () => <p> Loading ... </p> ,

}) ;



const QuillEditor = () => {


  // 編輯器中的值
  const [ value , set_Value ] = useState( '' ) ;


  // 工作列選項
  const modules = {
    
      toolbar: [

        [{ header: '1' }, { header: '2' }, { font: [] }],
        [{ color: [] }] ,
        [{ size: [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [
          { list: 'ordered' },
          { list: 'bullet' },
          { indent: '-1' },
          { indent: '+1' },
        ],
        [{ align: [] }],
        ['link', 'image', 'video'],
        ['clean'],

      ],

      clipboard: {
        // toggle to add extra line breaks when pasting HTML:
        matchVisual: false,
      }




  }

  // 樣式選項
  const formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'video',
  ]

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
      formData.append('image', file);

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

  const handleImageInserted = async (file : any ) => {

    // 處理圖片上傳
    const imageUrl = await handleImageUpload(file);
    // 將圖片 URL 插入編輯器
    const editor = quillRef.current.getEditor();
    const range = editor.getSelection(true);
    editor.insertEmbed(range.index, 'image', imageUrl);

  };



  const quillRef = useRef() as any  ;

  const handleChange = (value : any ) => {

    set_Value( value ) ;
  
  } ;




  return <>

             <QuillNoSSRWrapper modules  = { modules } 
                                formats  = { formats } 
                                theme    = "snow" 
                                value    = { value }
                                onChange = { handleChange }
                                
                               />
         </>

} ;


export default QuillEditor 
       

