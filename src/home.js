import react from 'react-dom';

const handleClick= () =>{
    console.log('cart');
    return(
        <div>
            <a href="/creat"></a>
            <button onClick={handleClick}>Cart</button>
        </div>
    )
}