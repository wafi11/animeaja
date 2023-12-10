import { Router, useRouter } from "next/navigation"

const Pagination = ({page,lastPage,setPage}) => {
    const router = useRouter()
    const scrollTop = ()=> {
       scrollTo ({
        behavior : 'smooth',
        top : 0
    })}
    const nextSlide = () => {
        setPage((next) => next + 1)
        scrollTop()
    }
    const prevSlide = () => {
        setPage((prev) => prev -1)
        scrollTop()
        
    }
    const notFound = () => {
        router.push('/notfound')
    }
    
    return (
        <div className="text-color-primary py-4 px-2 gap-3 justify-center items-center flex text-xl">
            {
                page <= 1 ? null : 
                <button onClick={prevSlide} className="transition-all hover:text-color-accent">Previous</button>
            }
            <p>{page} of {lastPage}</p>
            {
                page >= lastPage ? null :
                <button onClick={nextSlide} className="transition-all hover:text-color-accent ">Next</button>
            }
        </div>
    )
}

export default Pagination 