

//import '@testing-library/jest-dom' ;

// RTL 延伸套件
import '@testing-library/jest-dom/extend-expect' ;

 
// @ Mock Service Worker 設定
import { server } from "./utils/msw/server" ;




// Mock Service Worker 監聽 Server 生命週期 ( 先註解，改由 _ 個別測試檔案中設定 )
beforeAll( () => server.listen( { onUnhandledRequest : "error" } ) ) ;
afterEach( () => server.restoreHandlers() ) ;
afterAll( () => server.close() ) ;


// -----------------------


// @ 隱藏 _ 執行 Jest 後，於 console 出現的特定類型訊息

/*

  # 利用 global ， 定義 _ 全域可供測試使用的函式 
    
     Ex. console          ( global.console )
         renderWithRouter ( global.renderWithRouter ) 

*/


global.console = {
    ...console,
    // uncomment to ignore a specific log level
    // log: jest.fn(),
    // debug: jest.fn(),
    // info: jest.fn(),
     warn: jest.fn(),        // 隱藏 _ 黃色警告訊息
    // error: jest.fn(),
  };