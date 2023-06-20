import React,{useState} from 'react'

const MaterialTab = () => {
               const [toggleState, setToggle] = useState(1);

               const toggleTab = (index) => {
                              setToggle(index);
               }
  return (
               <div className='scroll bg-white p-5 w-[100%] h-[78vh] overflow-scroll rounded-2xl'>
               <div className='block-tabs flex mb-2 cursor-pointer'>
                              <div className={toggleState === 1 ? 'active-tab py-4 px-10' : 'tab bg-light-gray py-4 px-10'} onClick={() => toggleTab(1)}>E-Notes</div>
                              <div className={toggleState === 2 ? 'active-tab py-4 px-10' : 'tab bg-light-gray py-4 px-10'}  onClick={() => toggleTab(2)}>E-Assignment</div>
                              <div className={toggleState === 3 ? 'active-tab py-4 px-10' : 'tab bg-light-gray py-4 px-10'}  onClick={() => toggleTab(3)}>Result</div>
                              <div className={toggleState === 4 ? 'active-tab py-4 px-10' : 'tab bg-light-gray py-4 px-10'}  onClick={() => toggleTab(4)}>Settings</div>
               </div>

               <div className='content-tabs'>
                              <div className={toggleState === 1 ? ' content active-content' : 'tabs'}>
                                             <h1 className='text-2xl my-5'>E-Notes</h1>
                                             <hr/>
                                             <p>
                                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, tempora omnis fugit repudiandae 
                                                            laboriosam atque quibusdam nam vero magnam hic voluptate. Voluptate, doloribus. Temporibus ut 
                                                            assumenda rem harum! Doloremque, cupiditate?
                                             </p>
                              </div>

                              <div className={toggleState === 2 ? ' content active-content' : 'tabs'}>
                                             <h1 className='text-2xl my-5'>E-Assignment</h1>
                                             <hr/>
                              </div>

                              <div className={toggleState === 3 ? ' content active-content' : 'tabs'}>
                                             <h1 className='text-2xl my-5'>Result</h1>
                                             <hr/>
                              </div>

                              <div className={toggleState === 4 ? ' content active-content' : 'tabs'}>
                                             <h1 className='text-2xl my-5'>Settings</h1>
                                             <hr/>
                                             <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, tempora omnis fugit repudiandae 
                                                            laboriosam atque quibusdam nam vero magnam hic voluptate. Voluptate, doloribus. Temporibus ut 
                                                            assumenda rem harum! Doloremque, cupiditate?
                                             </p>
                              </div>

               </div>
    </div>
  )
}

export default MaterialTab