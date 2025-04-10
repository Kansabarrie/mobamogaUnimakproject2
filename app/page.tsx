import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Banner from '@/app/Component/Banner';
import Header from '@/app/Component/Header';
import Image from 'next/image';
import Footer from "@/app/Component/Footer";

export default function Page() {
    return (
        <main className="flex min-h-screen flex-col p-0">
            <Header />
            <Banner />

             {/*Welcome Section */}
            <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
                <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/3 md:px-20">
                    <p className="text-xl text-gray-800 md:text-3xl md:leading-normal">
                        <strong>Welcome.</strong> This is <strong><span className="text-blue-900">MOBA</span> <span className="text-red-900">MOGA</span> UNIMAK CHAPTER</strong>{' '}
                        <a href="https://nextjs.org/learn/" className="text-blue-500">join our community</a>, brought to you by the 2024/2025 executive team.
                    </p>
                    <Link
                        href="/auth/login"
                        className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-red-500 md:text-base"
                    >
                        <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
                    </Link>
                </div>
                <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
                    <Image src="/images/mogalogo.png" alt="Hero Image" width={600} height={400} className="rounded-lg shadow-lg" />
                </div>
            </div>

            {/* About Section */}
            <section className="mt-10 px-6 md:px-20 bg-blue-300 shadow-gray-900">
                <h2 className="text-2xl font-bold text-gray-800 md:text-3xl text-center">About MOBA MOGA UNIMAK Chapter</h2>
                <p className="mt-4 text-gray-600">
                    The MOBA MOGA UNIMAK Chapter is dedicated to fostering a strong academic and social network for
                    students and alumni of the University of Makeni. Our mission is to provide opportunities for
                    mentorship, professional growth, and community engagement.
                </p>

                {/* Events Grid */}
                <div className="mt-6 grid gap-6 md:grid-cols-3">
                    <div className="flex flex-col items-center text-justify">
                        <Image src="/images/mssb2.jpg" alt="Event 1" width={300} height={800}
                               className="rounded-lg shadow-md"/>
                        <p className="mt-2 text-gray-700">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Aliquid aperiam debitis dolores eveniet fuga fugiat id illo impedit molestias nam nulla odit
                            pariatur provident ratione saepe sequi, sint sit veritatis?</p>
                    </div>
                    <div className="flex flex-col items-center text-justify">
                        <Image src="/images/mssg1.jpg" alt="Event 2" width={300} height={800}
                               className="rounded-lg shadow-md"/>
                        <p className="mt-2 text-gray-700">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Accusantium adipisci, aspernatur, consequatur corporis debitis eius eos est maxime minima
                            neque nesciunt quae quod temporibus? Architecto laborum placeat quis sunt suscipit?</p>
                    </div>
                    <div className="flex flex-col items-center text-justify">
                        <Image src="/images/mobamoga1.jpg" alt="Event 3" width={300} height={800}
                               className="rounded-lg shadow-md"/>
                        <p className="mt-2 text-gray-700">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Atque eligendi ex odio optio quidem quos soluta vel. Aspernatur error eveniet, molestias nam
                            porro unde! Dolore dolorum impedit labore voluptate voluptatibus.</p>
                    </div>
                </div>

                <div className="mt-6 grid gap-6 md:grid-cols-3">
                    <div className="flex flex-col items-center text-justify">
                        <Image src="/images/mssb2.jpg" alt="Event 1" width={300} height={500}
                               className="rounded-lg shadow-md"/>
                        <p className="mt-2 text-gray-700">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Aliquid aperiam debitis dolores eveniet fuga fugiat id illo impedit molestias nam nulla odit
                            pariatur provident ratione saepe sequi, sint sit veritatis?</p>
                    </div>
                    <div className="flex flex-col items-center text-justify">
                        <Image src="/images/mssg1.jpg" alt="Event 2" width={300} height={500}
                               className="rounded-lg shadow-md"/>
                        <p className="mt-2 text-gray-700">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Accusantium adipisci, aspernatur, consequatur corporis debitis eius eos est maxime minima
                            neque nesciunt quae quod temporibus? Architecto laborum placeat quis sunt suscipit?</p>
                    </div>
                    <div className="flex flex-col items-center text-justify">
                        <Image src="/images/mobamoga1.jpg" alt="Event 3" width={300} height={500}
                               className="rounded-lg shadow-md"/>
                        <p className="mt-2 text-black">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Atque eligendi ex odio optio quidem quos soluta vel. Aspernatur error eveniet, molestias nam
                            porro unde! Dolore dolorum impedit labore voluptate voluptatibus.</p>
                    </div>
                </div>
            </section>
            <Footer/>
        </main>
    );
}
