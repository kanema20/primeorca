import Image from 'next/image'
// import FeatImage01 from 'public/assets/images/features/feat-1.png'
// import FeatImage02 from 'public/assets/images/features/feat-2.png'
// import FeatImage03 from 'public/assets/images/features/feat-3.png'

export default function Zigzag() {
    return (
        <section>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-12 md:py-20 border-gray-800">

                    {/* Section header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                        {/* <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">Reach goals that matter</div> */}
                        <h1 className="text-xl md:text-2xl lg:text-3xl 3xl:text-3xl xl:leading-10 font-bold text-heading mb-1.5 lg:mb-2.5 2xl:mb-3 3xl:mb-3.5">We've perfected our craft, end-to-end.</h1>
                        {/* <p className="text-xl text-gray-600">We've perfected our craft, end-to-end.</p> */}
                        {/* <h4 className="text-xl xl:text-xl text-heading">Read more about us below</h4> */}

                    </div>

                    {/* Items */}
                    <div className="grid gap-20">

                        {/* 1st item */}
                        <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                            {/* Image */}
                            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={'https://po-prod.s3.us-west-1.amazonaws.com/features/factory.png'} width={540} height={405} alt="Features 01" />
                            </div>
                            {/* Content */}
                            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                                    {/* <div className="font-architects-daughter text-xl text-purple-600 mb-2">More speed. Less spend</div> */}
                                    <h4 className="text-xl md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 font-bold text-heading mb-1.5 lg:mb-2.5 2xl:mb-3 3xl:mb-3.5">Order Intake</h4>
                                    <p className="text-md text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <ul className="text-sm text-gray-600 -mb-2">
                                        <li className="flex items-center mt-2 mb-2">
                                            <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                            </svg>
                                            <span>Duis aute irure dolor in reprehenderit</span>
                                        </li>
                                        <li className="flex items-center mt-2 mb-2">
                                            <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                            </svg>
                                            <span>Excepteur sint occaecat</span>
                                        </li>
                                        <li className="flex items-center">
                                            <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                            </svg>
                                            <span>Amet consectetur adipiscing elit</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* 2nd item */}
                        <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                            {/* Image */}
                            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={'https://po-prod.s3.us-west-1.amazonaws.com/features/sizing-2.png'} width={540} height={405} alt="Features 02" />
                            </div>
                            {/* Content */}
                            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                                    {/* <div className="font-architects-daughter text-xl text-purple-600 mb-2">More speed. Less spend</div> */}
                                    <h4 className="text-xl md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 font-bold text-heading mb-1.5 lg:mb-2.5 2xl:mb-3 3xl:mb-3.5">Sizing and Measurements</h4>
                                    <p className="text-md text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <ul className="text-sm text-gray-600 -mb-2">
                                        <li className="flex items-center mt-2 mb-2">
                                            <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                            </svg>
                                            <span>Duis aute irure dolor in reprehenderit</span>
                                        </li>
                                        <li className="flex items-center mt-2 mb-2">
                                            <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                            </svg>
                                            <span>Excepteur sint occaecat</span>
                                        </li>
                                        <li className="flex items-center">
                                            <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                            </svg>
                                            <span>Amet consectetur adipiscing elit</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* 3rd item */}
                        <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                            {/* Image */}
                            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={'https://po-prod.s3.us-west-1.amazonaws.com/features/feat-2.png'} width={540} height={405} alt="Features 03" />
                            </div>
                            {/* Content */}
                            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                                    {/* <div className="font-architects-daughter text-xl text-purple-600 mb-2">More speed. Less spend</div> */}
                                    <h4 className="text-xl md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 font-bold text-heading mb-1.5 lg:mb-2.5 2xl:mb-3 3xl:mb-3.5">Constructive Design</h4>
                                    <p className="text-md text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <ul className="text-sm text-gray-600 -mb-2">
                                        <li className="flex items-center mt-2 mb-2">
                                            <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                            </svg>
                                            <span>Duis aute irure dolor in reprehenderit</span>
                                        </li>
                                        <li className="flex items-center mt-2 mb-2">
                                            <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                            </svg>
                                            <span>Excepteur sint occaecat</span>
                                        </li>
                                        <li className="flex items-center">
                                            <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                            </svg>
                                            <span>Amet consectetur adipiscing elit</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* 2nd item */}
                        <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                            {/* Image */}
                            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={'https://po-prod.s3.us-west-1.amazonaws.com/features/quality-check.png'} width={540} height={405} alt="Features 02" />
                            </div>
                            {/* Content */}
                            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                                    {/* <div className="font-architects-daughter text-xl text-purple-600 mb-2">More speed. Less spend</div> */}
                                    <h4 className="text-xl md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 font-bold text-heading mb-1.5 lg:mb-2.5 2xl:mb-3 3xl:mb-3.5">QA and Finishing Touches</h4>
                                    <p className="text-md text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <ul className="text-sm text-gray-600 -mb-2">
                                        <li className="flex items-center mt-2 mb-2">
                                            <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                            </svg>
                                            <span>Duis aute irure dolor in reprehenderit</span>
                                        </li>
                                        <li className="flex items-center mt-2 mb-2">
                                            <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                            </svg>
                                            <span>Excepteur sint occaecat</span>
                                        </li>
                                        <li className="flex items-center">
                                            <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                            </svg>
                                            <span>Amet consectetur adipiscing elit</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* 3rd item */}
                        <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                            {/* Image */}
                            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={'https://po-prod.s3.us-west-1.amazonaws.com/features/finish.png'} width={540} height={405} alt="Features 03" />
                            </div>
                            {/* Content */}
                            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                                    {/* <div className="font-architects-daughter text-xl text-purple-600 mb-2">More speed. Less spend</div> */}
                                    <h4 className="text-xl md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 font-bold text-heading mb-1.5 lg:mb-2.5 2xl:mb-3 3xl:mb-3.5">Packaging and Shipment</h4>
                                    <p className="text-md text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <ul className="text-sm text-gray-600 -mb-2">
                                        <li className="flex items-center mt-2 mb-2">
                                            <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                            </svg>
                                            <span>Duis aute irure dolor in reprehenderit</span>
                                        </li>
                                        <li className="flex items-center mt-2 mb-2">
                                            <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                            </svg>
                                            <span>Excepteur sint occaecat</span>
                                        </li>
                                        <li className="flex items-center">
                                            <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                            </svg>
                                            <span>Amet consectetur adipiscing elit</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}
