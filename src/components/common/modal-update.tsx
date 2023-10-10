'use client'

import { useState, useRef, Fragment } from 'react'
import type { StaticImageData } from 'next/image'
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'

// interface ModalPopupProps {
//     thumb?: string
//     width: number
//     height: number
// }

export default function ModalPopup(
    //     {
    //     thumb,
    //     width,
    //     height,
    // }: ModalPopupProps
) {
    const [modalOpen, setModalOpen] = useState<boolean>(true)

    return (
        <Transition show={modalOpen} as={Fragment} >

            <Dialog open={modalOpen} onClose={() => setModalOpen(false)}
                className="fixed inset-0 z-10 overflow-y-auto"
            >
                <div className="min-h-screen px-4 text-center">
                    {/* Modal backdrop */}
                    <Transition.Child
                        className="fixed inset-0 z-[99999] bg-black bg-opacity-75 transition-opacity"
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition ease-out duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        aria-hidden="true"
                    />
                    {/* End: Modal backdrop */}

                    {/* Modal dialog */}
                    <Transition.Child
                        className="fixed inset-0 z-[99999] overflow-hidden flex items-center justify-center transform px-4 sm:px-6"
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ttransition ease-out duration-200"
                        leaveFrom="oopacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        {/* <div className="relative flex justify-center items-center mb-12 md:mb-14 xl:mb-16 pb-0.5 md:pb-0 lg:pb-1 xl:pb-0 md:-mt-2.5" data-aos="fade-up" data-aos-delay="200"> */}
                        <div className="max-w-6xl mx-auto h-full flex items-center">

                            <Dialog.Panel className="w-full max-w-md rounded-lg bg-white text-center">
                                <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                    <Dialog.Title
                                        as="h2"
                                        className="text-center text-2xl leading-6 text-gray-900"
                                    >&#128680; Important App Update! &#128680;</Dialog.Title>
                                    <div className="mt-2">
                                        <p className="text-center text-lg text-gray-800 border-t pt-2">
                                            Checkout currently disabled &#128546;
                                        </p>
                                    </div>
                                    {/* <Dialog.Description>
                                        Checkout currently disabled
                                    </Dialog.Description> */}

                                    <div className="mt-2">
                                        <p className="text-md text-gray-800 pt-2">
                                            We have recently terminated our payment processing partner and are working on implementing a new solution. Our checkout is currently not functional due to this.
                                            If you would still like to place an order in the meantime, please send a messsage <strong><a href="contact-us">here</a></strong> with your order details <strong>(product name, size, and shipping address)</strong> and we will send you an invoice via email.
                                        </p>
                                        <p>We apologize for any inconvenience and hope to fully operational soon.</p>
                                        <p>- Prime Orca &#128011;</p>
                                    </div>
                                    <div className="mt-4 text-center">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center px-4 py-2 text-sm text-green-900 bg-green-100 border border-transparent rounded-md hover:bg-green-200 duration-300"
                                            onClick={() => setModalOpen(false)}                                        >
                                            Got It
                                        </button>
                                    </div>
                                </div>

                            </Dialog.Panel>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition>
    )
}


// export default function ModalVideo({
//     thumb,
//     width,
//     height,
// }: ModalPopupProps) {
//     const [modalOpen, setModalOpen] = useState<boolean>(true)
//     const videoRef = useRef<HTMLVideoElement>(null)

//     return (
//         <div>

//             {/* Video thumbnail */}
//             <div>
//                 <div className="relative flex justify-center items-center mb-12 md:mb-14 xl:mb-16 pb-0.5 md:pb-0 lg:pb-1 xl:pb-0 md:-mt-2.5" data-aos="fade-up" data-aos-delay="200">
//                     <Image src={thumb} width={width} height={height} />
//                     <button className="absolute group" onClick={() => { setModalOpen(true) }} aria-label="Watch the video">
//                         <svg className="w-16 h-16 sm:w-20 sm:h-20 hover:opacity-75 transition duration-150 ease-in-out" viewBox="0 0 88 88" xmlns="http://www.w3.org/2000/svg">
//                             <defs>
//                                 <linearGradient x1="78.169%" y1="9.507%" x2="24.434%" y2="90.469%" id="a">
//                                     <stop stopColor="#EBF1F5" stopOpacity=".8" offset="0%" />
//                                     <stop stopColor="#EBF1F5" offset="100%" />
//                                 </linearGradient>
//                             </defs>
//                             <circle fill="url(#a)" cx="44" cy="44" r="44" />
//                             <path className="fill-current text-purple-600" d="M52 44a.999.999 0 00-.427-.82l-10-7A1 1 0 0040 37V51a.999.999 0 001.573.82l10-7A.995.995 0 0052 44V44c0 .001 0 .001 0 0z" />
//                         </svg>
//                     </button>
//                 </div>
//             </div>
//             {/* End: Video thumbnail */}

//             <Transition show={modalOpen} as={Fragment} afterEnter={() => videoRef.current?.play()}>
//                 <Dialog initialFocus={videoRef} onClose={() => setModalOpen(false)}>

//                     {/* Modal backdrop */}
//                     <Transition.Child
//                         className="fixed inset-0 z-[99999] bg-black bg-opacity-75 transition-opacity"
//                         enter="transition ease-out duration-200"
//                         enterFrom="opacity-0"
//                         enterTo="opacity-100"
//                         leave="transition ease-out duration-100"
//                         leaveFrom="opacity-100"
//                         leaveTo="opacity-0"
//                         aria-hidden="true"
//                     />
//                     {/* End: Modal backdrop */}

//                     {/* Modal dialog */}
//                     <Transition.Child
//                         className="fixed inset-0 z-[99999] overflow-hidden flex items-center justify-center transform px-4 sm:px-6"
//                         enter="transition ease-out duration-200"
//                         enterFrom="opacity-0 scale-95"
//                         enterTo="opacity-100 scale-100"
//                         leave="ttransition ease-out duration-200"
//                         leaveFrom="oopacity-100 scale-100"
//                         leaveTo="opacity-0 scale-95"
//                     >
//                         <div className="max-w-6xl mx-auto h-full flex items-center">
//                             <Dialog.Panel className="w-full max-h-full aspect-video bg-black overflow-hidden">
//                                 {/* <video ref={videoRef} width={videoWidth} height={videoHeight} loop controls>
//                                     <source src={video} type="video/mp4" />
//                                     Your browser does not support the video tag.
//                                 </video> */
//                                 }
//                                 <iframe width="1060" height="615" src="https://www.youtube.com/embed/jzCcXDhdplw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
//                             </Dialog.Panel>
//                         </div>
//                     </Transition.Child>
//                     {/* End: Modal dialog */}

//                 </Dialog>
//             </Transition>

//         </div>
//     )
// }