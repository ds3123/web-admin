
import { FC } from 'react' ;
import Head from "next/head" ;
import Link from 'next/link'
import { BsThreeDotsVertical } from "react-icons/bs" ;
import { AiFillGift } from "react-icons/ai" ;
import { data } from "@utils/data/fake_customer_data" ;
import { Page , Section_Banner , Section_Content , Page_Table , Management_Nav } from "@layout/index" ;



// @ 頁面 : 商品
const Product_Management_Controller : FC = () => {


    return <Page> 

                { /* 區塊 Banner */ }
                <Section_Banner>

                   <Management_Nav />

                </Section_Banner>

                <Section_Content>
                
                  商品

                </Section_Content>

                
    
           </Page>

} ;


export default Product_Management_Controller