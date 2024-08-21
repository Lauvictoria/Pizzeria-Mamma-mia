import Image from 'react-bootstrap/Image'

const Header = () => {
    return (
        <div className='header-container'>
            <Image className='img-header' src='src/assets/img/Header.jpg' fluid />
            <div className='overlay'></div>
            <div className='header-content'>
                <h1 className='header-title'>¡Pizzería Mamma Mía!</h1>
                <p className='header-paragraph'>¡Las mejores pizzas que podrás encontrar!</p>
            </div>
        </div>
    );
}

export default Header