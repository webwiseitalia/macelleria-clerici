import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import useLenis from '../hooks/useLenis'
import useScrollAnimations from '../hooks/useScrollAnimations'

export default function Layout() {
  const location = useLocation()
  useLenis()
  useScrollAnimations()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="min-h-screen flex flex-col bg-[#f9f5f0]">
      <Header />
      <main className="flex-grow pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
