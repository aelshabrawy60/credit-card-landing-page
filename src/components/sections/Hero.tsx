import React from 'react'
import UsersList from '../ui/usersList/UsersList'
import Button from '../ui/button/Button'

function Hero() {
  return (
    <div className="relative container mx-auto p-4 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        {/* Text and users list section */}
        <div className="grid gap-8 max-w-xl text-center md:text-left">
          <div className="relative">
            <h1 className="text-4xl lg:text-5xl xl:text-[56px] font-bold leading-tight">
              Discover the Perfect Credit Card for You
            </h1>
            {/* Decorative vector image */}
            <img
              src="Vector1.svg"
              alt="Decorative vector"
              className="absolute -bottom-5 left-0 w-10 md:w-auto"
            />
          </div>
          <p className="text-base md:text-lg text-gray-500">
            Discover the power of our secure and rewarding credit cards.
            Explore our range of credit cards and take control of your finances today.
          </p>
          <Button label="get started" onClick={() => {}} type={true} />
          <UsersList images={["user1.jpg", "user1.jpg", "user1.jpg"]} count={1000} label="active users" />
        </div>

        {/* Image section */}
        <div className="relative justify-self-center md:justify-self-end">
          <img
            src="credit-card.svg"
            alt="Credit Card"
            className="relative z-20 max-w-full"
          />
          {/* Decorative background circle */}
          <div className="bg-primary rounded-full absolute -bottom-10 -right-10 md:-bottom-20 md:-right-20 w-64 h-64 xl:w-[492px] xl:h-[492px] z-10"></div>
        </div>
      </div>
    </div>
  )
}

export default Hero