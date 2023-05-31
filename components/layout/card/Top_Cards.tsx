

// 範本 _ 尚未使用 2023.05.28

const Top_Cards = () => {

  return <div className="mt-2 grid lg:grid-cols-5 gap-2 p-2">
            
           <div className = "lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg"> 
                 <div className = "flex flex-col w-full pb-4" >
                    <p className="text-2xl font-bold"> $7,834 </p>   
                    <p className="text-gray-600"> Daily Revenue </p>   
                 </div>
                 <p className="bg-green-200 flex justify-center items-center p-2 rounded-lg">
                   <span className="text-green-700 text-lg"> +18% </span>   
                 </p>   
           </div>

           <div className = "lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg"> 
                 <div className = "flex flex-col w-full pb-4" >
                    <p className="text-2xl font-bold"> $1,237,834 </p>   
                    <p className="text-gray-600"> YTD Revenue </p>   
                 </div>
                 <p className="bg-green-200 flex justify-center items-center p-2 rounded-lg">
                   <span className="text-green-700 text-lg"> +11% </span>   
                 </p>  
           </div>

           <div className = "bg-white flex justify-between w-full border p-4 rounded-lg"> 
                 <div className = "flex flex-col w-full pb-4" >
                    <p className="text-2xl font-bold"> $12,834 </p>   
                    <p className="text-gray-600"> Customers </p>   
                 </div>
                 <p className="bg-green-200 flex justify-center items-center p-2 rounded-lg">
                   <span className="text-green-700 text-lg"> +33% </span>   
                 </p>   
           </div>
           
         </div>

} ;

export default Top_Cards
       