'use client'

import Link from "next/link"
import { Row } from "react-bootstrap"


export default function Home() {
  return (
    <>
   
      <div className="d-flex justify-content-end mt-2">
          <span className="mx-3"><img src="image/icons8-mail-48.png" alt="" width={25} />info@solidsafe.com.vn</span>
          <span><img src="image/icons8-phone-48.png" alt="" width={20} /> + 84 274.376644</span>
       

      </div>
      <h1 className="position-absolute top-50 start-50 translate-middle">
            HOME
      </h1>  
      
    </>
  )
}
