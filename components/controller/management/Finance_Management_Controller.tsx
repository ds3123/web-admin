
import { FC } from 'react' ;
import Head from "next/head" ;
import Link from 'next/link'
import { BsThreeDotsVertical } from "react-icons/bs" ;
import { AiFillGift } from "react-icons/ai" ;
import { data } from "@utils/data/fake_customer_data" ;
import { Page , Section_Banner , Section_Content , Page_Table , Management_Nav } from "@layout/index" ;



// @ 頁面 : 財務
const Finance_Management_Controller : FC = () => {


    return <Page> 

                { /* 區塊 Banner */ }
                <Section_Banner>

                   <Management_Nav />

                </Section_Banner>
                
                <Section_Content>
                
                   財務

                </Section_Content>
    
           </Page>

} ;


export default Finance_Management_Controller
       