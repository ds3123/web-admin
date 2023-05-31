// components/CustomDateInput.tsx
import React from 'react';
import { Controller } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { I_Custom_DateInput } from '@/utils/custom_types/form';


const DateInput = <T,>({ control , name , label, required } : I_Custom_DateInput<T> ) => {

  const today = new Date();


  return <div className="mt-5">

            { required && <b className="relative -top-3 text-red-500 text-xl"> * </b> }

            <label htmlFor = { name as string } className="mb-2 text-base">
                {label} :
            </label>

            <Controller control = { control as any }
                        name    = { name as string }
                        render  = {({ field: { ref, ...field } }) => (

                                        <DatePicker {...field }
                                                        id        = { name as string }
                                                        selected  = { field.value || today } // 預設顯示今日
                                                        onChange  = { ( date ) => field.onChange( date ) }
                                                        className = "flex w-full items-center mt-1 h-12 border rounded-lg py-2 md:shadow-sm p-4 text-base" />
                                    
                                    )} />


        </div>
  
};

export default DateInput ;
