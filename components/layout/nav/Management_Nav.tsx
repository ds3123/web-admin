
import { FC } from 'react' ;
import Link from "next/link" ;
import { useRouter } from 'next/router' ;


// ＠ 管理區導覽選項
const Management_Nav : FC = () => {


    const { action } = useRouter().query ; 

    
    return <div className = "flex" >

              <Link href = '/management/finance' >  <p className = { `nav_btn ${ action === 'finance' ? 'bg-blue-400 text-white' : ''  }` } > 財務報表 </p> </Link>
              <Link href = '/management/setting' >  <p className = { `nav_btn ${ action === 'setting' ? 'bg-blue-400 text-white' : ''  }` } > 分類價格 </p> </Link>
              {/* <Link href = '/management/product' >  <p className = { `nav_btn ${ action === 'product' ? 'bg-blue-400 text-white' : ''  }` } > 商品設定 </p> </Link> */}
              <Link href = '/management/account' >  <p className = { `nav_btn ${ action === 'account' ? 'bg-blue-400 text-white' : ''  }` } > 帳號設定 </p> </Link>
              <Link href = '/management/employee' > <p className = { `nav_btn ${ action === 'employee' ? 'bg-blue-400 text-white' : ''  }` } > 員工設定 </p> </Link>
             
           </div>

} ;

export default Management_Nav
       