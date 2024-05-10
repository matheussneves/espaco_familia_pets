import styled from 'styled-components';

const MenuEstilizado = styled.header`
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding: 2em 4em
`

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-grow: .1;
`

const LinkEstilizado = styled.a`
 color: var(--azul-escuro);
 font-weight: 700;
`

function Menu() {
    return (
        <a></a>
    )
}

export default Menu;