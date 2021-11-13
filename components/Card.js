import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import DateFormatter from '../components/date-formatter'


export default function Card({ title, thumbnail, created_at ,link,content, categories}) {

   let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

      function countLines() {
  
            // Get element with 'content' as id                            
            var el = 
                document.getElementsByClassName('title');
  
            // Get total height of the content    
            var divHeight = el.offsetHeight
  
            // object.style.lineHeight, returns 
            // the lineHeight property
            // height of one line 
            var lineHeight = 
                parseInt(el.style.lineHeight);
  
            var lines = divHeight / lineHeight;
            // alert("Lines: " + );
            return lines
        }

  return (
     <>
     <button onClick={openModal} oncl>
        <div className="card hover:border-gray-100 text-left" >
            
          <div className="card-body">
              <div className="user">
              <img src="https://i.pinimg.com/736x/97/47/80/974780477b469051cbee9d81a020d52c.jpg" alt="user" className="mt-auto" />
              <div className="user-info font-bold">
                <h4>Okezone.com</h4>
                <small>{categories}</small>
              </div>
            </div>
            <h4 className="text-white font-bold mt-3 title" >{title}  </h4>
            <span>
              <DateFormatter dateString={created_at}/>
            </span>
          </div>
           <div className="card-img ">
            <img src={thumbnail} alt="rover" />
            </div>
        </div>
        </button>


           <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto	" 
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            > 
              <div className="inline-block w-full max-w-4xl	 p-6 my-8 overflow-hidden text-left align-middle transition-all transform shadow-xl rounded-2xl " style={{backgroundColor:"#1C1F26",border: "1px solid #363636"}}>
                <Dialog.Title
                  as="h1"
                  className="text-lg font-medium  text-white font-bold"
                >
                  {title}
                </Dialog.Title>
                <hr className="mt-2"/>
                <div className="mt-4">
                  <div className="text-sm text-white" dangerouslySetInnerHTML={{ __html: content }}>
                  </div>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                     <a
                    href={link} target="_blank"
                    className="inline-flex justify-center float-right px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeModal}
                  >
                    Open link
                  </a>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
