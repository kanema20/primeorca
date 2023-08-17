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
                                    <h4 className="text-xl md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 font-bold text-heading mb-1.5 lg:mb-2.5 2xl:mb-3 3xl:mb-3.5">Quality Control</h4>
                                    <p className="text-md text-gray-600 mb-4">Quality is highest on our priority list.</p>
                                    <ul className="text-sm text-gray-600 -mb-2">
                                        <li className="flex items-center mt-2 mb-2">
                                            <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                            </svg>
                                            <span>Craftsmanship: Each pair of shoes is meticulously handcrafted with exceptional attention to detail.</span>
                                        </li>
                                        <li className="flex items-center mt-2 mb-2">
                                            <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                            </svg>
                                            <span>Premium Materials: We source and utilize the highest quality materials, ensuring both comfort and durability.</span>
                                        </li>
                                        <li className="flex items-center">
                                            <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                            </svg>
                                            <span>Professional Testing: Our shoes undergo rigorous testing by professional basketball players in various scenarios, guaranteeing optimal performance and resilience.
                                            </span>
                                        </li>
                                        <li className="flex items-center">
                                            <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                            </svg>
                                            <span>Affordability: We're dedicated to delivering top-tier quality without breaking the bank.</span>
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
                                    <p className="text-md text-gray-600 mb-4">Kobe's Fit: Our Kobes are designed to fit true to size, ensuring a comfortable and accurate fit for most customers.</p>
                                    <ul className="text-sm text-gray-600 -mb-2">
                                        <li className="flex items-center mt-2 mb-2">
                                            <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                            </svg>
                                            <span>Wider Feet: For those with wider feet, we recommend sizing up for sizes 13 and 14 to ensure the perfect fit.</span>
                                        </li>
                                        <li className="flex items-center mt-2 mb-2">
                                            <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                            </svg>
                                            <span>Clothing Fit: Our clothing line follows Asian sizing standards. To ensure a comfortable fit, we advise ordering one size larger than your regular size.</span>
                                        </li>
                                        <li className="flex items-center">
                                            <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                            </svg>
                                            <span>Sizing Chart: We provide a comprehensive sizing chart to help you choose the ideal size for your measurements.</span>
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
                                    {/* <h4 className="text-xl md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 font-bold text-heading mb-1.5 lg:mb-2.5 2xl:mb-3 3xl:mb-3.5">Constructive Design</h4> */}
                                    <h4 className="text-xl md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 font-bold text-heading mb-1.5 lg:mb-2.5 2xl:mb-3 3xl:mb-3.5">QA and Finishing Touches</h4>
                                    {/* <p className="text-md text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
                                    <ul className="text-sm text-gray-600 -mb-2">
                                        <li className="flex items-center mt-2 mb-2">
                                            <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                            </svg>
                                            <span>Customization: Once your order is confirmed, we craft each pair of shoes according to your size and specifications.</span>
                                        </li>
                                        <li className="flex items-center mt-2 mb-2">
                                            <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                            </svg>
                                            <span>Quality Check: Before shipping, we share images of your shoes to ensure they meet our high-quality standards.</span>
                                        </li>
                                        <li className="flex items-center">
                                            <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                            </svg>
                                            <span>Adjustments: If desired, you can provide feedback and request minor adjustments during this phase to guarantee your utmost satisfaction.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* 2nd item */}
                        <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                            {/* Image */}
                            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                                {/* <Image className="max-w-full mx-auto md:max-w-none h-auto" src={'https://po-prod.s3.us-west-1.amazonaws.com/features/quality-check.png'} width={540} height={405} alt="Features 02" /> */}
                                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={'https://po-prod.s3.us-west-1.amazonaws.com/features/finish.png'} width={540} height={405} alt="Features 03" />
                            </div>
                            {/* Content */}
                            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                                    {/* <div className="font-architects-daughter text-xl text-purple-600 mb-2">More speed. Less spend</div> */}
                                    {/* <h4 className="text-xl md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 font-bold text-heading mb-1.5 lg:mb-2.5 2xl:mb-3 3xl:mb-3.5">QA and Finishing Touches</h4> */}
                                    <h4 className="text-xl md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 font-bold text-heading mb-1.5 lg:mb-2.5 2xl:mb-3 3xl:mb-3.5">Packaging and Shipment</h4>
                                    {/* <p className="text-md text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
                                    <ul className="text-sm text-gray-600 -mb-2">
                                        <li className="flex items-center mt-2 mb-2">
                                            <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                            </svg>
                                            <span>Tracking Information: As soon as your shoes are ready to ship, we promptly provide you with tracking information to monitor your order's progress.</span>
                                        </li>
                                        <li className="flex items-center mt-2 mb-2">
                                            <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                            </svg>
                                            <span>Shipping Duration: The journey from our factory to your doorstep typically takes between 10-14 days, ensuring safe and timely delivery.</span>
                                        </li>
                                        <li className="flex items-center">
                                            <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                            </svg>
                                            <span>Support Team: Should you encounter any issues during the shipping process, our dedicated support team is available to troubleshoot and assist.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* 3rd item */}
                        {/* <div className="md:grid md:grid-cols-12 md:gap-6 items-center"> */}
                        {/* Image */}
                        {/* <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={'https://po-prod.s3.us-west-1.amazonaws.com/features/finish.png'} width={540} height={405} alt="Features 03" />
                            </div> */}
                        {/* Content */}
                        {/* <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                                <div className="md:pr-4 lg:pr-12 xl:pr-16"> */}
                        {/* <div className="font-architects-daughter text-xl text-purple-600 mb-2">More speed. Less spend</div> */}
                        {/* <h4 className="text-xl md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 font-bold text-heading mb-1.5 lg:mb-2.5 2xl:mb-3 3xl:mb-3.5">Packaging and Shipment</h4>
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
*/}
                    </div>

                </div>
            </div>
        </section>
    )
}
