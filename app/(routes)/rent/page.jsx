import React from 'react'
import ListingMapView from '../../_components/ListingMapView'

const ForRent = () => {
  return (
    <div className="pl-10">
        <ListingMapView type='Rent'/>
    </div>
  )
}

export default ForRent
// "use client"

// import React, { useEffect } from 'react'
// import { useUser } from '@clerk/nextjs'  // If you're using Clerk
// import { useRouter } from 'next/navigation'
// import ListingMapView from '../../_components/ListingMapView'

// const ForRent = () => {
//   const { isSignedIn } = useUser()  // Check if user is signed in
//   const router = useRouter()

//   useEffect(() => {
//     if (!isSignedIn) {
//       router.push('/sign-in')  // Redirect to sign-in page if not signed in
//     }
//   }, [isSignedIn, router])

//   // Optionally, show a loading state while checking authentication
//   if (!isSignedIn) return null

//   return (
//     <div className="pl-10">
//       <ListingMapView type="Rent" />
//     </div>
//   )
// }

// export default ForRent
