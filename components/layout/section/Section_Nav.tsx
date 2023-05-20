
import { FC , useState  } from 'react' ;


interface Nav {

    children : ( value : any ) => JSX.Element ; 
    options  : string[] ;

}


type Action = '服務' | '寵物' ;



// 第二層導覽選項列
const Section_Nav : FC < Nav > = ( { options , children } ) => {


    const [ action , set_Action ] = useState< Action >( options[0] as Action ) ;

    const click_Tag = ( x : Action ) => set_Action( x ) ;


    return <div>

              { /* 選項頁籤 */ } 
              <div className = "flex">

                {
                   options.map( ( x  , y ) => 
                                    <p role = 'listitem' key = { y } onClick = { () => click_Tag( x as Action ) }  className = { `nav_btn cursor-pointer ${ action === x ? 'bg-blue-400 text-white' : ''  }` } >
                                        { x } 
                                    </p>    
                              )
                }

              </div>

              { /* 頁籤內容 */ }
              <div className = "p-10">

                { children( action )  }

              </div>
             
           </div>

} ;


export default Section_Nav
       