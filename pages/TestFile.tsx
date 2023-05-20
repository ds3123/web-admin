import { useState } from 'react' ;


export default function Home(){


  const [ showForm , setShowForm ]           = useState( false ) ;
  const [ formAnimation , setFormAnimation ] = useState( '' ) ;


  // 點選按鈕 
  const toggleForm = () => {

      if( !showForm ){

          setFormAnimation( 'animate-slide-in' ) ;
          setShowForm( true ) ;

      }else{

          setFormAnimation( 'animate-slide-out' ) ;
          setTimeout( () => setShowForm( false ) , 300 ) ;

      }

  };

  return (
    <div className="h-screen">

        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={toggleForm} >
            新增
        </button>

        { showForm && ( 
            
                        // 遮罩
                        <div className = "fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-end" onClick = { toggleForm } >

                              {/* 右側面板 */}
                              <form className={`w-2/3 h-screen bg-green-400 ${formAnimation}`} onClick = { e => e.stopPropagation() } >

                                  { /* 在此處放置您的表單元素 */ }

                              </form>

                        </div> 
                        
                      )
        }
        </div>
  );
}
