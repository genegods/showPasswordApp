import React, {useState} from 'react'
import {AiFillEyeInvisible, AiFillEye} from 'react-icons/ai'

const PasswordApp = () => {
    const [open, setOpen] = useState(false)

    // handle toggle 
    const toggle = () =>{
        setOpen(!open)
    }

    return (
      <React.Fragment>
          <section>
              <div className="w-4/5 mx-auto mt-52 relative md:w-2/5">
                  <div className='w-full'>
                      <input
                       type={(open === false)? 'password' :'text'}
                       placeholder="Enter your password"
                        className="w-full h-14 rounded-lg"/>
                  </div>

                  <div className='text-2xl absolute top-4 right-5'>
                      {
                          (open === false)? <AiFillEye onClick={toggle}/>:
                          <AiFillEyeInvisible onClick={toggle}/>

                      }
                      
                      
                  </div>
              </div>
          </section>
      </React.Fragment>
    )
}

export default PasswordApp
