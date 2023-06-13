import React from 'react';
import { Controller } from 'react-hook-form';
import { I_Custom_TimeInput , I_Custom_DateInput } from '@/utils/custom_types/form';


const TimeInput = <T,>({ control, name, label, required } : I_Custom_DateInput<T>) => {
  
  // Get the current time as a string in the format "HH:MM"
  const currentTime = new Date( ).toLocaleTimeString('en-US', {
                                                                hour12 : false,
                                                                hour   : '2-digit',
                                                                minute : '2-digit'
                                                             });

                                 

  return <div className="mt-5">

            { required && <b className="relative -top-3 text-red-500 text-xl"> * </b>}

            <label htmlFor={ name as string } className="mb-2 text-lg">
              {label} 
            </label>

            <Controller control      = { control as any }
                        name         = { name as string }
                        defaultValue = { currentTime } 
                        render       = { 
                                         ( { field } ) => <input id = { name as string } aria-required = { required } className = "flex w-full items-center mt-1 h-12 border rounded-lg py-2 md:shadow-sm p-4 text-base" 
                                                                 type      = "time" { ...field } />
                                        } />

         </div>

};

export default TimeInput;
