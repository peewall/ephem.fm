import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import Logo from './logo.png'

const LandingPage = () => {
  return (
    <>
      <MetaTags title="EPHEM.FM" description="fm landing page" />
      <Link
        to={routes.landing()}
        className="absolute top-0 right-0 mr-4 mt-4 bg-red rounded-sm px-2 py-1 shadow-red-glow"
      >
        <p className="font-main font-black text-yellow uppercase">
          request new vibe
        </p>
      </Link>
      <div className="shadow-red-glow-lg bg-yellow max-w-fit lg:text-2xl absolute top-[40%] text-xs lg:top-1/2 left-[30%] lg:left-[15%] z-10 px-4 py-2 -rotate-6 lg:-rotate-12 border-red border-2">
        <p className="text-red uppercase font-main font-black">
          under construction
        </p>
      </div>
      <div className="min-w-full min-h-[90vh] flex flex-col justify-center items-center">
        <img src={Logo} alt="fm logo" className="lg:max-w-[65%] mx-auto"></img>
        <Link
          to={routes.landing()}
          className="bg-yellow rounded-sm px-2 py-1 shadow-yellow-glow mt-8 hover:shadow-yellow-glow-lg transition-shadow ease-in-out"
        >
          <p className="font-main font-black text-red uppercase">enter</p>
        </Link>
      </div>
    </>
  )
}

export default LandingPage
