const Header = ({title}) => {
    return (
            <div className='container mx-auto flex justify-between p-4'>
                <h1 className='text-3xl font-bold mb-3 py-2 text-color-accent'>{`|  ${title}`}</h1>
            </div>
    )
}

export default Header