

import { T_Section } from '@/utils/custom_types/layout';
import { FC , ReactNode } from 'react' ;


interface S_Title extends T_Section{

    icon  : ReactNode ;
    title : string ;

}

// 各類型資料表單標題
const Section_Title : FC< S_Title >= ( { icon , title , children } ) => {


    return <div data-testid = "Section_Title" className = "flex items-center col-span-4 relative" >

                { icon }
            
                <p className="text-xl ml-2"> { title } </p>

                { /* 查詢結果 */ }
                { children }

            </div>

} ;

export default Section_Title
       