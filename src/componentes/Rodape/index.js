import './Rodape.css'

const Rodape = () => {
    return (
        <footer className='rodape'>
            <section >
                <ul className='redes_sociais'>
                    <li>
                        <a href='' target='_blank'>
                            <img src='/imagens/fb.png' alt='Facebook'/>
                        </a>
                    </li>
                    <li>
                        <a href='' target='_blank'>
                            <img src='/imagens/tw.png' alt='Twitter'/>
                        </a>
                    </li>
                    <li>
                        <a href='' target='_blank'>
                        <img src='/imagens/ig.png' alt='Instagram'/>
                        </a>
                    </li>
                </ul>
            </section>
            <section className='logo'>
                <img src='/imagens/logo.png' alt='Logo organo'/>
            </section>
            <section className='dev'>Desenvolvido por Alura</section>

        </footer>

    );
}

export default Rodape;

