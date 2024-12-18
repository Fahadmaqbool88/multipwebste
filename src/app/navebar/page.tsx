import Link from "next/link"


function Navebar (){
    return(
        <div className="Navebar">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>

        </div>
    )
}
export default Navebar 


